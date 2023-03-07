import React, { useEffect, useState } from 'react'
import './style.css'

function MealFinder() {

    const [receta, setReceta] = useState(false);
    const [ingredientes, setingredientes] = useState([]);


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            console.log(data.meals[0]);
            setReceta(data.meals[0]);
        });
    }, []);

    useEffect(() => {
        if(receta){
            let ningredientes = [];
            for (let index = 1; index < 21; index++) {
                if(receta['strIngredient'+index] != ''){
                    
                    ningredientes.push({
                        ingrediente:receta['strIngredient'+index],
                        cantidad:receta['strMeasure'+index]
                    })
                }
            }
            setingredientes(ningredientes);

        }
    }, [receta])
    
    const handleClick = () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            console.log(data.meals[0]);
            setReceta(data.meals[0]);
        });
    }


  return (
    <div className='MealFinder'>

        {receta &&
        <div className='mf_cont'>
            <div className='mf_header'>
                <h5>#{receta.idMeal}</h5>
                <button onClick={handleClick}> Buscar otra !</button>
            </div>
            
            <h1>{receta.strMeal}</h1>
            <img src={receta.strMealThumb}></img>
            <div className='mf_tags'>
                <p>{receta.strArea}</p>
                <small>{receta.strCategory}</small>
            </div>
            <p className='mf_cont_receta'>{receta.strInstructions}</p>
            <h2>Medidas</h2>
            <div className='mf_medidas_fila'>
                <div className='mf_medidas_cont'>
                    {ingredientes.map(el=>
                        <div className='mf_medidas_cont_fila'>
                        <p>{el.ingrediente}</p>
                            <div className='mef_medidas_puntos'></div>
                        <p>{el.cantidad}</p>   
                        </div>
                    )}
                
                </div>
            </div>
        </div>
        }
    
    </div>
  )
}

export default MealFinder