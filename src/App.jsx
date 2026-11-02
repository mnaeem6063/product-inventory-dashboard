import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import AddProductForm from "./components/AddProductForm.jsx";
import SearchBar from "./components/SearchBar.jsx";

import "./App.css";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 85000, quantity: 10 },
    { id: 2, name: "Mobile Phone", category: "Electronics", price: 45000, quantity: 15 },
    { id: 3, name: "Keyboard", category: "Accessories", price: 2500, quantity: 20 },
    { id: 4, name: "Mouse", category: "Accessories", price: 1200, quantity: 30 },
    { id: 5, name: "Headphones", category: "Electronics", price: 5000, quantity: 12 },
  ]);

  const [search, setSearch] = useState("");

  // Add new product
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Search by name or category
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar totalProducts={products.length} />

      <main className="container">
        <h1>Product & Inventory Dashboard</h1>
        <p className="subtitle">Manage your products and inventory easily.</p>

        <AddProductForm onAddProduct={addProduct} />

        <SearchBar search={search} setSearch={setSearch} />

        <ProductList
          products={filteredProducts}
          onDeleteProduct={deleteProduct}
        />
      </main>
    </div>
  );
}

export default App;
