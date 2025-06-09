import Link from "next/link"
import { ArrowLeft, Target, Users, Heart, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLayout } from "@/components/layout/page-layout"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { GradientText } from "@/components/typography/gradient-text"

export function About() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-slate-700 to-blue-700 mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <Heading level={1} gradient className="mb-4">
            About Our Team
          </Heading>
          <Text size="xl" variant="muted" className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            We are a diverse group of innovators, creators, and problem-solvers dedicated to building exceptional
            technology solutions that empower individuals and teams to thrive ina digital world.
          </Text>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-blue-700 mr-3">
                <Target className="h-5 w-5 text-white" />
              </div>
              <GradientText>Our Mission</GradientText>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text size="lg" className="leading-relaxed text-slate-700 dark:text-slate-300">
             We strive for excellence in everything we do, from the products we create to the culture we foster. Our mission
             is to empower teams and individuals to achieve their full potential through innovative technology solutions. 
            </Text>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-blue-700 mr-3">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <GradientText>Collaboration</GradientText>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted" className="text-slate-600 dark:text-slate-400">
                We believe the best solutions come from diverse minds working together. Every voice matters and
                contributes to our collective success and innovation.
              </Text>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-blue-700 mr-3">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <GradientText>Innovation</GradientText>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted" className="text-slate-600 dark:text-slate-400">
                We&apos;re always pushing boundaries and exploring new technologies to stay ahead of the curve and deliver
                cutting-edge solutions that shape the future.
              </Text>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-blue-700 mr-3">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <GradientText>Impact</GradientText>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted" className="text-slate-600 dark:text-slate-400">
                Everything we do is driven by the desire to create positive change and meaningful impact for our users,
                community, and the world at large.
              </Text>
            </CardContent>
          </Card>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
            <GradientText as="div" className="text-3xl font-bold mb-2">
              25+
            </GradientText>
            <Text variant="caption" className="text-slate-600 dark:text-slate-400">
              Team Members
            </Text>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
            <GradientText as="div" className="text-3xl font-bold mb-2">
              5
            </GradientText>
            <Text variant="caption" className="text-slate-600 dark:text-slate-400">
              Departments
            </Text>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
            <GradientText as="div" className="text-3xl font-bold mb-2">
              3
            </GradientText>
            <Text variant="caption" className="text-slate-600 dark:text-slate-400">
              Years Strong
            </Text>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-slate-200 dark:border-slate-700/50 shadow-lg">
            <GradientText as="div" className="text-3xl font-bold mb-2">
              100+
            </GradientText>
            <Text variant="caption" className="text-slate-600 dark:text-slate-400">
              Projects Delivered
            </Text>
          </div>
        </div>

        {/* Join Us Section */}
        <Card className="text-center bg-gradient-to-r from-slate-700 to-blue-700 text-white shadow-2xl">
          <CardContent className="pt-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/20 mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <Heading level={2} className="text-white mb-4">
              Join Our Amazing Team
            </Heading>
            <Text className="text-white/90 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence. If
              you&apos;re interested in being part of our journey and making a real impact, we&apos;d love to hear from you.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-slate-700 hover:bg-gray-100">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
