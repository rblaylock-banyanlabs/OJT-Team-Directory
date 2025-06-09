import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface FloatingShape {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function AnimatedBackground() {
  const [shapes, setShapes] = useState<FloatingShape[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const darkColors = ["bg-slate-700/10", "bg-blue-700/10", "bg-gray-700/10", "bg-zinc-700/10", "bg-stone-700/10"]
    const lightColors = ["bg-slate-300/20", "bg-blue-300/20", "bg-gray-300/20", "bg-zinc-300/20", "bg-stone-300/20"]

    const colors = theme === "dark" ? darkColors : lightColors

    const newShapes: FloatingShape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    setShapes(newShapes)
  }, [theme])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} blur-xl animate-float`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}

      {/* Gradient overlays - theme aware */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-600/5 dark:from-slate-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/5 dark:from-blue-600/5 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-600/3 dark:from-gray-600/3 to-zinc-600/3 dark:to-zinc-600/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
