import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PublicRoute, PrivateRoute } from "react-private-public-route";


export var bool = true;

const App= ()=> {
  return (
      <Router>
        <div>
            <PrivateRoute component={TopBar} isAuthenticated={bool} redirect="/singin"/>
          <Stack direction="row" spacing={2}>
              <PrivateRoute component={Leftbar} isAuthenticated={bool} redirect="/singin"/>
          <Switch>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/" component={Home} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/photos" component={Photos} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/singin"/>
            <PublicRoute exact path="/singin" component={Singin} textAlign={bool}/>
            <PublicRoute exact path="/registration" component={Registration} textAlign={bool}/>
          </Switch>
              <PrivateRoute component={Rightbar} isAuthenticated={bool} redirect="/singin"/>
          </Stack>
        </div>
      </Router>
  );
}

export default App;

