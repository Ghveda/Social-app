import React from "react";
import { Stack, Avatar, Button } from "@mui/material";
import { MainDiv } from '../main.style';
import { DivBox } from './people.style';


const People = ()=>{
    return(
        <MainDiv>
            <DivBox>
                <Stack direction={"row"} padding={1} spacing={2} justifyContent={"space-between"}>
                        <Avatar/>
                        <label>Giorgi Ghvedashvili</label>
                    <div>
                        <Button variant="contained">Add</Button>
                        <Button variant="outlined">Ignore</Button>
                    </div>
                </Stack>
            </DivBox>
        </MainDiv>
    );
}
export default People;