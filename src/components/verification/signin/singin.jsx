import React from "react";
import { Stack, Divider, Button } from "@mui/material"
import { MainDiv, InputStyled, LittleLabel, ImgStyled } from '../verification.style';
import { useHistory } from "react-router-dom";


const image = "https://s.driving-tests.org/wp-content/uploads/2020/07/divided-highway-sign-232x300.jpg";

const Singin = ()=>{
    const history = useHistory();

    const registration=()=>{
        history.push('/registration');
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
                                <LittleLabel>Forgot password?</LittleLabel>
                                <LittleLabel onClick={registration}>Registration</LittleLabel>
                                <div>
                                    <Button variant="contained" type={"submit"}>Sing in</Button>
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

export default Singin;