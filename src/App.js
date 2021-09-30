import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PublicRoute, PrivateRoute } from "react-private-public-route";
import { useState } from "react";


const App = () => {
  const bool = true;

  return (
    <Router>
      <div>
        <PrivateRoute isAuthenticated={bool} redirect="/signin">
          <TopBar />
        </PrivateRoute>
        <Stack direction="row" spacing={2}>
          <PrivateRoute component={Leftbar} isAuthenticated={bool} redirect="/signin" />
          <Switch>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/" component={Home} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/photos" component={Photos} isAuthenticated={bool} redirect="/signin" />
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/signin" />
            <PublicRoute exact path="/signin" component={Singin} textAlign={bool} />
            <PublicRoute exact path="/registration" component={Registration} textAlign={bool} />
          </Switch>
          <PrivateRoute isAuthenticated={bool} component={Rightbar} redirect="/signin" />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

