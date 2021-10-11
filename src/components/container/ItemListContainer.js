import ItemList from './ItemList';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { productos } from '../productos';


const ItemListContainer = () => {

    let [art, setArt] = useState(null);

    let { categoria } = useParams();

    useEffect(()=>{
        const getProducts = new Promise((res)=>{

            let lista
            if (categoria) {
                lista = productos.filter(art => art.categoria === categoria);
            } else {
                lista = productos
            }

            setTimeout( () => res(lista), 2000)
        })
        getProducts.then( (art) => {
            setArt(art)
        })
    },[categoria])

    return(
        <div className="container">
            <ItemList productos={ art } />
        </div> 
    )
    
}

export default ItemListContainer
