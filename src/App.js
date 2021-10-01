import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PublicRoute, PrivateRoute } from "react-private-public-route";


const App = () => {
  const signin = true;
  return (
    <Router>
      <div>
        <PrivateRoute component={TopBar} isAuthenticated={signin} redirect="/login" />
        <Stack direction="row" spacing={2}>
          <PrivateRoute component={Leftbar} isAuthenticated={signin} redirect="/login" />
          <Switch>
            <PrivateRoute exact path="/people" component={People} isAuthenticated={signin} redirect="/login" />
            <PrivateRoute exact path="/" component={Home} isAuthenticated={signin} redirect="/login" />
            <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={signin} redirect="/login" />
            <PrivateRoute exact path="/photos" component={Photos} isAuthenticated={signin} redirect="/login" />
            <PrivateRoute exact path="/people" component={People} isAuthenticated={signin} redirect="/login" />
            <Singin exact path="/login" />
            <PublicRoute exact path="/registration" component={Registration} />
          </Switch>
          <PrivateRoute isAuthenticated={signin} component={Rightbar} redirect="/login" />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

