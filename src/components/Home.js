import "./Home.css";
import Product from "./Product";

import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg"
          alt="Amazon Banner"
        />
        <div className="home__row">
          <Product
            id={1}
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1699.93}
            image="https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={1500}
            image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="Microsoft Surface Pro 7 – 12.3 Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model)"
            price={799.96}
            image="https://images-na.ssl-images-amazon.com/images/I/714cHoaDUpL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id={5}
            title="Nikon Z7 FX-Format Mirrorless Camera Body w/ NIKKOR Z 24-70mm f/4 S"
            price={3096.97}
            image="https://images-na.ssl-images-amazon.com/images/I/91jlPdgS3%2BL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
