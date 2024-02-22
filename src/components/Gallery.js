import projImg1 from "../assets/img/stayinmtn.png";
import projImg2 from "../assets/img/melyjones.png";
import projImg3 from "../assets/img/ckecom.png";

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
        </div>
    </div>
    )
}