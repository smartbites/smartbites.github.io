import ArchiveBar from './ArchiveBar';
import ProtocolCard from './ProtocolCard';
import ResourceGrid from './ResourceGrid';

function TakeawayPanel({
  title,
  description,
  starterTitle,
  protocol,
  recipeResources = [],
  chefResources = [],
  recipeHeading = 'Recipes',
  chefHeading = 'Becoming Chef de Change',
  bars = [],
  className = '',
  style,
}) {
  return (
    <section id="takeaway" className={`takeaway-panel ${className}`.trim()} style={style}>
      <header>
        <h2 className="takeaway-panel__title">{title}</h2>
      </header>

      <p className="takeaway-panel__description">{description}</p>

      <div className="takeaway-panel__divider" />

      <header className="takeaway-panel__section-header">
        <h3 className="resource-grid__heading">{starterTitle}</h3>
      </header>

      <ProtocolCard
        image={protocol.image}
        title={protocol.title}
        text={protocol.text}
        ctaLink={protocol.ctaLink}
        ctaText={protocol.ctaText}
        fallbackImage="/assets/smartbites_foodtruck.webp"
        className="sb-animate-enter"
        style={{ transitionDelay: '280ms' }}
      />

      <div className="takeaway-panel__divider" />

      <ResourceGrid
        title={recipeHeading}
        tiles={recipeResources}
        className="sb-animate-enter"
        style={{ transitionDelay: '320ms' }}
      />

      <div className="takeaway-panel__divider" />

      <ResourceGrid
        title={chefHeading}
        tiles={chefResources}
        className="sb-animate-enter"
        style={{ transitionDelay: '360ms' }}
      />

      <div className="takeaway-panel__footer-bars">
        {bars.map((bar, index) => (
          <ArchiveBar
            key={bar.to}
            icon={bar.icon}
            label={bar.label}
            to={bar.to}
            className="sb-animate-enter"
            style={{ transitionDelay: `${420 + index * 80}ms` }}
          />
        ))}
      </div>

    </section>
  );
}

export default TakeawayPanel;
