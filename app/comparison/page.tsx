import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonTool from '../components/ComparisonTool';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mortgage Term Comparison - 30 vs 50 Year Mortgage",
  description: "Compare 15, 20, 30, 40, and 50 year mortgage terms side-by-side. See how different loan terms affect your monthly payment, total interest, and overall costs with our free comparison tool.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/comparison',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/comparison',
    title: "Mortgage Term Comparison - 30 vs 50 Year Mortgage",
    description: "Compare 15, 20, 30, 40, and 50 year mortgage terms side-by-side. See how different loan terms affect your monthly payment, total interest, and overall costs.",
  },
};

export default function ComparisonPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Mortgage Term Comparison Tool
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Compare different mortgage terms including the Trump administration's proposed 50-year mortgage with traditional 15, 20, 30, and 40-year loan options. See exactly how loan term length affects your monthly payment, total interest costs, and long-term financial commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Tool Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ComparisonTool />
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Understanding Mortgage Term Lengths
              </h2>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Mortgage Terms Impact Your Finances</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The mortgage term you choose has a profound impact on both your monthly budget and your long-term financial health. When comparing a 50 year mortgage to a traditional 30 year mortgage, you'll notice that longer mortgage terms result in lower monthly payments but significantly higher total interest costs over the life of the loan. This mortgage term comparison tool helps you visualize these trade-offs and make an informed decision about which loan term best fits your financial situation and homeownership goals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A 50 year mortgage calculator reveals that while you might save $100-200 per month compared to a 30-year mortgage, you could end up paying hundreds of thousands of dollars more in total interest. Conversely, shorter mortgage terms like 15 or 20 years require higher monthly payments but allow you to build equity faster and pay substantially less interest over time. Understanding these dynamics is crucial when evaluating the Trump 50 year mortgage proposal and determining if it aligns with your financial objectives.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">15-20 Year Mortgages</h3>
                  <p className="text-gray-600 text-sm mb-3">Short-term mortgage options for aggressive equity building</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Lowest total interest costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Fastest equity building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Debt-free homeownership sooner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✗</span>
                      <span>Highest monthly payments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">30 Year Mortgage</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Popular</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Traditional standard mortgage term in the US</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Balanced monthly payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Most widely available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Moderate interest costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Good equity building pace</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">40-50 Year Mortgages</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">New</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Extended-term options including Trump proposal</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Lowest monthly payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Easier qualification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✗</span>
                      <span>Highest total interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">✗</span>
                      <span>Slower equity building</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Factors to Consider When Comparing Mortgage Terms</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Monthly Budget Impact</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Consider how the monthly mortgage payment fits into your overall budget. A 50 year mortgage offers the lowest monthly payment, which can be attractive for first-time homebuyers or those with limited income. However, ensure you're not sacrificing long-term financial health for short-term affordability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Total Interest Costs</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      The total interest you'll pay over the life of the loan increases dramatically with longer mortgage terms. Use our mortgage term comparison tool to see exactly how much more interest you'll pay with a 50 year mortgage versus shorter terms like 15 or 30 years.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Equity Building Speed</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Shorter mortgage terms allow you to build home equity faster, which can be valuable for future refinancing, home equity loans, or selling your property. With a 50 year mortgage, equity builds very slowly in the early years as most of your payment goes toward interest.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Long-Term Financial Goals</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Think about your retirement timeline and other financial objectives. If you're planning to retire in 20-30 years, a 50 year mortgage means you'll still be making payments well into retirement. Consider whether the lower monthly payment allows you to invest more in retirement accounts or other wealth-building opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Comparison Example</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Let's examine a $400,000 home loan with a 6.5% interest rate across different mortgage terms to understand the practical implications of the Trump 50 year mortgage proposal compared to traditional options:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Term</th>
                        <th className="text-right py-3 px-4 font-bold text-gray-900">Monthly Payment</th>
                        <th className="text-right py-3 px-4 font-bold text-gray-900">Total Interest</th>
                        <th className="text-right py-3 px-4 font-bold text-gray-900">Total Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="py-3 px-4 font-semibold text-gray-900">15 Years</td>
                        <td className="py-3 px-4 text-right text-gray-900">$3,483</td>
                        <td className="py-3 px-4 text-right text-gray-900">$226,940</td>
                        <td className="py-3 px-4 text-right text-gray-900">$626,940</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="py-3 px-4 font-semibold text-gray-900">20 Years</td>
                        <td className="py-3 px-4 text-right text-gray-900">$2,983</td>
                        <td className="py-3 px-4 text-right text-gray-900">$315,920</td>
                        <td className="py-3 px-4 text-right text-gray-900">$715,920</td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-blue-50">
                        <td className="py-3 px-4 font-semibold text-gray-900">30 Years</td>
                        <td className="py-3 px-4 text-right text-gray-900">$2,528</td>
                        <td className="py-3 px-4 text-right text-gray-900">$510,177</td>
                        <td className="py-3 px-4 text-right text-gray-900">$910,177</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="py-3 px-4 font-semibold text-gray-900">40 Years</td>
                        <td className="py-3 px-4 text-right text-gray-900">$2,317</td>
                        <td className="py-3 px-4 text-right text-gray-900">$712,160</td>
                        <td className="py-3 px-4 text-right text-gray-900">$1,112,160</td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-purple-50">
                        <td className="py-3 px-4 font-semibold text-gray-900">50 Years</td>
                        <td className="py-3 px-4 text-right text-gray-900">$2,236</td>
                        <td className="py-3 px-4 text-right text-gray-900">$941,600</td>
                        <td className="py-3 px-4 text-right text-gray-900">$1,341,600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Analysis:</strong> While the 50 year mortgage saves $292/month compared to a 30-year mortgage, you'll pay an additional $431,423 in total interest. The 15-year mortgage has the highest monthly payment but saves $714,660 in interest compared to the 50-year option. Use our comparison tool above to calculate your specific scenario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Detailed Calculations?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Try our full 50 year mortgage calculator with amortization schedule and detailed payment breakdown.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg"
            >
              Use Full Calculator
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
