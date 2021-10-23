import ItemList from './ItemList';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { firestore } from "../../firebase"


const ItemListContainer = () => {

    let [art, setArt] = useState(null);

    let { categoria } = useParams();

    useEffect(()=>{

        const collection = firestore.collection("productos")

        let query = categoria === undefined ? collection.get() : collection.where('categoria', '==', categoria).get();

        query
            .then((resultado) => {
                
                const request = resultado.docs

                const productos = []

                request.forEach( item => {
                    const id = item.id
                    const info = item.data()

                    const producto = {id, ...info}
                    productos.push(producto)
                });

                setArt(productos)

            })
            .catch(error => {
                console.log(error)
            })

    },[categoria])

    return(
        <div className="container">
            <ItemList productos={ art } />
        </div> 
    )
    
}

export default ItemListContainer
