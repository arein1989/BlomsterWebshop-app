import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { useCart } from '../Context/CartContext';
import 'bulma/css/bulma.min.css';

export default function Kurv() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <>
            <Navbar />
            <div className="container mt-2">
                {cartItems.length === 0 ? (
                    <div className='container container is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
                        <div className='mt-5 ml-5 is-align-items-center'>
                            <p className="title mt-5" style={{ color: '#F0F0F0' }}>Din kurv er tom 🌺!</p>
                        </div>
                        <button
                            onClick={() => navigate('/produkter')}
                            className="button is-large is-primary my-6"
                            style={{ backgroundColor: '#F0F0F0', color: '#1E2B18' }}
                        >
                            Produkter
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="box">
                            <h2 className="title is-3">Din indkøbskurv</h2>
                            {cartItems.map((item) => (
                                <div className="media mb-4" key={item.idBlomst}>
                                    <div className="media-left">
                                        <figure className="image is-64x64">
                                            <img src={item.image} alt={item.name} />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5">{item.name}</p>
                                        <p className="subtitle is-6">Pris: {item.price} kr</p>
                                        <div className="buttons">
                                            <button
                                                className="button is-danger is-small"
                                                onClick={() => removeFromCart(item.idBlomst)}
                                            >
                                                Fjern
                                            </button>
                                            <div className="field has-addons">
                                                <p className="control">
                                                    <button
                                                        className="button is-small"
                                                        onClick={() => updateQuantity(item.idBlomst, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                </p>
                                                <p className="control">
                                                    <input
                                                        className="input is-small"
                                                        type="text"
                                                        value={item.quantity}
                                                        style={{ width: '50px', textAlign: 'center' }}
                                                        readOnly
                                                    />
                                                </p>
                                                <p className="control">
                                                    <button
                                                        className="button is-small"
                                                        onClick={() => updateQuantity(item.idBlomst, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                        <p>Total: {(item.price * item.quantity).toFixed(2)} kr</p>
                                    </div>
                                </div>
                            ))}
                            <div className="has-text-right">
                                <h3 className="title is-4">Samlet pris: {totalPrice.toFixed(2)} kr</h3>
                                <button
                                    className="button is-medium"
                                    onClick={() => navigate('/tjekud')}
                                    style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
                                >
                                    Gå til tjek ud
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}