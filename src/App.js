import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { AnimatePresence } from 'framer-motion';

export default class componentName extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {color: "red"};
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScrollToElement);
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScrollToElement);
  }

  handleScrollToElement(e) {
    const url  = 'http://localhost:3000';

    const wheelRouter = (after, before) => {
      if (e.wheelDeltaY < 0){
        window.location.href = url + after;
      } else {
        window.location.href = url + before;
      }
    }

    setTimeout(() => {
      switch (window.location.href){
        case url + '/':
          if (e.wheelDeltaY < 0){
            window.location.href = url + '/projet-1';
          }
          break;
        case url + '/projet-1':
          wheelRouter('/projet-2', "/");
          break;
        case url + '/projet-2':
          wheelRouter('/projet-3', '/projet-1');
          break;    
        case url + '/projet-3':
          wheelRouter('/projet-4', '/projet-2');
          break;  
        case url + '/projet-4':
          wheelRouter('/contact', '/projet-3');
          break;
        case url + '/contact':
          if (e.wheelDeltaY > 0){
            window.location.href = url + '/projet-4';
          }
          break;
        default:
          console.log('nothing');
        }
    }, 250);
  }

  render() {
    return ( 
      <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projet-1" component={Project1} />
        <Route path="/projet-2" component={Project2} />
        <Route path="/projet-3" component={Project3} />
        <Route path="/projet-4" component={Project4} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      </AnimatePresence>
    );
  }
};
