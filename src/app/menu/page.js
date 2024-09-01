import React from 'react';
import  './menu.css'
import Offered from '@/components/Menus/Offered/Offered';
import MenuList from '@/Data/reducer/Menureducer';
const page = () => {
    return (
        <div className="container mx-auto mb-30">
            <Offered></Offered>
            <MenuList></MenuList>
        </div>
    );
}

export default page;