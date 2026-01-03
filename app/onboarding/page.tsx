"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Check, ChevronLeft, ChevronRight, Upload, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const STEPS = [
  { id: 1, name: "Basic Info", description: "Let's start with the basics" },
  { id: 2, name: "Profile Details", description: "Tell us about yourself" },
  { id: 3, name: "Skills & Expertise", description: "What are you great at?" },
  { id: 4, name: "Experience", description: "Your professional journey" },
  { id: 5, name: "Vibes & Interests", description: "What makes you, you?" },
]

const SKILLS = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "UI/UX Design",
  "DevOps",
  "Cloud Computing",
  "AI/ML",
  "Data Science",
  "Blockchain",
  "Cybersecurity",
  "IoT",
  "Game Development",
  "Ethical Hacking",
  "Prompt Engineering",
]

const INTERESTS = [
  "Music",
  "Travel",
  "Adventure Sports",
  "Gaming",
  "Photography",
  "Reading",
  "Fitness",
  "Cooking",
  "Art",
  "Movies",
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    education: "",
    major: "",
    graduationYear: "",
    skills: [] as { name: string; proficiency: number }[],
    workExperience: [] as { company: string; role: string; years: string }[],
    interests: [] as string[],
    linkedinUrl: "",
    githubUrl: "",
  })

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkillToggle = (skill: string) => {
    const exists = formData.skills.find((s) => s.name === skill)
    if (exists) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((s) => s.name !== skill),
      })
    } else {
      setFormData({
        ...formData,
        skills: [...formData.skills, { name: skill, proficiency: 50 }],
      })
    }
  }

  const handleInterestToggle = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== interest),
      })
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                          currentStep >= step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.id ? <Check className="h-5 w-5" /> : <span>{step.id}</span>}
                      </div>
                      <div className="mt-2 text-center hidden sm:block">
                        <p
                          className={`text-sm font-medium ${
                            currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {step.name}
                        </p>
                      </div>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={`h-0.5 flex-1 mx-2 transition-colors ${
                          currentStep > step.id ? "bg-primary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <Card className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{STEPS[currentStep - 1].name}</h2>
                <p className="text-muted-foreground">{STEPS[currentStep - 1].description}</p>
              </div>

              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (City) *</Label>
                    <Input
                      id="location"
                      placeholder="San Francisco, CA"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Profile Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <Button variant="outline">Upload Photo</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself, your passion for tech, and what you're looking for..."
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">University/College</Label>
                    <Input
                      id="education"
                      placeholder="Stanford University"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="major">Major/Field of Study</Label>
                      <Input
                        id="major"
                        placeholder="Computer Science"
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Graduation Year</Label>
                      <Input
                        id="year"
                        placeholder="2024"
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Skills */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Select all skills that apply to you. You can adjust proficiency levels later.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SKILLS.map((skill) => {
                      const isSelected = formData.skills.some((s) => s.name === skill)
                      return (
                        <button
                          key={skill}
                          onClick={() => handleSkillToggle(skill)}
                          className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border hover:border-primary/40 bg-card"
                          }`}
                        >
                          <span className="text-sm font-medium">{skill}</span>
                          {isSelected && <Check className="h-4 w-4 text-primary" />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Experience */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="Tech Corp" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role/Position</Label>
                    <Input id="role" placeholder="Software Engineer Intern" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="years">Years of Experience</Label>
                    <Input id="years" placeholder="1-2 years" />
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Another Position
                  </Button>
                  <div className="pt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="linkedin"
                            placeholder="linkedin.com/in/username"
                            className="pl-10"
                            value={formData.linkedinUrl}
                            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                          />
                        </div>
                        <Button variant="outline">Verify</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Profile</Label>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="github"
                            placeholder="github.com/username"
                            className="pl-10"
                            value={formData.githubUrl}
                            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                          />
                        </div>
                        <Button variant="outline">Verify</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Interests */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Select your interests to find teammates with compatible vibes and personalities.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {INTERESTS.map((interest) => {
                      const isSelected = formData.interests.includes(interest)
                      return (
                        <button
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`flex items-center justify-center p-4 rounded-lg border-2 transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border hover:border-primary/40 bg-card"
                          }`}
                        >
                          <span className="text-sm font-medium">{interest}</span>
                        </button>
                      )
                    })}
                  </div>
                  <div className="pt-4 p-4 rounded-lg bg-accent/50 border border-border">
                    <p className="text-sm text-muted-foreground">
                      By completing this form, you agree to our{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6">
                <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                {currentStep < STEPS.length ? (
                  <Button onClick={handleNext}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="glow-border">Complete Profile</Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
