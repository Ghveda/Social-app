import React from "react";
import Profile from "./profile/profile";
import Menu from "./menu/Menu";
import { BoxStyled } from "./leftbar.style";
import {createSvgIcon} from "@mui/material/utils";


const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
);


const Leftbar = ()=>{
    return(
      <BoxStyled>
        <div className="profile">
            <Profile/>
        </div>
          <div className="menu">
              <Menu/>
          </div>
      </BoxStyled>
    );
}
export default Leftbar;