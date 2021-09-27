import React from "react";
import { ImgStyled, InputStyled, LittleLabel, MainDiv } from '../verification.style';
import { Button, Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Registration = ()=>{
    const history = useHistory();

    // const submitAction = ()=>{
    //     const name = this.target.name.value();
    //     console.log(name)
    // }

    // axios({
    //     method: 'post',
    //     url: 'http://localhost:3000/users',
    //     data: [],
    //     headers: {'Content-Type': 'multipart/form-data' }
    // })
    //     .then(function (response) {
    //         //handle success
    //         console.log(response);
    //     })
    //     .catch(function (response) {
    //         //handle error
    //         console.log(response);
    //     });

    // const getData = async ()=>{
    //     await axios('http://localhost:3000/users')
    //         .then(res=>FormData.append(res.data));
    // }

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
                        <form method={"POST"}>
                            <Stack divider={<Divider orientation={"horizontal"} />}  spacing={1}>
                                <label>Username</label>
                                <InputStyled type={"text"} placeholder={"type here"} name={"username"}/>
                                <label>Password</label>
                                <InputStyled type={"password"} placeholder={"type here"} name={"password"}/>
                                <LittleLabel onClick={signIn}>Sign in</LittleLabel>
                                <div>
                                    <Button variant="contained" type={"submit"}>Register</Button>
                                </div>
                            </Stack>
                        </form>
                    </div>
                </div>
                <ImgStyled src={image}/>
            </Stack>
        </MainDiv>
    );
}

export default Registration;