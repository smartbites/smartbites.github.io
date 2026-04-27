import { Link } from 'react-router-dom';

function ArchiveBar({ label, icon, to, className = '', style }) {
  const isImage = typeof icon === 'string' && icon.includes('/assets/');

  return (
    <Link className={`archive-bar ${className}`.trim()} style={style} to={to}>
      {isImage ? (
        <span className="archive-bar__icon archive-bar__icon--image" aria-hidden="true">
          <img className="archive-bar__icon-image" src={icon} alt="" />
        </span>
      ) : (
        <span className="archive-bar__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <h4 className="archive-bar__label">{label}</h4>
      <span className="archive-bar__arrow" aria-hidden="true">
        <svg
          className="archive-bar__arrow-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6L15 12L9 18" />
        </svg>
      </span>
    </Link>
  );
}

export default ArchiveBar;
