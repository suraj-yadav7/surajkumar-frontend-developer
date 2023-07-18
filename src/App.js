import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Capsules from './components/Capsules';


function App() {
  return (
<>
<Router>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route excat path="/capsules" element={<Capsules/>} />
    <Route path="*" element={<h1>Page Not Found:(404) </h1>} />
  </Routes>
</Router>
</>
  );
}

export default App;
