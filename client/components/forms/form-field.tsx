"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Text } from "@/components/typography/text"
import { cn } from "@/lib/utils"
import type { BaseProps } from "@/types/common"

interface FormFieldProps extends BaseProps {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "date" | "url" | "textarea"
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  error?: string
  rows?: number
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows = 3,
  className,
}: FormFieldProps) {
  const inputClassName = cn(
    "border-purple-200 dark:border-purple-800 focus:border-purple-400 dark:focus:border-purple-600",
    error && "border-red-500 focus:border-red-500",
    className,
  )

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={inputClassName}
        />
      ) : (
        <Input
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClassName}
        />
      )}

      {error && (
        <Text variant="caption" className="text-red-500">
          {error}
        </Text>
      )}
    </div>
  )
}
