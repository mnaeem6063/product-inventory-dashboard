
import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !category.trim() || price === "" || quantity === "") {
      alert("Please fill all fields!");
      return;
    }

    if (Number(price) < 0 || Number(quantity) < 0 ||
        !Number.isFinite(Number(price)) ||
        !Number.isFinite(Number(quantity))) {
      alert("Price and quantity must be valid positive numbers!");
      return;
    }

    onAddProduct({
      name: name.trim(),
      category: category.trim(),
      price: Number(price),
      quantity: Number(quantity),
    });

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          min="0"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit" className="add-btn">
          + Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
