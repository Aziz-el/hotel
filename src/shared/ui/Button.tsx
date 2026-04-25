
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2   px-4 py-2 text-sm font-medium transition cursor-pointer";

  const variants = {
    primary:
      "w-[240px] border-2 border-[#E0B08B] text-[#E0B08B] h-[65px] font-Manrope font-semibold text-[20px] hover:bg-[#F4C5A1] hover:text-gray-800 transition-all duration-300",
    secondary:
      "w-[240px] bg-[#E0B08B] text-white h-[65px] font-Manrope font-semibold text-[20px] hover:bg-[#F4C5A1] hover:text-gray-800 transition-all duration-300",
    danger:
      "bg-red-600 text-white hover:bg-red-500 focus:ring-2 focus:ring-red-500",
  };

  const state =
    "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";

  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${state} ${className}`}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      )}
      {children}
    </button>
  );
}
