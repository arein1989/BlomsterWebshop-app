import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { useCart } from '../Context/CartContext'; // Importer useCart fra CartContext
import Navbar from "../components/Navbar"

export default function TjekUd() {
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCompleteOrder = () => {
        // Ryd kurven efter ordre er gennemført
        clearCart();
        // Naviger til tak-siden
        navigate('/tak');
    };

    return (
        <>
            <Navbar />
            <div className="section mt-5">
                <div className='box mt-5'>
                    <h2 className="title">Tjek Ud</h2>
                    <div className="box">
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Produkter</th>
                                    <th>Prise</th>
                                    <th>Antal</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.idBlomst}>
                                        <td>
                                            <div className="media">
                                                <figure className="image is-24x24 mr-3">
                                                    <img src={item.image} alt={item.name} />
                                                </figure>
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{item.price.toFixed(2)} kr</td>
                                        <td>{item.quantity}</td>
                                        <td>{(item.price * item.quantity).toFixed(2)} kr</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="3">Total</th>
                                    <th>{totalPrice.toFixed(2)} kr</th>
                                </tr>
                            </tfoot>
                        </table>
                        
                        {/* Checkout formular */}
                        <div className="box mt-5">
                            <h3 className="title is-4">Betalingsinformation</h3>
                            <div className="field">
                                <label className="label">Kortnummer</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="1234 5678 9012 3456" />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Udløbsdato</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="MM/ÅÅ" />
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="field">
                                        <label className="label">CVV</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleCompleteOrder} 
                            className="button is-large mt-5 is-fullwidth"
                            disabled={cartItems.length === 0} 
                            style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
                        >
                            Fuldfør ordre 🌺
                        </button>
                    </div>
                </div>
                <button 
                    onClick={() => navigate('/')}
                    className="button is-large is-primary mb-6"
                    style={{ backgroundColor: '#F0F0F0', color: '#1E2B18' }}
                >
                    Tilbage til forsiden
                </button>
            </div>
        </>
    );
}