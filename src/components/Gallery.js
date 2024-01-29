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
                <a href="https://www.melyjones.ch/" target="_blank" rel="noreferrer">
                    <img
                        src={projImg2}
                        alt="img1"
                    />
                </a>
            </figure>
            <figure className="card">
                <a href="https://www.ck-ecom.com/" target="_blank" rel="noreferrer">
                    <img
                        src={projImg3}
                        alt="img1"
                    />
                </a>
            </figure>
            <figure className="card">
                <a href="https://automarket.ch/" target="_blank" rel="noreferrer">
                    <img
                        src={automarket}
                        alt="img1"
                    />
                </a>
            </figure>
            <figure className="card">
                <a href="https://carsloc.ch/" target="_blank" rel="noreferrer">
                    <img
                        src={carsloc}
                        alt="img1"
                    />
                </a>
            </figure>
        </div>
    </div>
    )
}