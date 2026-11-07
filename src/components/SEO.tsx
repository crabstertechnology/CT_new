import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: string;
  image?: string;
  jsonLd?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  image = 'https://www.crabstertech.in/assets/crabster-logo.png',
  jsonLd
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Metadata
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setLinkTag('canonical', canonicalUrl);

    // 3. Open Graph (Facebook, LinkedIn, WhatsApp)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', image);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 5. JSON-LD Structured Data
    if (jsonLd) {
      let scriptTag = document.getElementById('dynamic-jsonld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }

  }, [title, description, keywords, canonicalUrl, ogType, image, jsonLd]);

  return null;
}
