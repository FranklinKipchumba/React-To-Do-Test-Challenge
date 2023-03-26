import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './Home/home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Login from './login/Login';
import Signup from './signup/Signup';
import Dashboard from './Dashboard';
import AddForm from './Form/Addform';
import EditForm from './UpdateForm';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
          <Route
            path="/signup"
            render={(props) => <Signup {...props} setUser={setUser} />}
          />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} user={user} />}
          />
          <Route
            path="/add-data"
            render={(props) => <AddForm {...props} user={user} />}
          />
          <Route
            path="/edit-data/:id"
            render={(props) => <EditForm {...props} user={user} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
