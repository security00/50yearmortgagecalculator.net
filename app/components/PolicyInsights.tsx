'use client';

import Link from 'next/link';

export default function PolicyInsights() {
  return (
    <section className="py-12 md:py-16 bg-gray-50" id="policy-insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            50-Year Mortgage Policy &amp; Market Insights
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Stay grounded in real-world policy and expert commentary before deciding whether a 50-year mortgage fits
            your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Policy + news side */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy &amp; Regulatory Context</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">Not yet a mainstream product:</span>{' '}
                  50-year mortgages are still emerging and may not be available from major lenders in every state or
                  country.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Local rules matter:</span> down payment requirements,
                  DTI limits, and maximum terms are set by local regulators and lenders. Always check the latest rules
                  where you live.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">Think beyond the rate:</span> regulators often warn
                  about long-term affordability, retirement planning, and total interest costs on ultra-long mortgages.
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                This section is for general education only and does not constitute legal, tax, or financial advice.
                Always confirm current rules with official regulators and licensed professionals before taking out a
                mortgage.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Selected News &amp; Analysis</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <div>
                    <Link
                      href="https://www.realtor.com/advice/finance/50-year-mortgage-calculator-generational-wealth/#property_location"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-blue-700 underline underline-offset-2"
                    >
                      Realtor.com – 50-year mortgage calculator &amp; generational wealth
                    </Link>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      High-level discussion of how stretching a mortgage to 50 years can lower monthly payments and
                      potentially free up cash flow for investing or other goals, alongside the trade-off of much higher
                      total interest and slower equity build-up.
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">
                      Useful when you want to frame 50-year mortgages in terms of generational wealth and long-term
                      planning rather than just the monthly payment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <div>
                    <Link
                      href="https://abcnews.go.com/Business/trump-proposes-50-year-mortgage-plan-housing-costs/story?id=127384383"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-blue-700 underline underline-offset-2"
                    >
                      ABC News – Trump proposes 50-year mortgage plan
                    </Link>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Straight news coverage of the proposal, summarizing why a 50-year mortgage plan is being floated
                      as a response to housing affordability and how supporters and critics view the idea.
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">
                      Good starting point if you want a concise overview of the policy discussion around ultra-long
                      mortgages.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <div>
                    <Link
                      href="https://www.newsnationnow.com/business/your-money/50-year-mortgages-homebuyers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-blue-700 underline underline-offset-2"
                    >
                      NewsNation – What 50-year mortgages mean for homebuyers
                    </Link>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Explores how 50-year terms change what kinds of homes buyers can qualify for, how much extra
                      interest they might pay over time, and which types of households might be most interested in this
                      structure.
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">
                      Helpful for readers who want to see concrete examples of how payment size, total cost, and risk
                      move together.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <div>
                    <Link
                      href="https://www.fox47news.com/neighborhoods/mason-leslie/trump-administration-proposes-50-year-mortgages"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-blue-700 underline underline-offset-2"
                    >
                      FOX47 – Trump administration proposes 50-year mortgages
                    </Link>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Local broadcast story that looks at how a 50-year mortgage program could show up in everyday
                      housing markets, including reactions from buyers, sellers, and real estate professionals.
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">
                      Adds a human angle to the numbers, which can be useful to balance against the calculator results
                      on this page.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                External links are provided for informational purposes only and may not always reflect the latest policy
                changes. Always cross-check with official sources.
              </p>
            </div>
          </div>

          {/* Video side */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Videos: 50-Year Mortgage Policy &amp; Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore multiple expert perspectives on 30-year vs 50-year mortgages, long-term affordability, and policy
              implications.
            </p>

            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/Q8FcRbLCwEk"
                  loading="lazy"
                  title="50-Year Mortgage Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/P3wBOTWO0KU"
                  loading="lazy"
                  title="50-Year Mortgage Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/oeLjzyXRlDQ"
                  loading="lazy"
                  title="50-Year Mortgage Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/WWmI9KDSl8k"
                  loading="lazy"
                  title="50-Year Mortgage Video 4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/V7KRGN38Z6k"
                  loading="lazy"
                  title="50-Year Mortgage Video 5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              These videos are embedded from YouTube using the IDs you provided. Be sure to periodically review that
              they still reflect up-to-date rules and guidance in your market.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="#calculator"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-blue-200 bg-white text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
          >
            Back to calculator
          </Link>
        </div>
      </div>
    </section>
  );
}
