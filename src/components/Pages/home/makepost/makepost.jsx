import React from "react";
import { Stack, Button, Avatar } from '@mui/material';
import { InputStyled, MainDiv } from './makepost.style';


const MakePost = ()=>{
    return(
        <MainDiv>
            <div>
            <form>
                <Stack spacing={1} direction={"row"}>
                    <Avatar/>
                    <InputStyled placeholder="What's new Name"/>
                    <Button variant="contained" type="submit" size={"small"}>Post it</Button>
                </Stack>
            </form>
            </div>
        </MainDiv>
    );
}
export default MakePost;