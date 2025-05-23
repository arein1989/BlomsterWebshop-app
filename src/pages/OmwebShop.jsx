import Navbar from "../components/Navbar"
import about from "../assets/about.mp4"
import 'bulma/css/bulma.min.css';

export default function OmwebShop() {

    return(
        <>
            <Navbar/>
            <h1 className="title is-3  mt-5 mx-5 " style={{ color: '#F0F0F0'}}>
                OM 🌺 Webshop
            </h1>

            <div className="section is-flex is-flex-direction-column is-justify-content-center is-align-items-center ">
                <p className="is-size-5 is-align-items-center has-text-justified mb-3" style={{ color: '#F0F0F0', maxWidth:'1050px' }}>
                    Gennem historien har blomsternes skønhed altid inspireret de største kunstnere…
                    “Lad os være taknemmelige for de mennesker, der gør os lykkelige; De er de gode gartnere, der får vore sjæle til at blomstre.” Marcel Proust, fransk forfatter
                </p>
                <iframe className="is-size-5 has-text-centered is-align-items-center my-5 mx-5 " style={{ color: '#F0F0F0'}}
                    width="560" height="315" src={about} title="Blomst Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
       
                <div className='p-3 m-3' style={{  backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', borderLeft: '4px solid #F0F0F0', }}>
                    <p className="is-italic is-size-5 m-2" style={{ color: '#F0F0F0' }}>
                       Gennem historien har blomsternes skønhed altid inspireret de største kunstnere...
                    </p>
                    <p className="is-italic is-size-5 m-2" style={{ color: '#F0F0F0' }}>
                       "Lad os være taknemmelige for de mennesker, der gør os lykkelige; De er de gode gartnere, der får vore sjæle til at blomstre."
                    </p>
                    <p className="has-text-weight-semibold m-3" style={{ color: '#F0F0F0' }}>
                       - Marcel Proust, fransk forfatter
                    </p>
                </div>
            </div>
        </>
    )
}