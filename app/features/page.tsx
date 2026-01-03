import { Badge } from "@/components/ui/badge"
import { Brain, Network, Zap, Shield, Globe, Terminal } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI Teammate Matching",
      desc: "Our neural network analyzes your coding patterns to find the perfect synergy.",
      color: "from-purple-500",
    },
    {
      icon: Network,
      title: "Global Talent Graph",
      desc: "Connect with engineers from top institutions and tech hubs worldwide.",
      color: "from-blue-500",
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      desc: "Instant collaboration tools built for the speed of hackathons.",
      color: "from-amber-500",
    },
    {
      icon: Terminal,
      title: "Project Scaffolding",
      desc: "Start with best practices. Auto-generate boilerplate for popular stacks.",
      color: "from-emerald-500",
    },
    {
      icon: Shield,
      title: "IP Protection",
      desc: "Secure your ideas with our built-in NDAs and code signature verification.",
      color: "from-red-500",
    },
    {
      icon: Globe,
      title: "Locality First",
      desc: "Find in-person teammates within your city for physical hackathons.",
      color: "from-cyan-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />

      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center mb-24">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-4 py-1">The Platform</Badge>
          <h1 className="text-6xl font-medium text-white mb-6 tracking-tight">Engineered for Excellence.</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            StackMates is more than a team finder. It's an end-to-end ecosystem for high-stakes competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800/50 rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-black p-12 hover:bg-zinc-900/50 transition-colors group">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} to-transparent opacity-20 mb-8 group-hover:opacity-40 transition-opacity`}
              />
              <f.icon className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl text-white font-medium mb-4">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
