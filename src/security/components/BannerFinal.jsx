import { Link } from 'react-router-dom';

export const BannerFinal = () => {
  return (
    <div className="banner-final">
        <div className="container-banner">
            <h1>Disfruta de la tranquilidad de estar seguro</h1>

            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>

            <div className="navbar-collapse d-flex banner-links">
                    <Link   className="nav-link nav-item link-button"
                            to="/contacto">
                        Contratar
                    </Link>

                    <Link  className="nav-link nav-item"
                           to="/monitoreo">
                        Descubrir
                    </Link>
            </div>
        </div>
    </div>
  )
}