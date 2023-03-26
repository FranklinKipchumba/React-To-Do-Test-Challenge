import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import api from './utils/api';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

function App() {
  const handleLogout = async () => {
    await api.post('/logout');
    window.location.reload();
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route path="/edit/:id">
          <EditTodo />
        </Route>
        <Route path="/list">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
