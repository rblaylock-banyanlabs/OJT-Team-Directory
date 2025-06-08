import { cn } from "@/lib/utils"
import type { BaseProps } from "@/types/common"

interface ContainerProps extends BaseProps {
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const containerSizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
}

export function Container({ size = "xl", className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-4 py-8", containerSizes[size], className)} {...props}>
      {children}
    </div>
  )
}
