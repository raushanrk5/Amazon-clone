import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/unrec/Sept/GW_PC_BUNK_watches1500x600._CB405140901_.jpg"
                alt = ""
            /> 
            <div className="home__row">
                <Product
                    id='1234321'
                    title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)" 
                    price={2300.00}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/616bhfyXimL._AC_UL320_SR320,320_.jpg"
                /> 
                <Product
                    id='1234322'
                    title="Faber Oxypure 10 L Fruit and Vegetable Ozonizer (Seafoam)"
                    price={3290.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61S+aV7j2yL._AC_UY218_.jpg"
                /> 
            </div>

            <div className="home__row">
                <Product
                    id='1234323'
                    title="ADOC Chairs Florian Medium Back Ergonomic Office Chair with Mesh Back, Sturdy Base (Black)"
                    price={1200.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41xR28UrlwL._AC_UY218_.jpg"
                /> 
                <Product
                    id='1234324'
                    title="Amazon Echo (2nd Gen) - Powered by Dolby – White"
                    price={8000.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61UnzwX%2B4NL._SX679_.jpg"
                /> 
                <Product
                    id='1234325'
                    title="Samsung Galaxy M30s (Blue, 4GB RAM, 64GB Storage)"
                    price={16000.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71EvOK7BhuL._AC_UL320_SR320,320_.jpg"
                /> 
            </div>
            <div className="home__row">
            <Product
                    id='1234321'
                    title="ECOVACS Deebot 500 Robots Vacuum Cleaner with Robotic Smart APP Control, Max Mode Suction Power, 3-Stage Cleaning System Compatible with Alexa (Black)"
                    price={3200.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61T1Xz4UiTL._AC_UY218_.jpg"
            /> 
            </div>
            <div className="home__row">
                <Product
                    id='1234326'
                    title='AmazonBasics Room - Darkening Blackout Curtain Set with Grommets - 245 GSM - 42" x 84", Light Grey'
                    price={1200.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81cbhyDRZKL._AC_UL320_.jpg"
                /> 
                <Product
                    id='1234327'
                    title="Insomnia: Keep Your Eyes Open (SHORTZ)"
                    price={280.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51FQX0JH4zL.jpg"
                /> 
                <Product
                    id='1234328'
                    title="Redmi Earbuds 2C in-Ear Truly Wireless Earphones [Black]"
                    price={1300.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61y9wDNiiXL._SX679_.jpg"
                /> 
            </div>
            <div className="home__row">
                <Product
                    id='1234329'
                    title="Amazon Brand - Symbol Men's Solid Regular fit Half Sleeve Polo" 
                    price={350.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81m-SPZ%2BEWL._UX569_.jpg"
                /> 
                <Product
                    id='1234330'
                    title="Bae's Wardrobe Rayon Straight Kurti with White Sharara Plazzo for Women & Girls Dress"
                    price={890.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71cGRFHJwOL._UY741_.jpg"
                /> 
            </div>
            
        </div>
    )
}

export default Home
