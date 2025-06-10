"use client"

import { useState, useMemo } from "react"
import type { TeamMember, TeamFilters } from "@/types/team"

export function useFilters(teamMembers: TeamMember[]) {
  const [filters, setFilters] = useState<TeamFilters>({
    searchTerm: "",
    roleFilter: "all",
    sortBy: "name",
  })

  const filteredAndSortedMembers = useMemo(() => {
    const filtered = teamMembers.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        member.skills.some((skill) => skill.toLowerCase().includes(filters.searchTerm.toLowerCase()))

      const matchesRole = filters.roleFilter === "all" || member.role === filters.roleFilter

      return matchesSearch && matchesRole
    })

    return filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "joinDate":
          return new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime()
        case "joinDateDesc":
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime()
        default:
          return 0
      }
    })
  }, [teamMembers, filters])

  const updateFilter = <K extends keyof TeamFilters>(key: K, value: TeamFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      roleFilter: "all",
      sortBy: "name",
    })
  }

  return {
    filters,
    filteredAndSortedMembers,
    updateFilter,
    clearFilters,
    // Convenience getters
    searchTerm: filters.searchTerm,
    roleFilter: filters.roleFilter,
    sortBy: filters.sortBy,
    // Convenience setters
    setSearchTerm: (value: string) => updateFilter("searchTerm", value),
    setRoleFilter: (value: string) => updateFilter("roleFilter", value),
    setSortBy: (value: TeamFilters["sortBy"]) => updateFilter("sortBy", value),
  }
}
