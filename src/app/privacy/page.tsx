import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ScreensScore Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-16">
      <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: January 2025</p>
      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
          <ul className="list-disc ml-5 space-y-1.5">
            <li>Review content and ratings you voluntarily submit</li>
            <li>A hashed (anonymized) version of your IP address, used only to prevent spam</li>
            <li>Usage data through cookies for advertising and analytics (see Section 3)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc ml-5 space-y-1.5">
            <li>To display your reviews on the relevant movie or TV show page</li>
            <li>To prevent spam and duplicate submissions</li>
            <li>To improve our services via analytics</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">3. Cookies & Advertising</h2>
          <p>
            ScreensScore uses Google AdSense to display advertisements. Google may use cookies to serve
            personalized ads based on your browsing history. You can opt out at{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
              Google Ads Settings
            </a>.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">4. Data Retention</h2>
          <p>Reviews are stored indefinitely unless you request removal. Hashed IPs are never linked to personal data.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">5. Third-Party Services</h2>
          <ul className="list-disc ml-5 space-y-1.5">
            <li><strong className="text-white">TMDB</strong> — movie data</li>
            <li><strong className="text-white">Google AdSense</strong> — advertising</li>
            <li><strong className="text-white">Vercel</strong> — hosting</li>
            <li><strong className="text-white">Supabase</strong> — database</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">6. Contact</h2>
          <p>
            For privacy inquiries:{' '}
            <a href="mailto:privacy@screensscore.com" className="text-red-400 hover:text-red-300">
              privacy@screensscore.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
