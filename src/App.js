import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {AuthContext} from './context/Authcontext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './login';
import Register from './register';








function App() {
    const {auth} = useContext(AuthContext) 
 
    

return(
  <div>

  
    <Routes>
   
      <Route path='/' exact Component={Login}/>
      <Route path='/register' exact Component={Register}/>
    
 
    </Routes>

  </div>
)
}

export default App;