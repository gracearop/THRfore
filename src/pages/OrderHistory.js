import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function OrderHistory() {
  const { orders } = useContext(CartContext);
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <section className="p-6">
        <h2 className="text-xl font-bold">No Past Orders</h2>
        <p className="mt-2">You haven’t placed any orders yet.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Start Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">📜 Order History</h2>
      {orders.map((order, index) => {
        const total = order.items.reduce((sum, item) => {
          const priceNumber = parseFloat(item.price.replace("$", ""));
          return sum + priceNumber;
        }, 0);

        return (
          <div
            key={index}
            className="border rounded-lg p-4 mb-6 bg-gray-50 shadow-sm"
          >
            <h3 className="font-semibold mb-2">Order ID: {order.id}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Date: {order.date.toLocaleString()}
            </p>
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 border-b pb-2 mb-2">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
            <div className="mt-2 font-bold">Total: ${total.toFixed(2)}</div>
          </div>
        );
      })}

      <button
        onClick={() => navigate("/products")}
        className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
      >
        Continue Shopping
      </button>
    </section>
  );
}
