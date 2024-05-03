import React, { useState } from 'react'
import styles from './PurchaseScreen.module.css'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react'
import getReceivers from '../../../Database/get_receivers';


function PurchaseScreen() {
    let navigate = useNavigate();
    const {tg} = useTelegram();

    const location = useLocation()
    let itemsInfo = location.state.itemsInfo
    let finalPrice = location.state.finalPrice

    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [receivers, setReceivers] = useState([]);
    const [choosedReceiver, setChoosedReceiver] = useState('')


    let clearArray = [];
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
      
    useEffect(() => {
        getReceivers(clearArray)
        .then((res) => {
            setReceivers(res)
        })
    }, [])

    function handleReceiverClick() {
        navigate('/fines-shop-webapp.io/makereceiverdetail', {replace: true})
    }

    function handleDropdown() {
        setDropdownStatus(!dropdownStatus)
    }
    function handleChoose(event) {
        setChoosedReceiver(event.target.innerText)
        setDropdownStatus(!dropdownStatus)
    }

    return (
        <div>
            <h1>покупаемые предметы: 
                <ul>
                {itemsInfo.map((item,index) => (
                    <li key={index}>{item.Name}</li>
                ))} 
                </ul>
            </h1>
            <br/>
            <h2>всего к оплате: {finalPrice}</h2>
            <br/>
            <p>списать бонусы</p>
            <br/>
            <button onClick={handleDropdown}>{choosedReceiver ? choosedReceiver : 'выбрать получателя' }</button>
            {dropdownStatus ? 
            <ul>
                {receivers[0] ? receivers.map((data, index) => (
                    <li key={index} onClick={handleChoose}>{data.fio}</li>
                )) : <button onClick={handleReceiverClick}>еще нет получателя? создать получателя</button>}
            </ul> : ''}
            <br/>
            <strong>оплатить</strong>
        </div>
    )
}

export default PurchaseScreen