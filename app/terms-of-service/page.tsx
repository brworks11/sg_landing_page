import Link from 'next/link'

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-secondary-800 mb-8">Terms of Service</h1>
          
          <p className="text-secondary-600 mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-secondary-600 mb-4">
                By accessing and using the StarGrove Distribution website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">2. Services Description</h2>
              <p className="text-secondary-600 mb-4">
                StarGrove Distribution provides wholesale distribution services for collectibles, toys, and pop culture merchandise, including:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Marketplace sales on Amazon, Walmart, and eBay</li>
                <li>Wholesale partnerships and bulk purchasing options</li>
                <li>Inventory and logistics management</li>
                <li>Order fulfillment and shipping services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">3. User Responsibilities</h2>
              <p className="text-secondary-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">4. Payment Terms</h2>
              <p className="text-secondary-600 mb-4">
                Payment terms for wholesale orders are subject to individual agreements. All prices are subject to change without notice. Payment is due according to the terms specified in your wholesale agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">5. Shipping and Delivery</h2>
              <p className="text-secondary-600 mb-4">
                We strive to provide fast and reliable shipping. Delivery times may vary based on location and shipping method. Risk of loss and title for items pass to you upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">6. Returns and Refunds</h2>
              <p className="text-secondary-600 mb-4">
                Return policies are subject to individual wholesale agreements. Damaged or defective items may be returned within the timeframe specified in your agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-secondary-600 mb-4">
                StarGrove Distribution shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">8. Privacy Policy</h2>
              <p className="text-secondary-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">9. Changes to Terms</h2>
              <p className="text-secondary-600 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-800 mb-4">10. Contact Information</h2>
              <p className="text-secondary-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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