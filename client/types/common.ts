import type React from "react"

export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonVariant {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "default" | "lg"
}

export interface HeadingLevel {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export interface TextVariant {
  variant?: "body" | "caption" | "muted"
  size?: "sm" | "base" | "lg" | "xl"
}
