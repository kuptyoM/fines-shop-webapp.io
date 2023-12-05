import React from 'react'
import styles from './BonusDetail.module.css'
import BonusWheel from './BonusWheel'
import BonusFooter from './BonusFooter/BonusFooter'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

function BonusDetail() {
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
            <div className={styles.mainContainer}>
                <BonusWheel />
                <BonusFooter />
            </div>
            <div className={styles.secondContainer}>
                Получить попытку
            </div>
        </div>
    )
}

export default BonusDetail