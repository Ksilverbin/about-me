"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface BackButtonProps {
  className?: string;
  children: ReactNode;
}

export function BackButton({ className, children }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // 브라우저 히스토리 스택이 1개 이하이면 직접 접속한 것으로 간주하고 목록으로 이동
    if (typeof window !== "undefined" && window.history.length <= 1) {
      router.push("/portfolio");
    } else {
      router.back();
    }
  };

  return (
    <button 
      onClick={handleBack} 
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
