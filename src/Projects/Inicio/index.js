
import './style.css'
import { NavLink } from "react-router-dom";


function Inicio({db}) {


  return (
    <div className='inicio' >

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