"use client";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HoverCard({ children, className, containerClassName }: HoverCardProps) {
  return (
    <div className={cn("group relative", containerClassName)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
      <div className={cn(
        "relative bg-zinc-900 rounded-xl p-6 transition-all duration-300",
        className
      )}>
        {children}
      </div>
    </div>
  );
}