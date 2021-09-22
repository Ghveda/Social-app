import React from "react";
import { MainBox, DivElement, LabelStyled } from './right.style';
import { Stack, Avatar } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


const Rightbar = ()=>{
    return(
        <MainBox>
            <label>Contacts</label>
            <DivElement>
                <Stack direction={"row"} padding={1} spacing={2}>
                    <Avatar/>
                    <LabelStyled>Giorgi Ghvedashvili</LabelStyled>
                    <DragIndicatorIcon/>
                </Stack>
            </DivElement>
        </MainBox>
    );
}

export default Rightbar;