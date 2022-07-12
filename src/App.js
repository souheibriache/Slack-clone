import React  from 'react';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {

  const [{user}] =  useStateValue();
  return (
    //BEM naming convention
    <div className="app">
    

      <Router>
      {!user ? (
        <Login/>
      ) : (
       <>
        <Header />

      <div className="app__body">
        <SideBar/>
        <Switch>
          <Route path="/room/:roomId">
            <Chat/>
          </Route>
          <Route path="/">
            <h3>Welcome</h3>
          </Route>
        </Switch>
      
        {/* React-router =>chatscreen */}
      </div>
      </>
      )}
      
      
      </Router>
    </div>
  );
}

export default App;
