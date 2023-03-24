import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddData from './components/AddData';
import EditData from './components/EditData';

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
            render={(props) => <AddData {...props} user={user} />}
          />
          <Route
            path="/edit-data/:id"
            render={(props) => <EditData {...props} user={user} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
