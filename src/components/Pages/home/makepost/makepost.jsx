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

const ButtonStyled = styled.button`
    width: 7vw;
    height: 5vh;
    border-radius: 13px;
    background-color: inherit;
    border: 1px solid #3864FF;
    color: #3864FF;
    font-family: Verdana, sans-serif;
    font-size: 1rem;
    transition-duration: 1s;
    &:hover{
        transition-duration: 1s;
        cursor: pointer;
        background-color: #3864FF;
        color: #FFFFFF;
    }
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
                    <ButtonStyled variant="contained" type="submit" size={"small"} onClick={makePostClick}>Post it</ButtonStyled>
                </Stack>
            </div>
        </MainDiv>
    );
}
export default MakePost;