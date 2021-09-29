import React from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";


const Profile = ({ token }) => {
    return (
        <DivElement>
            <Stack direction="row" spacing={2} display={"flex"}>
                <Avatar />
                <div>
                    <p>Username: {token.data}</p>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;