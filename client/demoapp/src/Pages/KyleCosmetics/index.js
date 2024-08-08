import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import KLipKit from '../../Images/KLipKit.jpeg';
import KLiquidLipstick from '../../Images/KLiquidLipstick.jpeg';
import KGlowBalm from "../../Images/KGlowBalm.jpeg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KSlide1 from "../../Images/KSlide1.jpg";
import KSlide2 from "../../Images/KSlide2.jpg";
import KSlide3 from "../../Images/KSlide3.jpg";

const productsData = [
  {
    id: 1,
    name: 'Matte Lip Kit',
    img: KLipKit,
    // description: 'Matte lip kit is your ready-to-go lip routine for a long-lasting, matte lip. This matte liquid lipstick and lip liner duo feature highly pigmented, 8+ hour wear formulas that offer full coverage payoff with a smudge-resistant finish.',
    description: 'matte liquid lipstick and lip liner duo feature highly pigmented...',
    available: "8 Shades",
    price: 3600,
    previousPrice: 4500,
    discount: 10,
    category: 'Lip Kit',
  },
  {
    id: 2,
    name: 'Liquid Lipstick',
    img: KLiquidLipstick,
    description: 'Liquid lipstick with a high-shine finish. Perfect for any occasion and easy to apply.',
    price: 25,
    discount: 5,
    category: 'Lipstick',
  },
  {
    id: 3,
    name: 'Glow Balm',
    img: KGlowBalm,
    description: 'Glow balm for a radiant, hydrated glow. Perfect for any occasion and easy to apply.',
    price: 18,
    discount: 15,
    category: 'Balm',
  },
  {
    id: 4,
    name: 'Shimmer Lipstick',
    img: KLiquidLipstick,
    description: 'Shimmer lipstick with a shiny finish. Perfect for any occasion and easy to apply.',
    price: 22,
    discount: 8,
    category: 'Lipstick',
  },
];

const KyleCosmetics = () => {
  const [sortOption, setSortOption] = useState('default');
  // const [cart, setCart] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortProducts = (products, option) => {
    switch (option) {
      case 'price':
        return [...products].sort((a, b) => a.price - b.price);
      case 'discount':
        return [...products].sort((a, b) => a.discount - b.discount);
      case 'category':
        return [...products].sort((a, b) => a.category.localeCompare(b.category));
      default:
        return products;
    }
  };

  // const handleAddToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // const handleBuyNow = (product) => {
  //   alert(`Buying ${product.name} for $${product.price}`);
  // };

  const sortedProducts = sortProducts(productsData, sortOption);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slideBackgroundColors = ['#4f1f2b', '#cc1d2a', '#aa2f5c'];

  return (  
    <div className="main__page main__product__pages">
      <div className='carousel' style={{ backgroundColor: slideBackgroundColors[currentSlide] }}>
        <Slider {...carouselSettings}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Link to="/product/1"><img src={KSlide1} alt="Matte Lip Kit" /></Link>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Link to="/product/2"><img src={KSlide2} alt="Liquid Lipstick" /></Link>
          </div>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Link to="/product/3"><img src={KSlide3} alt="Glow Balm" /></Link>
          </div>
        </Slider>
      </div>

      <div className="heading">
        <h1 style={{ color: "green" }}>All the Products</h1>
      </div>

      <div className='pages'>

        <div className='sidebar'>
          <h3>Sort By</h3>
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
            <option value='default'>Default</option>
            <option value='price'>Price</option>
            <option value='discount'>Discount</option>
            <option value='category'>Category</option>
          </select>

          <div className="filter-section">
            <h3>Filter By</h3>
            <h4>Price Range</h4>
            <input type="range" min="0" max="50" />

            <h4>Categories</h4>
            <div>
              <input type="checkbox" id="lipKit" name="lipKit" />
              <label htmlFor="lipKit">Lip Kit</label>
            </div>
            <div>
              <input type="checkbox" id="lipstick" name="lipstick" />
              <label htmlFor="lipstick">Lipstick</label>
            </div>
            <div>
              <input type="checkbox" id="balm" name="balm" />
              <label htmlFor="balm">Balm</label>
            </div>
          </div>

          <div className="featured-section">
            <h3>Featured</h3>
            <div className="featured-item">
              <img src={KLipKit} alt="Featured Product" width="100px" />
              <p>New Matte Lip Kit</p>
            </div>
            <div className="featured-item">
              <img src={KLiquidLipstick} alt="Featured Product" width="100px" />
              <p>Best Seller Liquid Lipstick</p>
            </div>
          </div>
        </div>

        <div className='products'>
          <div className='product-grid'>
            {sortedProducts.map(product => (
              <div className='product-item' key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.name} width='250px' />

                  <div className='product-description'>
                    <span>{product.description}</span>
                  </div>
                  <div className='product-details'>
                    <span>{product.available}</span>
                    {/* <span>Category: {product.category}</span> */}
                  </div>
                  <div className="product-details__price">
                    <span>&#8377;{product.price}</span>
                    <span>&#8377;{product.previousPrice}</span>
                    <span>{product.discount}%</span>
                  </div>
                  {/* <div className='product-actions'>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button onClick={() => handleBuyNow(product)}>Buy Now</button>
                </div> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KyleCosmetics;
