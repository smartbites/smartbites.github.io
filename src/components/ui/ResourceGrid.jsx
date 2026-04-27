import ResourceTile from './ResourceTile';

function ResourceGrid({ title, tiles, className = '', style }) {
  return (
    <section className={`resource-grid ${className}`.trim()} style={style}>
      <h3 className="resource-grid__heading">{title}</h3>
      <div className="resource-grid__list">
        {tiles.map((tile) => (
          <ResourceTile key={tile.to} title={tile.title} image={tile.image} to={tile.to} />
        ))}
      </div>
    </section>
  );
}

export default ResourceGrid;
