"use client"; // Ensure this is at the top
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IoMdAddCircle } from "react-icons/io"; // Import the icon
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { decrementQuantity, incrementQuantity, removeCart } from '@/Data/Services/Menus.Slice/Menus.Slice';

const CheckOut = () => {
  const productItem = useSelector((state) => state.carts.carts);
  console.log(productItem);
  const dispatch = useDispatch();

  const totalPrice = productItem.reduce((total, item) => total + item.quantity * item.price, 0);
  console.log(totalPrice); // Logging the total price for debugging

  return (
    <div className="lg:flex w-full gap-40 mt-10 lg:pb-[120px] pb-[60px] lg:px-12 px-8">
    <div className="lg:w-7/12 w-full">
      <h2 className="flex justify-around text-xl font-semibold rounded-lg bg-[#e9e4e4] text-black py-1 ">
        <span className="lg:text-base text-sm">Products</span>
        <span className="lg:text-base text-sm">Quantity</span>
        <span className="lg:text-base text-sm">Total Price</span>
      </h2>
      <ul>
        {productItem.length === 0 ? (
          <h2 className="text-4xl font-bold my-10 text-center">
            No Cart Found
          </h2>
        ) : (
          productItem?.map((product) => {
            return (
              <li
                key={product?._id}
                className="flex justify-between items-center gap-3 border-2 rounded-md py-2 px-4 my-3"
              >
                <img
                  className="lg:w-20 lg:h-20 w-12 h-12"
                  src={`${product?.image}`}
                  alt={`${product?.title}`}
                />
                <p className="lg:text-base text-sm font-semibold">
                  Price : ${product?.price}
                </p>
                <h3 className="lg:text-base text-sm font-semibold">
                  {product?.title}
                </h3>
                <button
                  onClick={() => dispatch(incrementQuantity(product))}
                  className="hover:bg-green-500 hover:text-white border-2 border-green-500 rounded-full text-green-500 py-1 px-1 transition-all ease-in-out duration-700"
                >
                  <IoMdAddCircle />
                </button>
                <p className="lg:text-base text-sm font-semibold">
                  {product?.quantity}
                </p>
                <button
                  onClick={() => dispatch(decrementQuantity(product))}
                  className="hover:bg-orange-500 hover:text-white border-2 border-orange-500 rounded-full text-orange-500 py-1 px-1 transition-all ease-in-out duration-700"
                >
                <GrFormSubtract></GrFormSubtract>
                </button>
                <p className="lg:text-base text-sm font-semibold">
                  Total Price : ${product?.quantity * product?.price}
                </p>
                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"
                >
                  <RiDeleteBin6Fill />
                </button>
                <Link href={`/chekout`}>
              <button className="btn btn-outLine" onClick={() => dispatch(addCart(data))}></button>
              </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
    <div className="lg:w-4/12 w-full border-2 rounded-lg shadow-lg p-4 my-3">
      <h3 className="text-xl font-bold my-4 text-center">ORDER SUMMARY</h3>
      <h5 className="text-base font-bold flex justify-between items-center">
        Subtotal <span>${totalPrice}</span>
      </h5>
      <h5 className="text-base font-bold flex justify-between items-center">
        Delivery <span>Free</span>
      </h5>
      <h5 className="text-base font-bold flex justify-between items-center">
        Tax <span>Free</span>
      </h5>
      <hr className="border my-2" />
      <h5 className="text-base font-bold flex justify-between items-center">
        Total <span>${totalPrice}</span>
      </h5>
      <div className="flex items-center">
        <input
          className="my-4 border-2 rounded-l-lg py-1 px-4 w-full focus:outline-none"
          type="text"
          placeholder="Enter coupon"
        />
        <button
          className="bg-[#fd3d57] text-white py-1 px-4 rounded-r-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-300 ease-in-out "
          type="submit"
        >
          Apply
        </button>
      </div>
      <button
        className="w-full my-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out text-base"
        type="submit"
      >
        <Link href="/carts">PROCESS TO CHECKOUT</Link>
      </button>
      </div>
      </div>
  );
};

export default CheckOut;

