import useFetch from "../../components/useFetch"
import React from "react";
import bannerHomePage from "../../assets/banner_homePage.png";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards"
import "./home.css";

const Home = ()=>
{
    const 
    {
        data: blogs,
        error,
        isLoading,
    } = useFetch("https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json")

    return (    
        <main>
            <Banner image={bannerHomePage} type="Home" />
            {isLoading && <div className="loading">Chargement en cours...</div>}
            {error && (<div className="errorMessage">Désolé, une erreur est survenue pendant le chargement de la page !</div>)}
            {blogs && <Cards blogs={blogs}/>}
        </main>
    );
}

export default Home;