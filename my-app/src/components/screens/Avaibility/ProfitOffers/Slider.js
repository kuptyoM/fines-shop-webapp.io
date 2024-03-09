import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styles from './Slider.module.css'
import getSliderItems from '../../../../Database/get_slider_items';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Slider() {
  const [sliderItems, setSliderItems] = useState([]);

  let sliderArr = [];
  useEffect(() => {
    getSliderItems(sliderArr)
      .then(() => {
        setSliderItems(sliderArr);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <AutoPlaySwipeableViews>
      {sliderItems.map((item, index) => (
        <div key={index} className={styles.slide}>
          <img className={styles.sliderImg} src={item.Photo} alt={item.Name} />
          {item.Name}, цена:{item.Price}
        </div>
      ))}
   </AutoPlaySwipeableViews>
  );
} 

export default Slider;