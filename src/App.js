import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container d-flex align-items-center flex-column">
        <Router>
          <Switch>
              <Route path="/register" exact={true}>
                <RegistrationForm />
              </Route>
              <Route path="/login" exact={true}>
                <Login />
              </Route>
          </Switch>
        </Router>  
      </div>
    </div>
  );
}

export default App;
