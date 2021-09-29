import React, {useEffect, useState} from "react";
import { Stack, Avatar, Button } from "@mui/material";
import styled from "styled-components";
import axios from "axios";

const MainDiv = styled.div`
  width: 60vw;
  margin-top: 30px;
  height: auto;
    `;

const DivBox = styled.div`
  padding: 3px;
  width: 60vw;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  margin-top: 15px;
    `;


const People = ()=>{
    const [data, getData] = useState({'data': [{'username': 'something'}]})

    const users = async()=>{
        await axios.post('http://localhost:3000/users/allUsers').then(test=>getData(test))
        console.log(data.data.map(each=>each.username))
    }
    
    useEffect(() => {
        users()
    }, [])

    return(
        <MainDiv>
            {data.data.map(each=>(
                <DivBox>
                <Stack direction={"row"} padding={1} spacing={2} justifyContent={"space-between"}>
                        <Avatar/>
                        <label>{each.username}</label>
                    <div>
                        <Button variant="contained">Add</Button>
                        <Button variant="outlined">Ignore</Button>
                    </div>
                </Stack>
            </DivBox>
            ))}
        </MainDiv>
    );
}
export default People;