import React, { useState } from "react";
import { ImgStyled, InputStyled, LittleLabel, MainDiv } from '../verification.style';
import { Button, Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt from 'jwt-simple';


const Registration = ({ getToken, getBool }) => {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const registration = async () => {
        await axios.post('http://localhost:3000/users/registration', {
            username: username,
            password: password
        }).then((response) => {
            const resToken = jwt.decode(response.data, 'secret');
            getToken(resToken)
            getBool(true)
            history.push('/')
        }).catch(() => {
            alert('something incorrect')
        })
    };

    const image = "https://pbs.twimg.com/profile_images/1228270856817823744/yAhugoXc_400x400.jpg";

    const signIn = () => {
        history.push('/signin');
    }
    return (
        <MainDiv>
            <Stack direction={"row"} spacing={7}>
                <div>
                    <h4>Ghveda's app</h4>
                    <h1>Sign in </h1>
                    <div>
                        <Stack divider={<Divider orientation={"horizontal"} />} spacing={1}>
                            <label>Username</label>
                            <InputStyled type={"text"} placeholder={"type here"} onChange={(e) => setUsername(e.target.value)} />
                            <label>Password</label>
                            <InputStyled type={"password"} placeholder={"type here"} onChange={(e) => setPassword(e.target.value)} />
                            <LittleLabel onClick={signIn}>Sign in</LittleLabel>
                            <div>
                                <Button variant="contained" type={"submit"} onClick={registration}>Register</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
                <ImgStyled src={image} />
            </Stack>
        </MainDiv>
    );
}

export default Registration;