import styled from "styled-components";
import { Button, Stack } from "@mui/material"
import DialogPage from "./Dialog/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts, deleteWithId } from '../../../redux/actions/action';
import { useEffect, useState } from "react";
import axios from "axios";


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
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const postSelector = useSelector(state => state.getAllPosts);

    const deleteAction = async (id) => {
        if (id) {
            dispatch(deleteWithId(id))
        }
    }


    const getAllPosts = async () => {
        await axios.post('http://localhost:3000/posts/data')
            .then(res => setPosts(res.data))
    }

    useEffect(() => {
        setPosts(postSelector)
    }, [postSelector])

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <div>
            {posts ? posts.map(each => (
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
                        null
                    }
                </MainDiv>
            )) : null}
        </div>
    );
}
export default Posts;