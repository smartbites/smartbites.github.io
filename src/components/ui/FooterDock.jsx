import { Link } from 'react-router-dom';

function FooterDock({ items, className = '', style }) {
  const isExternal = (href = '') => /^https?:\/\//i.test(href);

  return (
    <footer className={`footer-dock ${className}`.trim()} style={style}>
      {items.map((item) => {
        if (isExternal(item.to)) {
          return (
            <a
              key={item.label}
              className="footer-dock__item"
              href={item.to}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link className="footer-dock__item" key={item.label} to={item.to}>
            {item.label}
          </Link>
        );
      })}
    </footer>
  );
}

export default FooterDock;
