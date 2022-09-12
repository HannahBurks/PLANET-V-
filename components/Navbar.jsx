
import styles from "../styles/Navbar.module.css"
import React from 'react'
import Image from "next/image"
import { useSelector } from "react-redux";
import Link from "next/link"

export const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src='/Images/Telephone.png' alt="" width={32} height={32}/>
      </div>
<div className={styles.texts}>
      <div className={styles.text}>ORDER NOW!</div>
      <div className={styles.text}>083 477 272</div>
      </div>
      </div>
      <div className={styles.item}>
<ul className={styles.list}>
  <Link href="/" passHref>
  <li className={styles.listItem}>Homepage</li>
  </Link>
  <Link href="/products" passHref>
  <li className={styles.listItem}>Products</li>
  </Link>
  <Link href="/menu" passHref>
  <li className={styles.listItem}>Menu</li>
  </Link>
  <Image src="/Images/PlanetV5.png" alt="PlanetV logo" width="230px" height="110px" />
  <Link href="/events" passHref>
  <li className={styles.listItem}>Events</li>
  </Link>
  <Link href="/blog" passHref>
  <li className={styles.listItem}>Blog</li>
  </Link>
  <Link href="/contact" passHref>
  <li className={styles.listItem}>Contact</li>
  </Link>
</ul>
      </div>
      <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/Images/Checkout2.png" alt="PlanetVlogo" width="45px" height="45px" /> 
        <div className={styles.counter}>{quantity}</div>
      </div>
      </div>
      </Link>
      </div>
  )
}
