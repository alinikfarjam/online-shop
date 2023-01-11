import axios from "axios";
import { Context, createContext, useState } from "react";

const productContext = createContext()
const Contextdata = ({ children }) => {
    const [product, setProduct] = useState();
    axios.get("https://fakestoreapi.com/products")
        .then(res => setProduct(res.data));

    return (
        <productContext.Provider value={product}>
            {children}
        </productContext.Provider>
    );
}

export default Contextdata;