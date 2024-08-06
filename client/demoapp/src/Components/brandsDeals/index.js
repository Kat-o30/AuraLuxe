import React from 'react';
import KyleCosmetics from "../../Images/KyleCosmetics.jpeg";
import Rhode from "../../Images/Rhode.jpeg";
import RareBeauty from "../../Images/RareBeauty.jpeg";
import BrazilianCrush from "../../Images/BrazillianCrush.jpeg";
import { Link } from 'react-router-dom';

const BrandsDeals = () => {
  return (
    <div className='brandDeals'>
      <div className="brand__section">
        <h1>MAJOR BRANDS MIC-DROP PRICES</h1>
        <ul>
          <li>
            <Link to="/kyle-cosmetics">
              <div>
                <img
                  src={KyleCosmetics}
                  alt="KyleCosmetics"
                  width={"280px"}
                  height={"280px"}
                  style={{ borderRadius: "20px" }} />
              </div>
              <div>
                <span>Up to 40% off</span>
              </div>

            </Link>
          </li>
          <li>
            <Link to="/rhode">
              <div>
                <img
                  src={Rhode}
                  alt="Rhode"
                  width={"280px"}
                  height={"280px"}
                  style={{ borderRadius: "20px" }} />
              </div>
              <div>
                <span>Up to 40% off</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/rare-beauty">
              <div>
                <img
                  src={RareBeauty}
                  alt="RareBeauty"
                  width={"280px"}
                  style={{ borderRadius: "20px" }} />
              </div>
              <div>
                <span>Up to 40% off</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/brazilian-crush">
              <div>
                <img
                  src={BrazilianCrush}
                  alt="BrazilianCrush"
                  width={"280px"}
                  height={"280px"}
                  style={{ borderRadius: "20px" }} />
              </div>
              <div>
                <span>Up to 40% Off</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BrandsDeals;
