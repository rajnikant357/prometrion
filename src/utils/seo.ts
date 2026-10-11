// src/utils/seo.ts - Standardized Schema.org Structured Data & Metadata Builders
// Formatted strictly to schema.org standards with zero fabricated ratings or awards

export const CANONICAL_DOMAIN = 'https://www.prometrion.com';
export const DEFAULT_OG_IMAGE = `${CANONICAL_DOMAIN}/prometrion-logo.png`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Builds the master Organization schema for Prometrion
 */
export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${CANONICAL_DOMAIN}/#organization`,
    name: 'Prometrion',
    url: CANONICAL_DOMAIN,
    logo: `${CANONICAL_DOMAIN}/prometrion-logo.png`,
    description: 'Technology company delivering custom website development, mobile application engineering, SEO & GEO AI visibility, digital branding, and software consulting.',
    founder: {
      '@type': 'Person',
      name: 'Rajnikant',
      jobTitle: 'Founder & Chief Architect',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Client Engineering Desk',
      url: `${CANONICAL_DOMAIN}/contact`,
    },
    sameAs: [
      'https://github.com/prometrion',
    ],
  };
}

/**
 * Builds the WebSite schema for search-engine discovery
 */
export function buildWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${CANONICAL_DOMAIN}/#website`,
    url: CANONICAL_DOMAIN,
    name: 'Prometrion',
    description: "Building Technology for What's Next — Software Products, Digital Services, and High-Performance Engineering.",
    publisher: {
      '@id': `${CANONICAL_DOMAIN}/#organization`,
    },
  };
}

/**
 * Builds BreadcrumbList schema for deep navigation paths
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${CANONICAL_DOMAIN}${item.url}`,
    })),
  };
}

/**
 * Builds Article / BlogPosting schema for educational essays & guides
 */
export function buildArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorRole?: string;
  image?: string;
  category?: string;
}) {
  const articleUrl = `${CANONICAL_DOMAIN}/media/blogs/${article.slug}`;
  return {
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    datePublished: article.datePublished || '2026-09-01T00:00:00+05:30',
    dateModified: article.dateModified || article.datePublished || '2026-09-01T00:00:00+05:30',
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: article.authorName || 'Rajnikant',
      jobTitle: article.authorRole || 'Founder & Chief Architect',
    },
    publisher: {
      '@id': `${CANONICAL_DOMAIN}/#organization`,
    },
    image: article.image || DEFAULT_OG_IMAGE,
    articleSection: article.category || 'Technology',
  };
}

/**
 * Builds Service schema for commercial service offerings
 */
export function buildServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  providerName?: string;
  areaServed?: string;
}) {
  const serviceUrl = service.url.startsWith('http') ? service.url : `${CANONICAL_DOMAIN}${service.url}`;
  return {
    '@type': 'Service',
    '@id': `${serviceUrl}/#service`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: serviceUrl,
    provider: {
      '@type': 'Organization',
      name: service.providerName || 'Prometrion',
      url: CANONICAL_DOMAIN,
    },
  };
}

/**
 * Builds SoftwareApplication schema for verified applications in the Appstore
 */
export function buildSoftwareApplicationSchema(app: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  downloadUrl?: string;
  slug: string;
}) {
  const appUrl = `${CANONICAL_DOMAIN}/store/appstore/${app.slug}`;
  return {
    '@type': 'SoftwareApplication',
    '@id': `${appUrl}/#app`,
    name: app.name,
    description: app.description,
    url: appUrl,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem || 'Android 8.0+',
    author: {
      '@id': `${CANONICAL_DOMAIN}/#organization`,
    },
    ...(app.downloadUrl ? { downloadUrl: app.downloadUrl } : {}),
  };
}

/**
 * Builds FAQPage schema for verified FAQs on services & guide pages
 */
export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
