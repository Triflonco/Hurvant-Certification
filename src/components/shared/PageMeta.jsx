import { useEffect } from 'react';

export default function PageMeta({ title, description, canonicalPath }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
    if (canonicalPath) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', `https://www.hurvant.com${canonicalPath}`);
      }
    }
  }, [title, description, canonicalPath]);

  return null;
}
