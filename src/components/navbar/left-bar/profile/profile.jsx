import React from "react";
import { Stack, Avatar } from '@mui/material';
import { DivElement, ProfileDiv, LabelStyled } from "../leftbar.style";
import { useSelector } from 'react-redux'

const Profile = () => {
    const tokenSelector = useSelector(state => state.tokenReducer);

    return (
        <DivElement>
            <Stack direction="row" spacing={2} display={"flex"}>
                <Avatar />
                <div>
                    <ProfileDiv>
                        <label>Username </label>
                        <LabelStyled>{tokenSelector}</LabelStyled>
                    </ProfileDiv>
                </div>
            </Stack>
        </DivElement>
    )
}

export default Profile;