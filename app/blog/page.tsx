import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function BlogPage() {
  const posts = [
    {
      title: "The Architecture of High-Performing Teams",
      excerpt: "How cognitive diversity drives faster development cycles in competitive environments.",
      image: "/professional-architectural-office-minimalist.jpg",
      category: "Engineering",
      date: "Feb 12, 2026",
    },
    {
      title: "Maximizing Output at 48-Hour Hackathons",
      excerpt: "Proven strategies from 10-time winners on rapid prototyping and team management.",
      image: "/high-tech-computer-workstation-dark-mode.jpg",
      category: "Strategy",
      date: "Feb 08, 2026",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />

      <main className="relative z-10 container mx-auto px-6 py-24">
        <header className="mb-20">
          <h1 className="text-6xl font-medium text-white mb-6">Perspectives.</h1>
          <p className="text-xl text-zinc-500">Insights on engineering, collaboration, and the future of work.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-3xl bg-zinc-900">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="text-xs uppercase tracking-tighter border-zinc-800 text-zinc-500">
                    {post.category}
                  </Badge>
                  <span className="text-zinc-600 text-xs">{post.date}</span>
                </div>
                <h2 className="text-3xl text-white font-medium group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed max-w-lg">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
