// Create a new file called useBasket.js
import { useState } from 'react';

export default function useBasket() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const removeFromBasket = (itemId) => {
    setBasket(basket.filter((item) => item.id !== itemId));
  };

  return { basket, addToBasket, removeFromBasket };
}
