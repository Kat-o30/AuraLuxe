import React from 'react'
import HeaderImgLeft from "../../Images/header_left.jpg"

const Header = () => {
    return (
        <div className='header'>
            <ul>
                <li className='header__image__back'><img src={HeaderImgLeft} alt="leftImage" className="header__image" /></li>
                <li className='header__taglines'>
                    <h2>Make a splash this summer !</h2>
                    <h1> with the biggest <br />
                        <span className="header__break">sale of the year</span>
                    </h1>
                    <button type="button">Shop Now</button>
                </li>
            </ul>
        </div>
    )
}

export default Header