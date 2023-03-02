import React, { useRef, useState } from 'react'
import './style.css'

//le damos un valor al formulario
let initailForm = {
    usuario: "",
    email: "",
    pass: "",
    repass: "",
  };

let initialError ={
    usuario: "",
    email: "",
    pass: "",
    repass: "", 
}

function FormValidator() {


    const [form, setForm] = useState(initailForm);
    const [errors, setErrors] = useState(initialError);
    const usuario = useRef();
    const email = useRef();
    const pass = useRef();
    const repass = useRef();

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.clear();
        console.log('1 - enviando...');
        
        if(validarCampos()){
            console.log('3 - campos validados!');
            console.log('4 - envio correcto');
        }else{
            console.log('3 - campos SIN validar!');
            console.log('4 - envio FALLIDO');
        }
        

    }

    const validarCampos = () =>{
        console.log('2 - validando....');
        let newErrors = {...initialError};

        if(form.usuario.length < 3){
            newErrors.usuario = 'Debe tener mas de 3 caracteres';
            usuario.current.className = 'rojo';
        }else{
            usuario.current.className = 'verde';
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(form.email.trim())) {
            newErrors.email = 'No es una direccion valida';
            email.current.className = 'rojo';
        }else{
            email.current.className = 'verde';
        }

        if(form.pass.length < 6){
            newErrors.pass = 'Debe tener mas de 6 caracteres';
            pass.current.className = 'rojo';
        }else{
            pass.current.className = 'verde';
        }

        if((form.pass !== form.repass) || (form.pass === '')){
            newErrors.repass = 'La contraseña no coincide';
            repass.current.className = 'rojo';
        }else{
            repass.current.className = 'verde';
        }

        setErrors(newErrors);

        for (const key in newErrors) {
            if(newErrors[key] !== ''){
                return false;
            }
        }

        return true;
    }



  return (
    <div className='App_Container'>
    <div className='FormValidator_cont'>

        <form autoComplete='off' onSubmit={handleSubmit}>

            <h2>Registrate!</h2>

            <p>Rellena todos los campos</p>

            <div className='form_fila'>
                <div className='input_cont'>
                    <span className="material-symbols-rounded icon">person</span>
                    <label htmlFor='usuario'>Usuario:</label>
                </div>
                
                    
                <input type='text' name='usuario' id='usuario'  placeholder='Nombre de Usuario' 
                

                 ref={usuario}
                 onChange={handleChange}
                 value={form.usuario}/>
                 
                 <small>{errors.usuario}</small>
                 </div>
            
            <div className='form_fila'>
                <div className='input_cont'>
                    <span className="material-symbols-rounded icon">mail</span>
                    <label htmlFor='email'>Email:</label>
                </div>
                <input type='text' name='email' id='email'  placeholder='Direccion de Correo' 
                ref={email}   
                onChange={handleChange}
                value={form.email}/>
                <small>{errors.email}</small>
            </div>

            <div className='form_fila'>
                <div className='input_cont'>
                    <span className="material-symbols-rounded icon">password</span>
                    <label htmlFor='pass'>Contraseña</label>
                </div>
                <input type='password' name='pass'  id='pass' placeholder='Contraseña'
                ref={pass} 
                onChange={handleChange}
                 value={form.pass}/>
                 <small>{errors.pass}</small>
            </div>

            <div className='form_fila'>
                <div className='input_cont'>
                    <span className="material-symbols-rounded icon">password</span>
                    <label htmlFor='repass'>Confirmar Contraseña</label>
                </div>
                <input type='password' name='repass' id='repass' placeholder='Confirmar Contraseña' 
                ref={repass} 
                onChange={handleChange}
                value={form.repass}/>
                <small>{errors.repass}</small>
            </div>

            <input type='submit' className='enviar'/>

        </form>

    </div>
    </div>
  )
}

export default FormValidator