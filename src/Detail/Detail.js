import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { productContext } from '../Context/Contextdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContextProvider, CartDispatch } from "../Context/CartContext";

import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./detail.css"
import { Link } from 'react-router-dom';
const Detail = (props) => {
    const { id } = useParams();
    const data = useContext(productContext);
    const dispatch = useContext(CartDispatch);
    const cart = useContext(CartContextProvider);



    const AddHandler = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    }
    const DecHandler = (product) => {
        dispatch({ type: "DECR_ITEM", payload: product });

    }
    const DeleteHandler = (product) => {
        dispatch({ type: "DELETE_ITEM", payload: product });
    }

    const icon = (state, product) => {
        const index = state.cart.findIndex(item => item.id == product.id);
        if (index === -1) {
            return false;
        } else {
            return state.cart[index];
        }
    }

    const product = data[id - 1];
    return (
        <section className="Detail_container">
            <img src={product.image} className="Detail_image" />
            <div className="Detail_textcontainer">
                <p className="Detail_title">{product.title}</p>
                <p>description: {product.description.slice(0, 105)}</p>
                <p>category : {product.category}</p>
                <p className="Detail_price">{product.price} $</p>
                <div className="Detail_Button">
                    {cart.cart.find(item => item.id == id) ?
                        <button onClick={() => AddHandler(product)} className="Detail_inc">+</button> :
                        <button onClick={() => AddHandler(product)}>Add to Cart</button>

                    }
                    {icon(cart, product).quantity == 1 ?
                        <button className="Detail_inc" onClick={() => DeleteHandler(product)}><FontAwesomeIcon icon={faTrash} /></button> :
                        <div></div>
                    }
                    {icon(cart, product).quantity > 1 ?
                        <button className="Detail_inc Detail_Decrase" onClick={() => DecHandler(product)}>-</button> :
                        <div></div>

                    }
                </div>
                <Link to="/" className="Detail_Link">go to back shop</Link>
            </div>
        </section>
    );
}

export default Detail;