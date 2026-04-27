import { Link } from 'react-router-dom';
import { getCollectionPages } from '../../data/resourceCatalog';

function TopBar({ title, className = '', style }) {
  const topBarLinks = getCollectionPages('topBar');

  return (
    <header className={`top-bar ${className}`.trim()} role="banner" style={style}>
      <Link className="top-bar__home-link" to="/" aria-label="Smart Bites home">
        <img className="top-bar__brand" src="/assets/fries.png" alt="Smart Bites logo" />
        <h1 className="top-bar__title">{title}</h1>
      </Link>
      <div className="top-bar__actions">
        {topBarLinks.map((link) => (
          <Link key={link.slug} className="top-bar__link" to={link.path} aria-label={link.label}>
            {link.icon ? (
              <img
                className="top-bar__brand top-bar__brand--right"
                src={link.icon}
                alt=""
                aria-hidden="true"
              />
            ) : null}
            {link.slug === 'guides' ? null : <span className="top-bar__link-label">{link.label}</span>}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default TopBar;
