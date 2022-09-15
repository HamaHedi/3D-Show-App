import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/posts/:id' exact component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
