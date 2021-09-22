import React from "react";
import { MainDiv } from '../home.style';
import { DivImg } from './posts.style';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Stack, Avatar } from "@mui/material";


const image = "https://lh3.googleusercontent.com/bXB6ueK2wyb44f8A5Vxgf0_JmmTThXr7cqhUY9vr133RZkGguV2WGKV-Q4LTimmijCgO2zD3p3FxpfXcT3MALfLP3UQo8q2VpvzRLkj0Gg=s626"

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