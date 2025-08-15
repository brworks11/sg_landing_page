'use client'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-800 mb-6">
              Your Trusted
              <span className="text-primary-600 block">Wholesale Partner</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Wholesale distributor for collectibles, toys, and marketplace-ready products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Contact Us
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                {/* Collectibles Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-800 text-center">Collectibles</h3>
                </div>

                {/* Toys Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-800 text-center">Toys</h3>
                </div>

                {/* Pop Culture Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary-400 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-800 text-center">Pop Culture</h3>
                </div>

                {/* Merchandise Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary-300 rounded-lg mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-secondary-800 text-center">Merchandise</h3>
                </div>
              </div>
              
              {/* Marketplace logos */}
              <div className="mt-8 pt-8 border-t border-primary-200">
                <p className="text-secondary-600 text-center mb-4">Available on major marketplaces</p>
                <div className="flex justify-center space-x-6">
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <span className="font-semibold text-secondary-700">Amazon</span>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <span className="font-semibold text-secondary-700">Walmart</span>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <span className="font-semibold text-secondary-700">eBay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 