import React, { useEffect, useState } from 'react'
import addToCollection from '../../../Database/add_item_collection'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../Database/firebase';
import addToSlider from '../../../Database/add_item_slider';

function AddSliderItemsPage() {
    const [files, setFiles] = useState([]);
    const [itemData, setItemData] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [imageUrl, setImageUrl] = useState('')

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            alert("Пожалуйста, выберите файлы для загрузки.");
            return;
        }

        const promises = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const storageRef = ref(storage, `images/${file.name}`);
            
            const uploadPromise = uploadBytes(storageRef, file)
                .then(() => getDownloadURL(storageRef))
                .then((url) => {
                    setImageUrl(prev => [...prev, url]); 
                });

            promises.push(uploadPromise); 
        }

        try {
            await Promise.all(promises)
            setIsDisabled(false)
            console.log("Все файлы успешно загружены!");
        } catch (error) {
            console.error("Ошибка при загрузке файлов: ", error);
            console.log("Произошла ошибка при загрузке файлов.");
        }
    };

    const submit = e => {
        e.preventDefault();
        e.target.reset();
        setItemData({
            name: name,
            price: Number(price),
            imageUrl: imageUrl,
        });

      }

      useEffect(() => {
        if (itemData.name) {
            addToSlider(itemData)
        }
      }, [itemData])
    


    return (
            <div>
                <h1>NeW iTeM iNfO</h1>
                <form onSubmit={submit}>
                <label id="name">Название</label>
                <input type="text" id="name" onChange={event => setName(event.target.value)} required/>
                <label for="price">Цена</label>
                <input type="number" id="price" onChange={event => setPrice(event.target.value)} required/>
                <div>
                    <h2>Фото товара</h2>
                    <input type="file" onChange={handleFileChange} required/>
                    <button onClick={handleUpload} type='button'>Загрузить фото</button>
                </div>
                <button type='submit' disabled={isDisabled}>Сохранить</button>
                </form>
            </div>
    )
}

export default AddSliderItemsPage

