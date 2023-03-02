import React, { useState } from 'react'
import './style.css'
import { NavLink } from "react-router-dom";
import {db} from './db.js'

console.log(db);

function Inicio() {

   

    const [navactive, setNavactive] = useState(false);
    const [listado, setListado] = useState(false);

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 110){
           setNavactive(true);
        }else{
            setNavactive(false);
        }
    })

    const handleListado = () =>{
        setListado(!listado);
    }

  return (
    <div className='inicio' >
        <div className={navactive ? 'inicio_nav navactive' : 'inicio_nav'} >
            <nav className='nav'>
            <div className='home'>
                <span className="material-symbols-rounded">
                satellite_alt
                </span>
            Home
            </div>
            <ul>
                <li className='listado' onClick={handleListado}>
                    <span className="material-symbols-rounded">
                        list
                    </span>
                Listado
                    {listado &&
                    <div className='listado_cont'>
                        {
                            db.map((el,idx)=>
                                <NavLink key={idx} to={"/"+el.link} className="listado_link">{idx+1} - {el.titulo}</NavLink>
                            )
                        }

                    </div>
                    }
                </li>
                <li>
                    <span className="material-symbols-rounded">
                        arrow_back_ios
                    </span>
                Anterior
                </li>
                <li>Siguiente
                    <span className="material-symbols-rounded">
                        arrow_forward_ios
                    </span>
                </li>
            </ul>
            </nav>
        </div>
        <div className='inicio_hero' style={{       backgroundImage: `url("`+process.env.PUBLIC_URL+`/img/bg2.jpg")`     }}>
            <h1>20 Proyectos con React.js</h1>
            <h2>Proyectos de Javascript realizados con React.js</h2>
        </div>

        <div className='inicio_cont' >

            <h1>Lista de Proyectos</h1>
            <p>La siguiente lista de proyectos, fueron realizados basados en la propuesta de <a className='link' href='https://github.com/bradtraversy/vanillawebprojects'>vanillawebprojects</a> </p>
            <p>Estos fueron logrados con el framework React.js</p>

            <div className='card_cont'>

                {db.map((el,idx)=>
                
                <div className='card' key={idx}>
                    <img className='card_img' src={process.env.PUBLIC_URL+"/img/"+el.img} alt={el.titulo}></img>
                    <h3>{el.titulo}</h3>
                    <p>{el.texto}</p>
                    <NavLink
                        to={"/"+el.link}
                        className="card_btn"
                        >
                        Abrir
                    </NavLink>
                </div>
                
                )}

 

            </div>

        </div>
    </div>
  )
}

export default Inicio