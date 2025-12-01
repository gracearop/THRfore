import React, { useContext } from "react";
import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi"; // ✅ logout icon
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ import context

function Menu() {
  const { user, logout } = useContext(UserContext); // ✅ get user + logout

  return (
    <MegaMenu>
      <NavbarBrand as={Link} to="/" className="flex items-center space-x-2">
        <img alt="" src={process.env.PUBLIC_URL + "/assets/thrift.JPG"} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          THRfore sTORES
        </span>

        {/* ✅ Show greeting beside logo */}
        {user && (
          <span className="ml-4 font-bold text-xl font-heading text-gray-700 dark:text-gray-200">
            Hi, {user.name}
          </span>
        )}
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} to="/">Home</NavbarLink>
        <MegaMenuDropdownToggle>
          Company
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <NavbarLink as={Link} to="/products">Marketplace</NavbarLink>
        <NavbarLink as={Link} to="/cart">Cart</NavbarLink>

        {/* ✅ Show Register + Login if no user */}
        {!user && (
          <>
            <NavbarLink as={Link} to="/register">Register</NavbarLink>
            <NavbarLink as={Link} to="/login">Login</NavbarLink>
          </>
        )}

        {/* ✅ Show logout button at the end if logged in */}
        {user && (
          <button
            onClick={logout}
            className="flex items-center space-x-1 text-red-600 hover:text-red-800"
          >
            <FiLogOut className="h-5 w-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
        )}
      </NavbarCollapse>
      <MegaMenuDropdown>
        <div className="mt-6 border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 md:grid-cols-3 md:px-6 dark:text-gray-400">
            {/* Dropdown lists */}
            <ul className="mb-4 hidden space-y-4 md:mb-0 md:block">
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Segmentation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Marketing CRM
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
            </ul>

            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  License
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-600 hover:underline dark:hover:text-primary-500">
                  Resources
                </Link>
              </li>
            </ul>

              <Link
                to="/products"
                className="rounded-lg bg-gray-500 bg-cover bg-local bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/side-picture.JPG)` }}
              >

              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Start Shopping Now! With us at THRfore sTORES
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Get started
                <HiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}

export default Menu;
