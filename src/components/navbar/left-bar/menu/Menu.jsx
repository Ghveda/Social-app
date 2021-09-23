import React from "react";
import { DivElement } from "../leftbar.style";
import { Home, PersonOutline, PhotoSizeSelectActual, PeopleOutline }  from '@mui/icons-material';
import { ListStyle, LiStyle, DivElementMenu } from '../leftbar.style';
import { useHistory } from "react-router-dom";
import { Stack } from '@mui/material';


const Menu = ()=>{
    const history = useHistory();

    const homepage=()=>{
        history.push('/')
    }

    const peoplepage=()=>{
        history.push('/people')
    }

    const photospage=()=>{
        history.push('/photos')
    }

    const profilepage=()=>{
        history.push('/profile')
    }

    return(
        <DivElementMenu>
            <DivElement>
                <ListStyle>
                    <Stack justifyContent={"space-between"} >
                        <LiStyle onClick={homepage}><Home/>Home</LiStyle>
                        <LiStyle onClick={peoplepage}><PeopleOutline/>People</LiStyle>
                        <LiStyle onClick={photospage}><PhotoSizeSelectActual/>Photos</LiStyle>
                        <LiStyle onClick={profilepage}><PersonOutline/>Profile</LiStyle>
                    </Stack>
                </ListStyle>
            </DivElement>
        </DivElementMenu>
    )
}

export default Menu;