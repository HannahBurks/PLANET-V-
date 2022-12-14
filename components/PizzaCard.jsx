import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'
import Link from "next/link";

function PizzaCard({pizza}) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
    <Image className={styles.Pizza} src={pizza.img} alt={pizza.title} width="500" height="500" />
    </Link>
    <h1 className={styles.title}>{pizza.title}</h1>
    <span className={styles.price}>{pizza.price[0]}</span>
    <p className={styles.desc}>{pizza.desc} </p>
    </div>
  )
}

export default PizzaCard