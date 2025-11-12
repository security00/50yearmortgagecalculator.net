import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white">50 Year Mortgage Calculator</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Free online 50 year mortgage calculator to help you understand the Trump administration's proposed 50-year fixed-rate mortgage program. Compare monthly payments, calculate total interest costs, and make informed decisions about your home financing options with our comprehensive mortgage tools and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                  50 Year Calculator
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-sm hover:text-blue-400 transition-colors">
                  Mortgage Comparison
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq#trump-proposal" className="text-sm hover:text-blue-400 transition-colors">
                  Trump 50-Year Proposal
                </Link>
              </li>
              <li>
                <Link href="/faq#how-it-works" className="text-sm hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq#pros-cons" className="text-sm hover:text-blue-400 transition-colors">
                  Pros and Cons
                </Link>
              </li>
              <li>
                <Link href="/faq#rates" className="text-sm hover:text-blue-400 transition-colors">
                  Current Rates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} 50YearMortgageCalculator.net. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            Our 50 year mortgage calculator helps you explore the Trump administration's proposed 50-year fixed-rate mortgage program, which aims to make homeownership more affordable by extending loan terms to 50 years. While a 50 year mortgage can significantly reduce your monthly payment compared to traditional 30 year mortgages, it's important to understand the long-term implications, including substantially higher total interest costs over the life of the loan. Use our free mortgage calculator to compare different loan terms, analyze amortization schedules, and determine which mortgage option best fits your financial situation and homeownership goals.
          </p>
        </div>
      </div>
    </footer>
  );
}
