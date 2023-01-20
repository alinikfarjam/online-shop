import axios from "axios";
import { Context, createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Contextdata = ({ children }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getComment = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProduct(res.data);
            } catch (erorr) {
                console.log(erorr);
            }

        }
        getComment();
    }, [])

    return (
        <productContext.Provider value={product}>
            {children}
        </productContext.Provider>
    );
}
export default Contextdata;