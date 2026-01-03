import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, Users, Code, Sparkles, ArrowUpRight, Activity } from "lucide-react"

export default function IntelligencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered Insights
            </div>
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight leading-tight">
              Intelligence That
              <br />
              Drives Decisions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leverage real-time data analysis and predictive algorithms to make informed choices about your career,
              team composition, and project strategy.
            </p>
          </div>
        </section>

        {/* Market Insights Grid */}
        <section className="container mx-auto px-4 py-16 space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-serif">Market Intelligence</h2>
              <p className="text-muted-foreground mt-2">Real-time trends across the developer ecosystem</p>
            </div>
            <Button variant="ghost" className="gap-2">
              View Full Report <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Trending Skills */}
            <Card className="apple-glass p-8 space-y-6">
              <div className="flex items-center justify-between">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="text-xs font-medium text-muted-foreground tracking-wider">TRENDING</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2">Top Skills</h3>
                <p className="text-sm text-muted-foreground">Most in-demand this quarter</p>
              </div>
              <div className="space-y-3">
                {[
                  { skill: "TypeScript", growth: "+34%", demand: 92 },
                  { skill: "React", growth: "+28%", demand: 88 },
                  { skill: "Python", growth: "+41%", demand: 85 },
                  { skill: "AWS", growth: "+19%", demand: 78 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-primary text-xs font-medium">{item.growth}</span>
                    </div>
                    <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000"
                        style={{ width: `${item.demand}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team Formation Patterns */}
            <Card className="apple-glass p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Users className="h-8 w-8 text-primary" />
                <span className="text-xs font-medium text-muted-foreground tracking-wider">PATTERNS</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2">Team Dynamics</h3>
                <p className="text-sm text-muted-foreground">Successful team compositions</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      3-5
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Optimal Team Size</p>
                      <p className="text-xs text-muted-foreground">For hackathon projects</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      2:1
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Dev to Designer Ratio</p>
                      <p className="text-xs text-muted-foreground">Highest success rate</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      78%
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cross-Timezone Success</p>
                      <p className="text-xs text-muted-foreground">With async tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Technology Stack Analysis */}
            <Card className="apple-glass p-8 space-y-6">
              <div className="flex items-center justify-between">
                <Code className="h-8 w-8 text-primary" />
                <span className="text-xs font-medium text-muted-foreground tracking-wider">STACKS</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2">Tech Stacks</h3>
                <p className="text-sm text-muted-foreground">Winning combinations</p>
              </div>
              <div className="space-y-3">
                {[
                  { stack: "Next.js + Supabase", projects: 1243, win: "High" },
                  { stack: "React + Firebase", projects: 987, win: "High" },
                  { stack: "Vue + Express", projects: 654, win: "Med" },
                  { stack: "Python + FastAPI", projects: 543, win: "Med" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.stack}</p>
                      <p className="text-xs text-muted-foreground">{item.projects} projects</p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.win === "High" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.win} Win Rate
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Personalized Insights */}
        <section className="container mx-auto px-4 py-16 space-y-8">
          <div>
            <h2 className="text-3xl font-serif">Your Insights</h2>
            <p className="text-muted-foreground mt-2">Personalized recommendations based on your profile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Career Trajectory */}
            <Card className="apple-glass p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif">Career Trajectory</h3>
                  <p className="text-sm text-muted-foreground">Based on your skills and activity</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-sm font-medium mb-2">Skill Gap Analysis</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Adding <span className="text-foreground font-medium">Docker</span> and{" "}
                    <span className="text-foreground font-medium">Kubernetes</span> would increase your match rate by
                    approximately 34% for senior developer roles.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-sm font-medium mb-2">Recommended Learning Path</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Docker Fundamentals", "K8s Basics", "CI/CD Pipelines", "Microservices"].map((course, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Team Recommendations */}
            <Card className="apple-glass p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif">Smart Recommendations</h3>
                  <p className="text-sm text-muted-foreground">AI-powered matches</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "High-Compatibility Matches",
                    desc: "12 developers with complementary skills in your area",
                    action: "View Matches",
                  },
                  {
                    title: "Trending Hackathons",
                    desc: "3 upcoming events aligned with your tech stack",
                    action: "Explore Events",
                  },
                  {
                    title: "Project Opportunities",
                    desc: "8 teams looking for your expertise",
                    action: "Browse Teams",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-muted/20 border border-border/40 hover:border-primary/30 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="gap-2 text-xs group-hover:text-primary">
                        {item.action}
                        <ArrowUpRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Predictive Analytics */}
        <section className="container mx-auto px-4 py-16 mb-16">
          <Card className="apple-glass p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Predictive Analytics
                </div>
                <h2 className="text-4xl font-serif">Project Success Forecasting</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our machine learning models analyze thousands of completed projects to predict success probability
                  based on team composition, tech stack, and collaboration patterns.
                </p>
                <Button className="rounded-full gap-2">
                  Analyze Your Team <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  { metric: "Team Compatibility", score: 94, trend: "up" },
                  { metric: "Tech Stack Viability", score: 87, trend: "up" },
                  { metric: "Timeline Feasibility", score: 76, trend: "neutral" },
                  { metric: "Resource Availability", score: 82, trend: "up" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/40">
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">{item.metric}</p>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-serif text-primary">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
