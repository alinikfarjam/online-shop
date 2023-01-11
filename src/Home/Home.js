import banner from "../assets/mid.jpg"
import Contextdata from "../Context/Contextdata";
import "./home.css"
const Home = () => {
    return (
        <section className="Home_container">
            <figure>
                <img src={banner} className="Home_banner" />
            </figure>
            <Contextdata />
        </section>
    );
}

export default Home;