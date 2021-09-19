import React from "react";
import Profile from "./profile/profile";
import Menu from "./menu/Menu";

const Leftbar = ()=>{
    return(
      <div>
        <div className="profile">
            <Profile/>
        </div>
          <div className="menu">
              <Menu/>
          </div>
      </div>
    );
}
export default Leftbar;