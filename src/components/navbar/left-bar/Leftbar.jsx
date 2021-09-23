import React from "react";
import Profile from "./profile/profile";
import Menu from "./menu/Menu";
import { BoxStyled } from "./leftbar.style";


const Leftbar = ()=>{
    return(
      <BoxStyled>
        <div>
            <Profile/>
        </div>
          <div>
              <Menu/>
          </div>
      </BoxStyled>
    );
}
export default Leftbar;