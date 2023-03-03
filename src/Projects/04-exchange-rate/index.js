import React, { useEffect, useState } from 'react'
import './style.css'

function ExchangeRate() {


    const [data, setData] = useState(false);
    const [monedas, setMonedas] = useState([]);
    const [op1, setOp1] = useState('USD');
    const [op1val, setOp1val] = useState(1);

    const [op2, setOp2] = useState('ARS');

    useEffect(() => {
        fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            //console.log(data.rates);
            //console.log(data.rates['ARS'])
            setData(data.rates);
            //console.log(Object.entries(data.rates))
            let monedasArray = [];
            for (const key in data.rates) {
                monedasArray.push(key);
            }
            //console.log(monedasArray);
            setMonedas(monedasArray);
        });
    }, []);


    const changeValue = (e) =>{
        console.log(data[op1]);
        setOp1val(e.target.value)

    }

    const changeSelect = (e) =>{
        setOp1(e.target.value);
        //console.log(data[op2],',',data[e.target.value])
    }

    const changeSelectDos = (e) =>{
        setOp2(e.target.value)
    }
    
    const handleSwap = () =>{
        let op1mem = op1;
        let op2mem = op2;
        setOp1(op2mem);
        setOp2(op1mem);
    }



  return (
    <div className='ER'>
    
        <div className='ER_logo'>
            <span className="material-symbols-rounded">
            currency_exchange
            </span>
        </div>
        <h1>
            Calculadora de Cambios
        </h1>
        <p> Elige la moneda y el monto que deseas convertir.</p>

        {data &&
        <div className='ER_cont'>
            <div className='ER_fila'>
                <select className='ER_select' value={op1} onChange={changeSelect}>
                    {
                        monedas.map(el=> <option key={el}>{el}</option>)
                    }
                </select>
                <input className='ER_number' type='number' min='1' step='1' value={op1val} onChange={changeValue}></input>
            </div>

            <div className='ER_fila2'>
                <button className='ER_button' onClick={handleSwap}>
                    <span className="material-symbols-rounded">
                    swap_vert
                    </span>
                    Intercambiar
                </button>
                <p>
                1 {data[op1val]} = {(data[op2]).toFixed(2)} {op2}
                </p>
            </div>

            <div className='ER_fila'>

                <select className='ER_select'  onChange={changeSelectDos} value={op2}>
                    {
                        monedas.map(el=> <option key={el}>{el}</option>)
                    }
                </select>
                <input className='ER_number' type='number' min='1' step='1' value={(op1val*(data[op2]/data[op1])).toFixed(2)} readOnly></input>
            </div>
        </div>
    }
    </div>
  )
}

export default ExchangeRate