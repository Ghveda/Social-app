import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { MainDiv } from '../main.style';
import { DivBox } from './people.style';
import Button from '@mui/material/Button';


const People = ()=>{
    return(
        <MainDiv>
            <DivBox>
                <Stack direction={"row"} padding={1} spacing={2} justifyContent={"space-between"}>
                        <Avatar/>
                        <label>Giorgi Ghvedashvili</label>
                    <div>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                    <DragIndicatorIcon/>
                </Stack>
            </DivBox>
        </MainDiv>
    );
}
export default People;