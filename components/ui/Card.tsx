import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className, href }: CardProps) {
  const classes = cn(
    "rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
    href && "cursor-pointer",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mb-3", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900 leading-snug", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm text-gray-600 leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-4 flex items-center gap-3", className)}>
      {children}
    </div>
  );
}
