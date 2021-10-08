import React, { useState } from "react";
import { Stack, Button, Avatar } from '@mui/material';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addNewPosts } from '../../../redux/actions/action';


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


const MakePost = () => {
    const [post, getPost] = useState({});
    const dispatch = useDispatch();

    const makePostClick = () => {
        const storage = localStorage.getItem('token');
        dispatch(addNewPosts(post, storage));
        document.getElementById('inputValue').value = '';
    }
    
    return (
        <MainDiv>
            <div>
                <Stack spacing={1} direction={"row"}>
                    <Avatar />
                    <InputStyled placeholder="What's new Name" onChange={(e) => getPost(e.target.value)} id="inputValue" />
                    <Button variant="contained" type="submit" size={"small"} onClick={makePostClick}>Post it</Button>
                </Stack>
            </div>
        </MainDiv>
    );
}
export default MakePost;