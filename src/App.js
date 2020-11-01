import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import {Project1, Project2, Project3, Project4} from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("projet-1");
            }, 500);
          }
          break;
        case url + "projet-1":
          wheelRouter("projet-2", "");
          break;
        case url + "projet-2":
          wheelRouter("projet-3", "projet-1");
          break;
        case url + "projet-3":
          wheelRouter("projet-4", "projet-2");
          break;
        case url + "projet-4":
          wheelRouter("contact", "projet-3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("projet-4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/projet-1" component={Project1} />
        <Route path="/projet-2" component={Project2} />
        <Route path="/projet-3" component={Project3} />
        <Route path="/projet-4" component={Project4} />
        <Route path="/contact" component={Contact} />
        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
