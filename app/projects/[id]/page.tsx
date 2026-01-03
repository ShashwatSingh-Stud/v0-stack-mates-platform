"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Plus, MoreVertical, Users, Calendar, LinkIcon, FileText, CheckCircle2, Circle, Clock } from "lucide-react"

const mockProject = {
  id: 1,
  name: "Blockchain Voting Platform",
  description: "Decentralized voting system for transparent and secure elections",
  status: "in-progress",
  progress: 40,
  tech: ["Solidity", "React", "IPFS", "Ethereum"],
  dueDate: "2025-03-01",
  team: [
    { id: 1, name: "Alex Rivera", role: "Team Lead", avatar: "/placeholder.svg" },
    { id: 2, name: "Jordan Kim", role: "Smart Contract Dev", avatar: "/placeholder.svg" },
    { id: 3, name: "Sam Patel", role: "Frontend Dev", avatar: "/placeholder.svg" },
    { id: 4, name: "Casey Zhang", role: "UI/UX Designer", avatar: "/placeholder.svg" },
  ],
  tasks: {
    todo: [
      { id: 1, title: "Design voter authentication flow", assignee: "Sam Patel" },
      { id: 2, title: "Research IPFS storage solutions", assignee: "Jordan Kim" },
      { id: 3, title: "Create wireframes for admin panel", assignee: "Casey Zhang" },
    ],
    inProgress: [
      { id: 4, title: "Implement smart contract voting logic", assignee: "Jordan Kim" },
      { id: 5, title: "Build React components for ballot", assignee: "Sam Patel" },
    ],
    done: [
      { id: 6, title: "Set up project repository", assignee: "Alex Rivera" },
      { id: 7, title: "Define project requirements", assignee: "Alex Rivera" },
      { id: 8, title: "Design system architecture", assignee: "Jordan Kim" },
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [newTaskColumn, setNewTaskColumn] = useState<string | null>(null)
  const [newTaskTitle, setNewTaskTitle] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Project Header */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">{mockProject.name}</h1>
                <p className="text-muted-foreground">{mockProject.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <Badge variant="secondary" className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    In Progress
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Due: {mockProject.dueDate}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {mockProject.team.length} members
                  </div>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <Card className="glass-card p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium">{mockProject.progress}%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                    style={{ width: `${mockProject.progress}%` }}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content - Kanban Board */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Project Board</h2>
                <div className="flex flex-wrap gap-2">
                  {mockProject.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Kanban Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* TODO Column */}
                <Card className="glass-card p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Circle className="h-4 w-4 text-muted-foreground" />
                      To Do
                      <Badge variant="secondary" className="ml-2">
                        {mockProject.tasks.todo.length}
                      </Badge>
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setNewTaskColumn(newTaskColumn === "todo" ? null : "todo")}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {newTaskColumn === "todo" && (
                    <div className="space-y-2">
                      <Input
                        placeholder="Task title..."
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Add
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setNewTaskColumn(null)
                            setNewTaskTitle("")
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {mockProject.tasks.todo.map((task) => (
                      <Card key={task.id} className="p-3 space-y-2 bg-card hover:bg-accent/50 transition-colors">
                        <p className="text-sm font-medium">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{task.assignee}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                {/* In Progress Column */}
                <Card className="glass-card p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      In Progress
                      <Badge variant="secondary" className="ml-2">
                        {mockProject.tasks.inProgress.length}
                      </Badge>
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setNewTaskColumn(newTaskColumn === "inProgress" ? null : "inProgress")}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {newTaskColumn === "inProgress" && (
                    <div className="space-y-2">
                      <Input
                        placeholder="Task title..."
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Add
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setNewTaskColumn(null)
                            setNewTaskTitle("")
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {mockProject.tasks.inProgress.map((task) => (
                      <Card
                        key={task.id}
                        className="p-3 space-y-2 bg-card border-l-4 border-l-primary hover:bg-accent/50 transition-colors"
                      >
                        <p className="text-sm font-medium">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{task.assignee}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                {/* Done Column */}
                <Card className="glass-card p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Done
                      <Badge variant="secondary" className="ml-2">
                        {mockProject.tasks.done.length}
                      </Badge>
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setNewTaskColumn(newTaskColumn === "done" ? null : "done")}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {newTaskColumn === "done" && (
                    <div className="space-y-2">
                      <Input
                        placeholder="Task title..."
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Add
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setNewTaskColumn(null)
                            setNewTaskTitle("")
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {mockProject.tasks.done.map((task) => (
                      <Card
                        key={task.id}
                        className="p-3 space-y-2 bg-card border-l-4 border-l-success hover:bg-accent/50 transition-colors opacity-80"
                      >
                        <p className="text-sm font-medium line-through">{task.title}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{task.assignee}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Members */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Team Members</h3>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {mockProject.team.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover border-2 border-border"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Resources */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Resources</h3>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Project Brief.pdf
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Figma Designs
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
