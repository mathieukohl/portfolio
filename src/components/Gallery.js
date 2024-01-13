import projImg1 from "../assets/img/stayinmtn.png";
import projImg2 from "../assets/img/melyjones.png";
import projImg3 from "../assets/img/ckecom.png";
import automarket from "../assets/img/automarket.svg";
import carsloc from "../assets/img/carsloc.svg";

export const Gallery = () => {

    return (
    <div className="gallery_body">
        <div className="gallery">
            <figure className="card">
            <a href="https://www.stayinmtn.com/" target="_blank" rel="noreferrer">
                <img
                    src={projImg1}
                    alt="img1"
                />
                </a>
            </figure>
            <figure className="card">
                <img
                    src={projImg2}
                    alt="img1"
                />
            </figure>
            <figure className="card">
                <img
                    src={projImg3}
                    alt="img1"
                />
            </figure>
            <figure className="card">
                <img
                    src={automarket}
                    alt="img1"
                />
            </figure>
            <figure className="card">
                <img
                    src={carsloc}
                    alt="img1"
                />
            </figure>
        </div>
    </div>
    )
}