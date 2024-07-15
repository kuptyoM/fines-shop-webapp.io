import React, { useEffect, useState } from 'react'
import addToCollection from '../../../Database/add_item_collection'

function AddItemsPage() {
    
    const [itemData, setItemData] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [photoUrl, setPhotoUrl] = useState('')


    const submit = e => {
        e.preventDefault();
        e.target.reset();
        if (name !== '' && photoUrl !== '' && price !== '') {
            setItemData({
                name: name,
                price: Number(price),
                photoUrl: photoUrl,
            });
        }
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
                <label id="name">Name</label>
                <input type="text" id="name" onChange={event => setName(event.target.value)}/>
                <label for="photo">PhotoUrl</label>
                <input type="text" id="photo" onChange={event => setPhotoUrl(event.target.value)}/>
                <label for="price">Price</label>
                <input type="number" id="price" onChange={event => setPrice(event.target.value)}/>
                <button>Сохранить</button>
                </form>
            </div>
    )
}

export default AddItemsPage