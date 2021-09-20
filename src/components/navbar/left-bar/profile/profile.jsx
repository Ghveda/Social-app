import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DivElement } from "../leftbar.style";


const Profile = ()=>{
    return(
        <DivElement>
            <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg" />
                <Typography>
                    <p>name lastname</p>
                    <p>username</p>
                </Typography>
            </Stack>
        </DivElement>
    )
}

export default Profile;