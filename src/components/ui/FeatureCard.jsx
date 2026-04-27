function FeatureCard({ kicker, title, image, children, fallbackImage, className = '', style }) {
  const handleError = (event) => {
    const current = event.currentTarget;
    if (!current.dataset.fallbackUsed && fallbackImage) {
      current.src = fallbackImage;
      current.dataset.fallbackUsed = 'true';
    }
  };

  return (
    <article className={`feature-card ${className}`.trim()} style={style}>
      {image ? <img className="feature-card__image" src={image} alt="" aria-hidden="true" onError={handleError} /> : null}
      <div className="feature-card__body">
        <p className="feature-card__kicker">{kicker}</p>
        <h3 className="feature-card__title">{title}</h3>
        <div className="feature-card__content">{children}</div>
      </div>
    </article>
  );
}

export default FeatureCard;
