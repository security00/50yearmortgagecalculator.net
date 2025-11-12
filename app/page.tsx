import type { Metadata } from 'next';
import MortgageCalculator from './components/MortgageCalculator';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="website" />
      <StructuredData type="calculator" />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                50 Year Mortgage Calculator
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Use our free 50 year mortgage calculator to calculate your monthly payments and total costs for the Trump administration's proposed 50-year fixed-rate mortgage program. Compare 50 year mortgage rates with traditional 30-year loans to make informed homeownership decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <div className="text-sm text-blue-100">Free Calculator</div>
                  <div className="text-lg font-bold">No Registration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <div className="text-sm text-blue-100">Instant Results</div>
                  <div className="text-lg font-bold">Real-Time Calculations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                  <div className="text-sm text-blue-100">Detailed Analysis</div>
                  <div className="text-lg font-bold">Amortization Schedule</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free 50 Year Mortgage Calculator</h2>
              <p className="text-lg text-gray-600">
                Our 50 year mortgage calculator helps you instantly calculate monthly payments, total interest costs, and view detailed amortization schedules for Trump's proposed 50-year mortgage program. Simply enter your home price, down payment, and interest rate to get started.
              </p>
            </div>
            <MortgageCalculator />
          </div>
        </section>

        {/* Trump Proposal Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Understanding the Trump 50-Year Mortgage Proposal
              </h2>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a 50 Year Mortgage?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A 50 year mortgage is an extended-term home loan that allows borrowers to spread their mortgage payments over 50 years instead of the traditional 30-year mortgage term. The Trump administration has proposed this 50-year fixed-rate mortgage program to make homeownership more accessible by significantly reducing monthly payment amounts. This innovative mortgage option aims to help first-time homebuyers and families struggling with housing affordability in today's challenging real estate market.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a 50 year mortgage calculator, you can see that extending the loan term from 30 to 50 years can reduce your monthly mortgage payment by approximately $119 per month on a $300,000 home loan. However, it's crucial to understand that while the 50 year mortgage offers lower monthly payments, the total interest paid over the life of the loan increases substantially, potentially adding hundreds of thousands of dollars in additional interest costs compared to a traditional 30-year mortgage.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Advantages</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Lower monthly mortgage payments make homeownership more affordable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Easier qualification for first-time homebuyers with limited income</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">More cash flow flexibility for other investments or expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Potential to afford a more expensive home with the same monthly budget</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Disadvantages</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Significantly higher total interest costs over the loan lifetime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Slower equity building in your home compared to shorter mortgage terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Potential for being "underwater" longer if home values decline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Limited availability as the 50 year mortgage program is still being developed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Example: 50 Year Mortgage vs 30 Year Mortgage</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Let's compare a $300,000 home loan with a 6.5% interest rate using our 50 year mortgage calculator:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">30-Year Mortgage</div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">$1,896/mo</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span className="font-semibold">$382,633</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Payment:</span>
                        <span className="font-semibold">$682,633</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-sm font-semibold text-purple-600 mb-2">50-Year Mortgage</div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">$1,777/mo</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span className="font-semibold text-orange-600">$766,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Payment:</span>
                        <span className="font-semibold">$1,066,200</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Key Insight:</strong> While the 50 year mortgage saves you $119 per month, you'll pay an additional $383,567 in total interest over the life of the loan. Use our 50 year mortgage calculator above to see how different loan amounts and interest rates affect your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Related 50 Year Mortgage Calculator Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/comparison" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Term Comparison</h3>
                <p className="text-gray-600">Compare 15, 20, 30, 40, and 50 year mortgage terms side-by-side to find the best option for your financial goals.</p>
              </Link>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordability Calculator</h3>
                <p className="text-gray-600">Determine how much house you can afford based on your income, debts, and down payment with different mortgage terms.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amortization Schedule</h3>
                <p className="text-gray-600">View detailed month-by-month breakdown of principal and interest payments for your 50 year mortgage.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Current Mortgage Rates</h3>
                <p className="text-gray-600">Check today's 50 year mortgage rates and compare them with traditional 30-year fixed-rate mortgage options.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Refinance Calculator</h3>
                <p className="text-gray-600">Calculate potential savings by refinancing your current mortgage to a 50 year term or other loan options.</p>
              </div>

              <Link href="/faq" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">50 Year Mortgage FAQ</h3>
                <p className="text-gray-600">Get answers to frequently asked questions about 50 year mortgages, Trump's proposal, and long-term home financing.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Your Mortgage Options?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our free 50 year mortgage calculator to compare different loan terms and find the best mortgage solution for your homeownership goals.
            </p>
            <Link
              href="/comparison"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Compare Mortgage Terms
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
