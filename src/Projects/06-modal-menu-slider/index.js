import React, { useState } from 'react'
import './style.css'

function ModalMenuSlider() {

    const [menu, setMenu] = useState(false);

    const handleMenu = () =>{
        setMenu(!menu);
    }

  return (
    <div className='ModalMenuSlider'>

        <nav className=
        {!menu?'mome_nav':'mome_nav mome_nav_active'}
        >
        
            <img className='mome_nav_img' src='https://picsum.photos/80'></img>
            <ul className='mome_nav_ul'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact me</li>
            </ul>
        </nav>
        <div className='mome_container'>
            <div className='memo_hero'>
                
                    <button className='memo_nav_btn' onClick={handleMenu}>
                        <span class="material-symbols-rounded">
                            {menu?'close':'menu'}
                        </span>
                    </button>
                
                <h1>My Landing Page</h1>
                <h3>En esta pagina solo funciona el menu izquierdo</h3>
                <button className='memo_hero_btn'>Sing UP</button>
            </div>
            <div className='memo_cuerpo'>

                <h2>What is this landing page about?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusamus ab consectetur eos provident ipsa est perferendis architecto. Provident, quaerat asperiores. Quo esse minus repellat sapiente, impedit obcaecati necessitatibus.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio officia ipsa. Cum dignissimos possimus et non provident facilis saepe!</p>
            
                <h2>Tell Me More</h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque delectus explicabo qui reprehenderit? Aspernatur ad similique minima accusamus maiores accusantium libero autem iusto reiciendis ullam impedit esse quibusdam, deleniti laudantium rerum beatae, deserunt nemo neque, obcaecati exercitationem sit. Earum.</p>

                <h2>Benefits</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam nostrum, fugiat, itaque natus officia laborum dolorum id accusantium culpa architecto tenetur fuga? Consequatur provident rerum eius ratione dolor officiis doloremque minima optio dignissimos doloribus odio debitis vero cumque itaque excepturi a neque, expedita nulla earum accusamus repellat adipisci veritatis quam. Ipsum fugiat iusto pariatur consectetur quas libero dolor dolores dolorem, nostrum ducimus doloremque placeat accusamus iste, culpa quaerat consequatur?</p>
            
            </div>
        </div>

    </div>
  )
}

export default ModalMenuSlider