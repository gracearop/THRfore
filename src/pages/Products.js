// import React from "react";

// export default function Products() {
//   return (
//     <section style={{ padding: "2rem" }}>
//       <h2>Products</h2>
//       <ul>
//         <li>Product 1 - $10</li>
//         <li>Product 2 - $20</li>
//         <li>Product 3 - $30</li>
//       </ul>
//     </section>
//   );
// }
import React from "react";
// import ProductsCard from "./ProductsCard";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </section>
  );
}
