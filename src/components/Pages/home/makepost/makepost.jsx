import React from "react";
import { Stack, Button, Avatar } from '@mui/material';
import styled from "styled-components";

const InputStyled = styled.input`
  width: 45vw;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: inherit;
    `;

const MainDiv = styled.div`
  padding: 1px;
  width: auto;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  margin-top: 15px;
  vertical-align: center;
  padding: 10px;
    `;


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