import React, { useEffect, useState } from 'react'
import './style.css'

function ArrayMethods() {


    const [personas, setPersonas] = useState(false);
    const [millon, setMillon] = useState(false);
    const [orden, setOrden] = useState(false);
    const [total, setTotal] = useState(false);


    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            //console.log(data.results);
            //data.results[0].money = Math.floor(Math.random() * 1000000);
            data.results.forEach(element => {
                element.money = Math.floor(Math.random() * 1000000);
                element.ver = true;
            });

            setPersonas(data.results);
        });
    }, []);


    const handleAdd = () =>{
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
            //console.log(data.results);
            //data.results[0].money = Math.floor(Math.random() * 1000000);
            data.results.forEach(element => {
                element.money = Math.floor(Math.random() * 1000000);
                element.ver = true;
            });
            setPersonas([...personas,...data.results])
        });
    }

    const handleDuplicar = () =>{
        console.log('duplicar');

        let datos = [...personas];

        datos.forEach(el => el.money = el.money*2);

        setPersonas(datos);

    }

    const handleMillonarie = () =>{
        console.log('solo millonarios');
        let datos = [...personas];
        if(!millon){
            datos.forEach(el => {
                if(el.money < 1000000){
                    el.ver = false;
                }
            });
        }else{
            datos.forEach(el => el.ver = true);
        }

        setMillon(!millon);
        setPersonas(datos);
    }

    const handleOrden = () =>{
        console.log('ordenar');

        let datos = [...personas];

        if(!orden){
            datos.sort((a, b) => b.money - a.money);
        }else{
            datos.sort((a, b) => a.money - b.money);
        }

        setOrden(!orden);
        setPersonas(datos);
    }
    
    const handleTotal = () =>{
        console.log('total');
        let datos = [...personas];
        const total = datos.reduce((acc, user) => (acc += user.money), 0);
        console.log(total);
        setTotal(total);
    }


  return (
    <div className='ArrayMethods'>
    
        <div className='ar_me_cont'>

            <h1>Array Methods</h1>

            <div className='ar_me_app'>
                <div className='ar_me_app_col'>
                    <button className='ar_me_btn' onClick={handleAdd}>
                        <span className="material-symbols-rounded">add</span> 
                        Agregar Usuario
                    </button>
                    <button className='ar_me_btn' onClick={handleDuplicar}>
                        <span className="material-symbols-rounded">attach_money</span> 
                        Duplicar Dinero
                    </button>
                    <button className='ar_me_btn' onClick={handleMillonarie}>
                        <span className="material-symbols-rounded">payments</span> 
                        {!millon?'Solo Millonarios':'Todos' }
                    </button>
                    <button className='ar_me_btn' onClick={handleOrden}>
                        <span className="material-symbols-rounded">swap_vert</span> 
                        Ordenar
                    </button>
                    <button className='ar_me_btn' onClick={handleTotal}>
                        <span className="material-symbols-rounded">update</span> 
                        Calcular Total
                    </button>
                </div>

                <div className='ar_me_app_col'>
                    <div className='ar_me_app_linea'></div>
                </div>
                
                <div className='ar_me_app_col'>
                    <div className='ar_me_app_col_fila'>
                        <h2>Persona</h2>
                        <h3>Dinero</h3>
                    </div>
                    <hr className='ar_me_app_col_hr'></hr>
                    <div className='arr_me_app_col_cont'>
                        {personas ?
                        personas.map((el,idx) =>
                            el.ver &&
                            <div className='ar_me_card' key={idx}>
                                <div className='ar_me_card_prof'>
                                    <img src={el.picture.thumbnail}></img>
                                    <div className='ar_me_card_prof_data'>
                                        <h3>{el.name.title} {el.name.last} {el.name.first}</h3>
                                        <p>{el.location.country}</p>
                                    </div>
                                </div>
                                <div className='ar_me_card_dinero'>$ {el.money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
                            </div>
                        
                        ):''


                        }
                    </div>
                    {
                        total &&
                        <div className='ar_me_app_col_fila'>
                            <h3>Total:</h3>
                            <h4>${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h4>
                        </div>
                    }

                </div>
            </div>

        </div>
    
    </div>
  )
}

export default ArrayMethods