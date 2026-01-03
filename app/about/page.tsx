import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />

      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-8 border-zinc-700 text-zinc-400">
            Our Story
          </Badge>
          <h1 className="text-7xl font-medium text-white mb-12 tracking-tight">
            The intersection of <span className="text-zinc-500">talent</span> and{" "}
            <span className="text-zinc-500">opportunity</span>.
          </h1>

          <div className="space-y-8 text-xl text-zinc-400 leading-relaxed">
            <p>
              StackMates began with a simple observation: the world's greatest problems aren't solved by individuals,
              but by perfectly synchronized teams.
            </p>
            <p>
              We built this platform to eliminate the friction of finding elite collaborators. By combining deep
              behavioral analysis with professional networking, we help engineers move from ideation to execution in
              record time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 mt-24">
            <div>
              <div className="text-4xl text-white font-medium mb-2">120k+</div>
              <div className="text-zinc-500 uppercase tracking-widest text-xs">Engineers Connected</div>
            </div>
            <div>
              <div className="text-4xl text-white font-medium mb-2">4,200</div>
              <div className="text-zinc-500 uppercase tracking-widest text-xs">Hackathons Won</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
