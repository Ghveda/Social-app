import React from "react";
import Profile from "./profile/profile";
import Menu from "./menu/Menu";
import { BoxStyled } from "./leftbar.style";


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