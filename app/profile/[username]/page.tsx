import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Calendar,
  Briefcase,
  GraduationCap,
  Settings,
  MessageSquare,
  UserPlus,
  Star,
  Music,
  Plane,
  Mountain,
} from "lucide-react"

// Mock data - will be replaced with real data from Supabase
const mockUser = {
  name: "Sarah Chen",
  username: "sarahchen",
  bio: "Full-stack developer passionate about AI/ML and building products that make a difference. Always looking for exciting hackathon teams and collaborative projects.",
  location: "San Francisco, CA",
  email: "sarah@example.com",
  phone: "+1 (555) 123-4567",
  coverImage: "/abstract-tech-pattern.png",
  avatar: "/professional-woman-developer.png",
  linkedinUrl: "linkedin.com/in/sarahchen",
  githubUrl: "github.com/sarahchen",
  education: [
    {
      school: "Stanford University",
      degree: "B.S. Computer Science",
      years: "2019 - 2023",
      gpa: "3.9",
    },
  ],
  experience: [
    {
      company: "Tech Startup Inc",
      role: "Full-Stack Developer",
      period: "2023 - Present",
      description: "Building scalable web applications with React and Node.js",
    },
    {
      company: "Innovation Labs",
      role: "Software Engineer Intern",
      period: "Summer 2022",
      description: "Developed ML models for predictive analytics",
    },
  ],
  skills: [
    { name: "Frontend Development", proficiency: 90, mastered: true },
    { name: "Backend Development", proficiency: 85, mastered: true },
    { name: "AI/ML", proficiency: 75, mastered: false },
    { name: "Cloud Computing", proficiency: 80, mastered: true },
    { name: "Mobile Development", proficiency: 65, mastered: false },
    { name: "UI/UX Design", proficiency: 70, mastered: false },
  ],
  interests: ["Music", "Travel", "Adventure Sports", "Photography"],
  stats: {
    projectsCompleted: 12,
    teamsJoined: 8,
    hackathonsWon: 3,
  },
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const isOwnProfile = true // Will be determined by auth

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img src={mockUser.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Summary */}
            <div className="lg:col-span-1 space-y-6">
              {/* Avatar and Basic Info */}
              <Card className="glass-card p-6 space-y-4">
                <div className="relative -mt-20 mb-4">
                  <img
                    src={mockUser.avatar || "/placeholder.svg"}
                    alt={mockUser.name}
                    className="h-32 w-32 rounded-full border-4 border-card object-cover"
                  />
                  <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-success border-2 border-card" />
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">{mockUser.name}</h1>
                  <p className="text-sm text-muted-foreground">@{mockUser.username}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{mockUser.bio}</p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {isOwnProfile ? (
                    <Button className="flex-1 bg-transparent" variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button className="flex-1 glow-border">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-3 border-t border-border">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{mockUser.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{mockUser.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{mockUser.phone}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={`https://${mockUser.linkedinUrl}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={`https://${mockUser.githubUrl}`} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Stats */}
              <Card className="glass-card p-6 space-y-4">
                <h3 className="font-semibold">Achievements</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center space-y-1">
                    <p className="text-2xl font-bold text-primary">{mockUser.stats.projectsCompleted}</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-2xl font-bold text-primary">{mockUser.stats.teamsJoined}</p>
                    <p className="text-xs text-muted-foreground">Teams</p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-2xl font-bold text-primary">{mockUser.stats.hackathonsWon}</p>
                    <p className="text-xs text-muted-foreground">Wins</p>
                  </div>
                </div>
              </Card>

              {/* Interests */}
              <Card className="glass-card p-6 space-y-4">
                <h3 className="font-semibold">Vibes & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {mockUser.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="flex items-center gap-2">
                      {interest === "Music" && <Music className="h-3 w-3" />}
                      {interest === "Travel" && <Plane className="h-3 w-3" />}
                      {interest === "Adventure Sports" && <Mountain className="h-3 w-3" />}
                      {interest}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Detailed Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Skills */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Skills & Expertise</h2>
                  {isOwnProfile && (
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  )}
                </div>
                <div className="space-y-4">
                  {mockUser.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          {skill.mastered && (
                            <Badge variant="outline" className="text-xs border-primary text-primary">
                              <Star className="h-3 w-3 mr-1 fill-primary" />
                              Mastered
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Experience */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Work Experience</h2>
                  {isOwnProfile && (
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  )}
                </div>
                <div className="space-y-6">
                  {mockUser.experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-semibold">{exp.role}</h3>
                        <p className="text-sm text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </p>
                        <p className="text-sm text-muted-foreground pt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Education */}
              <Card className="glass-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Education</h2>
                  {isOwnProfile && (
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  )}
                </div>
                <div className="space-y-6">
                  {mockUser.education.map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-semibold">{edu.school}</h3>
                        <p className="text-sm text-foreground">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {edu.years}
                        </p>
                        {edu.gpa && <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
                      </div>
                    </div>
                  ))}
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
