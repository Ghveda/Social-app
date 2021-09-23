import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import { globalStyle } from './app.style';
import { PublicRoute, PrivateRoute } from "react-private-public-route";


const App= ()=> {
    const bool = true;
  return (
      <Router>
        <globalStyle/>
        <div>
          <TopBar/>
          <Stack direction="row" spacing={2}>
          <Leftbar/>
          <Switch>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/" component={Home} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/photos" component={Photos} isAuthenticated={bool} redirect="/singin"/>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={bool} redirect="/singin"/>
            <PublicRoute exact path="/singin" component={Singin} />
            <PublicRoute exact path="/registration" component={Registration} />
          </Switch>
          <Rightbar/>
          </Stack>
        </div>
      </Router>
  );
}

export default App;

