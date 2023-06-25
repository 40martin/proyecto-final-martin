import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import productos from "./json/productos.json";
import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000); 
        });

        promesa.then(data => {
            setItems(data);
        })

    }, []);

   return (
        <div className="container-fluid">
            <div className="row">
                <div className="alert alert-danger" role="alert">{greeting}</div>
                    <ItemList items={items} />
                    <ItemCount stock={9} />
                </div>
            </div>
        
    )
}

export default ItemListContainer;