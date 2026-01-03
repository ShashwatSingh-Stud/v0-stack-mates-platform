import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, MessageSquare, TrendingUp, Code, Briefcase, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react"

export default function NetworkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="border-b border-border/30">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-serif tracking-tight">Your Network</h1>
                <p className="text-muted-foreground">Connect with top talent and grow your professional circle</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center px-6 py-3 rounded-xl bg-muted/20 border border-border/40">
                  <p className="text-2xl font-serif">247</p>
                  <p className="text-xs text-muted-foreground tracking-wider">CONNECTIONS</p>
                </div>
                <div className="text-center px-6 py-3 rounded-xl bg-muted/20 border border-border/40">
                  <p className="text-2xl font-serif">12</p>
                  <p className="text-xs text-muted-foreground tracking-wider">PENDING</p>
                </div>
                <div className="text-center px-6 py-3 rounded-xl bg-muted/20 border border-border/40">
                  <p className="text-2xl font-serif">8</p>
                  <p className="text-xs text-muted-foreground tracking-wider">NEW THIS WEEK</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="feed" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-12 bg-transparent p-0">
                  <TabsTrigger
                    value="feed"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Activity Feed
                  </TabsTrigger>
                  <TabsTrigger
                    value="connections"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Connections
                  </TabsTrigger>
                  <TabsTrigger
                    value="requests"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                  >
                    Requests
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="feed" className="space-y-4 mt-6">
                  {/* Activity Items */}
                  {[
                    {
                      user: "Sarah Chen",
                      avatar: "/profile-.jpg?key=p1&height=40&width=40",
                      action: "joined a new team",
                      target: "AI Healthcare Solutions",
                      time: "2 hours ago",
                      type: "team",
                    },
                    {
                      user: "Marcus Rodriguez",
                      avatar: "/profile-.jpg?key=p2&height=40&width=40",
                      action: "launched a project",
                      target: "Climate Data Visualization Platform",
                      time: "5 hours ago",
                      type: "project",
                    },
                    {
                      user: "Priya Sharma",
                      avatar: "/profile-.jpg?key=p3&height=40&width=40",
                      action: "expanded their skills",
                      target: "Added TypeScript, GraphQL, Docker",
                      time: "1 day ago",
                      type: "skill",
                    },
                    {
                      user: "Alex Thompson",
                      avatar: "/profile-.jpg?key=p4&height=40&width=40",
                      action: "is attending",
                      target: "TechCrunch Disrupt Hackathon 2026",
                      time: "2 days ago",
                      type: "event",
                    },
                    {
                      user: "Emily Watson",
                      avatar: "/profile-.jpg?key=p5&height=40&width=40",
                      action: "connected with",
                      target: "15 new developers",
                      time: "3 days ago",
                      type: "connection",
                    },
                  ].map((activity, i) => (
                    <Card key={i} className="apple-glass p-6 hover:border-primary/20 transition-colors cursor-pointer">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12 border-2 border-border/50">
                          <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{activity.user[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-medium">{activity.user}</span>{" "}
                                <span className="text-muted-foreground">{activity.action}</span>{" "}
                                <span className="font-medium">{activity.target}</span>
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                            <Button size="sm" variant="ghost" className="gap-2">
                              View
                              <ArrowUpRight className="h-3 w-3" />
                            </Button>
                          </div>

                          {activity.type === "project" && (
                            <div className="mt-4 p-4 rounded-lg bg-muted/20 border border-border/40">
                              <p className="text-sm text-muted-foreground">
                                A real-time climate monitoring dashboard built with Next.js, D3.js, and Supabase
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {["Next.js", "D3.js", "Supabase", "TypeScript"].map((tech, j) => (
                                  <span
                                    key={j}
                                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="connections" className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: "David Kim",
                        role: "Full-Stack Developer",
                        company: "Stripe",
                        skills: ["React", "Node.js", "AWS"],
                        mutual: 12,
                      },
                      {
                        name: "Lisa Anderson",
                        role: "Product Designer",
                        company: "Figma",
                        skills: ["UI/UX", "Prototyping", "Design Systems"],
                        mutual: 8,
                      },
                      {
                        name: "James Wilson",
                        role: "ML Engineer",
                        company: "OpenAI",
                        skills: ["Python", "TensorFlow", "PyTorch"],
                        mutual: 15,
                      },
                      {
                        name: "Sofia Martinez",
                        role: "DevOps Engineer",
                        company: "Vercel",
                        skills: ["Docker", "Kubernetes", "CI/CD"],
                        mutual: 6,
                      },
                    ].map((person, i) => (
                      <Card key={i} className="apple-glass p-6 space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-14 w-14 border-2 border-border/50">
                            <AvatarImage src={`/profile-.jpg?key=c${i}&height=56&width=56`} />
                            <AvatarFallback>{person.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{person.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{person.role}</p>
                            <p className="text-xs text-muted-foreground mt-1">{person.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {person.skills.map((skill, j) => (
                            <span
                              key={j}
                              className="text-xs px-2 py-1 rounded-full bg-muted/30 text-muted-foreground font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Button size="sm" variant="ghost" className="flex-1 gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Message
                          </Button>
                          <p className="text-xs text-muted-foreground">{person.mutual} mutual</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="requests" className="space-y-4 mt-6">
                  {[
                    {
                      name: "Rachel Green",
                      role: "Frontend Developer",
                      location: "San Francisco, CA",
                      skills: ["React", "TypeScript", "Next.js"],
                      note: "I'd love to collaborate on hackathon projects!",
                    },
                    {
                      name: "Tom Brady",
                      role: "Backend Engineer",
                      location: "Austin, TX",
                      skills: ["Node.js", "Python", "PostgreSQL"],
                      note: "Looking to join a team for upcoming hackathons",
                    },
                    {
                      name: "Anna Lee",
                      role: "Product Manager",
                      location: "New York, NY",
                      skills: ["Product Strategy", "Agile", "Analytics"],
                      note: "Excited to connect with developers and designers",
                    },
                  ].map((request, i) => (
                    <Card key={i} className="apple-glass p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14 border-2 border-border/50">
                          <AvatarImage src={`/profile-.jpg?key=r${i}&height=56&width=56`} />
                          <AvatarFallback>{request.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="font-medium">{request.name}</h3>
                            <p className="text-sm text-muted-foreground">{request.role}</p>
                            <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {request.location}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {request.skills.map((skill, j) => (
                              <span
                                key={j}
                                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="p-3 rounded-lg bg-muted/20 border border-border/40">
                            <p className="text-sm text-muted-foreground italic">"{request.note}"</p>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            <Button size="sm" className="gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              Accept
                            </Button>
                            <Button size="sm" variant="ghost">
                              Ignore
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Suggested Connections */}
              <Card className="apple-glass p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl">Suggested</h3>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Chris Evans", role: "iOS Developer", match: 89 },
                    { name: "Natasha Romanoff", role: "Security Engineer", match: 84 },
                    { name: "Bruce Banner", role: "Data Scientist", match: 81 },
                  ].map((person, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 border border-border/50">
                        <AvatarImage src={`/profile-.jpg?key=s${i}&height=40&width=40`} />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{person.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                          </div>
                          <span className="text-xs font-medium text-primary">{person.match}%</span>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-full mt-2 gap-2 text-xs">
                          <UserPlus className="h-3 w-3" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Communities */}
              <Card className="apple-glass p-6 space-y-4">
                <h3 className="font-serif text-xl">Communities</h3>

                <div className="space-y-3">
                  {[
                    { name: "React Developers", members: "12.4K", icon: Code },
                    { name: "Startup Founders", members: "8.9K", icon: Briefcase },
                    { name: "AI & Machine Learning", members: "15.2K", icon: TrendingUp },
                  ].map((community, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-muted/20 border border-border/40 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <community.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{community.name}</p>
                          <p className="text-xs text-muted-foreground">{community.members} members</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full">
                  Explore All Communities
                </Button>
              </Card>

              {/* Network Growth */}
              <Card className="apple-glass p-6 space-y-4">
                <h3 className="font-serif text-xl">Network Growth</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Week</span>
                    <span className="text-sm font-medium">+8 connections</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">This Month</span>
                    <span className="text-sm font-medium">+34 connections</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Profile Views</span>
                    <span className="text-sm font-medium">142 this week</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    Your network is growing <span className="text-primary font-medium">23% faster</span> than average
                  </p>
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
