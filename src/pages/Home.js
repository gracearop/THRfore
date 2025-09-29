// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h1>SHOP NOW 🛒</h1>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import Heading from "../components/Heading";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";
import ProductHeading from "../components/ProductsHeading";
import { BeforeFooter } from "../components/Section";

export default function Home() {
  return (
    <>
      <Heading>Featured Products</Heading>
      <ProductCarousel />

      <Heading>Outstanding Products</Heading>
      <ProductGrid />

      <ProductHeading />
      <ProductCard />

      <BeforeFooter />
    </>
  );
}


