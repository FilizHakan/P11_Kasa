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
            {isLoading && <div className="loading">Keep calm and npm install...</div>}
            {error && (<div className="errorMessage">Pas de panique, c'est juste une erreur !</div>)}
            {blogs && <Cards blogs={blogs}/>}
        </main>
    );
}

export default Home;