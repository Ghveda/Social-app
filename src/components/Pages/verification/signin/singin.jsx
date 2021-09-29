import React, { useState } from "react";
import { Stack, Divider, Button } from "@mui/material"
import { MainDiv, InputStyled, LittleLabel, ImgStyled } from '../verification.style';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import jwt from 'jwt-simple';


const image = "https://s.driving-tests.org/wp-content/uploads/2020/07/divided-highway-sign-232x300.jpg";

export var token = '';

const Singin = ({ getToken, getBool }) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory();

    const singin = () => {
        axios.post('http://localhost:3000/users/signin', {
            username: username,
            password: password
        }).then((response) => {
            const resToken = jwt.decode(response.data, 'secret');
            getToken(resToken)
            getBool(true)
            history.push('/')

        }).catch((error) => {
            history.push('/signin')
            alert('password or username is incorrect')

        })
    };

    const registration = () => {
        history.push('/registration');
    }

    // console.log(newToken)
    return (
        <MainDiv>
            <Stack direction={"row"} spacing={7}>
                <div>
                    <h4>Ghvedas app</h4>
                    <h1>Sign in </h1>
                    <div>
                        <Stack divider={<Divider orientation={"horizontal"} />} spacing={1}>
                            <label>Username</label>
                            <InputStyled type={"text"} placeholder={"type here"} onChange={(e) => setUsername(e.target.value)} />
                            <label>Password</label>
                            <InputStyled type={"password"} placeholder={"type here"} onChange={(e) => setPassword(e.target.value)} />
                            <LittleLabel>Forgot password?</LittleLabel>
                            <LittleLabel onClick={registration}>Registration</LittleLabel>
                            <div>
                                <Button variant="contained" type={"submit"} onClick={singin}>Sign in</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
                <ImgStyled src={image} />
            </Stack>
        </MainDiv>
    );
}

export default Singin;