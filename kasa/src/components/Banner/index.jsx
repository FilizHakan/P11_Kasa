import "./banner.css";

function Banner({ image, type }) 
{
  return type === "Home" ? (
    <div className="bannerHome">
      <img src={image} className="Homepage" alt="Homepage banner" />
      <div className="bannerHomeMask"></div>
      <p className="bannerHome__title">Chez vous, partout et ailleurs</p>
    </div>
  ) : (
    <div className="bannerAbout">
      <img src={image} className="About" alt="About banner" />
      <div className="bannerAboutMask"></div>
    </div>
  );
}

export default Banner;