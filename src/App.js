import { Leftbar, Rightbar, TopBar } from "./components/navbar";
import { Home, People, Profile } from "./components/Pages";
import { Singin, Registration } from "./components/Pages/verification";
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import { Stack } from '@mui/material';
import { PrivateRoute, PublicRoute } from './components/routes/routes';
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { matchToken } from '../src/components/redux/actions/action';



const App = () => {
  const dispatch = useDispatch();
  const logout = useSelector(state => state.logout);
  const history = useHistory();


  useEffect(() => {

    axios.post('http://localhost:3000/users/token', {
      token: localStorage.getItem('token')
    })
      .then(response => {
        if (response.data?.username) {
          dispatch(matchToken(response.data.username.data))
        }
      })

  }, [])

  return (
    <Router>
      <div>
        <TopBar />
        <Stack direction="row" spacing={2}>
          <Leftbar />
          <Switch>
            <PrivateRoute path="/people" component={People} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/people" component={People} />
            <Singin path="/login" />
            <PublicRoute path="/registration" component={Registration} />
          </Switch>
          <Rightbar />
        </Stack>
      </div>
    </Router>
  );
}

export default App;

