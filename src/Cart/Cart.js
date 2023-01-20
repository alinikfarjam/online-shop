import { useContext } from "react";
import { CartContextProvider, CartDispatch } from "../Context/CartContext";
import { productContext } from '../Context/Contextdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import "./cart.css"
import { Link } from "react-router-dom";
const Cart = () => {
    const cart = useContext(CartContextProvider);
    const dispatch = useContext(CartDispatch);

    const AddHandler = (product) => {
        dispatch({ type: "ADD_ITEM", payload: product });
    }
    const DecHandler = (product) => {
        dispatch({ type: "DECR_ITEM", payload: product });

    }
    const DeleteHandler = (product) => {
        dispatch({ type: "DELETE_ITEM", payload: product });
    }
    const CheckOut = (product) => {
        dispatch({ type: "Check_Out", payload: product })
    }


    const icon = (state, product) => {
        const index = state.cart.findIndex(item => item.id == product.id);
        if (index === -1) {
            return false;
        } else {
            return state.cart[index];
        }
    }

    function clacSum(state) {
        const res = state.cart.reduce((sum, acc) => sum + (acc.price * acc.quantity), 0)
        return res;
    }
    return (
        cart.cart.length ? <section className="Cart_continer">
            <div className="Cart_items">
                {cart.cart.map(item => <div className="Cart_item">
                    <figure><img src={item.image} /></figure>
                    <p>{item.title.slice(0, 8)}</p>
                    <div className="Cart_Button">
                        {cart.cart.find(it => it.id == item.id) ?
                            <button onClick={() => AddHandler(item)} className="Cart_inc">+</button> :
                            <button onClick={() => AddHandler(item)}>Add to Cart</button>

                        }
                        {icon(cart, item).quantity == 1 ?
                            <button className=" Cart_Trash" onClick={() => DeleteHandler(item)}><FontAwesomeIcon icon={faTrash} /></button> :
                            <div></div>
                        }
                        {icon(cart, item).quantity > 1 ?
                            <button className="Cart_Decrase" onClick={() => DecHandler(item)}>-</button> :
                            <div></div>
                        }
                    </div>
                    <span className="Cart_quantity">{item.quantity}</span>
                    <span className="Cart_price">{item.quantity * item.price}</span>
                </div>)
                }
            </div>
            <div className="Cart_checkout">
                <div>
                    <p>Total :</p>
                    <p>{clacSum(cart).toFixed(3)} $</p>
                </div>
                <button onClick={() => CheckOut()}>
                    Check Out
                </button>
            </div>
        </section> :
            <section className="Cart_empty">
                <p>Your Cart is Empty</p>
                <Link className="Cart_Link" to="/Shop"><button>Go TO Shop</button></Link>
            </section>
    );
}

export default Cart;