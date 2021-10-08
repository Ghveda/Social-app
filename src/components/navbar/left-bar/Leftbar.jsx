import React from "react";
import Profile from "./profile/profile";
import Menu from "./menu/Menu";
import { BoxStyled,ProfileDivMain } from "./leftbar.style";


const Leftbar = () => {
  return (
    <BoxStyled>
      <ProfileDivMain>
        <Profile />
      </ProfileDivMain>
      <div>
        <Menu />
      </div>
    </BoxStyled>
  );
}
export default Leftbar;