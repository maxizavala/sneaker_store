import React, { useState, useEffect } from "react";
import ItemList from './ItemList';

const ItemListContainer = () => {
  
    setTimeout(() => {
        console.log('Esto se ejecuta despues de 2 segundos')
    }, 2000);


    return(
        <div className="container">
            <ItemList/>
        </div> 
    )
    
}

export default ItemListContainer