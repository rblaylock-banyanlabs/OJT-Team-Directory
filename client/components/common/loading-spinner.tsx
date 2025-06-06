import { cn } from "@/lib/utils";
import type { BaseProps } from "@/types/common"

interface LoadingSpinnerProps extends BaseProps {
  size?: "sm" | "md" | "lg"
}

const spinnerSizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-purple-500",
        spinnerSizes[size],
        className,
      )}
    />
  )
}

