import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import {BrowserRouter as Router,
         Route,
          Link,
           Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <p>this is app component</p>
        <nav>
          <Link to='/'><span>Home</span></Link>          
          <Link to='/login'><span>Log In</span></Link>
          <Link to='/friendlist'><span>Friend List</span></Link>
        </nav>
        

        <Switch>
          <PrivateRoute path='/friendlist' component={FriendsList}/>
          <Route path='/login' component={Login}></Route>
          <Route path='/'></Route>
        </Switch>



      </div>
    </Router>
  );
}

export default App;
