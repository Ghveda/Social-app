import React from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";


const Profile = ()=>{
    return(
        <DivElement>
            <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg" />
                <div>
                    <p>name lastname</p>
                    <p>username</p>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;