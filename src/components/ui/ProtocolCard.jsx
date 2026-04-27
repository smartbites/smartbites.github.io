import { Link } from 'react-router-dom';

function ProtocolCard({ image, title, text, ctaLink, ctaText, fallbackImage, className = '', style }) {
  const handleError = (event) => {
    const current = event.currentTarget;
    if (!current.dataset.fallbackUsed && fallbackImage) {
      current.src = fallbackImage;
      current.dataset.fallbackUsed = 'true';
    }
  };

  return (
    <article className={`protocol-card ${className}`.trim()} style={style}>
      {image ? (
        <img className="protocol-card__image" src={image} alt="" aria-hidden="true" onError={handleError} />
      ) : null}
      <div className="protocol-card__body">
        <h3 className="protocol-card__title">{title}</h3>
        <p className="protocol-card__text">{text}</p>
        {ctaLink && ctaText ? (
          <Link className="protocol-card__cta" to={ctaLink}>
            {ctaText}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default ProtocolCard;
