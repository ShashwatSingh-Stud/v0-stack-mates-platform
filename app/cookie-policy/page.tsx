export default function CookiePage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-6xl font-medium text-white mb-16 tracking-tight">Cookie Policy</h1>
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            StackMates uses cookies to enhance your experience, analyze our traffic, and provide secure authentication
            sessions.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">1. Essential Cookies</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            These cookies are necessary for the website to function and cannot be switched off. They are usually only
            set in response to actions made by you, such as logging in or filling in forms.
          </p>

          <h2 className="text-2xl text-white font-medium mt-16 mb-6">2. Analytics Cookies</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            We use these cookies to count visits and traffic sources so we can measure and improve the performance of
            our site. They help us know which pages are the most and least popular.
          </p>
        </div>
      </main>
    </div>
  )
}
