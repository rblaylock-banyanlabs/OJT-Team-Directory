"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { INITIAL_TEAM_MEMBERS } from "@/constants/team-data"
import type { TeamMember } from "@/types/team"

interface TeamContextType {
  teamMembers: TeamMember[]
  addMember: (member: Omit<TeamMember, "id">) => void
  updateMember: (id: string, updates: Partial<TeamMember>) => void
  deleteMember: (id: string) => void
  getMember: (id: string) => TeamMember | undefined
  getTotalMembers: () => number
  getRoles: () => string[]
  getSkills: () => string[]
}

const TeamContext = createContext<TeamContextType | undefined>(undefined)

export function TeamProvider({ children }: { children: ReactNode }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(INITIAL_TEAM_MEMBERS)

  const addMember = (memberData: Omit<TeamMember, "id">) => {
    const newMember: TeamMember = {
      ...memberData,
      id: Date.now().toString(),
    }
    setTeamMembers((prev) => [...prev, newMember])
    console.log("Member added:", newMember) // Debug log
  }

  const updateMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers((members) => members.map((member) => (member.id === id ? { ...member, ...updates } : member)))
  }

  const deleteMember = (id: string) => {
    setTeamMembers((members) => members.filter((member) => member.id !== id))
  }

  const getMember = (id: string) => {
    return teamMembers.find((member) => member.id === id)
  }

  const getTotalMembers = () => teamMembers.length

  const getRoles = () => {
    const roles = Array.from(new Set(teamMembers.map((member) => member.role)))
    return roles.sort()
  }

  const getSkills = () => {
    const skills = Array.from(new Set(teamMembers.flatMap((member) => member.skills)))
    return skills.sort()
  }

  return (
    <TeamContext.Provider
      value={{
        teamMembers,
        addMember,
        updateMember,
        deleteMember,
        getMember,
        getTotalMembers,
        getRoles,
        getSkills,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export function useTeam() {
  const context = useContext(TeamContext)
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider")
  }
  return context
}
