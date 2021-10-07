import ItemList from './ItemList';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { productos } from '../productos';


const ItemListContainer = () => {

    let [art, setProduct] = useState(null);

    let { categoria } = useParams();

    if (categoria) {
        art = productos.filter(art => art.categoria === categoria);
    }

    useEffect(()=>{
        const getProducts = new Promise((res)=>{
            setTimeout( () => res(productos), 2000)
        })
        getProducts.then( (art) => {
            setProduct(art)
        })
    },[])

    return(
        <div className="container">
            <ItemList productos={ art } />
        </div> 
    )
    
}

export default ItemListContainer
