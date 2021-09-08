import React from 'react';
import { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import './style.css'
import NavBar from './Navbar'

const uniqueList = [...new Set(Menu.map((currele) => {
    return currele.category;
})
),
"All"
];


function Resturant() {
    const [menuData, setmenuData] = useState(Menu);
    const[menuList,setmenuList] = useState(uniqueList);
    function filterItem(category) {
        if(category==="All"){
            setmenuData(Menu);
            return;
        }
        const updatedItems = Menu.filter((currele) => {
            return currele.category === category;
        });
        setmenuData(updatedItems);

    };
    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}
export default Resturant