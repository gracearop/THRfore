import { useState, useEffect } from "react";
import { Button, Card } from "flowbite-react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Experience premium sound with noise cancellation.",
    image: "/assets/products2.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Track your fitness, calls, and more on the go.",
    image: "/assets/products1.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Gaming Laptop",
    description: "High performance for all your gaming needs.",
    image: "/assets/products3.jpeg",
    link: "#",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-change product every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

return (
    
  <div className="flex justify-center items-center py-8">
    {/* Custom flex wrapper for layout */}
    
    <div className="flex flex-row max-w-2xl rounded-lg shadow-md bg-white dark:bg-gray-800">
      {/* Image on left */}
    <img
      src={currentProduct.image}
      alt={currentProduct.title}
      className="w-50 h-50 object-cover rounded-l-lg"
    />

      {/* Text + Button on right */}
      <div className="p-6 w-1/2 flex flex-col justify-between">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {currentProduct.title}
          </h5>
          <p className="mt-2 font-normal text-gray-700 dark:text-gray-400  line-clamp-4">
            {currentProduct.description}
          </p>
        </div>
        <Button href={currentProduct.link} className="mt-4 self-start">
          Read more
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
);

}
