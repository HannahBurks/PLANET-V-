
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import {useState} from 'react';
import React from 'react';

function Featured() {
const [index, setIndex] = useState(0)
const images = [
    "/Images/FeaturedContent2.png",
    "/Images/FeaturedContent3.png",
    "/Images/FeaturedContent5.png",

];


const handleArrow =(direction) => {
    if(direction ==="l"){
        setIndex(index !==0 ? index-1 : 2)
    }
    if(direction ==="r"){
        setIndex(index !== 2 ? index+1 : 0)
    }
}
  return (
    <div className={styles.container}>
    
        <div className={styles.arrowContainer} style={{left:0}}  onClick={() => handleArrow("l")}>
        <Image src="/Images/arrowl.png" alt="arrow" layout='fill' objectFit='contain'/>
        </div>
        <div className ={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}> 
        {images.map((img, i) => (
            <div className ={styles.imgContainer} key={i}> 
            <Image src={img} alt="featured content" layout="fill" objectFit='contain'/>
            </div>
        ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow("r")}>
        <Image src="/Images/arrowr.png" alt="arrow" objectFit='contain' layout='fill' />
        </div>
      </div>
  )
}

export default Featured