import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Globe, ArrowRight, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden subtle-grid">
          <div className="absolute inset-0 hero-gradient" />

          <div className="container relative z-10 mx-auto px-4 text-center space-y-12">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
                StackMates &times; Innovation
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.9] text-balance">
                Creation Without
                <br />
                Limitation
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              The professional ecosystem for architects of the future. Find your perfect team, build revolutionary
              products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full transition-transform active:scale-95">
                Join the Network
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="h-14 px-10 text-lg rounded-full text-muted-foreground hover:text-foreground"
              >
                Explore Talent <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to reveal</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </section>

        <section className="container mx-auto px-4 py-32 space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
            <Card className="md:col-span-8 md:row-span-2 apple-glass overflow-hidden group relative">
              <div className="p-12 flex flex-col h-full relative z-10">
                <div className="space-y-4 max-w-md">
                  <h3 className="text-4xl font-serif">Algorithmic Harmony</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our proprietary matching engine analyzes skill gaps, professional trajectory, and cultural alignment
                    to surface your ideal collaborators.
                  </p>
                </div>
                <div className="mt-auto pt-12 relative flex-1 min-h-[200px] flex items-end">
                  {/* Enhanced Grid Visual with animated bars */}
                  <div className="absolute inset-0 subtle-grid opacity-10" />
                  <div className="relative w-full flex gap-3 h-40 items-end">
                    {[
                      { height: 65, label: "React", delay: 0 },
                      { height: 85, label: "Node", delay: 100 },
                      { height: 45, label: "Python", delay: 200 },
                      { height: 95, label: "TypeScript", delay: 300 },
                      { height: 55, label: "Docker", delay: 400 },
                      { height: 75, label: "AWS", delay: 500 },
                      { height: 40, label: "GraphQL", delay: 600 },
                      { height: 90, label: "PostgreSQL", delay: 700 },
                    ].map((item, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group/bar">
                        <div
                          className="w-full rounded-lg bg-gradient-to-t from-primary/20 to-primary/5 border border-primary/10 group-hover/bar:from-primary/30 group-hover/bar:to-primary/10 transition-all duration-700 relative overflow-hidden"
                          style={{
                            height: `${item.height}%`,
                            animationDelay: `${item.delay}ms`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500" />
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-4 md:row-span-2 apple-glass p-12 flex flex-col justify-between group overflow-hidden relative">
              <div className="space-y-4 relative z-10">
                <Globe className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                <h3 className="text-3xl font-serif">Global Locality</h3>
                <p className="text-muted-foreground">
                  Connect within your city or synchronize across continents. Our platform bridges the physical and
                  digital divide.
                </p>
              </div>
              <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 border border-border/50 mt-8 relative overflow-hidden group-hover:border-primary/20 transition-colors duration-700">
                {/* Animated globe with connection points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central globe representation */}
                  <div className="relative h-48 w-48">
                    {/* Globe circles */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-4 rounded-full border border-primary/15" />
                    <div className="absolute inset-8 rounded-full border border-primary/10" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    {/* Connection nodes at different positions */}
                    {[
                      { top: '20%', left: '15%', delay: 0 },
                      { top: '35%', right: '20%', delay: 500 },
                      { bottom: '25%', left: '25%', delay: 1000 },
                      { bottom: '30%', right: '15%', delay: 1500 },
                      { top: '50%', left: '10%', delay: 2000 },
                    ].map((pos, i) => (
                      <div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-primary/60 animate-pulse"
                        style={{
                          ...pos,
                          animationDelay: `${pos.delay}ms`,
                          animationDuration: '2s',
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: `${pos.delay}ms` }} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Geographic labels */}
                <div className="absolute top-4 left-4 text-[10px] font-medium text-muted-foreground tracking-wider">
                  NORTH AMERICA
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-medium text-muted-foreground tracking-wider">
                  EUROPE
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] font-medium text-muted-foreground tracking-wider">
                  SOUTH AMERICA
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] font-medium text-muted-foreground tracking-wider">
                  ASIA PACIFIC
                </div>
              </div>
            </Card>

            {/* Professional Profiles - Wide Card */}
            <Card className="md:col-span-12 md:row-span-1 apple-glass p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-serif">Verified Excellence</h3>
                <p className="text-muted-foreground">
                  Showcase your professional legacy with GitHub-integrated verified skills and performance history.
                </p>
              </div>
              <div className="flex -space-x-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-16 w-16 rounded-full border-4 border-background bg-muted overflow-hidden">
                    <img src={`/profile-${i}.jpg?key=p4x41&height=64&width=64&query=profile-${i}`} alt="User" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="py-40 border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-12">Your next legacy starts here.</h2>
            <Button size="lg" className="h-16 px-12 text-xl rounded-full transition-all hover:px-16">
              Get Started
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
