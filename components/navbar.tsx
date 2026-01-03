"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-foreground rounded-sm flex items-center justify-center">
            <Zap className="h-5 w-5 text-background fill-background" />
          </div>
          <span className="text-xl font-medium tracking-tight uppercase">StackMates</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {["Discover", "Projects", "Intelligence", "Network"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium hover:opacity-70 transition-opacity">
            Sign In
          </Link>
          <Button className="rounded-full px-6 h-10 bg-foreground text-background hover:bg-foreground/90">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden rounded-lg p-2 text-foreground hover:bg-accent">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 py-4 space-y-3">
          <Link
            href="/discover"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
          >
            Discover Teams
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/intelligence"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
          >
            Intelligence
          </Link>
          <Link
            href="/network"
            className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
          >
            Network
          </Link>
          <div className="pt-3 space-y-2">
            <Button variant="ghost" asChild className="w-full">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="w-full glow-border">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
