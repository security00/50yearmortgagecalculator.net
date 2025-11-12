import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Contact Us - 50 Year Mortgage Calculator",
  description: "Get in touch with us for questions about our 50 year mortgage calculator, feedback, or support. We're here to help you understand the Trump mortgage proposal.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/contact',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/contact',
    title: "Contact Us - 50 Year Mortgage Calculator",
    description: "Get in touch with us for questions about our 50 year mortgage calculator, feedback, or support.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Have questions about our 50 year mortgage calculator or the Trump mortgage proposal? We're here to help! Reach out to us using the contact information below.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Email Contact */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Email Support</h2>
                  </div>
                  <p className="text-gray-700 mb-3">
                    For general inquiries, feedback, or support questions:
                  </p>
                  <a
                    href="mailto:support@50yearmortgagecalculator.net"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all"
                  >
                    support@50yearmortgagecalculator.net
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    We typically respond within 24-48 hours
                  </p>
                </div>

                {/* Website */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Website</h2>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Visit our website for more tools and resources:
                  </p>
                  <a
                    href="https://50yearmortgagecalculator.net"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-lg break-all"
                  >
                    50yearmortgagecalculator.net
                  </a>
                  <p className="text-sm text-gray-600 mt-3">
                    Free mortgage calculators and guides
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What can I contact you about?</h3>
                  <p className="text-gray-700">
                    You can reach out for questions about our 50 year mortgage calculator, technical issues, feedback, partnership inquiries, or general questions about the Trump mortgage proposal.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly will I receive a response?</h3>
                  <p className="text-gray-700">
                    We aim to respond to all inquiries within 24-48 hours during business days. For urgent technical issues, we prioritize responses.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide financial advice?</h3>
                  <p className="text-gray-700">
                    No, we do not provide personalized financial advice. Our 50 year mortgage calculator is for informational purposes only. For financial advice, please consult with a qualified financial advisor or mortgage professional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help me get a 50 year mortgage?</h3>
                  <p className="text-gray-700">
                    We are not mortgage lenders or brokers. We provide free calculation tools and educational content. For actual mortgage products, please contact licensed mortgage lenders or brokers.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Before You Contact Us</h2>
              <p className="text-blue-100 mb-6">
                You might find the answer to your question in our resources:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="/faq"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors border border-white/20"
                >
                  <h3 className="font-bold mb-2">FAQ Page</h3>
                  <p className="text-sm text-blue-100">Comprehensive answers to common questions</p>
                </a>
                <a
                  href="/"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors border border-white/20"
                >
                  <h3 className="font-bold mb-2">Calculator</h3>
                  <p className="text-sm text-blue-100">Try our free 50 year mortgage calculator</p>
                </a>
                <a
                  href="/comparison"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors border border-white/20"
                >
                  <h3 className="font-bold mb-2">Comparison Tool</h3>
                  <p className="text-sm text-blue-100">Compare different mortgage terms</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
