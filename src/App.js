
import './App.css';
import FormValidator from './Projects/01-form-validator/index.js';
import Inicio from './Projects/Inicio/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieSeatBooking from './Projects/02-movie-seat-booking';
import CustomVideoPlayer from './Projects/03-custom-video-player';
import Nav from './Projects/Nav/index.js';
import {db} from './Projects/Inicio/db.js';
import ExchangeRate from './Projects/04-exchange-rate';
import ArrayMethods from './Projects/05-array-methods';
import ModalMenuSlider from './Projects/06-modal-menu-slider';
import HangMan from './Projects/07-hangman';
import MealFinder from './Projects/08-meal-finder';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter basename="/20projectsreact">
        <Nav db={db}/>
        <Routes>

          <Route path="/" element={<Inicio db={db}/>}/>
          <Route path="/20projectsreact"  element={<Inicio db={db}/>}/>
          <Route path="/FormValidator" element={<FormValidator/>}/>
          <Route path="/MovieSeatBooking" element={<MovieSeatBooking/>}/>
          <Route path="/CustomVideoPlayer" element={<CustomVideoPlayer/>}/>
          <Route path="/ExchangeRate" element={<ExchangeRate/>}/>
          <Route path="/ArrayMethods" element={<ArrayMethods/>}/>
          <Route path="/ModalMenuSlider" element={<ModalMenuSlider/>}/>
          <Route path="/HangMan" element={<HangMan/>}/>
          <Route path="/MealFinder" element={<MealFinder/>}/>


        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
