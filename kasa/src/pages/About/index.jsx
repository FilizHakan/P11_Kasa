import Banner from "../../components/Banner";
import CollapseAbout from "../../components/CollapseAbout";
import bannerAbout from "../../assets/banner_aboutUs.png";

function About() 
{

      return (
        <main>
            <Banner image={bannerAbout} type="About"/>
            <CollapseAbout />
        </main>
      );
    };
    
    export default About;
