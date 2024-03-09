import React, { useState, useEffect } from 'react'
import styles from './MakeOrderDetail.module.css'
import CategorySelector from './CategorySelector/CategorySelector'
import СnyPrice from './СnyPrice/СnyPrice'
import TotalCost from './TotalCost/TotalCost'
import OrderActions from './OrderActions/OrderActions'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";


function MakeOrderDetail() {
    const [sharedCategory, setSharedCategory] = useState('')
    const [sharedPriceValue, setSharedPriceValue] = useState('')

    let navigate = useNavigate();
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        const backButtonClickListener = () => {
            tg.BackButton.onClick(() => {
                navigate('/fines-shop-webapp.io/', {replace: true});
            })
        };
        tg.BackButton.onClick(backButtonClickListener);
    
        return () => {
          tg.BackButton.offClick(backButtonClickListener);
        };
      }, [tg]);
    
    return (
        <div className={styles.container}>
            <CategorySelector setSharedCategory={setSharedCategory}/>
            <СnyPrice setSharedPriceValue={setSharedPriceValue}/>
            <TotalCost sharedCategory={sharedCategory} sharedPriceValue={sharedPriceValue}/>
            <OrderActions />
        </div>
    )
}

export default MakeOrderDetail