export const APP_CONFIG = {
    name: "Team Directory",
    description: "A modern, interactive team directory application",
    version: "1.0.0",
    author: "Team Rachael",
    repository: "https://github.com/rblaylock-banyanlabs/OJT-Team-Directory",
  
    // Contact information
    contact: {
      email: "hello@banyanlabs.io",
      phone: "+1 (555) 123-4567",
      address: "123 Innovation St, Tech City",
    },
  
    // Social links
    social: {
      twitter: "https://twitter.com/company",
      linkedin: "https://linkedin.com/company/company",
      github: "https://github.com/company",
    },
  
    // App settings
    settings: {
      itemsPerPage: 12,
      maxSearchResults: 50,
      animationDuration: 300,
      debounceDelay: 300,
    },
  } as const
  
  export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    MEMBER: (id: string) => `/member/${id}`,
  } as const
  
  export const STORAGE_KEYS = {
    TEAM_MEMBERS: "team-directory-members",
    THEME: "team-directory-theme",
    FILTERS: "team-directory-filters",
  } as const
  