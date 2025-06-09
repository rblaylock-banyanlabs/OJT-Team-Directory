"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Calendar,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PageLayout } from "@/components/layout/page-layout"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { GradientText } from "@/components/typography/gradient-text"
import { useTeam } from "@/hooks/use-team"
import { formatDate } from "@/utils/date"
import { getInitials } from "@/utils/format"

interface TeamMemberDetailProps {
  memberId: string
}

export function TeamMemberDetail({ memberId }: TeamMemberDetailProps) {
  const { getMember } = useTeam()
  const router = useRouter()

  const member = getMember(memberId)

  if (!member) {
    return (
      <PageLayout>
        <div className="text-center py-12">
          <Heading level={2} className="mb-4 text-slate-900 dark:text-slate-200">
            Team Member Not Found
          </Heading>
          <Link href="/">
            <Button>Back to Directory</Button>
          </Link>
        </div>
      </PageLayout>
    )
  }

  const socialLinks = [
    { icon: Globe, label: "Portfolio", url: member.portfolio, color: "text-blue-600 dark:text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", url: member.linkedin, color: "text-blue-700 dark:text-blue-500" },
    { icon: Github, label: "GitHub", url: member.github, color: "text-slate-700 dark:text-slate-300" },
  ].filter((link) => link.url)

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
            >
              <Users className="h-4 w-4 mr-2" />
              Directory
            </Button>
          </Link>
        </div>

        {/* Profile Header */}
        <Card className="mb-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-xl">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-32 w-32 ring-4 ring-slate-200 dark:ring-slate-600/50 ring-offset-4 ring-offset-white dark:ring-offset-slate-800">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-slate-700 to-blue-700 text-white">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <Heading level={1} gradient className="mb-2">
                  {member.name}
                </Heading>
                <Badge className="mb-4 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-700/80 dark:to-blue-700/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600/50">
                  {member.role}
                </Badge>

                <Text variant="muted" className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {member.bio}
                </Text>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <MapPin className="h-4 w-4 mr-1 text-blue-600 dark:text-blue-400" />
                    {member.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="h-4 w-4 mr-1 text-blue-600 dark:text-blue-400" />
                    {member.timezone}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-1 text-blue-600 dark:text-blue-400" />
                    Joined {formatDate(member.joinDate)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vision Statement */}
            <Card className="bg-gradient-to-r from-slate-700 to-blue-700 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="p-2 rounded-lg bg-white/20 mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  Personal Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text className="text-white/90 italic leading-relaxed">"{member.vision}"</Text>
              </CardContent>
            </Card>

            {/* Skills */}
            {member.skills && member.skills.length > 0 && (
              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
                <CardHeader>
                  <CardTitle>
                    <GradientText>Skills & Expertise</GradientText>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Projects */}
            {member.projects && member.projects.length > 0 && (
              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
                <CardHeader>
                  <CardTitle>
                    <GradientText>Featured Projects</GradientText>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {member.projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-slate-200 dark:border-slate-600/50 pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-200">{project.name}</h4>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <Text variant="muted" className="mb-3 text-slate-600 dark:text-slate-400">
                        {project.description}
                      </Text>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
              <CardHeader>
                <CardTitle>
                  <GradientText>Contact Information</GradientText>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                    <Mail className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <Text variant="caption" className="text-slate-600 dark:text-slate-400">
                      Email
                    </Text>
                    <a href={`mailto:${member.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {member.email}
                    </a>
                  </div>
                </div>

                {member.phone && (
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                      <Phone className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    </div>
                    <div>
                      <Text variant="caption" className="text-slate-600 dark:text-slate-400">
                        Phone
                      </Text>
                      <a href={`tel:${member.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
                <CardHeader>
                  <CardTitle>
                    <GradientText>Online Presence</GradientText>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group"
                    >
                      <link.icon className={`h-5 w-5 ${link.color}`} />
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-slate-700 dark:text-slate-300">
                        {link.label}
                      </span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-blue-400" />
                    </a>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-slate-100/50 to-blue-100/50 dark:from-slate-700/30 dark:to-blue-700/30 border-slate-200 dark:border-slate-600/50 shadow-lg">
              <CardHeader>
                <CardTitle>
                  <GradientText>Quick Actions</GradientText>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600"
                  onClick={() => (window.location.href = `mailto:${member.email}`)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                {member.phone && (
                  <Button
                    variant="outline"
                    className="w-full border-slate-200 dark:border-slate-600/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-200"
                    onClick={() => (window.location.href = `tel:${member.phone}`)}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                )}
                {member.portfolio && (
                  <Button
                    variant="outline"
                    className="w-full border-slate-200 dark:border-slate-600/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-200"
                    onClick={() => window.open(member.portfolio, "_blank")}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
