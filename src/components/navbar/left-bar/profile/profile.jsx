import React, { useEffect, useState } from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement } from "../leftbar.style";


const Profile = () => {
    const [token, setToken] = useState('');

    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[localStorage.getItem('token')])
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