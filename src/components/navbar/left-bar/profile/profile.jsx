import React from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";


const Profile = () => {
    return (
        <DivElement>
            <Stack direction="row" spacing={2} display={"flex"}>
                <Avatar />
                <div>
                    <p>Username: {localStorage.getItem('token')}</p>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;