import React, { useEffect } from 'react'
import './style.css'

function MealFinder() {

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])
    


  return (
    <div className='MealFinder'>index</div>
  )
}

export default MealFinder