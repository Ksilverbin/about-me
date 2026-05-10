"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface BackButtonProps {
  className?: string;
  children: ReactNode;
}

export function BackButton({ className, children }: BackButtonProps) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className={className}
      style={{ 
        background: "none", 
        border: "none", 
        padding: 0, 
        cursor: "pointer",
        font: "inherit",
        textAlign: "left"
      }}
    >
      {children}
    </button>
  );
}
