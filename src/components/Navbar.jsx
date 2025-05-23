import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../Context/CartContext'; // Ændret fra react-redux til useCart
import "bulma/css/bulma.min.css";

export default function NavBar() {
    const navigate = useNavigate();
    const { cartItems } = useCart(); // Brug useCart i stedet for useSelector
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#1E2B18', borderBottom: '2px solid #F0F0F0' }}>
            <div className="navbar-brand">
                <a className="navbar-item is-size-5 has-text-weight-semibold ml-5" href="/" style={{ fontFamily: 'Mr Dafoe', color: '#F0F0F0' }}>
                    Blomster 🌸 Webshop
                </a>

                <a 
                    role="button" 
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                    aria-label="menu" 
                    aria-expanded={isActive} 
                    onClick={toggleNavbar} 
                    style={{ border: '2px solid #F0F0F0' }}
                >
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                    <span aria-hidden="true" style={{ color: '#F0F0F0' }}></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} style={{ color: '#F0F0F0', backgroundColor:'#1E2B18' }}>
                <div className="navbar-end is-size-5 px-5 has-text-weight-medium">
                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/')}>
                        Forside
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/omwebshop')}>
                        Om Webshopen
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/produkter')}>
                        Produkter
                    </a>

                    <a className="navbar-item" style={{ color: '#F0F0F0' }} onClick={() => navigate('/kurv')}>
                       Kurv ({cartItemCount})
                    </a>

                </div>
                <button className="button has-shadow my-3 mx-5" style={{ boxShadow: '#b6baba 0 0 0.5em', color: '#1E2B18', backgroundColor: '#F0F0F0'}}
                    onClick={() => navigate('/tjekud')} >
                    Tjek ud
                </button>
            </div>
        </nav>
    );
}