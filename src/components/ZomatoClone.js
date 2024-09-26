// ZomatoClone.js
import React from 'react';
import '../styles/ZomatoClone.css';

const restaurants = [
  {
    id: 1,
    name: "Restaurant A",
    description: "Delicious Indian Cuisine",
    imageUrl: "https://via.placeholder.com/200", // Replace with real image URL
    menu: [
      { id: 1, name: "Butter Chicken", price: 12.99 },
      { id: 2, name: "Paneer Tikka", price: 10.99 },
    ],
  },
  {
    id: 2,
    name: "Restaurant B",
    description: "Tasty Italian Dishes",
    imageUrl: "https://via.placeholder.com/200", // Replace with real image URL
    menu: [
      { id: 1, name: "Spaghetti Carbonara", price: 14.99 },
      { id: 2, name: "Margherita Pizza", price: 11.99 },
    ],
  },
  {
    id: 3,
    name: "Restaurant B",
    description: "Tasty Italian Dishes",
    imageUrl: "https://via.placeholder.com/200", // Replace with real image URL
    menu: [
      { id: 1, name: "Spaghetti Carbonara", price: 14.99 },
      { id: 2, name: "Margherita Pizza", price: 11.99 },
    ],
  },
  {
    id: 4,
    name: "Restaurant B",
    description: "Tasty Italian Dishes",
    imageUrl: "https://via.placeholder.com/200", // Replace with real image URL
    menu: [
      { id: 1, name: "Spaghetti Carbonara", price: 14.99 },
      { id: 2, name: "Margherita Pizza", price: 11.99 },
    ],
  },
  {
    id: 5,
    name: "Restaurant B",
    description: "Tasty Italian Dishes",
    imageUrl: "https://via.placeholder.com/200", // Replace with real image URL
    menu: [
      { id: 1, name: "Spaghetti Carbonara", price: 14.99 },
      { id: 2, name: "Margherita Pizza", price: 11.99 },
    ],
  },
  // Add more restaurants as needed
];

const ZomatoClone = () => {
  return (
    <div className="zomato-clone">
      <header className="zomato-header">
        <h1>Zomato Clone</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Orders</li>
          </ul>
        </nav>
      </header>
      <main className="zomato-main">
        <section className="restaurant-list">
          {restaurants.map((restaurant) => (
            <div className="restaurant" key={restaurant.id}>
              <img src={restaurant.imageUrl} alt={restaurant.name} />
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <h3>Menu:</h3>
              <ul>
                {restaurant.menu.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <footer className="zomato-footer">
        <p>© 2024 Zomato Clone</p>
      </footer>
    </div>
  );
};

export default ZomatoClone;
