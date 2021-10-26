import styled from "styled-components";
import { Button } from "@mui/material"
import DialogPage from "./Dialog/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { deleteWithId } from '../../../redux/actions/action';
import { useEffect, useState } from "react";
import axios from "axios";


const MainDiv = styled.div`
  width: auto;
  height: auto;
  background-color: rgb(255,255,255,0.8);
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  disp
  hr{
    width: 10vw;
    margin-left: 0;
}
`;

const UsernameDiv = styled.div`
    font-family: Verdana, sans-serif;
    color: #3864FF;
    font-size: 0.9rem;
    border-bottom: 1px solid #D7E0FF;
    width: 20vw;
`;

const ButtonBox = styled.div`
    display:flex;
    &>div{
        padding: 5px;
    }
`;


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const postSelector = useSelector(state => state.getAllPosts);
    const usernameMatch = useSelector(state=>state.tokenReducer);
    

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
                    <UsernameDiv>
                        <label><b>{each.username}</b></label>
                    </UsernameDiv>
                    <p>{each.post}</p>
                    {each.username === usernameMatch ?
                        <ButtonBox>
                            <div>
                                <DialogPage data={each.post} id={each.id} />
                            </div>
                            <div>
                                <Button variant="outlined" onClick={() => deleteAction(each.id)}>Delete</Button>
                            </div>
                        </ButtonBox>
                        :
                        null
                    }
                </MainDiv>
            )) : null}
        </div>
    );
}
export default Posts;