import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ListingContext = createContext(null);

export const ListingContextProvider = (props) => {
  const [feeds, setFeeds] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/quotes/random?limit=5"
        );
        const feedsData = response.data.map((item, index) => ({
          ...item,
          id: index + 1,
        }));
        setFeeds(feedsData);
        const cart = {};
        feedsData.forEach((item) => {
          cart[item._id] = 0;
        });
        setCartItems(cart);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeeds();
  }, []);

  // useEffect(() => {
  //   console.log("feeds updated:", feeds);
  // }, [feeds]);

  console.log("cartItems", cartItems);

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
    feeds,
  };

  return (
    <ListingContext.Provider value={contextValue}>
      {props.children}
    </ListingContext.Provider>
  );
};
