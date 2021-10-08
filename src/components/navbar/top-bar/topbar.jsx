import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Stack } from '@mui/material';
import { Home } from '@mui/icons-material';
import { homepage } from './topbar.logic';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutButton, getToken } from '../../redux/actions/action';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 7vw;
    height: 5vh;
    border-radius: 13px;
    background-color: inherit;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-family: Verdana, sans-serif;
    font-size: 1rem;
    transition-duration: 0.8s;
    &:hover{
        transition-property: width background-color;
        transition-duration: 0.8s;
        cursor: pointer;
        background-color: #EAEAEA;
        color: #3864FF;
        width: 11vw;
    }
`;

const Topbar = () => {
    const history = useHistory();
    const logoutSelector = useSelector(state => state.logout);
    const dispatch = useDispatch();

    const logoutFunc = () => {
        localStorage.clear();
        dispatch(logoutButton(false));
        dispatch(getToken(''))
        history.push('/login');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => homepage(history)}
                    >
                        <Home />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Ghveda's app
                    </Typography>
                    {logoutSelector ?
                        <Stack direction="row" spacing={2} margin={1}>
                            <ButtonStyled variant="contained" color="success" onClick={logoutFunc}>Log out</ButtonStyled>
                        </Stack>
                        : null}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Topbar;