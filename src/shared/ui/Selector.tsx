"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  variant?: "underline" | "box" | "minimal";
  disabled?: boolean;
  name?: string;
};

export default function CustomSelector({
  options,
  value,
  name,
  onChange,
  placeholder = "Гражданство",
  className = "",
  variant = "underline",
  disabled = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optValue: string) => {
    setSelected(optValue);
    onChange?.(optValue);
    setIsOpen(false);
  };

  const currentLabel = options.find((o) => o.value === selected)?.label || placeholder;

  const variantStyles = {
    underline: `
      border-b border-gray-300 
      focus-within:border-b-[#E0B08B] 
      rounded-none
    `,
    box: `
      border border-gray-300 rounded-lg
      focus-within:border-[#E0B08B] focus-within:ring-2 focus-within:ring-[#E0B08B]/30
      bg-white
    `,
    minimal: `
      border-none
      focus-within:outline-none
      text-gray-700
    `,
  };

  const containerClass = `
    relative w-full max-w-[575px] 
    ${variantStyles[variant]}
    ${className}
    ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
  `.trim();

  return (
    <div ref={wrapperRef} className={containerClass}>
      <div
        className={`
          flex items-center justify-between
          px-4 py-3
          text-[#BDBDBD]
          transition-all duration-200
          ${isOpen ? "bg-gray-50" : ""}
          ${disabled ? "pointer-events-none" : ""}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={"text-gray-400"}>
          {currentLabel}
        </span>

        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && !disabled && (
        <ul
          className={`
            absolute z-10 w-full mt-1
            bg-white border border-gray-200 rounded-lg
            shadow-lg max-h-60 overflow-auto
            ${variant === "underline" ? "border-t-0 rounded-t-none" : ""}
          `}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`
                text-black
                px-4 py-2.5 cursor-pointer
                hover:bg-[#E0B08B]/10
                transition-colors
                ${option.value === selected ? "bg-[#E0B08B]/5 font-medium" : ""}
              `}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}