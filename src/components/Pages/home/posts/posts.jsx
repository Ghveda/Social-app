import React from "react";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Stack, Avatar } from "@mui/material";
import styled from "styled-components";


const image = "https://lh3.googleusercontent.com/bXB6ueK2wyb44f8A5Vxgf0_JmmTThXr7cqhUY9vr133RZkGguV2WGKV-Q4LTimmijCgO2zD3p3FxpfXcT3MALfLP3UQo8q2VpvzRLkj0Gg=s626"

const DivImg = styled.img`
  width: 56vw;
  border-radius: 10px;
    `;

const MainDiv = styled.div`
  width: auto;
  height: auto;
  background-color: rgb(255,255,255,0.8);
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

const Posts = ()=>{
    return(
        <MainDiv>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Avatar/>
                <DragIndicatorIcon/>
            </Stack>
            <label>post</label>
            <div>
                <DivImg src={image}/>
            </div>
        </MainDiv>
    );
}
export default Posts;