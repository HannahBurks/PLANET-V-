import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST VEGAN PIZZA IN THE GALAXY</h1>
        <p className={styles.desc}> A selection of pizzas that are &apos;Out of this world!&apos;. Freshly prepared, with all vegan and highly delicious ingredients. Unique flavours and combinations that are sure to be a taste sensation! </p>
        <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/> 
        ))}
        </div>
    </div>
  )
};

export default PizzaList;