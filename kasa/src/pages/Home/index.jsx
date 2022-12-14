import useFetch from "../../components/useFetch"
import React from "react";
import bannerHomePage from "../../assets/banner_homePage.png";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards"
import "./home.css";

function Home()
{
    const 
    {
        data: houses,
        error,
        isLoading,
    } = useFetch("https://raw.githubusercontent.com/FilizHakan/P11_Kasa/main/kasa/src/data/data.json")

    return (    
        <main>
            {isLoading && <div className="loading">Keep calm and npm install...</div>}
            <Banner image={bannerHomePage} type="Home" />
            {error && (<div className="errorMessage">Pas de panique, c'est juste une erreur !</div>)}
            {houses && <Cards houses={houses}/>}
        </main>
    );
}

export default Home;