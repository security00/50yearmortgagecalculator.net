import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us - 50 Year Mortgage Calculator",
  description: "Learn about our mission to help homebuyers understand the Trump 50 year mortgage proposal and make informed decisions about long-term home financing options.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/about',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/about',
    title: "About Us - 50 Year Mortgage Calculator",
    description: "Learn about our mission to help homebuyers understand the Trump 50 year mortgage proposal and make informed decisions about long-term home financing options.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About 50 Year Mortgage Calculator
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Empowering homebuyers with free tools and information to understand the Trump administration's 50-year mortgage proposal and make confident home financing decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At 50YearMortgageCalculator.net, our mission is to provide homebuyers with accurate, easy-to-use tools and comprehensive information about the Trump administration's proposed 50-year fixed-rate mortgage program. We believe that understanding the long-term financial implications of extended mortgage terms is crucial for making informed homeownership decisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 50 year mortgage represents a significant shift in home financing options, offering lower monthly payments but substantially higher total interest costs. We created this platform to help potential homebuyers, first-time buyers, and families explore how a 50 year mortgage compares to traditional 30-year mortgages and other loan terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our free 50 year mortgage calculator provides instant, accurate calculations showing monthly payments, total interest costs, and detailed amortization schedules. We're committed to transparency, education, and empowering users to make the best financial decisions for their unique situations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Calculations</h3>
                <p className="text-gray-600 text-sm">Our 50 year mortgage calculator uses industry-standard formulas to provide precise monthly payment and interest calculations.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free & No Registration</h3>
                <p className="text-gray-600 text-sm">All our mortgage calculators and comparison tools are completely free to use with no registration or personal information required.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Resources</h3>
                <p className="text-gray-600 text-sm">Comprehensive guides, FAQs, and comparisons help you understand the Trump 50 year mortgage proposal and its implications.</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Created This Tool</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When the Trump administration announced the proposed 50-year fixed-rate mortgage program in November 2025, we recognized an immediate need for accessible, accurate information and calculation tools. The proposal generated significant media attention and public interest, but many potential homebuyers lacked clear resources to understand how a 50 year mortgage would actually impact their finances.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We saw homebuyers searching for "50 year mortgage calculator," "trump 50 year mortgage," and "50 year mortgage rates" without finding comprehensive, user-friendly tools to answer their questions. That's why we built 50YearMortgageCalculator.net—to fill this information gap and provide the mortgage calculation and comparison tools that homebuyers need.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform goes beyond simple calculations. We provide detailed explanations of how 50 year mortgages work, the advantages and disadvantages compared to traditional mortgage terms, real-world examples, and answers to frequently asked questions. Whether you're a first-time homebuyer exploring your options or an experienced homeowner considering refinancing, our tools and resources are designed to help you make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">50 Year Mortgage Calculator</h3>
                    <p className="text-gray-600 text-sm">Calculate monthly payments, total interest, and view detailed amortization schedules for 50-year mortgages with customizable loan amounts, interest rates, and down payments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mortgage Term Comparison Tool</h3>
                    <p className="text-gray-600 text-sm">Compare 15, 20, 30, 40, and 50 year mortgage terms side-by-side to see how different loan lengths affect your monthly payment and total costs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comprehensive FAQ</h3>
                    <p className="text-gray-600 text-sm">Detailed answers to common questions about 50 year mortgages, the Trump proposal, qualification requirements, interest rates, and more.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Educational Content</h3>
                    <p className="text-gray-600 text-sm">In-depth guides explaining how 50 year mortgages work, their pros and cons, and how they compare to traditional mortgage options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Exploring Your Mortgage Options
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our free tools to calculate and compare different mortgage terms for your home purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Try Calculator
              </Link>
              <Link
                href="/comparison"
                className="inline-block bg-blue-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-400 transition-colors shadow-lg border-2 border-white"
              >
                Compare Terms
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
