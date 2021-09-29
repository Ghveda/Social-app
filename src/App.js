import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PublicRoute, PrivateRoute } from "react-private-public-route";
import { useState } from "react";
import {ProtectedPages} from './protectedPages';


const App = () => {
  const [token, getToken] = useState({});
  const [bool, getBool] = useState(false);

  
  return (
    <Router>
      <div>
        <PrivateRoute isAuthenticated={bool} redirect="/signin">
          <TopBar logout={getToken} />
        </PrivateRoute>
        <Stack direction="row" spacing={2}>
          <PrivateRoute isAuthenticated={bool} redirect="/signin">
            <Leftbar token={token} />
          </PrivateRoute>
          <Switch>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/" component={Home} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/profile" isAuthenticated={bool} redirect="/signin">
              <Profile token={token} />
            </PrivateRoute>
            <PrivateRoute exact path="/photos" component={Photos} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/signin" />
            
            <PublicRoute exact path="/signin" textAlign={bool}>
              <Singin getToken={getToken} getBool={getBool} />
            </PublicRoute>
            <PublicRoute exact path="/registration" textAlign={bool} >
              <Registration getToken={getToken} getBool={getBool} />
            </PublicRoute>
            
          </Switch>
          <PrivateRoute component={Rightbar} isAuthenticated={bool} redirect="/signin" />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

