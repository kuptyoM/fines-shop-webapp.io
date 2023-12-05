import React from 'react'
import styles from './AvaibilityDetail.module.css'
import ProfitOffers from './ProfitOffers/ProfitOffers'
import Collection from './Searching/Collection'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";


function AvaibilityDetail() {

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
            <ProfitOffers />
            <Collection />
        </div>
    )
}

export default AvaibilityDetail