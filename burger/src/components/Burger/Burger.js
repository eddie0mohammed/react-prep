import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import classes from './Burger.module.css';


const Burger = (props) => {

    const {ingredients} = props;
    let IngArr = Object.entries(ingredients);
    IngArr.pop(); //remove price from array
    IngArr.pop(); //remove purchasing from array
    // console.log(IngArr);
    let newArr = [];
    IngArr.forEach(elem => {
        for (let i = 0; i < elem[1]; i++){
            newArr.push(elem[0]);
        }
    })
    // console.log(newArr);

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
           
           {newArr.length > 0 ? 
            newArr.map((ingredient,i) => {
                return <BurgerIngredients key={i} type={ingredient} />
            })
            :
            <div>Please start adding ingredients</div>
        }
        
            <BurgerIngredients type="bread-bottom"/>

        </div>
    )
}

export default Burger
