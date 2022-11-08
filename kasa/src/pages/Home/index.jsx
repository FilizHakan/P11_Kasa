import React from "react";
import Data from "../../data/data.json"
import bannerHomePage from "../../assets/banner_homePage.png";
import Banner from "../../components/Banner";
import GalleryCards from "../../components/GalleryCards"

function Home()
{
    return (
        <main>
            <Banner image={bannerHomePage} type="Home" />
            <div>
                {Data.map((singleHouse) => {
                    return <GalleryCards item={singleHouse} key={singleHouse.id}></GalleryCards>;
                })}
            </div>      
        </main>
    );
}

export default Home;