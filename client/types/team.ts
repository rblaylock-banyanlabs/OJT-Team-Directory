export interface TeamMember {
    id: string
    name: string
    role: string
    email: string
    phone: string
    joinDate: string
    avatar: string
    vision: string
    bio: string
    portfolio: string
    linkedin: string
    github: string
    skills: string[]
    projects: Project[]
    location: string
    timezone: string
  }
  
  export interface Project {
    name: string
    description: string
    url: string
    tech: string[]
  }
  
  export interface TeamFilters {
    searchTerm: string
    roleFilter: string
    sortBy: "name" | "joinDate" | "joinDateDesc"
  }
  
  export interface TeamStats {
    totalMembers: number
    totalRoles: number
    averageExperience: number
    totalProjects: number
  }
  