import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";


function Inicio() {
  return (
    <div className='inicio'>
        <div className='inicio_hero' style={{       backgroundImage: `url("img/bg.jpg")`     }}>
            <h1>20 Proyectos con React.js</h1>
            <h2>Proyectos de Javascript realizados con React.js</h2>
        </div>

        <div className='inicio_cont' >

            <h1>Lista de Proyectos</h1>
            <p>La siguiente lista de proyectos, fueron realizados basados en la propuesta de <a className='link' href='https://github.com/bradtraversy/vanillawebprojects'>vanillawebprojects</a> </p>
            <p>Estos fueron logrados con el framework React.js</p>

            <div className='card_cont'>
                <div className='card'>
                    <img className='card_img' src="img/01.jpg"></img>
                    <h3>Form Validator</h3>
                    <p>Validacion manual de formulario.</p>
                    <NavLink
                        to={"/FormValidator"}
                        className="card_btn"
                        >
                        Abrir
                    </NavLink>
                </div>
                <div className='card'>
                    <img className='card_img' src="img/01.jpg"></img>
                    <h3>Form Validator</h3>
                    <p>Validacion manual de formulario.</p>
                    <NavLink
                        to={"/FormValidator"}
                        className="card_btn"
                        >
                        Abrir
                    </NavLink>
                </div>
                <div className='card'>
                    <img className='card_img' src="img/01.jpg"></img>
                    <h3>Form Validator</h3>
                    <p>Validacion manual de formulario.</p>
                    <NavLink
                        to={"/FormValidator"}
                        className="card_btn"
                        >
                        Abrir
                    </NavLink>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Inicio