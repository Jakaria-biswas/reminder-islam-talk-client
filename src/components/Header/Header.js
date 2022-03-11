import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div  >
            <div>
                <h2 className="text-center bg-primary text-white">لآ اِلَهَ اِلّا اللّهُ  <Link  to="/add">  <button style={{fontSize:"20px"}} className=' float-end add-btn me-auto' >add</button> </Link></h2>
               
               
            </div>

        </div>
    );
};

export default Header;