import Navbar from "../components/Navbar";
import { useState } from "react";
import { useCart } from '../Context/CartContext';
import morsdag from "../assets/Blomst3.jpg";
import hilsner from "../assets/Blomst8.jpg";
import godbedring from "../assets/Blomst10.jpg";
import bryllup from "../assets/Blomst7.jpg";
import fodselsdag from "../assets/Blomst9.jpg";
import dekoration from "../assets/Blomst2.jpg";
import takke from "../assets/Blomst13.jpg";
import nyudannet from "../assets/Blomst12.png";

export default function Produkter(){
    const { addToCart } = useCart();
    const [products] = useState([
    {
      id: 1,
      idBlomst: "1",
      name: "Mor's dag Buket",
      price: 115,
      description: "For verden er du en mor, men for mig er du verden, der har lært mig alt om livet – uden dig ville jeg være fortabt. Elsker dig!",
      image: morsdag
    },
    {
      id: 2,
      idBlomst: "2",
      name: "Hilsner til nyt barn født Buket",
      price: 140,
      description: "Til min smukkeste blomst, der er blevet født i dag. Velkommen til verden.",
      image: hilsner
    },
    {
      id: 3,
      idBlomst: "3",
      name: "Hilsner til god bedring Buket",
      price: 180,
      description: " Må denne buket blomster sende dig en god og hurtig bedring. ",
      image: godbedring
    },
    {
        id: 4,
        idBlomst: "4",
        name:"Bryllupsbuket",
        price: 200,
        description: "Rosen er for en dag, men du er for evigt.",
        image: bryllup 
    },
    {
        id: 5,
        idBlomst: "5",
        name:"Fødselsdag Buket",
        price: 250,
        description: "En buket med duftende hilsner, der får din dag til at blomstre med lykke og glæde! Tillykke med fødselsdagen!",
        image: fodselsdag
    },
    {
        id: 6,
        idBlomst: "6",
        name:"Dekoration Buket",
        price: 300,
        description: "Blomster til at være text på dit hjerte.",
        image: dekoration
    },
    {
        id: 7,
        idBlomst: "7",
        name:"Takke Buket",
        price: 350,
        description: "Et par blomster til at takke dig fra bunden af mit hjerte.",
        image: takke
    },
    {
        id: 8,
        idBlomst: "8",
        name:"Nyudannet Buket",
        price: 400,
        description: "Tillykke med din uddannelse! Din viden åbner døren til en verden fuld af muligheder.",
        image: nyudannet
    }
    // Tilføj flere produkter efter behov
  ]);


   const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} er tilføjet til kurven!`);
};

  return (
    <>
      <Navbar />
      <h1 className="title mx-6 mt-4" style={{ color: '#F0F0F0' }}>
        Vores Buketter
      </h1>
      <div className='is-multiline'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`card m-6 ${
              index % 2 === 0 ? '' : 'has-background-light'
            }`}
            style={{ backgroundColor: '#F0F0F0' }}
          >
            <div
              className={`columns is-vcentered ${
                index % 2 === 0 ? '' : 'is-flex-direction-row-reverse'
              }`}
            >
              <div className="column is-half p-0">
                <figure className="image is-3by2">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ objectFit: 'cover', overflow: 'hidden' }}
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/400x300?text=Lemonade';
                    }}
                  />
                </figure>
              </div>
              <div className="column is-half is-justifty-content-center is-align-items-center">
                <h2 className="title is-3 mx-4" style={{color:'#1E2B18'}}>{product.name}</h2>
                <p className="subtitle is-5 m-4" style={{color:'#1E2B18'}}>{product.description}</p>
                <p className="is-size-4 has-text-weight-bold mx-4" style={{color:'#1E2B18'}}>
                  Pris: {product.price} kr
                </p>
                <button
                  className="button is-medium is-rounded m-3"
                  onClick={() => handleAddToCart(product)}
                  style={{ backgroundColor: '#1E2B18', color: '#F0F0F0' }}
                >
                  Tilføj til kurv
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}