import React from "react";
import { DivElementMenuBox } from "../leftbar.style";
import { Home, PersonOutline, PhotoSizeSelectActual, PeopleOutline }  from '@mui/icons-material';
import { ListStyle, LiStyle, DivElementMenu } from '../leftbar.style';
import { useHistory } from "react-router-dom";
import { Stack } from '@mui/material';
import { homePage, peoplePage, photosPage, profilePage } from "./menu.logic";


const Menu = ()=>{
    const history = useHistory();

    return(
            <DivElementMenuBox>
                <ListStyle>
                        <LiStyle onClick={()=>homePage(history)}>Home</LiStyle>
                        <LiStyle onClick={()=>peoplePage(history)}>People</LiStyle>
                        <LiStyle onClick={()=>profilePage(history)}>Profile</LiStyle>
                </ListStyle>
            </DivElementMenuBox>
    )
}

export default Menu;