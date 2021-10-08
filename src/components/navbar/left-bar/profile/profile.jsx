import React, { useEffect, useState } from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";
import { useSelector } from 'react-redux'

const Profile = () => {
    const tokenSelector = useSelector(state => state.tokenReducer);

    return (
        <DivElement>
            <Stack direction="row" spacing={2} display={"flex"}>
                <Avatar />
                <div>
                    <p>Username: {tokenSelector}</p>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;