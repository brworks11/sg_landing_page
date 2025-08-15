export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            Why Choose StarGrove Distribution
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We deliver exceptional value through our expertise, speed, and reliable partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Fast Shipping */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Fast Shipping
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              Quick turnaround from warehouse to customer with efficient logistics and reliable delivery partners.
            </p>
          </div>

          {/* Marketplace Expertise */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Marketplace Expertise
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              Years of experience navigating Amazon, Walmart, and eBay with proven strategies for success.
            </p>
          </div>

          {/* Strong Supplier Network */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Strong Supplier Network
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              Partnerships with leading distributors and brands ensuring access to high-quality products.
            </p>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-secondary-700">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-secondary-700">Order Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">48hr</div>
              <div className="text-secondary-700">Average Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-700">Happy Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 