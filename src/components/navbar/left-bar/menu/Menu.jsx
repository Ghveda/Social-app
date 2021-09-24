import React from "react";
import { DivElement } from "../leftbar.style";
import { Home, PersonOutline, PhotoSizeSelectActual, PeopleOutline }  from '@mui/icons-material';
import { ListStyle, LiStyle, DivElementMenu } from '../leftbar.style';
import { useHistory } from "react-router-dom";
import { Stack } from '@mui/material';
import { homePage, peoplePage, photosPage, profilePage } from "./menu.logic";


const Menu = ()=>{
    const history = useHistory();

    return(
        <DivElementMenu>
            <DivElement>
                <ListStyle>
                    <Stack justifyContent={"space-between"} >
                        <LiStyle onClick={()=>homePage(history)}><Home/>Home</LiStyle>
                        <LiStyle onClick={()=>peoplePage(history)}><PeopleOutline/>People</LiStyle>
                        <LiStyle onClick={()=>photosPage(history)}><PhotoSizeSelectActual/>Photos</LiStyle>
                        <LiStyle onClick={()=>profilePage(history)}><PersonOutline/>Profile</LiStyle>
                    </Stack>
                </ListStyle>
            </DivElement>
        </DivElementMenu>
    )
}

export default Menu;