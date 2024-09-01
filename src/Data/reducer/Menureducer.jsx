"use client";
import Image from "next/image";
import Link from 'next/link'
import { useGetAllPokemonsQuery } from "../api/MenuApi/MenuApi";
import { useDispatch } from "react-redux";
import { addCart } from "../Services/Menus.Slice/Menus.Slice";
import { BiBookAdd } from "react-icons/bi";

const Menureducer = () => {
  const { data, isLoading, error } = useGetAllPokemonsQuery();
  const dispatch = useDispatch();
  // console.log(data);
  return (
    <div>
      <h3>All product data</h3>
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((product, index) => {
          return (
            <div key={index} >
              <Image
                src={product.image}
                alt="product image"
                width={200}
                height={200}
                className="w-[200px] h-[200px] mx-auto rounded-full"
              />
              <h3 className="text-center text-xl font-bold ">{product.name}</h3>
              <p className="text-center text-lg font-semibold">${product.price}</p>
              <div className="flex justify-center items-center mb-8">
                {/* <Link href="/chckout">
                  <button onClick={()=>dispatch(addCart(product))} className="btn btn-outline btn-success">Add To Cart</button>
                </Link> */}
                <Link href={`/products/${product._id}`}>
                  <button className="btn btn-outline px-0">View Details</button>
                </Link>
                <Link href={`/products/${product._id}`}>
                <BiBookAdd className="mr-6"></BiBookAdd>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menureducer;
