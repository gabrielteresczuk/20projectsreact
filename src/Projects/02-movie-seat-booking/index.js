import React, { useState } from 'react'
import Asiento from './Asiento';
import './style.css'

function MovieSeatBooking() {
    let pelidb = [
        {titulo:'Avengers: Endgame',precio:100},
        {titulo:'Joker',precio:150},
        {titulo:'Toy Story 4',precio:200},
    ]
    let opcion = ['vacio','ocupado'];
    let db = [];
    const CANT = 48
    for (let index = 0; index < CANT; index++) {
        db.push(opcion[Math.floor(Math.random()*opcion.length)]);
    }

    const [asientos, setAsientos] = useState(db);
    const [cantidad, setCantidad] = useState(0);
    const [pelicula, setPelicula] = useState(pelidb[0].precio);

    const handlePelicula = (valor) =>{
        console.log(valor);
        setPelicula(valor);
    }
    

    const handleChange = (valor,idx) =>{

        let nAsientos = [...asientos];
        let nCantidad = cantidad;

        if(valor==='vacio'){
            nAsientos[idx] = 'select';
            nCantidad++;
        }else{
            nAsientos[idx] = 'vacio';
            nCantidad--;
        }

        
        setAsientos(nAsientos);
        setCantidad(nCantidad);

    }


  return (
    <div className='MovieSeatBooking'>
    
        <div className='pelicula'>
            <label>Elegi una pelicula:</label>
            <select onChange={(e) => {handlePelicula(e.target.value)}} value={pelicula} >
               { pelidb.map((el) => <option key={el.titulo} value={el.precio}>{el.titulo} - ${el.precio}</option>)}
            </select>
        </div>

        <div className='asientos_muestra'>
            <div className='asientos_col'>
                <div className='asiento a_vacio'></div>
                N/A
            </div>
            <div className='asientos_col'>
                <div className='asiento a_sel'></div>
                Seleccionado
            </div>
            <div className='asientos_col'>
                <div className='asiento a_ocu'></div>
                Ocupado
            </div>
        </div>

        <div className='central'>

            <div className='pantalla'></div>
            <div className='asientos'>
                <div className='asientos_grid1'>

                    {asientos.map((el,idx) => <Asiento valor={el} key={idx} idx={idx} handleChange={handleChange}/>)}

                </div>
            </div>

        </div>

        <div className='resultados'>
            <p>Haz seleccionado <b>{cantidad}</b> asientos por el precio de <b>${cantidad*pelicula}.00</b></p>
        </div>
    
    </div>
  )
}

export default MovieSeatBooking