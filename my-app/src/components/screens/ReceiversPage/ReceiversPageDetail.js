import React, { useEffect, useState } from 'react'
import styles from './ReceiversPageDetail.module.css'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import Receiver from '../../ReceiverCard/Receiver';
import getReceivers from '../../../Database/get_receivers';


function ReceiversPageDetail() {

    const [receiverInfo, setReceiverInfo] = useState([])
    let navigate = useNavigate();
    const {tg} = useTelegram();

    useEffect(() => {
        let arrForReceivers = []
        getReceivers(arrForReceivers)
        .then((result) => {
            setReceiverInfo(result)
        })
    }, [])


    useEffect(() => {
        tg.ready();
        tg.BackButton.show();
        const backButtonClickListener = () => {
            navigate(-1, {replace: true});
        };
        tg.BackButton.onClick(backButtonClickListener);
    
        return () => {
          tg.BackButton.offClick(backButtonClickListener);
        };
      }, [tg]);

  
    function handleMakeReceiver() {
        navigate('/fines-shop-webapp.io/makereceiverdetail', {replace: true})
    }
    return (
        <div className={styles.container}>
            <h1>Получатели:</h1>
            {receiverInfo.map((item,index) => (
                <Receiver city={item.city} fio={item.fio} phone={item.phone} street={item.phone} key={index} />
            ))}
            <button onClick={handleMakeReceiver}>создать получателя</button>
        </div>
    )
}

export default ReceiversPageDetail