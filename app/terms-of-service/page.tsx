export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-6xl font-medium text-white mb-16 tracking-tight">Terms of Service</h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            By using StackMates, you agree to these terms. Please read them carefully to understand your rights and
            responsibilities within our network.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">1. User Eligibility</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            You must be at least 13 years old to use StackMates. You are responsible for maintaining the security of
            your account and for all activities that occur under your profile.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">2. Professional Conduct</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            StackMates is a professional environment. Harassment, discrimination, or any form of abusive behavior will
            result in immediate account termination without prior notice.
          </p>
        </div>
      </main>
    </div>
  )
}
