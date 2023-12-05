import React from 'react'
import styles from './InfoDetail.module.css'
import InfoBlock from './InfoBlock'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

function InfoDetail() {

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
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h1>Руководства</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.secondContainer}>
                    <InfoBlock innerText={'Как рассчитать стоимость'}/>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </div>
                <div className={styles.secondContainer}>
                    <InfoBlock innerText={'Как подобрать размер'}/>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </div>
            </div>
        </div>
    )
}

export default InfoDetail