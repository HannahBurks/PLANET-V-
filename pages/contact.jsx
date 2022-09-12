import React from 'react'

import styles from "../styles/contact.module.css";
const contact = () => {
  return (
      <div className={styles.container}>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>CONTACT US</h1>
        <h3> 083 477 272 </h3>
        <h3> PlanetV@fakeEmail.com</h3>
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
    </div>
  )
}

export default contact