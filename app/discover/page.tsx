"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Star,
  X,
  MessageSquare,
  UserPlus,
  Grid3x3,
  List,
  Heart,
  Music,
  Plane,
  Mountain,
} from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// Mock data for potential teammates
const mockTeammates = [
  {
    id: 1,
    name: "Alex Rivera",
    username: "alexrivera",
    avatar: "/ai-avatar-professional-male-tech.jpg",
    location: "San Francisco, CA",
    distance: "2 miles",
    bio: "Full-stack developer with a passion for building scalable web apps",
    matchScore: 95,
    skills: ["Frontend Development", "Backend Development", "Cloud Computing"],
    masteredSkills: ["Frontend Development"],
    interests: ["Music", "Travel"],
    stats: { projects: 15, teams: 6, wins: 2 },
  },
  {
    id: 2,
    name: "Jordan Kim",
    username: "jordankim",
    avatar: "/ai-avatar-professional-female-tech.jpg",
    location: "San Francisco, CA",
    distance: "5 miles",
    bio: "AI/ML enthusiast looking to build innovative solutions",
    matchScore: 89,
    skills: ["AI/ML", "Data Science", "Python"],
    masteredSkills: ["AI/ML", "Data Science"],
    interests: ["Gaming", "Fitness"],
    stats: { projects: 22, teams: 10, wins: 4 },
  },
  {
    id: 3,
    name: "Sam Patel",
    username: "sampatel",
    avatar: "/ai-avatar-professional-male-architect.jpg",
    location: "Oakland, CA",
    distance: "12 miles",
    bio: "Product designer who codes. Love creating beautiful UX",
    matchScore: 87,
    skills: ["UI/UX Design", "Frontend Development", "Mobile Development"],
    masteredSkills: ["UI/UX Design"],
    interests: ["Art", "Photography"],
    stats: { projects: 18, teams: 8, wins: 3 },
  },
  {
    id: 4,
    name: "Casey Zhang",
    username: "caseyzhang",
    avatar: "/placeholder.svg?height=80&width=80",
    location: "Berkeley, CA",
    distance: "8 miles",
    bio: "Blockchain developer exploring Web3 and decentralization",
    matchScore: 82,
    skills: ["Blockchain", "Smart Contracts", "Solidity"],
    masteredSkills: ["Blockchain"],
    interests: ["Travel", "Adventure Sports"],
    stats: { projects: 12, teams: 5, wins: 1 },
  },
  {
    id: 5,
    name: "Morgan Lee",
    username: "morganlee",
    avatar: "/placeholder.svg?height=80&width=80",
    location: "San Jose, CA",
    distance: "15 miles",
    bio: "DevOps engineer passionate about automation and CI/CD",
    matchScore: 78,
    skills: ["DevOps", "Cloud Computing", "Docker"],
    masteredSkills: ["DevOps", "Cloud Computing"],
    interests: ["Music", "Cooking"],
    stats: { projects: 20, teams: 9, wins: 2 },
  },
  {
    id: 6,
    name: "Taylor Johnson",
    username: "taylorj",
    avatar: "/placeholder.svg?height=80&width=80",
    location: "Palo Alto, CA",
    distance: "10 miles",
    bio: "Cybersecurity specialist keeping the internet safe",
    matchScore: 75,
    skills: ["Cybersecurity", "Ethical Hacking", "Network Security"],
    masteredSkills: ["Cybersecurity"],
    interests: ["Gaming", "Reading"],
    stats: { projects: 14, teams: 7, wins: 1 },
  },
]

const SKILL_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "UI/UX Design",
  "DevOps",
  "Cloud Computing",
  "AI/ML",
  "Data Science",
  "Blockchain",
  "Cybersecurity",
  "IoT",
]

