
import React, { useEffect, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../Database/firebase';

const ImageUpload = ({ getUrls }) => {
    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);

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
                    setUrls(prev => [...prev, url]); 
                });

            promises.push(uploadPromise); 
        }

        try {
            await Promise.all(promises).then(() => {
                getUrls(urls)
            })
            console.log("Все файлы успешно загружены!");
        } catch (error) {
            console.error("Ошибка при загрузке файлов: ", error);
            console.log("Произошла ошибка при загрузке файлов.");
        }
    };

    return (
        <div>
            <h2>Загрузка нескольких файлов</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload} type='button'>Загрузить</button>
        </div>
    );
};

export default ImageUpload;
