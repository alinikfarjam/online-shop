import { useContext, useState } from "react";
import banner from "../assets/mid.jpg"
import { productContext } from "../Context/Contextdata";
import Item from "../SharedComponent/Item";
import "./home.css"
const Home = () => {
    const products = useContext(productContext);
    console.log(products)
    return (
        <section className="Home_container">
            <figure>
                <img src={banner} className="Home_banner" />
            </figure>
            <div className="Home_container_title">
                <p className="Home_title">Products</p><div className="Home_title_line"></div>
            </div>
            <section className="Home_products">
                {
                    products.map((product) => <Item key={product.id} id={product.id} image={product.image} title={product.title} product={product} price={product.price} />)
                }
            </section>
        </section>
    );
}

export default Home;