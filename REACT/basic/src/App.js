import {useState,useEffect} from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';

function App() {


  const [state, setstate] = useState('lets change the name')
  const [inc,setInc] = useState(0)


  useEffect(() => {
    console.log('working')
  },[])
  


const handleClick = () =>{
  var val = "Heya, it's changed"
  setstate(val)
}
const handleName = (name, e) =>{
  console.log('hey there ' + name  , e.cancelable)
}


  return (
    <Router>
    <div className="App">

      <Navbar />

      <div className="content">
        <h3>Hi There</h3>
        <button onClick={handleClick}>click here</button>
        <button onClick={(e) => {handleName('mehul',e)}}>Try this one</button>
        <p>{state}</p>
        <Switch>

            <Route exact path="/">
        
                <Home />
        
            </Route>

            <Route path="/create">
        
                <Create />
        
            </Route>
        
        </Switch>

        <button onClick={() => setInc(data => data + 1)}>Inc button</button>
        <p>{inc}</p> 
       

      </div>
      
    </div>
    </Router>
  );
}

export default App;
