import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function OrderSummary() {
  const { orders } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  // If navigated after confirm, we pass the order via state
  const latestOrder = location.state?.order || orders[orders.length - 1];

  if (!latestOrder) {
    return (
      <section className="p-6">
        <h2 className="text-xl font-bold">No Order Found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Start Shopping
        </button>
      </section>
    );
  }

  const total = latestOrder.items.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return sum + priceNumber;
  }, 0);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎉 Order Summary</h2>
      <p className="mb-6 font-semibold">🧾 Order ID: {latestOrder.id}</p>

      {latestOrder.items.map((item, index) => (
        <div key={index} className="flex items-center gap-4 border-b pb-2 mb-4">
          <img src={item.imgSrc} alt={item.title} className="h-20 w-20 object-contain" />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        </div>
      ))}

      <div className="mt-6 text-xl font-bold">Total Paid: ${total.toFixed(2)}</div>
      <p className="mt-6 text-green-600">✅ Order Date: {latestOrder.date.toLocaleString()}</p>

    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center mt-4">
        <button
          onClick={() => navigate("/products")}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          Continue Shopping
        </button>
               <button
          onClick={() => navigate("/cart")}
          className="rounded-lg bg-purple-800 px-4 py-2 text-white hover:bg-purple-700"
        >
          Back to Cart
        </button>

          <Link 
            to="/checkout" 
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Proceed to Checkout
        </Link>
        <button
          onClick={() => navigate("/order-history")}
          className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          View Order History
        </button>
      </div>
    </section>
  );
}
