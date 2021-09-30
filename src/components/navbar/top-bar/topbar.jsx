import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { Search, Home } from '@mui/icons-material';
import { SearchStyled, SearchIconWrapper, StyledInputBase } from './topbar.style';
import { homepage } from './topbar.logic';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { tokenAction } from '../../redux/actions/action'


const Topbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const logoutFunc = () => {
        dispatch(tokenAction(''));
        history.push('/signin');
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
                    <SearchStyled>
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchStyled>
                    <Stack direction="row" spacing={2} margin={1}>
                        <Button variant="contained" color="success" onClick={logoutFunc}>Log out</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Topbar;