import "./banner.css";

function Banner({ image, type }) {
  return type === "Home" ? (
    <div className="bannerHome">
      <img className="bannerHome__img" src={image} alt="Homepage banner" />
      <p className="bannerHome__title">Chez vous, partout et ailleurs</p>
    </div>
  ) : (
    <div className="bannerAbout">
      <img className="bannerAbout__img" src={image} alt="About banner" />
    </div>
  );
}

export default Banner;