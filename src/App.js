import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stack from '@mui/material/Stack';


const App= ()=> {
  return (
      <Router>
        <div>
          <TopBar/>
          <Stack direction="row" spacing={2}>
          <Leftbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/people">
              <People/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="photos">
              <Photos/>
            </Route>
          </Switch>
          <Rightbar/>
          </Stack>
        </div>
      </Router>
  );
}

export default App;

