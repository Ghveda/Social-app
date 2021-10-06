import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
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
            <PrivateRoute exact path="/people" component={People} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/photos" component={Photos} />
            <PrivateRoute exact path="/people" component={People} />
            <Singin exact path="/login" />
            <PublicRoute exact path="/registration" component={Registration} />
          </Switch>
          <Rightbar />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

