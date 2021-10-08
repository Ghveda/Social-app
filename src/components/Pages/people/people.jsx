import React, { useEffect, useState } from "react";
import { Stack, Avatar, Button } from "@mui/material";
import styled from "styled-components";
import axios from "axios";


const MainDiv = styled.div`
  width: 60vw;
  margin-top: 30px;
  height: auto;
    `;

const DivBox = styled.div`
  padding: 10px;
  width: 57vw;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  margin-top: 15px;
    `;

const PeopleDiv = styled.div`
display: flex;
`;

const People = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await axios.post('http://localhost:3000/users/allUsers')
            .then(state => setUsers(state.data))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <MainDiv>
            {users ? users.map(each => (
                <DivBox>
                    <PeopleDiv>
                        <Avatar />
                        <label>{each.username}</label>
                    </PeopleDiv>
                </DivBox>
            )) : null}
        </MainDiv>
    );
}
export default People;