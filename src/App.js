import React from 'react'
import Post from "./post"
import Carussel from './carussel'
import NavigationBar from "./navBar"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Folowers from './folowers';
import Folowing from './folowing';
function App() {
  
  return (
    <Router>
    <div className="App">
       <NavigationBar/>
       <Switch>
       <Route path="/post" component={Post}/>
       <Route path='/folowers' component={Folowers}/>
       <Route path="/folowing" component={Folowing}/>
       <Route path="/" exact component={Carussel}/>
       </Switch>  
    </div>
    </Router>
  );
}

export default App;