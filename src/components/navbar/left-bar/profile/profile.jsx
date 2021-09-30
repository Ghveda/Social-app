import React from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";
import { useSelector } from "react-redux";


const Profile = () => {
    const token = useSelector(state => state.getToken);
    return (
        <DivElement>
            <Stack direction="row" spacing={2} display={"flex"}>
                <Avatar />
                <div>
                    <p>Username: {token}</p>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;