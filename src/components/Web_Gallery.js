import max_portfolio from "../assets/img/max_portfolio.png";
import automarket from "../assets/img/automarket.svg";
import carsloc from "../assets/img/carsloc.svg";

export const Web_Gallery = () => {

    return (
    <div className="gallery_body">
        <div className="gallery">
            <figure className="card">
                <a href="https://automarket.ch/" target="_blank" rel="noreferrer">
                    <img
                        src={automarket}
                        alt="automarket"
                    />
                </a>
            </figure>
            <figure className="card">
                <a href="https://carsloc.ch/" target="_blank" rel="noreferrer">
                    <img
                        src={carsloc}
                        alt="carsloc"
                    />
                </a>
            </figure>
            <figure className="card">
                <a href="https://moonlit-pudding-778bed.netlify.app/" target="_blank" rel="noreferrer">
                    <img
                        src={max_portfolio}
                        alt="maxsmithartist"
                    />
                </a>
            </figure>
        </div>
    </div>
    )
}