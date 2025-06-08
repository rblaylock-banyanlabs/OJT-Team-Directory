import { Header } from "@/components/layout/header"
import { AnimatedBackground } from "@/components/animated-background"
import { Container } from "@/components/layout/container"
import type { BaseProps } from "@/types/common"

interface PageLayoutProps extends BaseProps {
  showHeader?: boolean
  showBackground?: boolean
}

export function PageLayout({ showHeader = true, showBackground = true, children, className }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900 dark:via-gray-900 dark:to-zinc-900 relative overflow-hidden transition-colors duration-300">
      {showBackground && <AnimatedBackground />}

      {showHeader && <Header />}

      <main className="relative z-10">
        <Container className={className}>{children}</Container>
      </main>
    </div>
  )
}
