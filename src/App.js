import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import Navbar from './components/Nav'
import Add from './views/Add'
import Update from './views/Update'
import Single from './views/Single'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <Home path="/pirates"/>
        <Add path="/create"/>
        <Single path="/pirates/:_id"/>
        <Update path="/pirates/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
