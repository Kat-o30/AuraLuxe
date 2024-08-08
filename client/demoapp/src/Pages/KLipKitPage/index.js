import React, { useState } from 'react';
import "../../App.css";
import MainImg1 from "../../Images/Kyle_LipKit/MainImg1.jpeg";
import MainImg2 from "../../Images/Kyle_LipKit/MainImg2.jpeg";
import MainImg3 from "../../Images/Kyle_LipKit/MainImg3.jpeg";
import MainImg4 from "../../Images/Kyle_LipKit/MainImg4.jpeg";
import MainImg5 from "../../Images/Kyle_LipKit/MainImg5.jpeg";
import MainImg6 from "../../Images/Kyle_LipKit/MainImg6.jpeg";
import MainImg7 from "../../Images/Kyle_LipKit/MainImg7.jpeg";
import MainImg8 from "../../Images/Kyle_LipKit/MainImg8.jpeg";
import MainImg9 from "../../Images/Kyle_LipKit/MainImg9.jpeg";
import MainImg10 from "../../Images/Kyle_LipKit/MainImg10.jpeg";
import MainImg11 from "../../Images/Kyle_LipKit/MainImg11.jpeg";
import MainImg12 from "../../Images/Kyle_LipKit/MainImg12.jpeg";
import MainImg13 from "../../Images/Kyle_LipKit/MainIMg13.jpeg";
import MainImg14 from "../../Images/Kyle_LipKit/MainImg14.jpeg";

import PreviewImage1 from "../../Images/Kyle_LipKit/PreviewImg1.jpeg";
import PreviewImage2 from "../../Images/Kyle_LipKit/PreviewImg2.jpeg";
import PreviewImage3 from "../../Images/Kyle_LipKit/PreviewImg3.jpeg";

import StarRating from '../../Components/StarRating';
import Purchase from "../../Components/purchase";
import Price from "../../Components/price";

const KLipKitPage = () => {
  const rating = 5;
  const colors = [
    "#ca4562", "#e64587", "#be5758", "#033442", "#e72c37", 
    "#441519", "#141414", "#df9187", "#daa48c", "#b873a9", 
    "#8f7689", "#33738f", "#78692e", "#874a2b"
  ];

  const colorImageMapping = {
    "#ca4562": { main: MainImg1, previews: [MainImg1, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#e64587": { main: MainImg2, previews: [MainImg2, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#be5758": { main: MainImg3, previews: [MainImg3, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#033442": { main: MainImg4, previews: [MainImg4, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#e72c37": { main: MainImg5, previews: [MainImg5, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#441519": { main: MainImg6, previews: [MainImg6, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#141414": { main: MainImg7, previews: [MainImg7, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#df9187": { main: MainImg8, previews: [MainImg8, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#daa48c": { main: MainImg9, previews: [MainImg9, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#b873a9": { main: MainImg10, previews: [MainImg10, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#8f7689": { main: MainImg11, previews: [MainImg11, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#33738f": { main: MainImg12, previews: [MainImg12, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#78692e": { main: MainImg13, previews: [MainImg13, PreviewImage1, PreviewImage2, PreviewImage3] },
    "#874a2b": { main: MainImg14, previews: [MainImg14, PreviewImage1, PreviewImage2, PreviewImage3] },
  };

  const [selectedColor, setSelectedColor] = useState("#ca4562");
  const [image, setImage] = useState(colorImageMapping[selectedColor].main);
  const [previewImages, setPreviewImages] = useState(colorImageMapping[selectedColor].previews);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setImage(colorImageMapping[color].main);
    setPreviewImages(colorImageMapping[color].previews);
  };

  return (
    <div className='main__product__pages product__pages'>
      <div className="product__section__top">
        <div className="left__section">
          <div className="product__images__preview">
            {previewImages.map((image, index) => (
              <div key={`preview-${index}`} className="product__images__preview__outer">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="preview__image"
                  onMouseEnter={() => setHoveredImage(image)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
              </div>
            ))}
          </div>
          <div className="product__images">
            <img src={hoveredImage || image} alt="Main Product" className="main__image" />
          </div>
        </div>

        <div className="divider"></div>

        <div className="right__section">
          <span className='heading__product'>Bold Matte Color, Lasting Luxe - Now In New Shades!</span>
          <span>(4.2g)</span>

          <StarRating rating={rating} />
          <Price />

          <span style={{ marginTop: "0px", marginLeft: "300px" }}>All Shades(14)</span>
          <div style={{ width: "105px", backgroundColor: "#c61d1d", height: "1.3px", marginLeft: "300px", transform: "translate(0px, 5px)" }} ></div>
          
          <div className="shadesPalate">
            <div className="main__color__left" style={{ backgroundColor: selectedColor }}></div>
            <div className="preview__colors__right">
              {colors.map((color, index) => (
                <div key={`palate-${index}`} className="preview__colors__boxes"
                  onClick={() => handleColorClick(color)}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          <Purchase />
        </div>
      </div>
    </div>
  );
}

export default KLipKitPage;
