import { useEffect } from 'react';

const setMetaTag = (attribute, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export default function PageMeta({ title, description, canonicalPath, ogImage }) {
  useEffect(() => {
    const fullUrl = `https://www.hurvant.com${canonicalPath || ''}`;
    const image = ogImage || 'https://www.hurvant.com/Logo.png';

    if (title) {
      document.title = title;
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('name', 'twitter:image', image);

    if (canonicalPath) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', fullUrl);
    }
  }, [title, description, canonicalPath, ogImage]);

  return null;
}

