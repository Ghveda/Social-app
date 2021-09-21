import React from "react";
import { Link } from 'react-router-dom';
import { DivElement } from "../leftbar.style";
import Person from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { ListStyle, LiStyle } from '../leftbar.style';


const linkStyle = {
    textDecoration: 'none',
    color: '#616161'
}

const Menu = ()=>{
    return(
        <DivElement>
            <ListStyle>
                <LiStyle><HomeIcon/><Link to="/" style={linkStyle}>Home</Link></LiStyle>
                <LiStyle><PeopleOutlineIcon/><Link to="/people" style={linkStyle}>People</Link></LiStyle>
                <LiStyle><PhotoSizeSelectActualIcon/><Link to="/photos" style={linkStyle}>Photos</Link></LiStyle>
                <LiStyle><Person/><Link to="/profile" style={linkStyle}>Profile</Link></LiStyle>
            </ListStyle>
        </DivElement>
    )
}

export default Menu;