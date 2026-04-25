"use client";

import { useState } from "react";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  variant?: "underline" | "box" | "minimal";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  maxLength?: number,
  required?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  variant = "underline",
  className = "",
  onChange,
  value,
  maxLength,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles = {
    underline: `
      border-b border-gray-300
      focus:border-b-[#E0B08B]
      rounded-none
    `,
    box: `
      h-100
      border border-gray-300 rounded-lg
      focus:border-[#E0B08B]
      focus:ring-2 focus:ring-[#E0B08B] focus:ring-opacity-50
    `,
    minimal: `
      border-none border-b-0
      border-transparent
      focus:border-transparent
      rounded-none
      text-gray-700
      focus:outline-none
    `,
  };

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className={`mb-2 font-medium transition-colors duration-300 ${
          isFocused ? "text-[#E0B08B]" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <input
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      inputMode="numeric"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`
          
           max-w-[575px]
          md:w-full px-1 py-3
          outline-none
          placeholder-[#BDBDBD]
          transition-colors duration-300
          text-gray-300
          ${baseStyles[variant]}
          ${className}
        `}
      />
    </div>
  );
};

export default CustomInput;
