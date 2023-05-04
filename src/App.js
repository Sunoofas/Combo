
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Todo from './components/Todo';
import Mentors from './components/Mentors';
import Contact from './components/Contact';
import {  Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
<Navbar />

   
     <img src="pic-two.jpg" width="100%" height="20%"></img>
    

      <Routes> 
         <Route path='/' exact component={Home} />
         <Route path='/todo' exact component={Todo}/>
         <Route path='/mentors' exact component={Mentors}/>
         <Route path='/contact' exact component={Contact}/>
       
       </Routes>
  
    </div>
  
  );
}

export default App;
