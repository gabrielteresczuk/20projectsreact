import React, { useState } from 'react'
import { NavLink, useLocation } from "react-router-dom";

function Nav({db}) {

    const location = useLocation();
    //console.log(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    //console.log(window.location.pathname);
    //console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1));

    let addr = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    let index = db.findIndex(el => el.link === addr);
    //console.log(index);

    let anterior = false;
    let siguiente = true;

    if(index > 0){
        anterior = true;
    }

    if(index+1 === db.length){

        siguiente = false
    }

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
    <div className={navactive ? 'inicio_nav navactive' : 'inicio_nav'} >
    <nav className='nav'>
    
    <NavLink to={"/"} >
    <div className='home'>
        
            <span className="material-symbols-rounded">
            satellite_alt
            </span>
        Home
        
    </div>
    </NavLink>
    
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
        {anterior &&
        <NavLink to={'/'+db[index-1].link} >
        <li>
            <span className="material-symbols-rounded">
                arrow_back_ios
            </span>
        Anterior
        </li>
        </NavLink>
        }
        {siguiente &&
        <NavLink to={'/'+db[index+1].link} >
        <li>Siguiente
            <span className="material-symbols-rounded">
                arrow_forward_ios
            </span>
        </li>
        </NavLink>
        }
    </ul>
    </nav>
</div>
  )
}

export default Nav