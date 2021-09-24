import React from "react";
import { Stack, Avatar, Button } from "@mui/material";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 60vw;
  margin-top: 30px;
  height: auto;
    `;

const DivBox = styled.div`
  padding: 3px;
  width: 60vw;
  height: auto;
  border-radius: 10px;
  background-color: rgb(255,255,255,0.8);
  margin-top: 15px;
    `;

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