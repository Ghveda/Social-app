import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { InputStyled, MainDiv } from './makepost.style';


const MakePost = ()=>{
    return(
        <MainDiv>
            <div>
            <form>
                <Stack spacing={1} direction={"row"} marginTop={1.5}>
                    <Avatar/>
                    <InputStyled placeholder="What's new Name"/>
                    <Button variant="contained" type="submit">Post it</Button>
                </Stack>
            </form>
            </div>
        </MainDiv>
    );
}
export default MakePost;