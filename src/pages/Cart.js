// import React from "react";

// export default function Cart() {
//   return (
//     <section style={{ padding: "2rem" }}>
//       <h2>Your Cart</h2>
//       <p>No items yet.</p>
//     </section>
//   );
// }

// import React, { useContext } from "react";
// import { CartContext } from "../CartContext";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   // Calculate total price
//   const total = cart.reduce((sum, item) => {
//     const priceNumber = parseFloat(item.price.replace("$", ""));
//     return sum + priceNumber;
//   }, 0);

//   return (
//     <section style={{ padding: "2rem" }}>
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>No items yet.</p>
//       ) : (
//         <div>
//           {cart.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between gap-4 mb-4 border-b pb-2"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.imgSrc}
//                   alt={item.title}
//                   className="h-20 w-20 object-contain"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{item.title}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>

//               {/* Remove button */}
//               <button
//                 onClick={() => removeFromCart(index)}
//                 className="rounded-lg bg-red-600 px-3 py-1 text-white hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Total Price */}
//           <div className="mt-6 text-xl font-bold">
//             Total: ${total.toFixed(2)}
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex gap-4 flex-wrap">
//             <button
//               onClick={clearCart}
//               className="rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800"
//             >
//               Clear Cart
//             </button>

//             <button
//               onClick={() => navigate("/")}
//               className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
//             >
//               Back to Shopping
//             </button>

//             <button
//               onClick={() => navigate("/checkout")}
//               className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, clearCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border p-3 rounded-lg"
              >
                {/* Thumbnail + Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    {/* Clickable product name */}
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold"
                  >
                    –
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart total + actions */}
          <div className="mt-6 font-bold text-xl">
            Total: ${total.toFixed(2)}
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

