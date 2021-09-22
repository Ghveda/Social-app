import React from "react";
import { DivElement } from "../leftbar.style";
import { Home, PersonOutline, PhotoSizeSelectActual, PeopleOutline }  from '@mui/icons-material';
import { ListStyle, LiStyle, DivElementMenu } from '../leftbar.style';
import { useHistory } from "react-router-dom";


const linkStyle = {
    textDecoration: 'none',
    color: '#616161'
}

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
                    <LiStyle onClick={homepage}><Home/>Home</LiStyle>
                    <LiStyle onClick={peoplepage}><PeopleOutline/>People</LiStyle>
                    <LiStyle onClick={photospage}><PhotoSizeSelectActual/>Photos</LiStyle>
                    <LiStyle onClick={profilepage}><PersonOutline/>Profile</LiStyle>
                </ListStyle>
            </DivElement>
        </DivElementMenu>
    )
}

export default Menu;