import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../src/Components/Navbar/navbar';

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Navbar/>}/> 
    </Routes>
  </Router>
  );
}

export default App;
