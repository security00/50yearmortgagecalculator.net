import Script from 'next/script';

interface StructuredDataProps {
  type?: 'website' | 'calculator' | 'faq' | 'article';
  data?: any;
}

export default function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: '50 Year Mortgage Calculator',
          url: 'https://50yearmortgagecalculator.net',
          description: 'Free 50 year mortgage calculator for Trump\'s proposed 50-year fixed-rate mortgage program. Calculate monthly payments, compare loan terms, and analyze total costs.',
          publisher: {
            '@type': 'Organization',
            name: '50 Year Mortgage Calculator',
            logo: {
              '@type': 'ImageObject',
              url: 'https://50yearmortgagecalculator.net/logo.png',
            },
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://50yearmortgagecalculator.net/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        };

      case 'calculator':
        return {
          ...baseData,
          '@type': 'WebApplication',
          name: '50 Year Mortgage Calculator',
          url: 'https://50yearmortgagecalculator.net',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description: 'Calculate your 50 year mortgage payments, compare with traditional 30-year mortgages, and view detailed amortization schedules. Free online mortgage calculator for the Trump 50-year mortgage proposal.',
          featureList: [
            'Monthly payment calculation',
            'Total interest calculation',
            'Amortization schedule',
            'Mortgage term comparison',
            '30 vs 50 year comparison',
          ],
        };

      case 'faq':
        return {
          ...baseData,
          '@type': 'FAQPage',
          mainEntity: data?.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })) || [],
        };

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data?.title || '50 Year Mortgage Calculator',
          description: data?.description || 'Understanding the Trump 50 year mortgage proposal',
          author: {
            '@type': 'Organization',
            name: '50 Year Mortgage Calculator',
          },
          publisher: {
            '@type': 'Organization',
            name: '50 Year Mortgage Calculator',
            logo: {
              '@type': 'ImageObject',
              url: 'https://50yearmortgagecalculator.net/logo.png',
            },
          },
          datePublished: data?.datePublished || new Date().toISOString(),
          dateModified: data?.dateModified || new Date().toISOString(),
        };

      default:
        return baseData;
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
