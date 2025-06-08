"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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
  projects: Array<{
    name: string
    description: string
    url: string
    tech: string[]
  }>
  location: string
  timezone: string
}

const initialTeamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Robert Blaylock",
      role: "Software Engineer",
      email: "rblaylock@banyanlabs.io",
      phone: "+1 (731) 300-8706",
      joinDate: "2025-05-12",
      avatar: "/placeholder.svg?height=200&width=200&text=RB",
      vision:
        "I aim to build positive, functional apps while fostering strong teamwork, collaboration, and high morale throughout the development process.",
      bio: "Robert is a full stack developer with strong skills in JavaScript, Tailwind CSS, and React. He also brings valuable project management experience, enabling us to deliver efficient, well-organized solutions across both front-end and back-end development.",
      portfolio: "https://www.rblaylock.dev",
      linkedin: "https://www.linkedin.com/in/rblaylock286",
      github: "https://github.com/rblaylock-dev",
      skills: ["React", "TypeScript", "Express", "Next.js", "Tailwind CSS", "MongoDB", "Authentication", "Agile Methodologies", "Project Management", "ClickUp", "Git", "REST APIs"],
      projects: [
        {
          name: "To-Do List with Authentication",
          description: "A full-stack to-do list application with user authentication, allowing users to create, update, and delete tasks securely.",
          url: "https://github.com/RBlaylock-Dev/BackendFinals",
          tech: ["React", "Node.js","Bcrypt", "MongoDB","Express"],
        },
        {
          name: "ShoeStyle Landing Page",
          description: "A modern, responsive landing page for a premium shoe store with product showcase.",
          url: "https://ojt-practice-project.vercel.app/",
          tech: ["React", "TypeScript", "Tailwind CSS"],
        },
      ],
      location: "Counce, TN",
      timezone: "CST (UTC-6)",
    },
    {
      id: "2",
      name: "Jessica Sharp",
      role: "Front End Developer",
      email: "jsharp@banyanlabs.io",
      phone: "+1 (731) 803-2422",
      joinDate: "2025-05-12",
      avatar: "/placeholder.svg?height=200&width=200&text=JS",
      vision:
        "To create beautiful, accessible interfaces that empower users and make technology feel magical for everyone.",
      bio: "Jessica Sharp is a fast-learning front end web developer with strong management experience, committed to building innovative digital solutions and continuously growing her skills in a dynamic tech environment.",
      portfolio: "https://jsharp2023.github.io/Portfolio-2024/",
      linkedin: "https://www.linkedin.com/in/jessica-sharp-3b4069313/",
      github: "https://github.com/jsharp2023?tab=repositories",
      skills: ["Node.js", "Bootstrap", "CSS", "TailwindCSS", "Docker", "Java Script", "Auth0", "HTML5", "React", "TypeScript", "MongoDB"],
      projects: [
        {
          name: "SoberBook",
          description: "Social media platform for individuals in recovery, focusing on community support and resources.",
          url: "https://jsharp2023.github.io/soberbook/#/",
          tech: ["React.js", "Auth0", "TailwindCSS", "API",],
        },
        {
          name: "NeverForGiftMe",
          description: "A gift recommendation app that uses an API to suggest personalized gifts based on user preferences.",
          url: "https://jsharp2023.github.io/NeverForGiftMe/",
          tech: ["HTML", "CSS", "JS", "React", "API"],
        },
      ],
      location: "Counce, TN",
      timezone: "CST (UTC-6)",
    },
    {
      id: "3",
      name: "Daniel Walker",
      role: "Software Engineer",
      email: "dwalker@banyanlabs.io",
      phone: "+1 (555) 867-5309",
      joinDate: "2025-05-12",
      avatar: "/placeholder.svg?height=200&width=200&text=DW",
      vision:
        "Aspiring developer blending math expertise and coding skills to solve problems, grow continuously, and contribute meaningfully in tech-driven environments.",
      bio: "Daniel is a software engineer with a strong foundation in mathematics and computer science. He is passionate about building scalable applications and enjoys tackling complex problems with elegant solutions. Daniel has experience in both frontend and backend development, making him a versatile team member.",
      portfolio: "https://portfolio-daniel-walker.vercel.app/",
      linkedin: "https://www.linkedin.com/in/daniel-walker-b74ba0312/",
      github: "https://github.com/BSDannondorf",
      skills: ["CIW JavaScript Expert Certification", "React.js", "Node.js","Git", "Express", "MongoDB", "REST APIs", "Redux", "Problem Solving"],
      projects: [
        {
          name: "Huddle",
          description: "A word game of synonyms and antonyms featuring a vulgar assistant.",
          url: "https://danielwalkercoder.github.io/HUDDLE/",
          tech: ["React.js", "Redux", "JSON storage", "Frontend Development"],
        },
        {
          name: "ESO Checklist",
          description: "A customizable checklist for gamers with multi-character accounts on Elder Scrolls Online.",
          url: "https://healthcare-ui.com",
          tech: ["React.js", "Browser Storage", "Frontend", "User Experience Design"],
        },
      ],
      location: "Maryville, TN",
      timezone: "EST (UTC-5)",
    },
    {
      id: "4",
      name: "Rachael Higgins",
      role: "Software Developer",
      email: "david@company.com",
      phone: "+1 (555) 456-7890",
      joinDate: "2022-08-05",
      avatar: "/placeholder.svg?height=200&width=200&text=RH",
      vision:
        "Building robust backend logic to dynamic UIs, ensuring seamless user experiences and high-performance applications.",
      bio: "Rachel’s is a Software Developer who can turn setbacks into code. She has a strong STEM foundation and relentless drive, She builds real-world solutions- from scalable backends to responsive frontends. I write clean, efficient code with purpose, using every challenge as fuel to grow, solve, and ship. She will break barriers, inspire through action, and prove that where you start doesn’t define how far you can go.",
      portfolio: "https://not-your-avg-nerd.dev",
      linkedin: "https://www.linkedin.com/in/rachael-higgins/",
      github: "https://github.com/radkins22",
      skills: ["JavaScript", "React", "Git", "MongoDB","GCP", "Node.js", "Express", "HTML", "Tailwind"],
      projects: [
        {
          name: "Assessment Pathways",
          description: "This demo lets you experience Assessment Pathways, an AI-powered grading tool designed specifically for educators. When you submit your response below, our custom assessment model will instantly grade it using a clear and teacher-friendly rubric.",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfGQyOCJD204B_GeCdr5peJ84cHLIc_BKH-md4E4sXcz1QQIg/viewform",
          tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        },
        {
          name: "Willy's Philly's",
          description: "Willy’s Mexicana Grill (aka The Willy Philly) puts a delicious Mexican spin on the classic Philly cheesesteak. They use 100% Certified Angus Beef, add rice, melted cheese, roasted peppers and onions, all wrapped in a high-quality tortilla and finished with serrano crema. Guests can customize their order—swap rice for flavored quinoa or top with freshly made guacamole. orders are available for dine-in, takeout, catering via their food trucks, and delivery .",
          url: "https://willysphillys.com/",
          tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        },
      ],
      location: "Kearney, NE",
      timezone: "CST (UTC-6)",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      role: "Designer",
      email: "lisa@company.com",
      phone: "+1 (555) 567-8901",
      joinDate: "2023-05-22",
      avatar: "/placeholder.svg?height=200&width=200&text=LT",
      vision:
        "Designing inclusive experiences that celebrate diversity and make technology accessible to all communities.",
      bio: "Lisa is a passionate designer focused on creating inclusive and accessible digital experiences. With a background in graphic design and human-computer interaction, she brings both aesthetic sensibility and technical understanding to her work.",
      portfolio: "https://lisathompson.design",
      linkedin: "https://linkedin.com/in/lisathompson",
      github: "https://github.com/lisadesign",
      skills: ["UI/UX Design", "Accessibility", "Design Systems", "Branding", "Illustration", "Motion Design"],
      projects: [
        {
          name: "Accessibility Toolkit",
          description: "Comprehensive design toolkit for creating accessible digital experiences.",
          url: "https://accessibility-toolkit.com",
          tech: ["Figma", "Accessibility Guidelines", "Color Theory", "Typography"],
        },
        {
          name: "Brand Identity System",
          description: "Complete brand identity and design system for a sustainable fashion startup.",
          url: "https://brand-identity.com",
          tech: ["Adobe Illustrator", "Brand Strategy", "Design Systems", "Style Guides"],
        },
      ],
      location: "Portland, OR",
      timezone: "PST (UTC-8)",
    },
    {
      id: "6",
      name: "Alex Martinez",
      role: "Frontend Developer",
      email: "alex@company.com",
      phone: "+1 (555) 678-9012",
      joinDate: "2023-02-14",
      avatar: "/placeholder.svg?height=200&width=200&text=AM",
      vision:
        "Pushing the boundaries of web technology to create immersive, performant applications that inspire and delight.",
      bio: "Alex is an innovative frontend developer who loves experimenting with cutting-edge web technologies. Specializing in performance optimization and modern JavaScript frameworks, Alex creates fast, engaging user experiences.",
      portfolio: "https://alexmartinez.dev",
      linkedin: "https://linkedin.com/in/alexmartinez",
      github: "https://github.com/alexmartinez",
      skills: ["React", "Vue.js", "WebGL", "Performance Optimization", "PWAs", "Web Components"],
      projects: [
        {
          name: "3D Portfolio Website",
          description: "Interactive 3D portfolio showcasing web development projects with WebGL animations.",
          url: "https://3d-portfolio.com",
          tech: ["Three.js", "WebGL", "React", "GSAP"],
        },
        {
          name: "Progressive Web App",
          description: "High-performance PWA with offline capabilities and native-like experience.",
          url: "https://pwa-demo.com",
          tech: ["React", "Service Workers", "IndexedDB", "Web App Manifest"],
        },
      ],
      location: "Miami, FL",
      timezone: "EST (UTC-5)",
    },
  ]

interface TeamContextType {
  teamMembers: TeamMember[]
  setTeamMembers: (members: TeamMember[]) => void
  getTeamMember: (id: string) => TeamMember | undefined
}

const TeamContext = createContext<TeamContextType | undefined>(undefined)

export function TeamProvider({ children }: { children: ReactNode }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)

  const getTeamMember = (id: string) => {
    return teamMembers.find((member) => member.id === id)
  }

  return <TeamContext.Provider value={{ teamMembers, setTeamMembers, getTeamMember }}>{children}</TeamContext.Provider>
}

export function useTeam() {
  const context = useContext(TeamContext)
  if (context === undefined) {
    throw new Error("useTeam must be used within a TeamProvider")
  }
  return context
}
