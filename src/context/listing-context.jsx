import React, { createContext, useState } from "react";
import feeds from "../feedsData";

export const ListingContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < feeds.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ListingContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      console.log("Item already added to cart.");
      removeFromCart(itemId);
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  console.log(cartItems);

  return (
    <ListingContext.Provider value={contextValue}>
      {props.children}
    </ListingContext.Provider>
  );
};
