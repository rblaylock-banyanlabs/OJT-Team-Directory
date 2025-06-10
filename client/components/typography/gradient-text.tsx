import { cn } from "@/lib/utils"
import type { BaseProps } from "@/types/common"

interface GradientTextProps extends BaseProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  from?: string
  to?: string
}

export function GradientText({
  as: Component = "span",
  from = "from-slate-700 dark:from-slate-200",
  to = "to-blue-700 dark:to-blue-400",
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <Component className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, to, className)} {...props}>
      {children}
    </Component>
  )
}
