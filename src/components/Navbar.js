import React from "react";

// export default function Navbar() {
//   return (
//     <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
//       <h2>My E-Commerce</h2>
//     </nav>
//   );
// }
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <ul className="flex space-x-4">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/products">Products</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// import { Navbar } from "flowbite-react";
// import { HiOutlineMenu } from "react-icons/hi"; // ✅ use this instead of GoThreeBars
// import { Link } from "react-router-dom";

// function AppNavbar() {
//   return (
//     <Navbar fluid rounded>
//       {/* Logo / Brand */}
//       <Navbar.Brand as={Link} to="/">
//         <img
//           src="/logo192.png"
//           className="mr-3 h-6 sm:h-9"
//           alt="App Logo"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           EcommerceApp
//         </span>
//       </Navbar.Brand>

//       {/* Toggle (mobile menu button) */}
//       <Navbar.Toggle barIcon={HiOutlineMenu} /> {/* ✅ fixed */}

//       {/* Nav links */}
//       <Navbar.Collapse>
//         <Navbar.Link as={Link} to="/">
//           Home
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/products">
//           Products
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/about">
//           About
//         </Navbar.Link>
//         <Navbar.Link as={Link} to="/cart">
//           Cart
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default AppNavbar;

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar fluid rounded>
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/thrift.JPG"
            className="mr-3 h-6 sm:h-9"
            alt="App Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            THRfore sTORES
          </span>
        </Link>
      </div>

      <div className="flex gap-6">
        <Link to="/" className="text-gray-700 dark:text-white">
          Home
        </Link>
        <Link to="/products" className="text-gray-700 dark:text-white">
          Products
        </Link>
        <Link to="/about" className="text-gray-700 dark:text-white">
          About
        </Link>
        <Link to="/cart" className="text-gray-700 dark:text-white">
          Cart
        </Link>
      </div>
    </Navbar>
  );
}

export default AppNavbar;

