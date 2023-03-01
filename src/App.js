
import './App.css';
import FormValidator from './Projects/01-form-validator/index.js';
import Inicio from './Projects/Inicio/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter >
        <Routes>

          <Route path="/" element={<Inicio/>}/>
          <Route path="/20projectsreact" element={<Inicio/>}/>
          <Route path="/FormValidator" element={<FormValidator/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
