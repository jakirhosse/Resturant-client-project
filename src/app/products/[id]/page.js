"use client"
import SingleProduct from '@/components/Products/Products';
import React, { useEffect } from 'react';

const page = ({ params }) => {
    const productId = params?.id;
    useEffect(() => {
        if (productId) {
            console.log("product id is : ", productId);
        }
    },[productId])
    return (
        <div>
            
            <SingleProduct id={productId} />
        </div>
    );
};

export default page;