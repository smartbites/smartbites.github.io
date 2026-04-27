import { Link } from 'react-router-dom';

function ResourceTile({ title, image, to, className = '', style }) {
  return (
    <Link className={`resource-tile ${className}`.trim()} to={to} style={style}>
      <img className="resource-tile__image" src={image} alt="" aria-hidden="true" />
      <span className="resource-tile__title">{title}</span>
    </Link>
  );
}

export default ResourceTile;