const INTEREST_OPTIONS = ["Music", "Travel", "Adventure Sports", "Gaming", "Photography", "Reading", "Fitness", "Art"]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [distanceRange, setDistanceRange] = useState([50])
  const [matchScoreMin, setMatchScoreMin] = useState([70])

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const getInterestIcon = (interest: string) => {
    switch (interest) {
      case "Music":
        return <Music className="h-3 w-3" />
      case "Travel":
        return <Plane className="h-3 w-3" />
      case "Adventure Sports":
        return <Mountain className="h-3 w-3" />
      default:
        return <Heart className="h-3 w-3" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Discover <span className="text-primary">Teammates</span>
                </h1>
                <p className="text-muted-foreground mt-1">Find your perfect match for hackathons and projects</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by skills, interests, location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            {showFilters && (
              <aside className="w-80 shrink-0 space-y-4">
                <Card className="glass-card p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Match Score */}
                  <div className="space-y-3">
                    <Label>Minimum Match Score: {matchScoreMin[0]}%</Label>
                    <Slider value={matchScoreMin} onValueChange={setMatchScoreMin} min={0} max={100} step={5} />
                  </div>

                  {/* Distance */}
                  <div className="space-y-3">
                    <Label>Maximum Distance: {distanceRange[0]} miles</Label>
                    <Slider value={distanceRange} onValueChange={setDistanceRange} min={0} max={100} step={5} />
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <Label>Skills</Label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {SKILL_OPTIONS.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <Checkbox
                            id={`skill-${skill}`}
                            checked={selectedSkills.includes(skill)}
                            onCheckedChange={() => toggleSkill(skill)}
                          />
                          <Label htmlFor={`skill-${skill}`} className="text-sm font-normal cursor-pointer">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-3">
                    <Label>Interests</Label>
                    <div className="space-y-2">
                      {INTEREST_OPTIONS.map((interest) => (
                        <div key={interest} className="flex items-center gap-2">
                          <Checkbox
                            id={`interest-${interest}`}
                            checked={selectedInterests.includes(interest)}
                            onCheckedChange={() => toggleInterest(interest)}
                          />
                          <Label htmlFor={`interest-${interest}`} className="text-sm font-normal cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => {
                      setSelectedSkills([])
                      setSelectedInterests([])
                      setDistanceRange([50])
                      setMatchScoreMin([70])
                    }}
                  >
                    Clear All Filters
                  </Button>
                </Card>
              </aside>
            )}

            {/* Results */}
            <div className="flex-1">
              <div className="mb-4 text-sm text-muted-foreground">
                Found {mockTeammates.length} potential teammates matching your criteria
              </div>

              {/* Grid View */}
              {viewMode === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {mockTeammates.map((teammate) => (
                    <Card key={teammate.id} className="glass-card p-6 space-y-4 hover:glow-border transition-all">
                      {/* Match Score Badge */}
                      <div className="flex items-start justify-between">
                        <Link href={`/profile/${teammate.username}`}>
                          <img
                            src={teammate.avatar || "/placeholder.svg"}
                            alt={teammate.name}
                            className="h-16 w-16 rounded-full object-cover border-2 border-border hover:border-primary transition-colors"
                          />
                        </Link>
                        <Badge className="bg-primary/20 text-primary border-primary/40">
                          {teammate.matchScore}% Match
                        </Badge>
                      </div>

                      {/* Profile Info */}
                      <div className="space-y-2">
                        <Link href={`/profile/${teammate.username}`} className="hover:text-primary transition-colors">
                          <h3 className="font-semibold text-lg">{teammate.name}</h3>
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{teammate.location}</span>
                          <span className="text-xs">• {teammate.distance}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{teammate.bio}</p>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {teammate.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs flex items-center gap-1">
                              {teammate.masteredSkills.includes(skill) && (
                                <Star className="h-3 w-3 fill-primary text-primary" />
                              )}
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Interests */}
                      <div className="flex flex-wrap gap-2">
                        {teammate.interests.map((interest) => (
                          <Badge key={interest} variant="outline" className="text-xs flex items-center gap-1">
                            {getInterestIcon(interest)}
                            {interest}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                        <div className="text-center space-y-1">
                          <p className="text-sm font-semibold text-primary">{teammate.stats.projects}</p>
                          <p className="text-xs text-muted-foreground">Projects</p>
                        </div>
                        <div className="text-center space-y-1">
                          <p className="text-sm font-semibold text-primary">{teammate.stats.teams}</p>
                          <p className="text-xs text-muted-foreground">Teams</p>
                        </div>
                        <div className="text-center space-y-1">
                          <p className="text-sm font-semibold text-primary">{teammate.stats.wins}</p>
                          <p className="text-xs text-muted-foreground">Wins</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="flex-1 glow-border" size="sm">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Connect
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* List View */}
              {viewMode === "list" && (
                <div className="space-y-4">
                  {mockTeammates.map((teammate) => (
                    <Card key={teammate.id} className="glass-card p-6 hover:glow-border transition-all">
                      <div className="flex gap-6">
                        <Link href={`/profile/${teammate.username}`}>
                          <img
                            src={teammate.avatar || "/placeholder.svg"}
                            alt={teammate.name}
                            className="h-20 w-20 rounded-full object-cover border-2 border-border hover:border-primary transition-colors"
                          />
                        </Link>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <Link
                                href={`/profile/${teammate.username}`}
                                className="hover:text-primary transition-colors"
                              >
                                <h3 className="font-semibold text-lg">{teammate.name}</h3>
                              </Link>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{teammate.location}</span>
                                <span className="text-xs">• {teammate.distance}</span>
                              </div>
                            </div>
                            <Badge className="bg-primary/20 text-primary border-primary/40">
                              {teammate.matchScore}% Match
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground">{teammate.bio}</p>

                          <div className="flex flex-wrap gap-2">
                            {teammate.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs flex items-center gap-1">
                                {teammate.masteredSkills.includes(skill) && (
                                  <Star className="h-3 w-3 fill-primary text-primary" />
                                )}
                                {skill}
                              </Badge>
                            ))}
                            {teammate.interests.map((interest) => (
                              <Badge key={interest} variant="outline" className="text-xs flex items-center gap-1">
                                {getInterestIcon(interest)}
                                {interest}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-6 text-sm">
                              <span className="text-muted-foreground">
                                <span className="font-semibold text-primary">{teammate.stats.projects}</span> Projects
                              </span>
                              <span className="text-muted-foreground">
                                <span className="font-semibold text-primary">{teammate.stats.teams}</span> Teams
                              </span>
                              <span className="text-muted-foreground">
                                <span className="font-semibold text-primary">{teammate.stats.wins}</span> Wins
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button className="glow-border" size="sm">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Connect
                              </Button>
                              <Button variant="outline" size="sm" className="bg-transparent">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
