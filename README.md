# 50 Year Mortgage Calculator

A free, user-friendly web application for calculating 50-year mortgages based on Trump's proposed 50-year fixed-rate mortgage program. This tool helps homebuyers compare monthly payments and total costs between 50-year and traditional 30-year mortgages.

## Features

- **Free 50 Year Mortgage Calculator**: Calculate monthly payments and total interest costs
- **Comparison Tools**: Compare 50-year mortgages with traditional 15, 20, and 30-year terms
- **Detailed Analysis**: View amortization schedules and payment breakdowns
- **Interactive UI**: Real-time calculations with instant results
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built for better search visibility and user engagement
- **Analytics Integration**: Google Analytics and Microsoft Clarity tracking

## Technology Stack

- **Frontend**: Next.js 16.0.1, React 19.2.0, TypeScript 5
- **Styling**: Tailwind CSS 4, PostCSS 4
- **Deployment**: Optimized for Vercel
- **Analytics**: Google Analytics 4, Microsoft Clarity

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 50yearmortgagecalculator.net
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

The application auto-reloads as you edit `app/page.tsx` and other files.

### Build for Production

```bash
npm run build
npm start
```

### Code Quality

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with metadata and analytics
│   ├── globals.css           # Global styles
│   ├── components/
│   │   ├── MortgageCalculator.tsx
│   │   ├── ComparisonTool.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StructuredData.tsx
│   ├── about/
│   ├── faq/
│   ├── privacy/
│   ├── terms/
│   ├── contact/
│   └── comparison/
├── public/
│   └── robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Pages

- **Home** (`/`) - Main mortgage calculator and overview
- **Comparison** (`/comparison`) - Compare different mortgage terms
- **FAQ** (`/faq`) - Frequently asked questions about 50-year mortgages
- **About** (`/about`) - Information about the calculator and Trump's proposal
- **Contact** (`/contact`) - Contact information
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Analytics & Tracking

The application includes:

- **Google Analytics**: Track user behavior, page views, and interactions (ID: G-8CXZF294Q6)
- **Microsoft Clarity**: Session recording and heatmap analytics (ID: u52rhdz7ls)

Both tracking scripts are configured to load after page interaction to minimize performance impact.

## SEO

The project is optimized for search engines with:

- Semantic HTML structure
- Meta tags for Open Graph and Twitter
- Structured data (JSON-LD) for schema markup
- XML sitemap and robots.txt
- Responsive design for mobile-first indexing

## Performance Optimizations

- Image optimization via Next.js Image component
- Font optimization with next/font
- CSS optimization with Tailwind CSS
- Script optimization with Next.js Script component

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Support

For issues, questions, or feedback, please visit the repository or contact the development team.

## Deployment

This application is optimized for deployment on [Vercel](https://vercel.com), which is the recommended platform for Next.js applications.

To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed and updated on every push

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
