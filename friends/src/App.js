import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,
         Route,
          Link,
           Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <p>this is app component</p>
        <nav>
          <Link to='/'><span>Home</span></Link>          
          <Link to='/login'><span>Log In</span></Link>
        </nav>
        

        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/'></Route>
        </Switch>



      </div>
    </Router>
  );
}

export default App;
