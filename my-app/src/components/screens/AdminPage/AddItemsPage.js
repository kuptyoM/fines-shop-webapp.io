import React, { useEffect, useState } from 'react'
import addToCollection from '../../../Database/add_item_collection'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../Database/firebase';

function AddItemsPage() {
    const [files, setFiles] = useState([]);
    const [itemData, setItemData] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [imageUrls, setImageUrls] = useState([])

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
            console.log("Все файлы успешно загружены!");
        } catch (error) {
            console.error("Ошибка при загрузке файлов: ", error);
            console.log("Произошла ошибка при загрузке файлов.");
        }
    };

    const submit = e => {
        e.preventDefault();
        e.target.reset();
        if (name !== '' && imageUrls !== '' && price !== '') {
            setItemData({
                name: name,
                price: Number(price),
                imageUrls: imageUrls,
                size: size,
                description: description,
                quantity: quantity
            });
        }
      }

      useEffect(() => {
        if (itemData.name) {
            addToCollection(itemData)
        }
      }, [itemData])
    
    useEffect(() => {
        console.log(imageUrls, imageUrls[0])
    }, [imageUrls])

    return (
            <div>
                <h1>NeW iTeM iNfO</h1>
                <form onSubmit={submit}>
                <label id="name">Name</label>
                <input type="text" id="name" onChange={event => setName(event.target.value)}/>
                <label for="price">Price</label>
                <input type="number" id="price" onChange={event => setPrice(event.target.value)}/>
                <label for="size">Size</label>
                <input type="text" id="size" onChange={event => setSize(event.target.value)}/>
                <label for="description">Description</label>
                <input type="text" id="description" onChange={event => setDescription(event.target.value)}/>
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" onChange={event => setQuantity(event.target.value)}/>
                <div>
                    <h2>Загрузка нескольких файлов</h2>
                    <input type="file" multiple onChange={handleFileChange} />
                    <button onClick={handleUpload} type='button'>Загрузить</button>
                </div>
                <button type='submit'>Сохранить</button>
                </form>
            </div>
    )
}

export default AddItemsPage

