import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@mui/material"
import { useSelector } from "react-redux";



const MainDiv = styled.div`
  width: auto;
  height: auto;
  background-color: rgb(255,255,255,0.8);
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  hr{
    display: flex;
    width: 10vw;
    margin-left: 0;
}
`;


const Posts = () => {
    const [post, getPost] = useState([]);
    const token = useSelector(state => state.getToken);


    const getData = async () => {
        await axios.post('http://localhost:3000/posts/data')
            .then(response => {
                console.log(response.data)
                getPost(response.data)
            })
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {post.map(each => (
                <MainDiv key={each.id}>
                    <label><b>{each.username}</b></label>
                    <hr />
                    <p>{each.post}</p>
                    {console.log(each.username)
                    }
                </MainDiv>
            ))}
        </div>
    );
}
export default Posts;