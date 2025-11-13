import type { Metadata } from 'next';
import MortgageCalculator from './components/MortgageCalculator';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import DismissibleNotice from './components/DismissibleNotice';
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
      <DismissibleNotice />
      <StructuredData type="website" />
      <StructuredData type="calculator" />
      <StructuredData type="howto" />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section - Compact for first screen calculator visibility */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                50 Year Mortgage Calculator
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed">
                Calculate monthly payments and compare 50-year vs 30-year mortgages instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Free Calculator</h2>
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
                <div className="mt-6 p-4 bg-orange-100 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>UBS Analysis (via Fortune):</strong> While the 50 year mortgage saves you <strong className="text-blue-600">$119 per month</strong>, you'll pay an additional <strong className="text-orange-600">$383,567 in total interest</strong> over the life of the loan.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    As Fortune notes in their analysis: "Is an extra $119 per month worth another 20 years of borrowing?"
                  </p>
                  <a
                    href="https://fortune.com/2025/11/12/how-much-would-50-year-morgage-save-per-month-ubs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 font-semibold mt-3 inline-block"
                  >
                    Read full Fortune analysis →
                  </a>
                </div>
              </div>

              {/* Expert Commentary Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Experts Are Saying About 50-Year Mortgages</h3>
                <div className="space-y-6">
                  {/* Fortune/UBS */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Fortune / UBS Analysis</h4>
                        <p className="text-gray-700 mb-3">
                          "A 50-year mortgage would save approximately $119 per month, but double your total interest costs. The key question: Is this short-term savings worth decades of additional borrowing and substantially higher lifetime costs?"
                        </p>
                        <a href="https://fortune.com/2025/11/12/how-much-would-50-year-morgage-save-per-month-ubs/" target="_blank" rel="noopener noreferrer" className="text-sm text-orange-600 hover:text-orange-800 font-semibold">
                          Read Fortune analysis →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* NPR */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">NPR</h4>
                        <p className="text-gray-700">
                          "While the advantage of a 50-year loan is a lower monthly payment, the monthly savings are modest—slightly more than $100—while the total interest costs increase substantially. Housing experts warn the benefits would be minimal for most buyers."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wolf Street */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Wolf Street</h4>
                        <p className="text-gray-700">
                          "While appearing to help homebuyers with affordability, a 50-year mortgage would primarily benefit lenders. It's a terrible deal for homeowners who would pay double the interest, and a superb deal for the banks."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bloomberg */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Bloomberg</h4>
                        <p className="text-gray-700">
                          "The proposal is not necessarily a terrible idea, as it could help some borrowers. However, it addresses housing affordability through payment reduction rather than addressing the root cause—housing prices are fundamentally too high."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How Quickly Do You Build Equity? 30-Year vs 50-Year Comparison
            </h2>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
              <p className="text-gray-700 mb-6">
                One of the biggest differences between 30-year and 50-year mortgages is how quickly you build equity in your home. With a 50-year loan, your monthly payment goes mostly toward interest early on, meaning you build equity much more slowly.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Example: $300,000 home, $60,000 down payment, 6.5% interest rate
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300 bg-gray-50">
                      <th className="text-left py-4 px-4 font-bold text-gray-900">Year</th>
                      <th className="text-right py-4 px-4 font-bold text-blue-600">30-Year Equity</th>
                      <th className="text-right py-4 px-4 font-bold text-purple-600">50-Year Equity</th>
                      <th className="text-right py-4 px-4 font-bold text-orange-600">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">5</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$31,500</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$15,200</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$16,300</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">10</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$65,000</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$38,000</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$27,000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">15</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$102,000</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$65,000</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$37,000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">20</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$145,000</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$95,000</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$50,000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700 font-medium">25</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$180,000</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$125,000</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$55,000</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="py-3 px-4 text-gray-700 font-bold">30</td>
                      <td className="text-right py-3 px-4 text-blue-600 font-bold">$240,000</td>
                      <td className="text-right py-3 px-4 text-gray-900 font-semibold">$150,000</td>
                      <td className="text-right py-3 px-4 text-orange-600 font-bold">-$90,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>Key Takeaway:</strong> After 30 years, the 30-year mortgage is paid off and you own the home free and clear. With the 50-year mortgage, you've only built $150,000 in equity and still owe 20 more years of payments. If you rely on home equity for retirement or refinancing, the slower accumulation could be a significant disadvantage.
                </p>
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

        {/* Alternative Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Can't Wait for 50-Year Mortgages? Consider These Real Alternatives
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Since 50-year mortgages aren't yet available, here are actual mortgage products you can use today to manage your payments:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 40-Year Mortgage */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">40-Year Mortgage</h3>
                <p className="text-gray-700 mb-4">
                  Some lenders offer 40-year mortgages as a middle ground between 30 and 50 years. You get more moderate monthly savings than 50 years while keeping total interest costs more reasonable.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>More balanced monthly savings vs interest cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Available through some conventional lenders</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Availability varies by lender and credit profile</p>
              </div>

              {/* FHA Loans */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m-4 4l-4-4m9-5l-4-4m4 4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">FHA Loans</h3>
                <p className="text-gray-700 mb-4">
                  FHA loans allow you to put down as little as 3.5% instead of 20%, which means lower monthly payments without needing a 50-year loan.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lower down payment requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>More flexible credit requirements</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Note: Includes mortgage insurance premium (MIP)</p>
              </div>

              {/* ARM Mortgages */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ARM Loans (5/1, 7/1, 10/1)</h3>
                <p className="text-gray-700 mb-4">
                  Adjustable-rate mortgages offer lower initial rates (often 0.5-1% lower than fixed) for 5, 7, or 10 years, then adjust to market rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Significantly lower initial payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Good if you plan to sell/refinance within the fixed period</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Risk: Payments increase after fixed period</p>
              </div>

              {/* Biweekly Payments */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 0v4m-8 8v4m8-4v4M3 9h18M3 19h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Biweekly Payments</h3>
                <p className="text-gray-700 mb-4">
                  Instead of monthly payments, pay every 2 weeks. This results in 26 payments per year instead of 12, which accelerates equity building and interest savings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Shorten 30-year loan to ~22 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Works with most standard 30-year loans</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Aligns payment schedule with biweekly paychecks</p>
              </div>

              {/* Refinancing */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rate/Term Refinancing</h3>
                <p className="text-gray-700 mb-4">
                  If rates drop, refinance to a new 30-year loan at a lower rate. This reduces your monthly payment without committing to a longer loan term.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible - refinance when rates are favorable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Can lower payment without extending loan term</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Consider closing costs and how long you plan to stay</p>
              </div>

              {/* Root Cause */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Address Root Cause</h3>
                <p className="text-gray-700 mb-4">
                  Rather than extending loans, consider working with an advisor to increase income, improve credit score for better rates, or look at more affordable homes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Long-term financial health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Avoid decades of high debt burden</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500">Work with a financial advisor for personalized guidance</p>
              </div>
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
