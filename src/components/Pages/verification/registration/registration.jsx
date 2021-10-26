import React, { useState } from "react";
import { ImgStyled, InputStyled, LittleLabel, MainDiv } from '../verification.style';
import { Button, Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getToken, logoutButton, getError } from '../../../redux/actions/action';
import { useSelector } from 'react-redux';


const Registration = () => {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.handlleError);


    const registration = async () => {
        await axios.post('http://localhost:3000/users/registration', {
            username: username,
            password: password
        }).then(async (response) => {
            localStorage.setItem("token", response.data.token);
            dispatch(getToken(response.data.username));
            dispatch(logoutButton(true));

            history.push('/');
        }).catch((error) => {
            dispatch(getError(error.response.data.message))
        })
    };

    const image = "https://pbs.twimg.com/profile_images/1228270856817823744/yAhugoXc_400x400.jpg";

    const signIn = () => {
        history.push('/login');
    }
    return (
        <MainDiv>
            <Stack direction={"row"} spacing={7}>
                <div>
                    <h4>Ghveda's app</h4>
                    <h1>Sign in </h1>
                    <div>
                        <Stack divider={<Divider orientation={"horizontal"} />} spacing={1}>
                            <label>Username:
                                <InputStyled id="input1" type={"text"} placeholder={"type here"} onChange={(e) => setUsername(e.target.value)} required />
                            </label>
                            <label>Password:
                                <InputStyled id="label2" type={"password"} placeholder={"type here"} onChange={(e) => setPassword(e.target.value)} required />
                            </label>
                            <LittleLabel onClick={signIn}>Sign in</LittleLabel>
                            {errorMessage ?
                                <div>{errorMessage}</div> : null}
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