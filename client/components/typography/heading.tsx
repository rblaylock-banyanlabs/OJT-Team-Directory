import { cn } from "@/lib/utils"
import type { BaseProps, HeadingLevel } from "@/types/common"

interface HeadingProps extends BaseProps, HeadingLevel {
  gradient?: boolean
}

const headingStyles = {
  1: "text-4xl font-bold",
  2: "text-3xl font-bold",
  3: "text-2xl font-bold",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
}

export function Heading({ level = 1, gradient = false, className, children, ...props }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component
      className={cn(
        headingStyles[level],
        gradient && "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
