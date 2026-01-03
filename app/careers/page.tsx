import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const openings = [
    { title: "Senior Product Designer", team: "Experience", location: "SF / Remote" },
    { title: "Backend Infrastructure Lead", team: "Scale", location: "Global Remote" },
    { title: "AI Research Engineer", team: "Intelligence", location: "NYC / London" },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black" />

      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <Badge className="bg-white text-black mb-8 px-4 py-1">Hiring</Badge>
          <h1 className="text-7xl font-medium text-white mb-8 tracking-tighter">Join the mission to sync the world.</h1>
          <p className="text-2xl text-zinc-500 leading-relaxed">
            We're looking for architects, thinkers, and builders to help us define the future of collaborative
            engineering.
          </p>
        </div>

        <div className="space-y-px bg-zinc-800/50 border border-zinc-800/50 rounded-3xl overflow-hidden">
          {openings.map((job, i) => (
            <div
              key={i}
              className="bg-black p-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl text-white font-medium mb-2 group-hover:translate-x-1 transition-transform">
                  {job.title}
                </h3>
                <div className="flex gap-4 text-zinc-500 text-sm uppercase tracking-widest">
                  <span>{job.team}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-zinc-800 text-white hover:bg-white hover:text-black transition-all rounded-full px-8 bg-transparent"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
