import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://50yearmortgagecalculator.net'),
  title: {
    default: "50 Year Mortgage Calculator - Trump Proposal Calculator",
    template: "%s | 50 Year Mortgage Calculator"
  },
  description: "Free 50 year mortgage calculator for Trump's proposed 50-year fixed-rate mortgage program. Compare monthly payments, calculate total interest costs, and analyze amortization schedules.",
  keywords: ["50 year mortgage calculator", "trump 50 year mortgage", "50 year mortgage", "mortgage calculator", "50 year fixed rate mortgage", "long term mortgage calculator", "trump mortgage proposal"],
  authors: [{ name: "50 Year Mortgage Calculator" }],
  creator: "50 Year Mortgage Calculator",
  publisher: "50 Year Mortgage Calculator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://50yearmortgagecalculator.net",
    title: "50 Year Mortgage Calculator - Trump Proposal Calculator",
    description: "Free 50 year mortgage calculator for Trump's proposed 50-year fixed-rate mortgage program. Compare monthly payments and total costs.",
    siteName: "50 Year Mortgage Calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "50 Year Mortgage Calculator - Trump Proposal",
    description: "Calculate your 50 year mortgage payments and compare with traditional 30-year loans.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      </body>
    </html>
  );
}
