import styled from "styled-components";
import { Button, Stack } from "@mui/material"
import DialogPage from "./Dialog/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts, deleteWithId } from '../../../redux/actions/action';


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
    const dispatch = useDispatch();
    const fetchedData = useSelector(state => state.getAll);

    window.onload = () => {
        dispatch(fetchAllPosts());
    }
    console.log(fetchedData)


    const deleteAction = async (id) => {
        if (id) {
            console.log(id)
            dispatch(deleteWithId(id))
        }
    }


    return (
        <div>
            {fetchedData ? fetchedData.map(each => (
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
            )) : null}
        </div>
    );
}
export default Posts;