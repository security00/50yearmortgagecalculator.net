import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "50 Year Mortgage FAQ - Trump Proposal Questions Answered",
  description: "Get answers to frequently asked questions about 50 year mortgages, Trump's mortgage proposal, interest rates, qualification requirements, and long-term home financing options.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/faq',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/faq',
    title: "50 Year Mortgage FAQ - Trump Proposal Questions Answered",
    description: "Get answers to frequently asked questions about 50 year mortgages, Trump's mortgage proposal, interest rates, qualification requirements, and long-term home financing options.",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      id: "trump-proposal",
      question: "What is Trump's 50 year mortgage proposal?",
      answer: "The Trump administration has proposed a 50-year fixed-rate mortgage program designed to make homeownership more accessible and affordable for American families. This innovative mortgage option extends the traditional 30-year mortgage term to 50 years, significantly reducing monthly payment amounts. The proposal aims to help first-time homebuyers, young families, and individuals struggling with housing affordability in today's expensive real estate market. By spreading the loan repayment over 50 years instead of 30, borrowers can qualify for larger loan amounts or enjoy lower monthly payments, making it easier to enter the housing market. However, the 50 year mortgage comes with the trade-off of paying substantially more interest over the life of the loan."
    },
    {
      id: "how-it-works",
      question: "How does a 50 year mortgage work?",
      answer: "A 50 year mortgage works similarly to traditional mortgages but with an extended repayment period of 50 years (600 months) instead of the standard 30 years (360 months). You borrow a specific amount to purchase a home, and the loan is secured by the property itself. Each month, you make a payment that includes both principal (the amount you borrowed) and interest (the cost of borrowing). With a 50 year mortgage calculator, you can see that because the loan is spread over more months, each monthly payment is lower compared to shorter-term mortgages. However, in the early years of a 50 year mortgage, the vast majority of your payment goes toward interest rather than principal, meaning you build equity very slowly. The extended term means you'll pay interest for 20 additional years compared to a 30-year mortgage, resulting in significantly higher total interest costs despite the lower monthly payment."
    },
    {
      id: "pros-cons",
      question: "What are the pros and cons of a 50 year mortgage?",
      answer: "The primary advantage of a 50 year mortgage is the substantially lower monthly payment, which can make homeownership accessible to buyers who might not qualify for traditional 30-year mortgages. This lower payment provides more cash flow flexibility for other expenses, investments, or savings. Additionally, the 50 year mortgage may allow you to afford a more expensive home with the same monthly budget. However, the disadvantages are significant: you'll pay dramatically more in total interest over the life of the loan—potentially hundreds of thousands of dollars more than a 30-year mortgage. Equity builds very slowly, meaning you'll have less ownership stake in your home for many years. If home values decline, you're more likely to be underwater on your mortgage. You'll also be making mortgage payments well into retirement age, which may not align with your long-term financial goals. The 50 year mortgage is best suited for buyers who prioritize immediate affordability over long-term cost efficiency."
    },
    {
      id: "rates",
      question: "What are current 50 year mortgage rates?",
      answer: "As of now, 50 year mortgage rates are not widely available in the traditional mortgage market because the Trump 50 year mortgage proposal is still being developed and has not been fully implemented by major lenders. When 50 year mortgages do become available, interest rates are expected to be slightly higher than traditional 30-year fixed-rate mortgages due to the increased risk lenders take on with such extended loan terms. Historically, longer mortgage terms carry higher interest rates to compensate lenders for the additional time their money is tied up and the increased risk of default over a longer period. If you're interested in a 50 year mortgage, it's important to monitor announcements from the Trump administration and major mortgage lenders about when these products will become available and what the interest rates will be. In the meantime, you can use our 50 year mortgage calculator to estimate payments based on current 30-year mortgage rates plus an estimated premium."
    },
    {
      id: "qualification",
      question: "How do I qualify for a 50 year mortgage?",
      answer: "Qualification requirements for a 50 year mortgage are expected to be similar to traditional mortgage requirements, though specific criteria will be determined by individual lenders once the Trump 50 year mortgage program is fully implemented. Generally, you'll need a decent credit score (typically 620 or higher, though higher scores get better rates), stable employment and income history, a reasonable debt-to-income ratio (usually below 43%), and a down payment (which may range from 3% to 20% depending on the loan program). The advantage of a 50 year mortgage is that the lower monthly payment may make it easier to meet debt-to-income ratio requirements, potentially allowing more buyers to qualify. However, lenders will still carefully evaluate your ability to repay the loan over the extended 50-year term. You'll need to provide documentation including pay stubs, tax returns, bank statements, and employment verification. Working with a mortgage broker or lender who offers 50 year mortgages can help you understand specific qualification requirements and improve your chances of approval."
    },
    {
      id: "comparison",
      question: "Should I choose a 30 year or 50 year mortgage?",
      answer: "The decision between a 30 year mortgage and a 50 year mortgage depends on your financial situation, goals, and priorities. Choose a 30 year mortgage if you want to build equity faster, pay significantly less interest over the life of the loan, and own your home outright sooner. A 30-year mortgage is better if you can afford the higher monthly payment and prioritize long-term financial efficiency over short-term affordability. Choose a 50 year mortgage if you need the lowest possible monthly payment to qualify for a home loan, want maximum cash flow flexibility for other investments or expenses, or are willing to accept higher total interest costs in exchange for immediate affordability. The 50 year mortgage makes sense for first-time buyers who might not otherwise qualify for homeownership or for buyers in expensive markets where even modest homes require large loans. Use our mortgage term comparison tool to see the exact differences in monthly payments and total costs for your specific loan amount and interest rate. Consider consulting with a financial advisor to determine which option aligns best with your overall financial plan and retirement timeline."
    },
    {
      id: "refinance",
      question: "Can I refinance from a 50 year mortgage to a shorter term?",
      answer: "Yes, you should be able to refinance from a 50 year mortgage to a shorter term like a 30-year, 20-year, or 15-year mortgage, assuming you meet the qualification requirements and market conditions are favorable. Refinancing to a shorter term can help you save significantly on total interest costs and build equity faster. Many homeowners start with a 50 year mortgage to get into a home with affordable payments, then refinance to a shorter term once their income increases or they've built some equity. However, refinancing comes with closing costs (typically 2-5% of the loan amount), so you'll need to calculate whether the interest savings justify these upfront expenses. Additionally, your monthly payment will increase when you refinance to a shorter term, so ensure your budget can accommodate the higher payment. The best time to refinance is when interest rates have dropped, your credit score has improved, or your income has increased substantially. Use a refinance calculator to determine if refinancing from your 50 year mortgage makes financial sense for your situation."
    },
    {
      id: "interest-calculation",
      question: "How much more interest will I pay with a 50 year mortgage?",
      answer: "The additional interest you'll pay with a 50 year mortgage compared to a 30 year mortgage can be substantial—often $300,000 to $500,000 or more depending on your loan amount and interest rate. For example, on a $300,000 loan at 6.5% interest, a 30-year mortgage results in approximately $382,633 in total interest, while a 50-year mortgage results in approximately $766,200 in total interest—a difference of $383,567. The reason for this dramatic difference is that you're paying interest for 20 additional years, and in the early decades of a 50 year mortgage, very little of your payment goes toward principal. This means you're paying interest on nearly the full loan amount for a much longer period. The exact amount of additional interest depends on your specific loan amount, interest rate, and whether you make extra payments toward principal. Use our 50 year mortgage calculator to see exactly how much interest you'll pay with different loan scenarios. While the lower monthly payment of a 50 year mortgage can be attractive, it's crucial to understand this long-term cost before committing to such an extended mortgage term."
    },
    {
      id: "equity-building",
      question: "How quickly do I build equity with a 50 year mortgage?",
      answer: "Equity building with a 50 year mortgage is significantly slower compared to shorter mortgage terms. In the first 10 years of a 50 year mortgage, you'll build very little equity because the vast majority of your monthly payment goes toward interest rather than principal. For example, on a $300,000 loan at 6.5% interest, after 10 years of payments on a 50-year mortgage, you'll have paid approximately $213,240 but only reduced your principal by about $38,000—meaning you've paid $175,240 in interest alone. In contrast, with a 30-year mortgage, you'd have reduced your principal by approximately $65,000 in the same 10-year period. The slow equity building of a 50 year mortgage means you'll have less financial flexibility if you need to sell your home, refinance, or take out a home equity loan in the early years. However, if you make extra principal payments or refinance to a shorter term later, you can accelerate equity building. Understanding the equity building timeline is crucial when deciding if a 50 year mortgage aligns with your financial goals and timeline for homeownership."
    },
    {
      id: "early-payoff",
      question: "Can I pay off a 50 year mortgage early?",
      answer: "Yes, most 50 year mortgages should allow you to pay off the loan early without prepayment penalties, though you should verify this with your specific lender before signing. Making extra principal payments or paying off your 50 year mortgage early can save you tens or hundreds of thousands of dollars in interest costs. Even small additional payments can make a significant difference over time. For example, adding just $100 extra per month toward principal on a $300,000, 50-year mortgage at 6.5% interest could save you over $200,000 in interest and shorten your loan term by many years. Some strategies for early payoff include making biweekly payments instead of monthly payments, applying windfalls like tax refunds or bonuses to your principal, or refinancing to a shorter term when your financial situation improves. However, before aggressively paying down your 50 year mortgage, consider whether that money might be better invested elsewhere, especially if your mortgage interest rate is relatively low. Consult with a financial advisor to determine the best strategy for your situation."
    },
    {
      id: "availability",
      question: "Where can I get a 50 year mortgage?",
      answer: "Currently, 50 year mortgages are not widely available from traditional mortgage lenders in the United States, as the Trump 50 year mortgage proposal is still being developed and implemented. When these mortgages do become available, they're expected to be offered through major banks, credit unions, and mortgage lenders that participate in government-backed loan programs. To find a 50 year mortgage, you'll want to monitor announcements from the Trump administration about the program's rollout and contact major mortgage lenders to ask about their 50-year mortgage products. Some lenders may offer similar extended-term mortgages (like 40-year mortgages) in the meantime. Working with a mortgage broker can be helpful, as they have relationships with multiple lenders and can help you find institutions offering 50 year mortgages once they become available. In the meantime, you can use our 50 year mortgage calculator to estimate what your payments would be and determine if this type of mortgage would fit your financial situation when it becomes available."
    },
    {
      id: "first-time-buyers",
      question: "Is a 50 year mortgage good for first-time homebuyers?",
      answer: "A 50 year mortgage can be beneficial for first-time homebuyers who are struggling to afford monthly payments on traditional 30-year mortgages, particularly in expensive housing markets. The lower monthly payment of a 50 year mortgage makes it easier to qualify for a home loan and can help first-time buyers enter the housing market sooner rather than continuing to rent. For young buyers with decades of earning potential ahead of them, the extended term may be less concerning, and they may plan to refinance to a shorter term as their income grows. However, first-time buyers should carefully consider the long-term implications of a 50 year mortgage, including the dramatically higher total interest costs and slower equity building. If you're a first-time buyer considering a 50 year mortgage, ask yourself: Can I afford to make extra principal payments to reduce the total interest? Do I plan to stay in this home for many years, or might I sell within 5-10 years? Will I be comfortable making mortgage payments well into my 60s or 70s? Use our 50 year mortgage calculator and comparison tool to understand exactly how this decision will impact your finances over time."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                50 Year Mortgage FAQ
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
                Get comprehensive answers to your questions about 50 year mortgages, the Trump mortgage proposal, qualification requirements, interest rates, and how extended-term mortgages compare to traditional home loans.
              </p>
            </div>
          </div>
        </section>

        {/* Expert Context Notice */}
        <section className="py-8 bg-blue-50 border-b border-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Expert Perspectives Included</h3>
                <p className="text-sm text-blue-800">
                  This FAQ integrates analysis and commentary from Fortune, UBS, NPR, Wolf Street, and Bloomberg. Real user scenarios help illustrate key concepts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={faq.id} id={faq.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 scroll-mt-20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>

                      {/* Expert Commentary - Conditional based on FAQ ID */}
                      {faq.id === "trump-proposal" && (
                        <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                          <div className="flex gap-2">
                            <span className="text-orange-600 font-bold flex-shrink-0">💼</span>
                            <div className="text-sm text-orange-900">
                              <strong>Fortune/UBS Analysis:</strong> The proposal would save approximately $119/month on a $300,000 home loan, but double total interest costs. As Fortune notes: "Is an extra $119 per month worth another 20 years of borrowing?"
                            </div>
                          </div>
                        </div>
                      )}

                      {faq.id === "how-it-works" && (
                        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                          <div className="flex gap-2">
                            <span className="text-blue-600 font-bold flex-shrink-0">📊</span>
                            <div className="text-sm text-blue-900">
                              <strong>Key Metric:</strong> On a $300,000 loan at 6.5%, your first payment on a 50-year mortgage allocates only ~$325 to principal and ~$1,452 to interest. This ratio improves very slowly over time.
                            </div>
                          </div>
                        </div>
                      )}

                      {faq.id === "pros-cons" && (
                        <div className="mt-6 space-y-3">
                          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <div className="flex gap-2">
                              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                              <div className="text-sm text-green-900">
                                <strong>Bloomberg Perspective:</strong> "Could help some borrowers, but addresses affordability through payment reduction rather than addressing root cause—housing prices are too high."
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                            <div className="flex gap-2">
                              <span className="text-red-600 font-bold flex-shrink-0">⚠</span>
                              <div className="text-sm text-red-900">
                                <strong>Wolf Street Analysis:</strong> "While appearing to help buyers with affordability, a 50-year mortgage primarily benefits lenders. It's a terrible deal for homeowners who pay double the interest, and a superb deal for banks."
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {faq.id === "comparison" && (
                        <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                          <div className="flex gap-2">
                            <span className="text-purple-600 font-bold flex-shrink-0">🤔</span>
                            <div className="text-sm text-purple-900">
                              <strong>Decision Framework:</strong> Use our mortgage comparison tool to run scenarios with your actual numbers. Plug in your home price, down payment, and interest rate to see the exact monthly payment difference and lifetime interest cost for each term length.
                            </div>
                          </div>
                        </div>
                      )}

                      {faq.id === "interest-calculation" && (
                        <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                          <div className="flex gap-2">
                            <span className="text-orange-600 font-bold flex-shrink-0">💰</span>
                            <div className="text-sm text-orange-900">
                              <strong>Real Example:</strong> On a $300,000 loan at 6.5% (20% down):
                              <ul className="mt-2 space-y-1 ml-2">
                                <li>• 30-Year: $382,633 total interest paid</li>
                                <li>• 50-Year: $766,200 total interest paid</li>
                                <li>• <strong>Difference: $383,567 more</strong> — equivalent to 3 additional years of payments</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {faq.id === "first-time-buyers" && (
                        <div className="mt-6 space-y-3">
                          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <div className="text-sm text-green-900 font-semibold mb-2">User Scenario: Sarah (Age 28, First-Time Buyer)</div>
                            <div className="text-sm text-green-800 leading-relaxed">
                              Sarah earns $55K/year and found a $280K condo in a competitive market. With a 30-year mortgage at 6.5% and 10% down, her payment would be $1,644/month. With a 50-year mortgage, it drops to $1,538/month. She chooses the 50-year option for now, planning to: (1) refinance in 5-7 years when her income increases, or (2) make extra payments if bonuses come. The lower initial payment helps her qualify and leaves cash for retirement savings.
                            </div>
                          </div>
                          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                            <div className="text-sm text-red-900 font-semibold mb-2">Caution Scenario: Robert (Age 45, Limited Planning)</div>
                            <div className="text-sm text-red-800 leading-relaxed">
                              Robert is 45 and takes a 50-year mortgage at 6.5% on a $250K loan. His payment is $1,182/month instead of $1,264 with a 30-year loan. However, he'll be paying until age 95—potentially past his expected life expectancy. He doesn't plan to refinance. This could lock him into decades of payments during retirement when his income is fixed. He should have chosen the 30-year option.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Helper Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Should You Consider a 50-Year Mortgage?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Good Candidates */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-green-900">Consider a 50-Year Mortgage If:</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>You're a first-time buyer who struggles to qualify for a 30-year mortgage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Monthly payment is your primary concern and you have 20+ year timeline</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>You have clear plans to refinance within 5-10 years as income grows</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>You expect to make extra principal payments when possible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>You're in an extremely competitive market and need maximum affordability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>You have decades of earning potential ahead and can invest savings elsewhere</span>
                  </li>
                </ul>
              </div>

              {/* Poor Candidates */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-red-900">Avoid a 50-Year Mortgage If:</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>You're already 40+ years old (could extend payments to retirement age)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>You can afford a 30-year or 15-year mortgage (better long-term value)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Building home equity quickly is important for your financial plan</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>You have uncertain income or expect job changes/unemployment risk</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>You plan to sell the home within 5-10 years (refinancing costs too high)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>You're uncomfortable with paying 2x the interest over loan lifetime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Next Steps</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <span className="text-lg font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Calculate Your Scenario</h4>
                    <p className="text-sm text-gray-600">Use our 50-year mortgage calculator to see exact monthly payments and total interest for your home price, down payment, and rate.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <span className="text-lg font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compare Loan Terms</h4>
                    <p className="text-sm text-gray-600">Visit our comparison page to see 15, 20, 30, 40, and 50 year mortgages side-by-side and understand the trade-offs for your specific situation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                      <span className="text-lg font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consult an Advisor</h4>
                    <p className="text-sm text-gray-600">Speak with a financial advisor or mortgage professional to ensure any mortgage choice aligns with your long-term financial goals and timeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Helpful Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">50 Year Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate your monthly payments and see detailed amortization schedules</p>
              </Link>

              <Link href="/comparison" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Terms</h3>
                <p className="text-gray-600 text-sm">Compare 15, 20, 30, 40, and 50 year mortgage options side-by-side</p>
              </Link>

              <Link href="/about" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600 text-sm">Learn more about our mission to help homebuyers make informed decisions</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Calculate Your 50 Year Mortgage?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Use our free calculator to see exactly how a 50 year mortgage would work for your home purchase.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Try Calculator Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
