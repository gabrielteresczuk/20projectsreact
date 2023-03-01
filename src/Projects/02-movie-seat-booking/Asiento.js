import React from 'react'

function Asiento({valor,idx,handleChange}) {
  return (
    <div className={`asiento
    ${valor ==='vacio' ? 'a_vacio' :''}
    ${valor ==='ocupado' ? 'a_ocu' :''}
    ${valor ==='select' ? 'a_sel' :''}
    `
    
    }

    onClick={valor !== 'ocupado'?
        ()=>handleChange(valor,idx):()=>{}
        }
    >

    </div>
  )
}

export default Asiento