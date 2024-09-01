"use client";
import { useGetSinglePokemonQuery } from "@/Data/api/MenuApi/MenuApi";
import { addCart } from "@/Data/Services/Menus.Slice/Menus.Slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const SingleProduct = ({ id }) => {
    // console.log("id number is : ", id);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetSinglePokemonQuery(id);

  // Handling loading and error states
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="py-10">
      <h3 className="text-center text-3xl font-bold my-3 hover:underline">
        Single Product
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="md:col-span-3">
          <div className="transition-all ease-in-out duration-300 hover:scale-110">
            {data?.image && (
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={400}
                className="rounded-[20px] cursor-pointer w-[500px] h-[500px] mx-auto"
              />
            )}
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-start">
          <h3>
            <span className="text-2xl font-bold">Name: </span>
            {data?.name}
          </h3>
          <p>
            <span className="text-2xl font-bold">Category: </span>
            {data?.category}
          </p>
          <p>
            <span className="text-2xl font-bold">Recipe: </span>
            {data?.recipe}
          </p>
          <p>
            <span className="text-2xl font-bold">Price: </span>${data?.price}
          </p>
          <p>
            <span className="text-2xl font-bold">Rating: </span>
            {data?.rating}
          </p>
          <div className="pt-4">
            <Link href={`/chckout`}>
              <button
                className="btn btn-outline"
                onClick={() => dispatch(addCart(data))}
              >
                Add To Cart
              </button> 
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
