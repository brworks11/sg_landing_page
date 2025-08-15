export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            About StarGrove Distribution
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Connecting suppliers with retailers through reliable wholesale distribution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">
              Our Story
            </h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              StarGrove Distribution is a trusted wholesale partner specializing in collectibles, toys, and pop culture merchandise. Founded with the mission to connect suppliers with both small and large retailers, we streamline product sourcing and distribution to major online marketplaces.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              Our team brings years of experience in the collectibles and toy industry, understanding the unique challenges that suppliers and retailers face in today's competitive marketplace environment.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-secondary-700 italic leading-relaxed">
                "To empower sellers with high-quality products, reliable logistics, and unmatched marketplace expertise."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-secondary-800 mb-2">Quality Assurance</h4>
            <p className="text-secondary-600">
              We maintain strict quality standards for all products in our inventory.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-secondary-800 mb-2">Partnership Focus</h4>
            <p className="text-secondary-600">
              Building long-term relationships with suppliers and retailers alike.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-secondary-800 mb-2">Innovation</h4>
            <p className="text-secondary-600">
              Continuously improving our processes and marketplace strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 