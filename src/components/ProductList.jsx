
import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="product-section">
      <h2>All Products ({products.length})</h2>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDeleteProduct={onDeleteProduct}
            />
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
