 
function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="sb-site-footer">
      <a
        className="sb-site-footer__link sb-site-footer__link--icon"
        href="/policies/"
        aria-label="Site policies"
      >
        <svg
          className="sb-site-footer__icon"
          aria-hidden="true"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
        </svg>
      </a>
      <div className="sb-site-footer__center">
        <p className="sb-site-footer__brand">SMART BITES BY BASIL KOROMPILIAS</p>
        <p className="sb-site-footer__meta">
          <span className="sb-site-footer__meta-part">{year}</span>
          <span className="sb-site-footer__meta-sep">|</span>
          <a
            className="sb-site-footer__meta-link"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
          <span className="sb-site-footer__meta-sep">|</span>
          <span className="sb-site-footer__meta-part">GREECE</span>
        </p>
      </div>
      <a
        className="sb-site-footer__link sb-site-footer__link--icon"
        href="https://github.com/orgs/smartbites/discussions"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub discussions"
      >
        <svg
          className="sb-site-footer__icon"
          aria-hidden="true"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
        </svg>
      </a>
    </footer>
  );
}

export default SiteFooter;