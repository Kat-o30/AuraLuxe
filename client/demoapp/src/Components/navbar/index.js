import React, { useState } from 'react'
import Modal from "../modal/index";
import Logo from "../../Images/logo.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const navElements = {
        Makeup: ["Lipstick", "Foundation", "Mascara"],
        Skin: ["Moisturizer", "Cleanser", "Serum"],
        Hair: ["Shampoo", "Conditioner", "Hair Oil"],
        "Bath & Body": ["Shower Gel", "Body Lotion", "Scrub"],
        "Health & Wellness": ["Vitamins", "Supplements", "Fitness"],
        Fragrance: ["Perfume", "Body Mist", "Deodorant"]
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMenu, setCurrentMenu] = useState(null);

    const handleMenuOpen = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(menu);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentMenu(null);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        // <div className='navbar'>
        //     <ul>
        //         <img src={Logo} alt="logo" id='brand__logo'/>
        //         {navElements.map((element, index) => (
        //             <li key={index}>{element}</li>
        //         ))}
        //         <li><button type="button" onClick={openModal} className='button__signup'>Sign up</button></li>
        //         {isModalOpen && <Modal closeModal={closeModal} />}
        //     </ul>

        // </div>
        <AppBar className='navbar' sx={{ backgroundColor: '#eee0ce', boxShadow: '1rem', marginRight: '0px'}}>
            <Toolbar>
                <Link to="/"><img src={Logo} alt="logo" id='brand__logo' /></Link>
                {Object.keys(navElements).map((element) => (
                    <div key={element}>
                        <Button
                            aria-controls={currentMenu === element ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={(event) => handleMenuOpen(event, element)}
                            sx={{ color: '#000' }}
                        >
                            {element}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={currentMenu === element}
                            onClose={handleMenuClose}
                        >
                            {navElements[element].map((subItem) => (
                                <MenuItem key={subItem} onClick={handleMenuClose}>{subItem}</MenuItem>
                            ))}
                        </Menu>

                    </div>
                ))}

                <button type="button" onClick={openModal} className='button__signup'>Sign up</button>
               
            </Toolbar>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </AppBar>
    )
}

export default Navbar
