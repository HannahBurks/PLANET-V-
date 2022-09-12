
import styles from "../styles/Footer.module.css"
import Image from "next/image"
import React from 'react'

export const Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
     <Image src="/Images/galaxy.jpg" layout="fill" alt="space background" objectFit="cover" />
     </div>
     <div className={styles.item}>
     <div className={styles.card}> 
     <h2 className={styles.motto}>THE BEST VEGAN PIZZA IN THE GALAXY</h2>
     </div>
     <div className={styles.card}>
     <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
     <p className={styles.text}>
127, Pizza Brick Lane 
<br/> London, E78 4NQ
<br/> (083) 477 272
     </p>
     <p className={styles.text}>
52, Burnt oven lane 
<br/> London, SE8 5N9
<br/> (084) 473 273
     </p>
     <p className={styles.text}>
89, Olive Terraced 
<br/> London, N78 5NQ
<br/> (083) 937 373
     </p>
     <p className={styles.text}>
103, Basil grove
<br/> Manchester, M12 47L
<br/> (083) 417 232
     </p>
     </div>
     <div className={styles.card}>
     <h1 className={styles.title}>OPENING HOURS</h1>
     <p className={styles.text}>
 MONDAY - FRIDAY 
 <br/> 9:00 - 22:30
     </p>
     <p className={styles.text}>
       SATURDAY - SUNDAY 
       <br/> 10:00 - 24:00
     </p>
      </div>
      </div>
      </div>
      
  )
}
