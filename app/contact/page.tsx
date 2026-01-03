import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-800/10 via-black to-black" />

      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-7xl font-medium text-white mb-8 tracking-tighter">Get in touch.</h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-12 max-w-lg">
              Whether you're looking to partner, hire, or just say hello—we're here to help you scale your potential.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Email</div>
                  <div className="text-white text-lg">hello@stackmates.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Global HQ</div>
                  <div className="text-white text-lg">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800/50 p-12 rounded-3xl backdrop-blur-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-zinc-500 text-xs uppercase tracking-widest">First Name</label>
                  <Input className="bg-black/50 border-zinc-800 focus:border-white transition-colors h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-500 text-xs uppercase tracking-widest">Last Name</label>
                  <Input className="bg-black/50 border-zinc-800 focus:border-white transition-colors h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-zinc-500 text-xs uppercase tracking-widest">Email Address</label>
                <Input className="bg-black/50 border-zinc-800 focus:border-white transition-colors h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-zinc-500 text-xs uppercase tracking-widest">Message</label>
                <Textarea className="bg-black/50 border-zinc-800 focus:border-white transition-colors min-h-[160px]" />
              </div>
              <Button className="w-full bg-white text-black hover:bg-zinc-200 h-12 text-lg font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
