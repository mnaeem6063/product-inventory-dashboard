
function ProductCard({ product, onDeleteProduct }) {
  return (
    <div className="product-card">
      <div className="product-icon">📦</div>

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <h2>Rs. {Number(product.price).toLocaleString()}</h2>

      <p>Quantity: {product.quantity}</p>

      <button
        className="delete-btn"
        onClick={() => onDeleteProduct(product.id)}
      >
        Delete Product
      </button>
    </div>
  );
}

export default ProductCard;
