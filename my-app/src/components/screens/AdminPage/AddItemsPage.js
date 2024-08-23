import React, { useEffect, useState } from 'react'
import addToCollection from '../../../Database/add_item_collection'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../Database/firebase';

function AddItemsPage() {
    const [files, setFiles] = useState([]);
    const [itemData, setItemData] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [sizes, setSizes] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrls, setImageUrls] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)

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
                    setImageUrls(prev => [...prev, url]); 
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
        setFiles([])
        setItemData({
            name: name,
            price: Number(price),
            imageUrls: imageUrls,
            sizes: sizes,
            description: description,
        });
      }

      useEffect(() => {
        if (itemData.name) {
            addToCollection(itemData)
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
                <label for="size">Размеры (через запятую)</label>
                <input type="text" id="size" onChange={event => setSizes(event.target.value.split(',').map(size => size.trim()))} required/>
                <label for="description">Описание</label>
                <input type="text" id="description" onChange={event => setDescription(event.target.value)}/>
                <div>
                    <h2>Фото товара</h2>
                    <input type="file" multiple onChange={handleFileChange} required/>
                    <button onClick={handleUpload} type='button'>Загрузить фото</button>
                </div>
                <button type='submit' disabled={isDisabled}>Сохранить</button>
                </form>
            </div>
    )
}

export default AddItemsPage

