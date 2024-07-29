import React, { useEffect, useState } from 'react'
import addToCollection from '../../../Database/add_item_collection'

function AddItemsPage() {
    
    const [itemData, setItemData] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUrls, setImageUrls] = useState([])
    const [size, setSize] = useState([])
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(0)

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

    //   setItemData({
    //     name: 'AirJordan5',
    //     price: 1700,
    //     imageUrls: ['https://ir.ozone.ru/s3/multimedia-0/c1000/6651312480.jpg', 'https://i.ytimg.com/vi/675D4qtnxA0/maxresdefault.jpg'],
    //     sizes: [44,45,46],
    //     description: 'FAKE FAKE FAKE',
    //     quantity: quantity
    // });


    // addToCollection({
    //     name: 'AirJordan5',
    //     price: 1700,
    //     imageUrls: ['https://ir.ozone.ru/s3/multimedia-0/c1000/6651312480.jpg', 'https://i.ytimg.com/vi/675D4qtnxA0/maxresdefault.jpg'],
    //     sizes: [44,45,46],
    //     description: 'FAKE FAKE FAKE',
    //     quantity: 1
    // })
    return (
            <div>
                <h1>NeW iTeM iNfO</h1>
                <form onSubmit={submit}>
                <label id="name">Name</label>
                <input type="text" id="name" onChange={event => setName(event.target.value)}/>
                <label for="photo">PhotoUrl</label>
                <input type="text" id="photo" onChange={event => setImageUrls(event.target.value)}/>
                <label for="price">Price</label>
                <input type="number" id="price" onChange={event => setPrice(event.target.value)}/>
                <label for="size">Size</label>
                <input type="text" id="size" onChange={event => setSize(event.target.value)}/>
                <label for="description">Description</label>
                <input type="text" id="description" onChange={event => setDescription(event.target.value)}/>
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" onChange={event => setQuantity(event.target.value)}/>
                <button>Сохранить</button>
                </form>
            </div>
    )
}

export default AddItemsPage