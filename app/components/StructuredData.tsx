import Script from 'next/script';

interface StructuredDataProps {
  type?: 'website' | 'calculator' | 'faq' | 'article' | 'breadcrumb' | 'howto' | 'video';
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

      case 'breadcrumb':
        return {
          ...baseData,
          '@type': 'BreadcrumbList',
          itemListElement:
            data?.items?.map((item: any, index: number) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: item.url,
            })) || [],
        };

      case 'howto':
        return {
          ...baseData,
          '@type': 'HowTo',
          name: data?.name || 'How to use the 50 Year Mortgage Calculator',
          description:
            data?.description ||
            'Enter home price, down payment, interest rate, and term to instantly see monthly payments and amortization.',
          totalTime: data?.totalTime || 'PT1M',
          step: (data?.steps || [
            'Enter home price',
            'Enter down payment',
            'Set interest rate and term',
            'Review monthly payment and schedule',
          ]).map((s: string) => ({ '@type': 'HowToStep', name: s })),
        };

      case 'video':
        return {
          ...baseData,
          '@type': 'VideoObject',
          name: data?.title || 'Policy update video',
          description: data?.description || 'Official policy update related to 50-year mortgage proposal',
          thumbnailUrl: data?.thumbnailUrl || 'https://50yearmortgagecalculator.net/opengraph-image',
          uploadDate: data?.uploadDate || new Date().toISOString(),
          contentUrl: data?.contentUrl,
          embedUrl: data?.embedUrl,
          publisher: {
            '@type': 'Organization',
            name: '50 Year Mortgage Calculator',
            logo: {
              '@type': 'ImageObject',
              url: 'https://50yearmortgagecalculator.net/opengraph-image',
            },
          },
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
