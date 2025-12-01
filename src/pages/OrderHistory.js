import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate, Navigate } from "react-router-dom";

export default function OrderHistory() {
  const { user } = useContext(UserContext);
  const { orders } = useContext(CartContext);
  const navigate = useNavigate();

  // Always run hook – if user doesn't exist, memo result becomes an empty array
  const userOrders = useMemo(() => {
    if (!user) return [];          // avoids filter running on undefined
    return orders.filter(order => order.userEmail === user.email);
  }, [orders, user]);

  // Redirect AFTER hook execution
  if (!user) return <Navigate to="/login" replace />;

  if (userOrders.length === 0) {
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

      {userOrders.map((order, index) => {
        const total = order.items.reduce((sum, item) => {
          const priceNumber = parseFloat(item.price.replace("$", ""));
          return sum + priceNumber * item.quantity;
        }, 0);

        return (
          <div key={index} className="border rounded-lg p-4 mb-6 bg-gray-50 shadow-sm">
            <h3 className="font-semibold mb-2">Order ID: {order.id}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Date: {new Date(order.date).toLocaleString()}
            </p>

            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b pb-2 mb-2"
              >
                <img src={item.imgSrc} alt={item.title} className="h-16 w-16 object-contain" />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-gray-600">
                    {item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-2 font-bold">Total: ${total.toFixed(2)}</div>
          </div>
        );
      })}
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center mt-4">
          <button
            onClick={() => navigate("/products")}
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Continue Shopping
          </button>
      <Link 
        to="/checkout" 
        className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
      >
        Proceed to Checkout
      </Link>

        <button
          onClick={() => navigate("/cart")}
          className="rounded-lg bg-purple-800 px-4 py-2 text-white hover:bg-purple-700"
        >
          Back to Cart
        </button>

      <button
        onClick={() => navigate("/order-summary")}
        className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
      >
        View Order summary
      </button>

      {/* Add a 4th button here if needed */}
      {/* <button className="...">Another Button</button> */}

    </div>


    </section>
  );
}
