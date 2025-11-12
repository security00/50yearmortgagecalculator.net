import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service - 50 Year Mortgage Calculator",
  description: "Read our terms of service to understand the rules and guidelines for using our 50 year mortgage calculator and website.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/terms',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/terms',
    title: "Terms of Service - 50 Year Mortgage Calculator",
    description: "Read our terms of service to understand the rules and guidelines for using our 50 year mortgage calculator and website.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to 50YearMortgageCalculator.net. By accessing or using our website and 50 year mortgage calculator tools, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    50YearMortgageCalculator.net provides free online mortgage calculation tools, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>50 year mortgage calculator with amortization schedules</li>
                    <li>Mortgage term comparison tools (15, 20, 30, 40, 50 years)</li>
                    <li>Educational content about the Trump 50-year mortgage proposal</li>
                    <li>Frequently asked questions and guides</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Our services are provided "as is" for informational and educational purposes only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Calculator Tools</h2>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.1 Informational Purposes Only</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The 50 year mortgage calculator and all calculation tools provided on this website are for informational and educational purposes only. They are not intended to provide financial, legal, or tax advice. Results are estimates based on the information you provide and should not be considered as guaranteed or binding offers.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.2 Accuracy of Calculations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to ensure the accuracy of our 50 year mortgage calculator, we make no warranties or representations regarding the accuracy, completeness, or reliability of the calculations. Actual mortgage terms, rates, and payments may vary based on lender requirements, market conditions, and individual circumstances.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.3 No Financial Advice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are not financial advisors, mortgage brokers, or lenders. The information and tools provided on this website do not constitute financial advice. You should consult with qualified financial professionals before making any mortgage or financial decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When using our website and 50 year mortgage calculator, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate information when using the calculator</li>
                    <li>Use the website and tools only for lawful purposes</li>
                    <li>Not attempt to interfere with or disrupt the website's functionality</li>
                    <li>Not use automated systems to access or scrape the website</li>
                    <li>Not misrepresent your identity or affiliation</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    All content on 50YearMortgageCalculator.net, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Text, graphics, logos, and images</li>
                    <li>Calculator tools and software</li>
                    <li>Website design and layout</li>
                    <li>Educational content and articles</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    TO THE FULLEST EXTENT PERMITTED BY LAW:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>The website and 50 year mortgage calculator are provided "AS IS" and "AS AVAILABLE"</li>
                    <li>We make no warranties, express or implied, regarding the website's operation or content</li>
                    <li>We do not warrant that the website will be uninterrupted, secure, or error-free</li>
                    <li>We do not warrant the accuracy or reliability of any information or calculations</li>
                    <li>We disclaim all warranties of merchantability and fitness for a particular purpose</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    TO THE FULLEST EXTENT PERMITTED BY LAW, 50YEARMORTGAGECALCULATOR.NET AND ITS OPERATORS SHALL NOT BE LIABLE FOR:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Loss of profits, revenue, data, or use</li>
                    <li>Financial losses resulting from reliance on calculator results</li>
                    <li>Errors or inaccuracies in calculations or content</li>
                    <li>Unauthorized access to or alteration of your data</li>
                    <li>Any other matter relating to the website or services</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Our total liability shall not exceed $100 or the amount you paid to use our services (which is $0 for free services).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless 50YearMortgageCalculator.net and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these third-party sites. Your use of third-party websites is at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Trump Mortgage Proposal Disclaimer</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Information about the Trump administration's 50-year mortgage proposal is based on publicly available information and news reports. The actual implementation, terms, and availability of 50-year mortgages may differ from what is described on this website. We are not affiliated with the Trump administration or any government agency.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to terminate or suspend your access to the website at any time, without notice, for any reason, including violation of these Terms. Upon termination, your right to use the website will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the website shall be resolved in the appropriate courts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Entire Agreement</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and 50YearMortgageCalculator.net regarding your use of the website and supersede all prior agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> <a href="mailto:support@50yearmortgagecalculator.net" className="text-blue-600 hover:text-blue-700 font-medium">support@50yearmortgagecalculator.net</a>
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Website:</strong> <a href="https://50yearmortgagecalculator.net" className="text-blue-600 hover:text-blue-700 font-medium">50yearmortgagecalculator.net</a>
                    </p>
                  </div>
                </section>

                <section className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By using our 50 year mortgage calculator and website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, you must discontinue use of the website immediately.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
