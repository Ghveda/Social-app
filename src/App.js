import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile, Photos } from "./components/Pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App= ()=> {
  return (
      <Router>
        <div>
          <TopBar/>
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
        </div>
      </Router>
  );
}

export default App;

