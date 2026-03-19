export default function ProductCard({ name, url, imageUrl, imageAlt, certifications, description, products, startingPrice }) {
  return (
    <a
      href={url || '#'}
      target={url ? '_blank' : undefined}
      rel={url ? 'noopener noreferrer' : undefined}
      className="product-card"
    >
      <div className="product-card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt || name} />
        ) : (
          <div className="product-card-placeholder">
            <span>{name[0]}</span>
          </div>
        )}
        {certifications && certifications.length > 0 && (
          <div className="product-card-badges">
            {certifications.slice(0, 2).map((cert, i) => (
              <span key={i} className="product-card-badge">{cert}</span>
            ))}
            {certifications.length > 2 && (
              <span className="product-card-badge">+{certifications.length - 2}</span>
            )}
          </div>
        )}
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-products">{products}</p>
        {startingPrice && (
          <p className="product-card-price">Starting at {startingPrice}</p>
        )}
        {url && (
          <span className="product-card-cta">Shop {name} →</span>
        )}
      </div>
    </a>
  )
}
