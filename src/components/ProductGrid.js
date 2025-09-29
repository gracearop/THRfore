import React, { useContext } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // ✅ import Link
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    rating: 5.0,
    imgSrc: "/assets/apple-watch.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy Buds Pro Wireless Earbuds",
    price: "$199",
    rating: 4.8,
    imgSrc: "/assets/galaxy-buds.jpg",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: "$349",
    rating: 4.9,
    imgSrc: "/assets/sony-headphones.jpg",
  },
  {
    id: 4,
    title: "Samsung Galaxy S20+ Smartphone",
    price: "$899",
    rating: 4.7,
    imgSrc: "/assets/galaxy-s20plus.jpg",
  },
  {
    id: 5,
    title: "Stainless Steel Vacuum Flask (1L)",
    price: "$29",
    rating: 4.5,
    imgSrc: "/assets/flask.jpg",
  },
  {
    id: 6,
    title: "Luxury Human Weavon Hair (18 Inches)",
    price: "$250",
    rating: 4.6,
    imgSrc: "/assets/human-weavon.jpg",
  },
];

export default function ProductGrid() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // redirect to cart
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.id} className="max-w-sm" imgAlt={product.title}>
          <img
            src={product.imgSrc}
            alt={product.title}
            className="h-40 w-full object-contain"
          />
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>

          {/* Rating */}
          <div className="mb-5 mt-2.5 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(product.rating)
                    ? "text-yellow-300"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {product.rating}
            </span>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300"
            >
              Add to cart
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
