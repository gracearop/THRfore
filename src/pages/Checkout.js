import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Checkout() {
  // Hooks first
  const { user } = useContext(UserContext);
  const { cart, confirmOrder } = useContext(CartContext);
  const navigate = useNavigate();

  // Conditional rendering after hooks
  if (!user) return <Navigate to="/login" replace />;

  const total = cart.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return sum + priceNumber;
  }, 0);

  const handleConfirmOrder = () => {
    confirmOrder(); // save order + clear cart
    navigate("/order-summary"); // go to summary page
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Go back and add some items!</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4 mb-4 border-b pb-2">
              <div className="flex items-center gap-4">
                <img src={item.imgSrc} alt={item.title} className="h-20 w-20 object-contain" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center mt-4">
            <button
              onClick={() => navigate("/cart")}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Back to Cart
            </button>

            <button
              onClick={handleConfirmOrder}
              className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Confirm Order
            </button>
          </div>
  
        </div>
      )}

    </section>
  );
}
