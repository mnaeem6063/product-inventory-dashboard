
function Navbar({ totalProducts }) {
  return (
    <nav className="navbar">
      <h2>📦 Smart Inventory</h2>

      <div className="nav-count">
        Total Products: <strong>{totalProducts}</strong>
      </div>
    </nav>
  );
}

export default Navbar;
