import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-brand-red text-white hover:bg-brand-red/90 focus-visible:ring-brand-red":
              variant === "primary",
            "bg-brand-blue text-white hover:bg-brand-blue/90 focus-visible:ring-brand-blue":
              variant === "secondary",
            "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus-visible:ring-brand-blue":
              variant === "outline",
            "text-brand-blue hover:bg-brand-gray focus-visible:ring-brand-blue":
              variant === "ghost",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-7 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
