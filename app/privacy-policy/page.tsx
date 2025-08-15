import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <span className="text-xl font-bold text-secondary-800">StarGrove Distribution</span>
            </Link>
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-secondary-800 mb-8">Privacy Policy</h1>
          
          <p className="text-secondary-600 mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">1. Information We Collect</h2>
              <p className="text-secondary-600 mb-4">
                StarGrove Distribution ("we," "our," or "us") collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Request wholesale pricing or information</li>
                <li>Sign up for our newsletter or updates</li>
                <li>Engage with our customer service team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-secondary-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Provide and improve our wholesale distribution services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant business updates and marketing communications</li>
                <li>Process orders and manage our business relationships</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">3. Information Sharing</h2>
              <p className="text-secondary-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">4. Data Security</h2>
              <p className="text-secondary-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">5. Your Rights</h2>
              <p className="text-secondary-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we process your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">6. Contact Us</h2>
              <p className="text-secondary-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <p className="text-secondary-600">
                  <strong>Email:</strong> contact@stargrovedistribution.com<br />
                  <strong>Address:</strong> 9925 SW 40th St Unit 15, Miami, FL 33165
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 