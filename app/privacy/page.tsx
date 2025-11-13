import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - 50 Year Mortgage Calculator",
  description: "Read our privacy policy to understand how we collect, use, and protect your information when using our 50 year mortgage calculator.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/privacy',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/privacy',
    title: "Privacy Policy - 50 Year Mortgage Calculator",
    description: "Read our privacy policy to understand how we collect, use, and protect your information when using our 50 year mortgage calculator.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to 50YearMortgageCalculator.net ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our 50 year mortgage calculator tools.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Information You Provide</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Our 50 year mortgage calculator does not require registration or personal information to use. However, if you contact us via email, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Message content</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information about your device and browsing activity:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                    <li>Device information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.3 Calculator Usage Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you use our 50 year mortgage calculator, all calculations are performed locally in your browser. We do not store or transmit the specific loan amounts, interest rates, or other financial information you enter into the calculator.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>To provide and maintain our 50 year mortgage calculator service</li>
                    <li>To improve and optimize our website and user experience</li>
                    <li>To analyze website usage and trends</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To detect and prevent fraud or abuse</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use cookies and similar tracking technologies to enhance your experience on our website:
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use Google Analytics and Microsoft Clarity to understand how visitors use our 50 year mortgage calculator. These services collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Pages visited and navigation patterns</li>
                    <li>Time spent on pages</li>
                    <li>Device and browser information</li>
                    <li>General geographic location (city/country level)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use the following third-party services that may collect information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Microsoft Clarity:</strong> For user behavior analysis and heatmaps</li>
                    <li><strong>Google Fonts:</strong> For typography (may collect IP address)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    These third-party services have their own privacy policies and we encourage you to review them.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-out:</strong> Opt-out of certain data collection practices</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    To exercise these rights, please contact us at <a href="mailto:support@50yearmortgagecalculator.net" className="text-blue-600 hover:text-blue-700 font-medium">support@50yearmortgagecalculator.net</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our 50 year mortgage calculator is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to such transfers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. California Privacy Rights (CCPA)</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. We do not sell personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. European Privacy Rights (GDPR)</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, object to processing, and data portability. You also have the right to lodge a complaint with a supervisory authority.
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
