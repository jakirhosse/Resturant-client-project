"use client"
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const checkout = useSelector((state) => state.carts.carts);
  return (
    <div className="container mx-auto navbar  bg-violet-500 text-white rounded-2xl z-20">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 text-3xl rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><Link href="/">Home</Link> </li>
        <li><Link href="/menu">Menu</Link> </li>
            <li><Link href="/order">Order</Link> </li>
            <li><Link href="/login">Login</Link> </li>
            <li><Link href="/register">SignUp</Link> </li>
            <li><Link href="/products">
              <AiOutlineShoppingCart className="h-8 w-8 cursor-pointer text-md font-bold"></AiOutlineShoppingCart>
              <sub>{ checkout.length}</sub>
            </Link></li>
        </ul>
      </div>
      <a className="btn border-t-stone-600 text-xl">starbelly</a>
    </div>
    <div className="navbar-center hidden text-5xl lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link> </li>
        <li><Link href="/menu">Menu</Link> </li>
          <li><Link href="/order">order</Link> </li>
          <li><Link href="/login">Login</Link> </li>
          <li><Link href="/register">SignUp</Link> </li>
          <li><Link href="/products">
              <AiOutlineShoppingCart className="h-8 w-8 cursor-pointer text-md font-bold"></AiOutlineShoppingCart>
              <sub>{ checkout.length}</sub>
            </Link></li>
      </ul>
    </div>
   
  </div>
  );
};

export default Navbar;
