import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Users,
  UserPlus,
  Rocket,
  Trophy,
  GitBranch,
  Heart,
  MessageSquare,
  Share2,
  Clock,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

const mockActivities = [
  {
    id: 1,
    type: "team_formed",
    user: { name: "Alex Rivera", username: "alexrivera", avatar: "/placeholder.svg" },
    action: "formed a new team",
    target: "AI Innovators",
    members: 4,
    timestamp: "2 hours ago",
    icon: Users,
    iconColor: "text-primary",
  },
  {
    id: 2,
    type: "connection",
    user: { name: "Jordan Kim", username: "jordankim", avatar: "/placeholder.svg" },
    action: "connected with",
    target: "Sam Patel",
    matchScore: 89,
    timestamp: "4 hours ago",
    icon: UserPlus,
    iconColor: "text-success",
  },
  {
    id: 3,
    type: "hackathon",
    user: { name: "Casey Zhang", username: "caseyzhang", avatar: "/placeholder.svg" },
    action: "registered for",
    target: "Stanford TreeHacks 2025",
    timestamp: "6 hours ago",
    icon: Rocket,
    iconColor: "text-warning",
  },
  {
    id: 4,
    type: "achievement",
    user: { name: "Morgan Lee", username: "morganlee", avatar: "/placeholder.svg" },
    action: "earned a badge",
    target: "Team Player",
    description: "Successfully completed 10 team projects",
    timestamp: "8 hours ago",
    icon: Trophy,
    iconColor: "text-warning",
  },
  {
    id: 5,
    type: "project_update",
    user: { name: "Taylor Johnson", username: "taylorj", avatar: "/placeholder.svg" },
    action: "updated project",
    target: "Blockchain Voting Platform",
    progress: 65,
    timestamp: "10 hours ago",
    icon: GitBranch,
    iconColor: "text-primary",
  },
  {
    id: 6,
    type: "idea_shared",
    user: { name: "Sam Patel", username: "sampatel", avatar: "/placeholder.svg" },
    action: "shared a new idea",
    target: "AR Navigation App",
    likes: 12,
    timestamp: "1 day ago",
    icon: Heart,
    iconColor: "text-destructive",
  },
]

const trendingTopics = [
  { name: "AI/ML Projects", count: 234 },
  { name: "Web3 & Blockchain", count: 189 },
  { name: "Hackathon Teams", count: 156 },
  { name: "Open Source", count: 142 },
  { name: "Mobile Apps", count: 128 },
]

export default function FeedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">
                  Activity <span className="text-primary">Feed</span>
                </h1>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Update
                </Button>
              </div>

              {/* Activity Cards */}
              <div className="space-y-4">
                {mockActivities.map((activity) => {
                  const IconComponent = activity.icon
                  return (
                    <Card key={activity.id} className="glass-card p-6 hover:glow-border transition-all">
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <Link href={`/profile/${activity.user.username}`}>
                          <img
                            src={activity.user.avatar || "/placeholder.svg"}
                            alt={activity.user.name}
                            className="h-12 w-12 rounded-full object-cover border-2 border-border hover:border-primary transition-colors"
                          />
                        </Link>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Link
                                  href={`/profile/${activity.user.username}`}
                                  className="font-semibold hover:text-primary transition-colors"
                                >
                                  {activity.user.name}
                                </Link>
                                <span className="text-sm text-muted-foreground">{activity.action}</span>
                                <span className="font-medium">{activity.target}</span>
                              </div>
                              {activity.description && (
                                <p className="text-sm text-muted-foreground">{activity.description}</p>
                              )}
                            </div>
                            <IconComponent className={`h-5 w-5 ${activity.iconColor}`} />
                          </div>

                          {/* Additional Info */}
                          <div className="flex items-center gap-4 text-sm">
                            {activity.type === "team_formed" && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {activity.members} members
                              </Badge>
                            )}
                            {activity.type === "connection" && (
                              <Badge className="bg-primary/20 text-primary border-primary/40">
                                {activity.matchScore}% Match
                              </Badge>
                            )}
                            {activity.type === "project_update" && (
                              <Badge variant="secondary">{activity.progress}% Complete</Badge>
                            )}
                            {activity.type === "idea_shared" && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                {activity.likes} likes
                              </Badge>
                            )}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-2 border-t border-border">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {activity.timestamp}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Trending Topics</h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <Link
                      key={topic.name}
                      href={`/discover?topic=${encodeURIComponent(topic.name)}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <span className="text-sm font-medium">{topic.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {topic.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card p-6 space-y-4">
                <h3 className="font-semibold">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/discover">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Find Teammates
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/projects">
                      <GitBranch className="h-4 w-4 mr-2" />
                      Start a Project
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="/hackathons">
                      <Rocket className="h-4 w-4 mr-2" />
                      Browse Hackathons
                    </Link>
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
