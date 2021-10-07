import ItemList from './ItemList';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const articulos = [
    {id: 1, categoria: "hombre", nombre: "Nike M2K Tekno", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dweb3a9dc7/products/NI_AO3108-401/NI_AO3108-401-1.JPG?sw=400&sh=400", precio: "$7.800,00"}, 
    {id: 2, categoria: "mujer", nombre: "Nike Air Max 200", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwaa5211b9/products/NI_AT6175-100/NI_AT6175-100-1.JPG?sw=400&sh=400", precio: "$8.100,00"}, 
    {id: 3, categoria: "hombre", nombre: "Nike Air Max 270", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3b12c7eb/products/NI_AH6789-107/NI_AH6789-107-1.JPG?sw=400&sh=400", precio: "$7.900,00"}
]

function crearPromesa() {
    return new Promise((resolve) => {  
        setTimeout(
            function(){                          
                resolve(articulos);  
        }, 2000);      
    });     
}

const ItemListContainer = () => {

    let { categoria } = useParams();
    
    let [articulos, setArticulos] = useState(null);

    useEffect(() => {     
           
        let requestArticulos = crearPromesa();

        requestArticulos
        .then( function(items_promise){
            setArticulos(items_promise);               
        })      
    }, []);

    if (categoria) {
        let filtrados = articulos.filter(art => art.categoria === categoria);
        articulos = filtrados
    }

    return(
        <div className="container">
            <ItemList productos={ articulos } categoria={categoria}/>
        </div> 
    )
    
}

export default ItemListContainer
