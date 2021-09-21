import React from "react";
import { MainBox, DivElement } from './right.style';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


const Rightbar = ()=>{
    return(
        <MainBox>
            <label>Contacts</label>
            <DivElement>
                <Stack direction={"row"} padding={1} spacing={2}>
                    <Avatar/>
                    <label>Giorgi Ghvedashvili</label>
                    <DragIndicatorIcon/>
                </Stack>
            </DivElement>
        </MainBox>
    );
}

export default Rightbar;