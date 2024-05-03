import React, { useState } from 'react'
import styles from './MakeReceiverDetail.module.css'
import { useTelegram } from '../../../hooks/useTelegram'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import addReceiver from '../../../Database/add_receiver';

function MakeReceiverDetail() {
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('')
    const [fio, setFio] = useState('')
    const [phone, setPhone] = useState('')
    let navigate = useNavigate();
    const {tg} = useTelegram();

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

      const submit = e => {
        e.preventDefault()
        console.log(city,street,fio,phone)
        if (city !== '' && street !== '' && fio !== '' && phone !== '') {
            addReceiver(city, street, fio, phone);
            navigate(-1)
        }
      }
    return (
            <div className={styles.container}>
                <h1>Данные получателя</h1>
                <form onSubmit={submit}>
                <label id="city">Город</label>
                <input type="text" id="city" onChange={event => setCity(event.target.value)}/>
                <label for="street">Улица</label>
                <input type="text" id="street" onChange={event => setStreet(event.target.value)}/>
                <label for="fio">ФИО получателя</label>
                <input type="text" id="fio" onChange={event => setFio(event.target.value)}/>
                <label for="phone">Телефон получателя</label>
                <input type="text" id="phone" onChange={event => setPhone(event.target.value)}/>
                <button>Сохранить</button>
                </form>
            </div>
    )
}

export default MakeReceiverDetail