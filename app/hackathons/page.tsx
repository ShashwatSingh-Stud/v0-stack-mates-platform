import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users } from "lucide-react"

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

      <main className="relative z-10 container mx-auto px-6 py-12">
        <header className="mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400/30">
            Upcoming Challenges
          </Badge>
          <h1 className="text-5xl font-medium tracking-tight text-white mb-6">Global Hackathons</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Join the world's most innovative engineering competitions. Find teams, build solutions, and win prizes.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-xl hover:border-blue-500/50 transition-all group overflow-hidden"
            >
              <div className="h-48 w-full bg-gradient-to-br from-blue-600/20 to-indigo-900/40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-blue-400/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Remote</Badge>
                  <span className="text-blue-400 font-mono text-sm">$50k Prize</span>
                </div>
                <CardTitle className="text-2xl text-white">EthGlobal 202{i}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-zinc-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 12 - Oct 14, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>1,200 Participants</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-black hover:bg-zinc-200">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
