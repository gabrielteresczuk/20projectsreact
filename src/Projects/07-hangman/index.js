import React, { useCallback, useEffect, useRef, useState } from 'react'
import './style.css'

let palabras = ['javascript','programacion','react']

function HangMan() {

    const [palabra, setPalabra] = useState(false);
    const [letra, setLetra] = useState(false);
    const [palabraGame, setPalabraGame] = useState(false);
    const [letraEquivocada, setLetraEquivocata] = useState([]);
    const [intentos, setIntentos] = useState(0);
    const [resultado, setResultado] = useState(false);

    const popup = useRef();
    const dibujo = useRef();

    useEffect(() => {
        if(palabra){
            document.addEventListener('keydown',(e)=>{
                //console.log(e.key);
                if(e.keyCode >= 65 && e.keyCode <= 90){
                    setLetra(e.key);
                }
                

            });
            return () => {
                document.removeEventListener('keydown', ()=>{});
            };
        }

    }, [palabra]);

    useEffect(() => {
        if(letra){
            if(palabra.includes(letra)){
                let npalabraGame = [...palabraGame];
                
                palabra.forEach((el,idx) => {
                    if(el === letra){
                        npalabraGame[idx] = letra; 
                    }
                });
                setPalabraGame(npalabraGame);

                let c = 0;
                npalabraGame.forEach(el =>{
                    if(el){
                        c++
                    }
                });
                if(c === palabra.length){
                    setResultado(2);
                }

            }else{
                let nletraequivocada = [...letraEquivocada];

                if(nletraequivocada.includes(letra)){
                    popup.current.style = 'opacity:1';
                    popup.current.addEventListener('transitionend',()=>{
                        console.log('terminado');
                        popup.current.style = 'opacity:0';
                    });
                }else{
                    setIntentos(intentos+1);
                    setLetraEquivocata([...letraEquivocada,letra]);
                }

            }
            setLetra(false);
        }
    }, [letra]);
    
    

    useEffect(() => {
        if(!resultado){
            let buscarPalabra = palabras[Math.floor(Math.random() * palabras.length)].split('');
            let npalabraGame = [...buscarPalabra];
            npalabraGame.fill('',0,npalabraGame.length);
            setPalabra(buscarPalabra);
            setPalabraGame(npalabraGame);
            setLetraEquivocata([]);
            console.log('CARGO EL JUEGO');
        }

    }, [resultado]);

    useEffect(() => {
        if(letra){
            console.log('usted eligio la letra ', letra);
        }
    }, [letra]);

    useEffect(() => {
        if(intentos){
            if(intentos<=5){
                
                let prueba = dibujo.current.querySelectorAll('.figure-part');
                
                for (let index = 0; index < intentos; index++) {
                    prueba[index].style = 'display:block';
                }
                
            }else{
                setResultado(1);
            }
        }else{
            let prueba = dibujo.current.querySelectorAll('.figure-part');
            for (let index = 0; index < 6; index++) {
                prueba[index].style = 'display:none';
            }
        };

    }, [intentos]);


        
    
    
    const handleRestart = () =>{
        console.log('Reinicio de Partida');
        setIntentos(0);
        setResultado(false);
    }

  return (
    <div className='HangMan' >
    
        <h1>AHORCADO</h1>
        <p>Ingresa letras, hasta hallar la palabra completa.</p>

        <div className='hm_game'>

        <svg height="250" width="200" className="figure-container" ref={dibujo}>

            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />


            <circle cx="140" cy="70" r="20" className="figure-part" />

            <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />

            <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
            <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />

            <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
            <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />
            
        </svg>

            <div className='hg_game_palabra'>

                {   palabra &&
                    palabraGame.map((el,idx) => <div className='hg_game_letra' key={idx}>{el}</div>)
                }

            </div>

            <div className='hg_game_incorrectas'>
                <p>Letras Incorrectas:</p>
                <div className='hg_game_letra_inc'>{letraEquivocada.map(el => el != false? <span>{el}</span>:'')}</div>
            </div>
            


        </div>

        <div className='hg_game_msg' ref={popup}>
            <span class="material-symbols-rounded">block</span>  
           <p>Ya ingresaste esa letra</p> 
        </div>
        {resultado &&
            <div className='hg_game_over'>
                    <div className='hg_game_over_msg'>
                        <h3>Juego Terminado</h3>
                        <h2>{resultado === 1?'Desafortunadamente Perdiste':'Eres el Ganador!'}</h2>
                        <button onClick={handleRestart}>Jugar Denuevo!</button>
                    </div>
            </div>
        }
    
    </div>
  )
}

export default HangMan