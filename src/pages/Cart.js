// import React, { useContext, useMemo } from "react";
// import { CartContext } from "../context/CartContext";
// import { UserContext } from "../context/UserContext";
// import { Link, Navigate } from "react-router-dom";

// export default function CartPage() {
//   const { user } = useContext(UserContext);
//   const { cart, clearCart, updateQuantity } = useContext(CartContext);

//   // useMemo hook must be declared before any conditional return
//   const total = useMemo(
//     () =>
//       cart.reduce(
//         (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
//         0
//       ),
//     [cart]
//   );

//   if (!user) return <Navigate to="/login" replace />; // conditional return after hooks

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cart.map((item) => (
//               <li key={item.id} className="flex items-center justify-between border p-3 rounded-lg">
//                 <div className="flex items-center gap-4">
//                   <img src={item.imgSrc} alt={item.name} className="w-16 h-16 object-cover rounded-md border" />
//                   <div>
//                     <Link to={`/product/${item.id}`} className="font-semibold text-blue-600 hover:underline">
//                       {item.name}
//                     </Link>
//                     <p className="text-gray-600">{item.quantity} × {item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold">–</button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold">+</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 font-bold text-xl">Total: ${total.toFixed(2)}</div>
//           <div className="mt-4 flex gap-3">
//             <button onClick={clearCart} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Clear Cart</button>
//             <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded-lg">Proceed to Checkout</Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { user } = useContext(UserContext);
  const { cart, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  
  // useMemo hook must be declared before any conditional return
  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
        0
      ),
    [cart]
  );

  if (!user) return <Navigate to="/login" replace />; // conditional return after hooks

  return (
    <div className="p-6">
      
      <h1 className="text-2xl font-bold mb-4 font-heading">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
        
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border p-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={item.imgSrc} alt={item.name} className="w-16 h-16 object-cover rounded-md border" />
                  <div>
                    <Link to={`/product/${item.id}`} className="font-semibold text-blue-600 hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-gray-600">{item.quantity} × {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold">–</button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-300 rounded-lg text-lg font-bold">+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-xl">Total: ${total.toFixed(2)}</div>
          {/* <div className="mt-4 flex gap-3">

          
          </div> */}
        </>
      )}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center mt-4">
          <button onClick={clearCart} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Clear Cart</button>
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

          <button
            onClick={() => navigate("/order-summary")}
            className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            View Order summary
          </button>

          {/* Add a 4th button here if needed */}
          {/* <button className="...">Another Button</button> */}

        </div>

    </div>
  );
}
