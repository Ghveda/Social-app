import React from "react";
import { Divider, Stack } from "@mui/material";
import styled from "styled-components";


const MainDiv = styled.div`
  width: 60vw;
margin-top: 10px;
  height: auto;
  background-color: rgb(255,255,255,0.8);
  border-radius: 10px;
  padding: 10px;
`;


const ImgDiv = styled.img`
    width: 15vw;
    height: 40vh;
    `;

const Profile = () => {

    return (
        <MainDiv>
            <Stack direction={"row"}>
                <div>
                    <ImgDiv src={"https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg"} />
                </div>
                <div>
                    <Stack divider={<Divider orientation={"horizontal"} />} spacing={2} margin={3}>
                        <label><b>Username</b></label>
                        <label>{localStorage.getItem("token")}</label>
                    </Stack>
                </div>
            </Stack>
        </MainDiv>
    );
}
export default Profile;