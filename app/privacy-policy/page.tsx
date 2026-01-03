export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-6xl font-medium text-white mb-16 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            Last Updated: January 3, 2026. This policy outlines how StackMates collects, uses, and protects your
            technical and professional data.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">1. Data Collection</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            We collect information that you provide directly to us, including your name, email, GitHub profile, and
            technical skill set. We also collect metadata about your interactions with the platform to improve our
            matching algorithms.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">2. Data Usage</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            Your data is primarily used to facilitate professional connections and team matching. We use anonymized
            aggregate data to analyze industry trends and improve our "Intelligence" features.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">3. Security</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            We implement high-end security protocols to ensure your data is protected. All communications are encrypted,
            and we maintain strict access controls on our database infrastructure.
          </p>
        </div>
      </main>
    </div>
  )
}
