import { Link } from 'react-router-dom';

function HeroCard({
  image,
  title,
  subtitle,
  kicker,
  ctaText = '',
  ctaTo = '',
  className = '',
  style,
}) {
  return (
    <section className={`hero-card ${className}`.trim()} style={style}>
      <div className="hero-card__media">
        {image ? <img className="hero-card__image" src={image} alt="" aria-hidden="true" /> : null}
      </div>
      <div className="hero-card__content">
        <h2 className="hero-card__heading">{title}</h2>
        <p className="hero-card__subtitle">{subtitle}</p>
        {ctaText && ctaTo ? <Link className="hero-card__cta" to={ctaTo}>{ctaText}</Link> : null}
      </div>
    </section>
  );
}

export default HeroCard;
