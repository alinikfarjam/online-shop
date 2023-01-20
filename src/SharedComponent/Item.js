
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextProvider, CartDispatch } from "../Context/CartContext";
import "./item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Item = ({ image, title, price, id, product }) => {

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

    return (
        <section className="Item_Container">
            <figure>
                <img src={image} />
            </figure>
            <h3>{title.slice(0, 8)}</h3>
            <span>{price} $</span>
            <div className="Item_Button">
                {cart.cart.find(item => item.id == id) ?
                    <button onClick={() => AddHandler(product)} className="Item_inc">+</button> :
                    <button onClick={() => AddHandler(product)}>Add to Cart</button>

                }
                {icon(cart, product).quantity == 1 ?
                    <button className="Item_inc" onClick={() => DeleteHandler(product)}><FontAwesomeIcon icon={faTrash} /></button> :
                    <div></div>
                }
                {icon(cart, product).quantity > 1 ?
                    <button className="Item_inc Item_Dec" onClick={() => DecHandler(product)}>-</button> :
                    <div></div>

                }
                <Link to={`/Shop/${id}`} className="Link">Detail</Link>
            </div>
        </section>
    );
}

export default Item;