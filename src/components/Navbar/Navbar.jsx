import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);

  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the cart area
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        // Close the cart
        setCartOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen]);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="navbar h-[80px]">
      <div className="wrapper pt-[10px] pb-[10px] pl-[30px] pr-[30px] flex justify-between items-center">
        <div className="left flex items-center gap-[25px]">
          <div className="item flex">
            <img
              src="/img/Flag.jpg"
              className="flag h-4 w-6 mt-[2.5px]"
              alt=""
            />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item ">
            <span className="text-black  mt-[2.5px]">INR</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>

          <div className="item">
            <Link to="/products/2">Women</Link>
          </div>

          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center text-[30px] tracking-[2px]">
          <Link to="/">StyleSphere</Link>
        </div>

        <div className="right flex items-center gap-[25px]">
          <Link to="/">Homepage</Link>

          <Link to="/">About</Link>

          <Link to="/">Contact</Link>

          <Link to="/">Stores</Link>

          <div className="icons flex gap-[15px] text-[#777] cursor-pointer relative">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div>
              <button onClick={toggleCart}>
                <ShoppingCartOutlinedIcon />
              </button>
              <span className="text-[12px] w-[20px] h-[20px] text-white absolute rounded-[50%] right-[-10px] top-[-10px] bg-[#2879fe] flex items-center justify-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <div ref={cartRef}>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
