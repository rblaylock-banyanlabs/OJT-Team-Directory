"use client"

import { useState } from "react"
import { Plus, Filter, SortAsc, Users, Mail, Phone, MapPin, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/layout/page-layout"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { TeamMemberCard } from "@/components/team-member-card"
import { useTeam } from "@/hooks/use-team"
import { useFilters } from "@/hooks/use-filters"
import { getPlaceholderAvatar } from "@/utils/format"
import { isValidEmail, isValidPhone, isValidUrl, validateRequired } from "@/utils/validation"
import { ROLES, SKILLS } from "@/constants/team-data"
import type { TeamMember, Project } from "@/types/team"

export function TeamDirectory() {
  const { teamMembers, addMember, getRoles } = useTeam()
  const {
    filteredAndSortedMembers,
    searchTerm,
    setSearchTerm,
    roleFilter,
    setRoleFilter,
    sortBy,
    setSortBy,
    clearFilters,
  } = useFilters(teamMembers)

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [addSuccess, setAddSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    joinDate: new Date().toISOString().split("T")[0],
    vision: "",
    bio: "",
    portfolio: "",
    linkedin: "",
    github: "",
    twitter: "",
    location: "",
    timezone: "",
    skills: [] as string[],
    projects: [] as Project[],
  })
  const [newSkill, setNewSkill] = useState("")
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    url: "",
    tech: [] as string[],
  })
  const [newTech, setNewTech] = useState("")

  const roles = getRoles()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!validateRequired(newMember.name)) {
      newErrors.name = "Name is required"
    }

    if (!validateRequired(newMember.role)) {
      newErrors.role = "Role is required"
    }

    if (!validateRequired(newMember.email)) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(newMember.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (newMember.phone && !isValidPhone(newMember.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!validateRequired(newMember.joinDate)) {
      newErrors.joinDate = "Join date is required"
    }

    if (!validateRequired(newMember.vision)) {
      newErrors.vision = "Vision statement is required"
    }

    if (newMember.portfolio && !isValidUrl(newMember.portfolio)) {
      newErrors.portfolio = "Please enter a valid URL"
    }

    if (newMember.linkedin && !isValidUrl(newMember.linkedin)) {
      newErrors.linkedin = "Please enter a valid URL"
    }

    if (newMember.github && !isValidUrl(newMember.github)) {
      newErrors.github = "Please enter a valid URL"
    }

    if (newMember.twitter && !isValidUrl(newMember.twitter)) {
      newErrors.twitter = "Please enter a valid URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddSkill = () => {
    if (newSkill && !newMember.skills.includes(newSkill)) {
      setNewMember({
        ...newMember,
        skills: [...newMember.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setNewMember({
      ...newMember,
      skills: newMember.skills.filter((s) => s !== skill),
    })
  }

  const handleAddTech = () => {
    if (newTech && !newProject.tech.includes(newTech)) {
      setNewProject({
        ...newProject,
        tech: [...newProject.tech, newTech],
      })
      setNewTech("")
    }
  }

  const handleRemoveTech = (tech: string) => {
    setNewProject({
      ...newProject,
      tech: newProject.tech.filter((t) => t !== tech),
    })
  }

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      setNewMember({
        ...newMember,
        projects: [...newMember.projects, { ...newProject }],
      })
      setNewProject({
        name: "",
        description: "",
        url: "",
        tech: [],
      })
    }
  }

  const handleRemoveProject = (index: number) => {
    setNewMember({
      ...newMember,
      projects: newMember.projects.filter((_, i) => i !== index),
    })
  }

  const handleAddMember = () => {
    console.log("Form validation starting...") // Debug log
    if (validateForm()) {
      console.log("Form is valid, creating member...") // Debug log
      const member: Omit<TeamMember, "id"> = {
        ...newMember,
        avatar: getPlaceholderAvatar(newMember.name),
      }
      console.log("Member to add:", member) // Debug log
      addMember(member)

      // Show success message
      setAddSuccess(true)

      // Reset form after a delay
      setTimeout(() => {
        setAddSuccess(false)
        setNewMember({
          name: "",
          role: "",
          email: "",
          phone: "",
          joinDate: new Date().toISOString().split("T")[0],
          vision: "",
          bio: "",
          portfolio: "",
          linkedin: "",
          github: "",
          twitter: "",
          location: "",
          timezone: "",
          skills: [],
          projects: [],
        })
        setIsAddDialogOpen(false)
      }, 1500)
    } else {
      console.log("Form validation failed:", errors) // Debug log
    }
  }

  return (
    <PageLayout>
      {/* Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex-1 max-w-sm">
              <Input
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>

            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-slate-200">
                <Filter className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200">
                <SelectItem value="all">All Roles</SelectItem>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700/50 text-slate-900 dark:text-slate-200">
                <SortAsc className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200">
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="joinDate">Join Date (Oldest)</SelectItem>
                <SelectItem value="joinDateDesc">Join Date (Newest)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-white/95 dark:bg-slate-800/95 border-slate-200 dark:border-slate-700/50 backdrop-blur-md max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-slate-700 to-blue-700 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent">
                  Add New Team Member
                </DialogTitle>
              </DialogHeader>

              {addSuccess ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">
                    Member Added Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    The new team member has been added to the directory.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-900 dark:text-slate-200">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                          placeholder="Enter full name"
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-slate-900 dark:text-slate-200">
                          Role <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={newMember.role}
                          onValueChange={(value) => setNewMember({ ...newMember, role: value })}
                        >
                          <SelectTrigger
                            id="role"
                            className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 ${
                              errors.role ? "border-red-500" : ""
                            }`}
                          >
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            {ROLES.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-slate-900 dark:text-slate-200">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={newMember.email}
                          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                          placeholder="Enter email address"
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-900 dark:text-slate-200">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={newMember.phone}
                          onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                          placeholder="Enter phone number"
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="joinDate" className="text-slate-900 dark:text-slate-200">
                        Join Date <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="joinDate"
                        type="date"
                        value={newMember.joinDate}
                        onChange={(e) => setNewMember({ ...newMember, joinDate: e.target.value })}
                        className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 ${
                          errors.joinDate ? "border-red-500" : ""
                        }`}
                      />
                      {errors.joinDate && <p className="text-red-500 text-xs mt-1">{errors.joinDate}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location" className="text-slate-900 dark:text-slate-200">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={newMember.location}
                          onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
                          placeholder="City, State"
                          className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timezone" className="text-slate-900 dark:text-slate-200">
                          Timezone
                        </Label>
                        <Input
                          id="timezone"
                          value={newMember.timezone}
                          onChange={(e) => setNewMember({ ...newMember, timezone: e.target.value })}
                          placeholder="PST (UTC-8)"
                          className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bio & Vision */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">Bio & Vision</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="vision" className="text-slate-900 dark:text-slate-200">
                          Personal Vision <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="vision"
                          value={newMember.vision}
                          onChange={(e) => setNewMember({ ...newMember, vision: e.target.value })}
                          placeholder="Enter personal vision statement"
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.vision ? "border-red-500" : ""
                          }`}
                          rows={2}
                        />
                        {errors.vision && <p className="text-red-500 text-xs mt-1">{errors.vision}</p>}
                      </div>
                      <div>
                        <Label htmlFor="bio" className="text-slate-900 dark:text-slate-200">
                          Bio
                        </Label>
                        <Textarea
                          id="bio"
                          value={newMember.bio}
                          onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                          placeholder="Enter bio"
                          className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {newMember.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1"
                        >
                          {skill}
                          <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-1 hover:text-red-500 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Select value={newSkill} onValueChange={setNewSkill}>
                        <SelectTrigger className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200">
                          <SelectValue placeholder="Select a skill" />
                        </SelectTrigger>
                        <SelectContent>
                          {SKILLS.filter((skill) => !newMember.skills.includes(skill)).map((skill) => (
                            <SelectItem key={skill} value={skill}>
                              {skill}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        onClick={handleAddSkill}
                        disabled={!newSkill}
                        className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
                      >
                        Add Skill
                      </Button>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">Projects</h3>

                    {/* Existing Projects */}
                    {newMember.projects.length > 0 && (
                      <div className="space-y-4 mb-4">
                        {newMember.projects.map((project, index) => (
                          <div key={index} className="border-l-4 border-slate-200 dark:border-slate-600/50 pl-4 py-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-200">{project.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                                {project.url && (
                                  <p className="text-xs text-blue-600 dark:text-blue-400">{project.url}</p>
                                )}
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {project.tech.map((tech, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <button
                                onClick={() => handleRemoveProject(index)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add New Project */}
                    <Card className="bg-slate-50 dark:bg-slate-700/30">
                      <CardHeader className="py-3">
                        <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">Add New Project</h4>
                      </CardHeader>
                      <CardContent className="py-2 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="projectName" className="text-xs">
                              Project Name
                            </Label>
                            <Input
                              id="projectName"
                              value={newProject.name}
                              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                              placeholder="Project name"
                              className="h-8 text-sm bg-white dark:bg-slate-800"
                            />
                          </div>
                          <div>
                            <Label htmlFor="projectUrl" className="text-xs">
                              Project URL
                            </Label>
                            <Input
                              id="projectUrl"
                              value={newProject.url}
                              onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                              placeholder="https://..."
                              className="h-8 text-sm bg-white dark:bg-slate-800"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="projectDescription" className="text-xs">
                            Description
                          </Label>
                          <Textarea
                            id="projectDescription"
                            value={newProject.description}
                            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                            placeholder="Brief project description"
                            className="text-sm bg-white dark:bg-slate-800"
                            rows={2}
                          />
                        </div>

                        {/* Project Technologies */}
                        <div>
                          <Label className="text-xs">Technologies</Label>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {newProject.tech.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                                {tech}
                                <button
                                  onClick={() => handleRemoveTech(tech)}
                                  className="ml-1 hover:text-red-500 transition-colors"
                                >
                                  <X className="h-2 w-2" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              value={newTech}
                              onChange={(e) => setNewTech(e.target.value)}
                              placeholder="Add technology"
                              className="h-8 text-sm bg-white dark:bg-slate-800"
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && newTech) {
                                  e.preventDefault()
                                  handleAddTech()
                                }
                              }}
                            />
                            <Button
                              onClick={handleAddTech}
                              disabled={!newTech}
                              size="sm"
                              className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
                            >
                              Add
                            </Button>
                          </div>
                        </div>

                        <Button
                          onClick={handleAddProject}
                          disabled={!newProject.name || !newProject.description}
                          className="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Project
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-200">Social Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="portfolio" className="text-slate-900 dark:text-slate-200">
                          Portfolio Website
                        </Label>
                        <Input
                          id="portfolio"
                          value={newMember.portfolio}
                          onChange={(e) => setNewMember({ ...newMember, portfolio: e.target.value })}
                          placeholder="https://..."
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.portfolio ? "border-red-500" : ""
                          }`}
                        />
                        {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
                      </div>
                      <div>
                        <Label htmlFor="linkedin" className="text-slate-900 dark:text-slate-200">
                          LinkedIn
                        </Label>
                        <Input
                          id="linkedin"
                          value={newMember.linkedin}
                          onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
                          placeholder="https://linkedin.com/in/..."
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.linkedin ? "border-red-500" : ""
                          }`}
                        />
                        {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin}</p>}
                      </div>
                      <div>
                        <Label htmlFor="github" className="text-slate-900 dark:text-slate-200">
                          GitHub
                        </Label>
                        <Input
                          id="github"
                          value={newMember.github}
                          onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                          placeholder="https://github.com/..."
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.github ? "border-red-500" : ""
                          }`}
                        />
                        {errors.github && <p className="text-red-500 text-xs mt-1">{errors.github}</p>}
                      </div>
                      <div>
                        <Label htmlFor="twitter" className="text-slate-900 dark:text-slate-200">
                          Twitter
                        </Label>
                        <Input
                          id="twitter"
                          value={newMember.twitter}
                          onChange={(e) => setNewMember({ ...newMember, twitter: e.target.value })}
                          placeholder="https://twitter.com/..."
                          className={`bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 focus:border-blue-500 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 ${
                            errors.twitter ? "border-red-500" : ""
                          }`}
                        />
                        {errors.twitter && <p className="text-red-500 text-xs mt-1">{errors.twitter}</p>}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddMember}
                    className="w-full bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600"
                  >
                    Add Team Member
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center justify-between text-sm">
          <Text variant="caption" className="text-slate-600 dark:text-slate-400">
            Showing {filteredAndSortedMembers.length} of {teamMembers.length} team members
          </Text>
          <Text
            variant="caption"
            className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full text-blue-700 dark:text-blue-300"
          >
            💡 Click cards to view detailed profiles
          </Text>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {filteredAndSortedMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredAndSortedMembers.length === 0 && (
        <div className="text-center py-12">
          <div className="p-4 rounded-full bg-gradient-to-r from-slate-200/50 to-blue-200/50 dark:from-slate-700/50 dark:to-blue-700/50 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-12 w-12 text-slate-600 dark:text-slate-300" />
          </div>
          <Heading level={3} className="mb-2 text-slate-900 dark:text-slate-200">
            No team members found
          </Heading>
          <Text variant="muted" className="mb-4 text-slate-600 dark:text-slate-400">
            Try adjusting your search or filter criteria
          </Text>
          <Button
            onClick={clearFilters}
            className="bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-16">
        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-xl">
          <CardHeader className="text-center">
            <Heading level={2} gradient className="mb-2">
              Get In Touch
            </Heading>
            <Text variant="muted" className="text-slate-600 dark:text-slate-400">
              Ready to join our amazing team or have questions? We&apos;d love to hear from you!
            </Text>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-100/50 to-blue-100/50 dark:from-slate-700/30 dark:to-blue-700/30">
                <div className="p-3 rounded-full bg-gradient-to-r from-slate-700 to-blue-700 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">Email Us</h3>
                <Text variant="caption" className="mb-2 text-slate-600 dark:text-slate-400">
                  Drop us a line anytime
                </Text>
                <Text className="text-blue-600 dark:text-blue-400 font-medium">hello@company.com</Text>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-100/50 to-blue-100/50 dark:from-slate-700/30 dark:to-blue-700/30">
                <div className="p-3 rounded-full bg-gradient-to-r from-slate-700 to-blue-700 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">Call Us</h3>
                <Text variant="caption" className="mb-2 text-slate-600 dark:text-slate-400">
                  Mon-Fri 9AM-6PM
                </Text>
                <Text className="text-blue-600 dark:text-blue-400 font-medium">+1 (555) 123-4567</Text>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-100/50 to-blue-100/50 dark:from-slate-700/30 dark:to-blue-700/30">
                <div className="p-3 rounded-full bg-gradient-to-r from-slate-700 to-blue-700 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">Visit Us</h3>
                <Text variant="caption" className="mb-2 text-slate-600 dark:text-slate-400">
                  Come say hello
                </Text>
                <Text className="text-blue-600 dark:text-blue-400 font-medium">123 Innovation St, Tech City</Text>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
