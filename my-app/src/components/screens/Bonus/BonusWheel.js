import React, { useState, useRef } from 'react'
import styles from './BonusWheel.module.css'

const sectors = ['Like', 'Comment', 'Share', 'Subscribe', 'Support', 'Visit'];

function BonusWheel() {
    const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    const randomRotation = Math.ceil(Math.random() * 10000);
    setRotation(rotation + randomRotation);
  };

  return (
    <div className={styles.container} style={{ transform: `rotate(${rotation}deg)` }}>
      {sectors.map((sector, index) => (
        <div key={index} className={styles.sector} style={{ transform: `rotate(${index * (360 / sectors.length)}deg)` }}>{sector}</div>
      ))};
      <span className={styles.mid}></span>
      
      <button className={styles.spin} onClick={handleClick}>Spin</button>
      <div className={styles.stoper}></div>
    </div>
  );
};



export default BonusWheel