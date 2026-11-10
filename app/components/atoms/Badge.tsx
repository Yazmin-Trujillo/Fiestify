interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "indigo" | "emerald";
}

export function Badge({ children, variant = "indigo" }: BadgeProps) {
  const variants = {
    amber: "bg-amber-500 text-white",
    indigo:
      "bg-indigo-600 text-indigo-100 dark:bg-indigo-500 dark:text-indigo-100",
    emerald: "bg-emerald-600 text-white",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider shadow-xs ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
