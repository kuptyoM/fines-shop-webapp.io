import React, {useState, useEffect} from 'react'
import styles from './ProfitOffers.module.css'
import Slider from './Slider.js'
import getSliderItems from './../../../../Database/get_slider_items';

function ProfitOffers() {

    const [sliderData, setSliderData] = useState([])
    let sliderArr = []
    useEffect(() => {
        getSliderItems(sliderArr)
        .then(() => setSliderData(sliderArr))
    }, [])

    return (
        <div className={styles.container}>
            Выгодные предложения

            <Slider sliderItems={sliderData}/>
        </div>
    )
}

export default ProfitOffers