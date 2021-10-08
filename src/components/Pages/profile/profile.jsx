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


const ProfileInfo = styled.div`
        display: flex;
        flex-direction: column;
        &>label{
            padding: 1rem;
        }
    `;

const LabelStyle = styled.label`
    font-family: Verdana, sans-serif;
    color: #3864FF;
    border-bottom: 1px solid #D7E0FF;
    width: 10vw;
    `;

const Profile = () => {

    return (
        <MainDiv>
            <Stack direction={"row"}>
                <div>
                    <ImgDiv src={"https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg"} />
                </div>
                <ProfileInfo>
                    <LabelStyle>Username</LabelStyle>
                    <label>{localStorage.getItem("token")}</label>
                </ProfileInfo>
            </Stack>
        </MainDiv>
    );
}
export default Profile;