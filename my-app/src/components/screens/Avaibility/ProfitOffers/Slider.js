import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './Slider.module.css'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider({ sliderItems }) {

  return (
    <AutoPlaySwipeableViews>
      {sliderItems.map((item, index) => (
        <div key={index} className={styles.slide}>
          <img className={styles.sliderImg} src={item.imageUrl} alt={item.name} />
          {item.name}, цена:{item.price}
        </div>
      ))}
   </AutoPlaySwipeableViews>
  );
} 

export default Slider;