import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const updateQuantity = (productId, amount) => {
    setCart((prev) =>
    prev
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + amount }
          : item
        )
      .filter((item) => item.quantity > 0) // Remove if quantity drops to 0
        );
    };

  // Load cart from localStorage or start empty
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load orders from localStorage or start empty
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // --- Cart Functions ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if quantity hits 0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // --- Orders ---
  const generateOrderId = () => {
    return "#" + Math.floor(10000 + Math.random() * 90000);
  };

  const confirmOrder = () => {
    const newOrder = {
      id: generateOrderId(),
      items: cart,
      total: cart.reduce(
        (sum, product) =>
          sum + product.quantity * parseFloat(product.price.replace("$", "")),
        0
      ),
      date: new Date(),
    };

    setOrders((prev) => [...prev, newOrder]); // Save order
    clearCart(); // Empty cart after confirmation
    return newOrder; // For summary page
  };

  return (
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            confirmOrder,
            orders,
            updateQuantity, // ✅ new function
        }}
        >
        {children}
        </CartContext.Provider>

    );
    }
