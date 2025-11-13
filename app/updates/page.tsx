import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Policy Updates — 50-Year Mortgage Proposal',
  description:
    "Official updates and authoritative sources on the 50-year mortgage proposal, including trusted video embeds, summaries, and references.",
  alternates: {
    canonical: 'https://50yearmortgagecalculator.net/updates',
  },
  openGraph: {
    url: 'https://50yearmortgagecalculator.net/updates',
    title: 'Policy Updates — 50-Year Mortgage Proposal',
    description:
      'Follow trusted updates on the 50-year mortgage proposal. Watch official briefings, read summaries, and access primary sources.',
  },
};

const POLICY_VIDEO_ID = process.env.NEXT_PUBLIC_POLICY_VIDEO_ID;

export default function PolicyUpdatesPage() {
  const videoEmbedUrl = POLICY_VIDEO_ID
    ? `https://www.youtube-nocookie.com/embed/${POLICY_VIDEO_ID}`
    : null;

  const videoContentUrl = POLICY_VIDEO_ID
    ? `https://youtu.be/${POLICY_VIDEO_ID}`
    : undefined;

  const lastUpdated = new Date().toISOString();

  return (
    <>
      <StructuredData type="website" />
      <StructuredData type="breadcrumb" data={{
        items: [
          { name: 'Home', url: 'https://50yearmortgagecalculator.net/' },
          { name: 'Policy Updates', url: 'https://50yearmortgagecalculator.net/updates' },
        ],
      }} />
      <StructuredData type="article" data={{
        title: 'Policy Updates — 50-Year Mortgage Proposal',
        description:
          'Trusted updates and video briefings related to the 50-year mortgage proposal with summaries and sources.',
        datePublished: lastUpdated,
        dateModified: lastUpdated,
      }} />
      {videoEmbedUrl && (
        <StructuredData
          type="video"
          data={{
            title: 'Official video briefing on the 50-year mortgage proposal',
            description:
              'An official briefing related to the 50-year mortgage proposal. Embedded via privacy-enhanced mode.',
            embedUrl: videoEmbedUrl,
            contentUrl: videoContentUrl,
            uploadDate: lastUpdated,
          }}
        />
      )}

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Policy Updates</h1>
              <p className="text-xl text-indigo-100">
                Follow authoritative updates on the 50-year mortgage proposal. We summarize key points and link to primary sources.
              </p>
              <p className="mt-3 text-sm text-indigo-200">Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </section>

        {/* Video Embed */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Official Briefing (Video)</h2>
              {!videoEmbedUrl ? (
                <div className="text-gray-700">
                  <p className="mb-3">
                    No official video embed configured. To enable, set <code className="bg-gray-100 px-1 py-0.5 rounded">NEXT_PUBLIC_POLICY_VIDEO_ID</code>
                    to a YouTube video ID from an official source (e.g., C‑SPAN, White House, federal agencies). The embed uses privacy‑enhanced mode and does not autoplay.
                  </p>
                  <ul className="list-disc ml-5 text-sm text-gray-600">
                    <li>Use authoritative channels; avoid partisan or third‑party commentary as sole sources.</li>
                    <li>Provide context and a summary alongside any video.</li>
                    <li>We also include source links and timestamps where relevant.</li>
                  </ul>
                </div>
              ) : (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                  <iframe
                    className="w-full h-full"
                    src={videoEmbedUrl}
                    title="Official policy update video"
                    loading="lazy"
                    allow="accelerometer; encrypted-media; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
                <p className="text-gray-700">
                  This section summarizes key statements related to the 50-year mortgage proposal, links to transcripts, and lists notable timestamps.
                  Always verify details against primary sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Primary Sources</h2>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  Federal/agency publications and transcripts (e.g., CFPB, HUD, FHFA, C‑SPAN)
                </li>
                <li>
                  Official press releases and policy documents
                </li>
                <li>
                  Historical mortgage data (e.g., Freddie Mac PMMS, FRED)
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Note: This page provides non‑partisan, informational summaries. We do not provide financial advice.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

