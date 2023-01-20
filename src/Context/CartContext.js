import { useReducer, createContext } from "react";
//context
export const CartContextProvider = createContext();
export const CartDispatch = createContext();


//state reducer
const initialState = {
    cart: [],
    total: 0,

}


const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            {
                const copyState = [...state.cart];
                const index = copyState.findIndex((item) => item.id === action.payload.id);
                var sum = state.total;

                if (index < 0) {
                    copyState.push({ ...action.payload, quantity: 1 });
                    // sum = action.payload.price;

                } else {
                    const updateditem = { ...copyState[index] }
                    updateditem.quantity++;
                    copyState[index] = updateditem;
                    // sum = action.payload.price * action.payload.quantity
                }

                console.log(state.cart)
                return { ...state, cart: copyState, };

            }

        case "DECR_ITEM":
            {
                const copyState = [...state.cart];
                const index = copyState.findIndex((item) => item.id === action.payload.id);
                var sum = state.total;
                if (index > -1) {
                    const updateditem = { ...copyState[index] }
                    updateditem.quantity--;
                    copyState[index] = updateditem;


                }

                return { ...state, cart: copyState, }
            }

        case "DELETE_ITEM": {
            const copyState = [...state.cart];

            // const updateditem = { ...copyState[index] }
            // updateditem.quantity--;
            // copyState[index] = updateditem;
            const newState = copyState.filter(item => item.id != action.payload.id);


            return { ...state, cart: newState, }
        }

        case "Check_Out": {
            const newState = []
            const total = 0;
            return { cart: newState, total: total }
        }


        default:
            break;
    }
}

const CartContext = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContextProvider.Provider value={cart}>
            <CartDispatch.Provider value={dispatch}>
                {children}
            </CartDispatch.Provider>
        </CartContextProvider.Provider>
    );
}

export default CartContext;