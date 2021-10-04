import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Stack } from "@mui/material"
import DialogPage from "./Dialog/Dialog";


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

    const getData = async () => {
        await axios.post('http://localhost:3000/posts/data')
            .then(response => {
                console.log(response.data)
                getPost(response.data)
            })
    }

    const deleteAction = async (id) => {
        await axios.post('http://localhost:3000/posts/delete', {
            id: id
        })
            .then(response => {
                console.log(response)
                // window.location.reload();
            }).catch(
                (error) => console.log(error)
            )
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
                    {each.username === localStorage.getItem('token') ?
                        <Stack spacing={2} direction={"row"}>
                            <DialogPage data={each.post} id={each.id} />
                            <Button variant="outlined" onClick={() => deleteAction(each.id)}>Delete</Button>
                        </Stack>
                        :
                        <p></p>
                    }
                </MainDiv>
            ))}
        </div>
    );
}
export default Posts;