import React from "react";
import { Link } from 'react-router-dom';
import { DivElement } from "../leftbar.style";


const Menu = ()=>{
    return(
        <DivElement>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </DivElement>
    )
}

export default Menu;