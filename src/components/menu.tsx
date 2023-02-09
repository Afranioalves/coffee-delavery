import { Outlet, Link } from "react-router-dom";
import './menu.css'

const Menu = () =>{
    return(
        <>
            <nav className="navbar">
                <img src="/images/Logo.png" alt="logo" className="logo" />
                <div className="section-2">
                    <div className="box-address">
                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            Porto Alegre, RS
                        </p>
                    </div>
                   <Link to="/checkout">
                        <button className="btn-go-to-cart">
                            <i className="fa-solid fa-cart-shopping "></i>
                        </button>
                    </Link>   
                </div>
            </nav>
            <Outlet />
        </>
    )
}   
export default Menu;