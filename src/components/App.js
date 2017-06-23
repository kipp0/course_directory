import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (

  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={() => <About title='About'/>}/>
      <Route path="/teachers" component={Teachers}/>
      <Route path="/courses" component={Courses}/>
    </div>
  </BrowserRouter>
);

export default App;

// use render instead of component when you need to pass props to the component
