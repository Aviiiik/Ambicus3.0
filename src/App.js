import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Chat from './pages/chat';
import Notes from './pages/notes';
import About from './pages/aboutus';
import Register from './pages/register';
import Signin from './pages/signin';
import {auth} from './firebase'
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>

        </Routes>
        </div>
  );
}

export default App;
