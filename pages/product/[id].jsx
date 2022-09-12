import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Product.module.css";
import {useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import { addProduct } from '../../components/redux/cartSlice';

const Product = ({pizza}) => {
  const [price, setPrice] = useState(pizza.price[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

const changePrice = (number) => {
 setPrice(price + number);
}


const handleSize = (sizeIndex) => {
 const difference = pizza.price[sizeIndex] - pizza.price[size];
 setSize(sizeIndex);
 changePrice(difference)
}


const handleChange = (e, option) => {
  const checked = e.target.checked;

  if (checked) {
    changePrice(option.price);
    setExtras((prev)=>[...prev, option]);
  } else {
changePrice(-option.price)
setExtras(extras.filter((extra) => extra._id !== option._id));
  };
};

const handleClick = () => {
  dispatch(addProduct({...pizza, extras, price, quantity}));
};



  return (
    <div className={styles.container}>
<div className={styles.left}>
<div className={styles.imgContainer}>
    <Image alt={pizza.title} src={pizza.img} layout="fill" />
</div>
</div>
<div className={styles.right}>
  <h1 className={styles.title}>{pizza.title}</h1>
  <span className={styles.price}>£{price.toFixed(2)}</span>
  <p className={styles.desc}>{pizza.desc}</p>
  <h3 className={styles.choose}>Choose size</h3>
  <div className={styles.sizes}>
  <div className={styles.size} onClick={() => handleSize(0)}>
<Image alt="Small" src="/Images/size2.png" layout="fill"/>
<span className={styles.number}>Small</span>
    </div>
    <div className={styles.size} onClick={() => handleSize(1)}>
<Image alt="Medium" src=  "/Images/size2.png" layout="fill"/>
<span className={styles.number}>Medium</span>
    </div>
    <div className={styles.size} onClick={() => handleSize(2)}>
<Image alt="Large" src="/Images/size2.png" layout="fill"/>
<span className={styles.number}>Large</span>
    </div>
  </div>
  <h3 className={styles.choose}>Extras</h3>
  <div className={styles.ingredients}>
    {pizza.extraOptions.map((option) => (
<div className={styles.option} key={option._id}>
  <input
  type="checkbox"
  id={option._id}
  name={option.text}
  className={styles.checkbox}
  onChange={(e) => handleChange(e, option)}
  />
 <label htmlFor={option.text}>{option.text}</label>
</div>
 ))}
  </div>
  <div className={styles.add}>
    <input onChange={(e) => setQuantity(e.target.value) } type="number" defaultValue={1} className={styles.quantity}></input>
<button className={styles.button} onClick={handleClick}>Add to cart</button>
  </div>
</div>
</div>

  )
}

export const getServerSideProps = async ({params}) => {

  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props:{
     pizza: res.data,
    },
  };

};

export default Product;