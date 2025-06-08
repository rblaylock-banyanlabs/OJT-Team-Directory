import { cn } from "@/lib/utils"
import type { BaseProps, TextVariant } from "@/types/common"

interface TextProps extends BaseProps, TextVariant {
  as?: "p" | "span" | "div"
}

const textStyles = {
  body: "text-base",
  caption: "text-sm",
  muted: "text-muted-foreground",
}

const sizeStyles = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}

export function Text({
  variant = "body",
  size = "base",
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(textStyles[variant], sizeStyles[size], className)} {...props}>
      {children}
    </Component>
  )
}
