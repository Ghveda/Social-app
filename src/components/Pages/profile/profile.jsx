import React from "react";
import { MainDiv, ImgDiv } from './profile.style';
import { Divider, Stack } from "@mui/material";


const Profile = ()=>{
    return(
        <MainDiv>
            <Stack direction={"row"}>
                <div>
                    <ImgDiv src={"https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg"}/>
                </div>
                <div>
                    <Stack divider={<Divider orientation={"horizontal"} />} spacing={2} margin={3}>
                        <label><b>Name</b></label>
                        <label>Giorgi Ghvedashvili</label>
                        <lable><b>Username</b></lable>
                        <label>Ghveda</label>
                    </Stack>
                </div>
            </Stack>
        </MainDiv>
    );
}
export default Profile;