import React, { useState } from 'react';
import '../styles/EcommercePage.css'; // Importing the specific CSS for the EcommercePage

const EcommercePage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=1445',
      description: 'Description for product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      imageUrl: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
      description: 'Description for product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      imageUrl: 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/avalon/green.png',
      description: 'Description for product 3',
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="ecommerce-page">
      <header className="header">
        <h1>eCommerce Site</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#cart">Cart</a>
        </nav>
      </header>

      <section id="home">
        <h2>Welcome to Our eCommerce Site!</h2>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section id="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <form onSubmit={handleCheckout}>
            <h2>Checkout</h2>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="Credit Card Number" required />
            <button type="submit">Place Order</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2024 eCommerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EcommercePage;
