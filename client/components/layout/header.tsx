"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { GradientText } from "@/components/typography/gradient-text"
import { ROUTES } from "@/constants/app-config"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-10 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-800/60 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center space-x-4">
            <div className="p-2 rounded-xl bg-gradient-to-r from-slate-700 to-blue-700">
              <Users className="h-6 w-6 text-white" />
            </div>
            <GradientText
              as="h1"
              className="text-2xl font-bold"
              from="from-slate-700 dark:from-slate-200"
              to="to-blue-700 dark:to-blue-400"
            >
              Team Directory
            </GradientText>
          </Link>

          <nav className="flex items-center space-x-4">
            {pathname !== "/about" && (
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Info className="h-4 w-4 mr-2" />
                  About
                </Button>
              </Link>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
