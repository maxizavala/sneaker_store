import {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container'
import ItemList from './ItemList';
import { firestore } from "../../firebase"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    let [titulo, setTitulo] = useState(null);

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

                categoria !== undefined ? setTitulo(categoria) : setTitulo("Home")
                

            })
            .catch(error => {
                console.log(error)
            })

    },[categoria])

    return(
        <Container>
            <h1 className="tith1"> { titulo } </h1>
            <ItemList productos={ art } />
        </Container> 
    )
    
}

export default ItemListContainer
