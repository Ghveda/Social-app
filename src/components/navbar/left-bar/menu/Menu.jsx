import React from "react";
import { Link } from 'react-router-dom';
import { DivElement } from "../leftbar.style";
import { Home, PersonOutline, PhotoSizeSelectActual, PeopleOutline }  from '@mui/icons-material';
import { ListStyle, LiStyle } from '../leftbar.style';


const linkStyle = {
    textDecoration: 'none',
    color: '#616161'
}

const Menu = ()=>{
    return(
        <DivElement>
            <ListStyle>
                <LiStyle><Home/><Link to="/" style={linkStyle}>Home</Link></LiStyle>
                <LiStyle><PeopleOutline/><Link to="/people" style={linkStyle}>People</Link></LiStyle>
                <LiStyle><PhotoSizeSelectActual/><Link to="/photos" style={linkStyle}>Photos</Link></LiStyle>
                <LiStyle><PersonOutline/><Link to="/profile" style={linkStyle}>Profile</Link></LiStyle>
            </ListStyle>
        </DivElement>
    )
}

export default Menu;