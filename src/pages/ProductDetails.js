import React from "react";

export default function ProductDetails({ product }) {
  if (!product) {
    return <p>No product selected.</p>;
  }

  return (
    <section style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button style={{ padding: "0.5rem", background: "green", color: "#fff" }}>
        Add to Cart
      </button>
    </section>
  );
}
