"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Users, Calendar, Lightbulb, Folder, Clock, Target, TrendingUp, Code, Rocket, Star } from "lucide-react"
import Link from "next/link"

const mockProjects = [
  {
    id: 1,
    name: "AI Task Manager",
    description: "Smart task management app with AI-powered suggestions",
    status: "in-progress",
    type: "solo",
    progress: 65,
    tech: ["Next.js", "OpenAI", "Supabase"],
    dueDate: "2025-02-15",
    tasks: { total: 12, completed: 8 },
  },
  {
    id: 2,
    name: "Blockchain Voting Platform",
    description: "Decentralized voting system for transparent elections",
    status: "in-progress",
    type: "team",
    teamSize: 4,
    progress: 40,
    tech: ["Solidity", "React", "IPFS"],
    dueDate: "2025-03-01",
    tasks: { total: 20, completed: 8 },
  },
  {
    id: 3,
    name: "Social Fitness App",
    description: "Connect with workout buddies and track progress together",
    status: "completed",
    type: "team",
    teamSize: 3,
    progress: 100,
    tech: ["React Native", "Firebase", "Node.js"],
    completedDate: "2025-01-10",
    tasks: { total: 15, completed: 15 },
  },
]

const mockIdeas = [
  {
    id: 1,
    title: "AR Navigation App",
    description: "Augmented reality indoor navigation for large venues like airports and malls",
    techStack: ["AR Kit", "Flutter", "Google Maps API"],
    visibility: "public",
    likes: 12,
    collaborators: 3,
    created: "2025-01-02",
  },
  {
    id: 2,
    title: "Mental Health Chatbot",
    description: "AI-powered mental health support with mood tracking and coping strategies",
    techStack: ["Python", "TensorFlow", "React"],
    visibility: "public",
    likes: 24,
    collaborators: 7,
    created: "2024-12-28",
  },
  {
    id: 3,
    title: "Smart Garden IoT System",
    description: "Automated plant care with sensors and mobile monitoring",
    techStack: ["Arduino", "React Native", "Firebase"],
    visibility: "private",
    likes: 0,
    collaborators: 0,
    created: "2025-01-05",
  },
]

const mockHackathons = [
  {
    id: 1,
    name: "Stanford TreeHacks 2025",
    date: "2025-02-14",
    daysUntil: 42,
    location: "Stanford, CA",
    teamNeeded: true,
    registered: true,
    prize: "$50,000",
  },
  {
    id: 2,
    name: "HackMIT",
    date: "2025-03-20",
    daysUntil: 76,
    location: "Cambridge, MA",
    teamNeeded: false,
    registered: false,
    prize: "$30,000",
  },
  {
    id: 3,
    name: "CalHacks",
    date: "2025-04-05",
    daysUntil: 92,
    location: "Berkeley, CA",
    teamNeeded: true,
    registered: true,
    prize: "$40,000",
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("my-projects")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-muted-foreground mt-1">Manage your projects, teams, ideas, and hackathons</p>
            </div>
            <Button className="glow-border">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid bg-card">
              <TabsTrigger value="my-projects" className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                <span className="hidden sm:inline">My Projects</span>
              </TabsTrigger>
              <TabsTrigger value="team-projects" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Team Projects</span>
              </TabsTrigger>
              <TabsTrigger value="ideas" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Ideas</span>
              </TabsTrigger>
              <TabsTrigger value="hackathons" className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span className="hidden sm:inline">Hackathons</span>
              </TabsTrigger>
            </TabsList>

            {/* My Projects Tab */}
            <TabsContent value="my-projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockProjects
                  .filter((p) => p.type === "solo")
                  .map((project) => (
                    <Card key={project.id} className="glass-card p-6 space-y-4 hover:glow-border transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                        <Badge
                          variant={project.status === "completed" ? "default" : "secondary"}
                          className={project.status === "completed" ? "bg-success" : ""}
                        >
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Target className="h-4 w-4" />
                          <span>
                            {project.tasks.completed}/{project.tasks.total} tasks
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.status === "completed" ? project.completedDate : project.dueDate}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Team Projects Tab */}
            <TabsContent value="team-projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockProjects
                  .filter((p) => p.type === "team")
                  .map((project) => (
                    <Card key={project.id} className="glass-card p-6 space-y-4 hover:glow-border transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <Badge
                          variant={project.status === "completed" ? "default" : "secondary"}
                          className={project.status === "completed" ? "bg-success" : ""}
                        >
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.teamSize} members</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.status === "completed" ? project.completedDate : project.dueDate}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Ideas Tab */}
            <TabsContent value="ideas" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockIdeas.map((idea) => (
                  <Card key={idea.id} className="glass-card p-6 space-y-4 hover:glow-border transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={idea.visibility === "public" ? "default" : "secondary"}>
                        {idea.visibility === "public" ? "Public" : "Private"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{idea.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{idea.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {idea.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-2 border-t border-border text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Star className="h-4 w-4" />
                          {idea.likes}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {idea.collaborators}
                        </span>
                      </div>
                      <span className="text-muted-foreground">{idea.created}</span>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      Find Collaborators
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Hackathons Tab */}
            <TabsContent value="hackathons" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockHackathons.map((hackathon) => (
                  <Card key={hackathon.id} className="glass-card p-6 space-y-4 hover:glow-border transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Rocket className="h-6 w-6 text-primary" />
                      </div>
                      {hackathon.registered && <Badge className="bg-success">Registered</Badge>}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{hackathon.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{hackathon.date}</span>
                        <span className="text-xs">• {hackathon.daysUntil} days away</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span>{hackathon.prize} in prizes</span>
                      </div>
                    </div>

                    {hackathon.teamNeeded && (
                      <div className="p-3 rounded-lg bg-accent/50 border border-border">
                        <p className="text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 inline mr-2" />
                          You need teammates for this hackathon
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {hackathon.teamNeeded ? (
                        <Button className="flex-1 glow-border">Find Teammates</Button>
                      ) : (
                        <Button variant="outline" className="flex-1 bg-transparent">
                          View Team
                        </Button>
                      )}
                      {!hackathon.registered && <Button variant="outline">Register</Button>}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
