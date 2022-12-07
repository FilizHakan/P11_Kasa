import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import "./about.css";
import bannerAbout from "../../assets/banner_aboutUs.png";

const About = () => 
{

      return (
        <main>
            <Banner image={bannerAbout} type="About"/>
            <Collapse />
        </main>
      );
    };
    
    export default About;
