import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PrivateRoute, PublicRoute } from './components/routes/routes';


const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Stack direction="row" spacing={2}>
          <Leftbar />
          <Switch>
            <PrivateRoute  path="/people" component={People} />
            <PrivateRoute  exact path="/" component={Home} />
            <PrivateRoute  path="/profile" component={Profile} />
            <PrivateRoute  path="/people" component={People} />
            <Singin  path="/login" />
            <PublicRoute  path="/registration" component={Registration} />
          </Switch>
          <Rightbar />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

