import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  target?: string;
  rel?: string;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  target,
  rel,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors shadow-xs";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
    whatsapp: "bg-emerald-600 text-white hover:bg-emerald-700 flex-1",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
