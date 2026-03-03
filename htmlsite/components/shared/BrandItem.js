export default function BrandItem({ name, description, products, prices }) {
  return (
    <div className="brand-item">
      <h2 className="brand-name">{name}</h2>
      <div className="brand-details">
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
      </div>
    </div>
  )
}
