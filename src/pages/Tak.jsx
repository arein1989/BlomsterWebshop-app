import { useNavigate } from 'react-router-dom';
import tak from '../assets/Baground.jpg'
export default function Tak() {
    const navigate = useNavigate();
    return (
        <>
            
            <div className="hero is-fullheight is-flex is-flex-direction-column is-justify-content-center is-align-items-center" 
                style={{ 
                 backgroundImage: `url(${tak})`,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'end',
                 alignItems: 'center'
               }}>
                <p className="is-size-1 has-text-centered is-align-items-center mb-6 " style={{ color:'#1E2B18'}}>
                    Tak for din bestilling 🌸! 
                </p>
                <button onClick={() => navigate('/')} className="button is-large is-primary mb-6"
                  style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
                   >
                   Back to Home
                </button>
            </div>
        </>
    );
}