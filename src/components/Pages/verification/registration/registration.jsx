import React, { useState } from "react";
import { ImgStyled, InputStyled, LittleLabel, MainDiv } from '../verification.style';
import { Button, Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Registration = ({ changeBool })=>{
    const history = useHistory();
    const [password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');

    const registration = ()=>{
        axios.post('http://localhost:3000/users/registration', {
            username: username,
            password: password
        }).then((response)=>{
            console.log(response);
        })
        // changeBool(true)
    };

    const image = "https://pbs.twimg.com/profile_images/1228270856817823744/yAhugoXc_400x400.jpg";

    const signIn = ()=>{
        history.push('/singin');
    }
    return(
        <MainDiv>
            <Stack direction={"row"} spacing={7}>
                <div>
                    <h4>Ghveda's app</h4>
                    <h1>Sign in </h1>
                    <div>
                        <Stack divider={<Divider orientation={"horizontal"} />}  spacing={1}>
                            <label>Username</label>
                            <InputStyled type={"text"} placeholder={"type here"} onChange={(e)=>setUsername(e.target.value)}/>
                            <label>Password</label>
                            <InputStyled type={"password"} placeholder={"type here"} onChange={(e)=>setPassword(e.target.value)}/>
                            <LittleLabel onClick={signIn}>Sign in</LittleLabel>
                            <div>                                    
                                <Button variant="contained" type={"submit"} onClick={registration}>Register</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
                <ImgStyled src={image}/>
            </Stack>
        </MainDiv>
    );
}

export default Registration;