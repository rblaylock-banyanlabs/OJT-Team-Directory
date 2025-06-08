"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ArrowRight } from "lucide-react"
import { formatDate } from "@/utils/date"
import { getInitials } from "@/utils/format"
import { ROUTES } from "@/constants/app-config"
import type { TeamMember } from "@/types/team"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Link href={ROUTES.MEMBER(member.id)}>
      <div
        className="group perspective-1000 h-80 cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        >
          {/* Front of card */}
          <Card className="absolute inset-0 w-full h-full backface-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center pb-4">
              <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-slate-200 dark:ring-slate-600/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-800">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="text-lg bg-gradient-to-r from-slate-700 to-blue-700 text-white">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">{member.name}</h3>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-700/80 dark:to-blue-700/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600/50"
                >
                  {member.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="truncate">{member.email}</p>
                <p>Joined {formatDate(member.joinDate)}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">{member.location}</p>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                  <ArrowRight className="h-3 w-3 mr-1" />
                  Click for full profile
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back of card */}
          <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-700 to-blue-700 text-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="p-3 rounded-full bg-white/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white">{member.name}</h3>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Personal Vision
              </Badge>
            </CardHeader>
            <CardContent className="pt-0 flex items-center justify-center h-32">
              <p className="text-sm text-white/90 text-center leading-relaxed italic">"{member.vision}"</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Link>
  )
}
