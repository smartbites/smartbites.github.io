import { useEffect, useRef } from 'react';

import AppShell from './AppShell';
import ArticleCopyButton from '../article/ArticleCopyButton';

function setMetaTag(name, value, useProperty = false) {
  if (!value) {
    return;
  }

  const selector = useProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  const existing = document.querySelector(selector);
  const element = existing || document.createElement('meta');
  if (useProperty) {
    element.setAttribute('property', name);
    element.removeAttribute('name');
  } else {
    element.setAttribute('name', name);
    element.removeAttribute('property');
  }
  element.setAttribute('content', value);
  document.head.appendChild(element);
}

function setPageMeta(meta) {
  if (!meta) {
    return;
  }

  const title = meta.browserTitle || meta.title || 'Smart Bites';
  const description = meta.description;
  const socialImage = meta.ogImage || meta.featuredImage;

  document.title = title;
  setMetaTag('description', description);
  setMetaTag('keywords', meta.keywords);
  setMetaTag('og:title', title, true);
  setMetaTag('og:description', description, true);
  setMetaTag('og:image', socialImage, true);
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', title);
  setMetaTag('twitter:description', description);
  setMetaTag('twitter:image', socialImage);
}

export default function PageTemplate({ meta, Content, isArticle = true }) {
  const contentRef = useRef(null);
  useEffect(() => {
    setPageMeta(meta);
  }, [meta]);

  if (!isArticle) {
    return (
      <AppShell>
        <article className="sb-page-shell">
          {meta && meta.featuredImage ? (
            <section className="sb-article-hero">
              <img
                src={meta.featuredImage}
                alt={meta.title || 'Smart Bites'}
                className="sb-article-hero-image"
              />
            </section>
          ) : null}

          <section className="sb-article-card">
            <div ref={contentRef} className="sb-article-content">
              {Content ? <Content /> : null}
            </div>
          </section>
        </article>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <article className="sb-article-shell sb-article-page">
        {meta && meta.featuredImage ? (
          <section className="sb-article-hero">
            <img
              src={meta.featuredImage}
              alt={meta.title || 'Smart Bites'}
              className="sb-article-hero-image"
            />
            <div className="sb-article-hero-text">
              {meta.category ? <p className="sb-article-category">{meta.category}</p> : null}
              <h1 className="sb-article-hero-title">{meta.title}</h1>
              {meta.description ? (
                <p className="sb-article-hero-description">{meta.description}</p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="sb-article-card">
          <ArticleCopyButton contentRef={contentRef} />

          <div ref={contentRef} className="sb-article-content">
            {Content ? <Content /> : null}
          </div>

          <ArticleCopyButton contentRef={contentRef} />
        </section>
      </article>
    </AppShell>
  );
}
