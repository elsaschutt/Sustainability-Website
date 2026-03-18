export default function BrandItem({ name, description, products, prices, url, imageUrl, imageAlt, certifications }) {
  return (
    <div className="brand-item">
      <h2 className="brand-name">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        ) : name}
      </h2>
      <div className="brand-details">
        {imageUrl && (
          <a href={url || '#'} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={imageAlt || name} className="brand-image" />
          </a>
        )}
        {certifications && certifications.length > 0 && (
          <div className="brand-certifications">
            {certifications.map((cert, index) => (
              <span key={index} className="cert-badge">{cert}</span>
            ))}
          </div>
        )}
        <p className="brand-description">{description}</p>
        {products && (
          <div className="brand-products">
            <strong>Products:</strong> {products}
          </div>
        )}
        {prices && prices.length > 0 && (
          <div className="brand-prices">
            <h4>Price Ranges</h4>
            <ul>
              {prices.map((item, index) => (
                <li key={index}>{item.price} — {item.item}</li>
              ))}
            </ul>
          </div>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="brand-link">
            Shop {name} →
          </a>
        )}
      </div>
    </div>
  )
}
