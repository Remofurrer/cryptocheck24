import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contactform from './pages/Contactform';
import Questions from './pages/Questions';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contactform" element={<Contactform />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
