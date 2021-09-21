import react from 'react';
import Movies from './movies/movies.jsx';
import Calculator from './calculator/Calculator.jsx';
import LifeCycleDemo from './calculator/lifecycledemo/LifeCycleDemo.jsx';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ParentToChild } from './calculator/Parenttochild.jsx';
import { ChildToParent } from './calculator/Childtoparent.jsx';

function App() {

  return (
    <div className="App">
      <div>Hello World</div><hr />
    <Router>
      <Link to='/movies'>Movies</Link><br />
      <Link to='/calc'>Calculator</Link><br />
      <Link to='/lifecycle'>LifeCycleDemo</Link><br />
      <Link to='/parenttochild'>ParentToChild</Link>  <br/>  
      <Link to='/childtoparent'>ChildToParent</Link><hr />


        
      <Route path='/movies' component={Movies}/>
      <Route path='/calc' component={Calculator}/>
      <Route path='/lifecycle' component={LifeCycleDemo}/>
      <Route path='/parenttochild' component={ParentToChild}/>
      <Route path='/childtoparent' component={ChildToParent} />

    </Router>
     

    </div>
  );
}

export default App;
