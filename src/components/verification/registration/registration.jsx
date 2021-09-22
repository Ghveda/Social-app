import React from "react";
import { ImgStyled, InputStyled, LittleLabel, MainDiv } from '../verification.style';
import { Button, Divider, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";


const Registration = ()=>{
    const history = useHistory();
    const image = "https://pbs.twimg.com/profile_images/1228270856817823744/yAhugoXc_400x400.jpg";

    const signIn = ()=>{
        history.push('/singin');
    }
    return(
        <MainDiv>
            <Stack direction={"row"} spacing={7}>
                <div>
                    <h4>Ghvedas app</h4>
                    <h1>Sign in </h1>
                    <div>
                        <form>
                            <Stack divider={<Divider orientation={"horizontal"} />}  spacing={1}>
                                <label>Username</label>
                                <InputStyled type={"text"} placeholder={"type here"}/>
                                <label>Password</label>
                                <InputStyled type={"password"} placeholder={"type here"}/>
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