import React from 'react'
import Services from './Services'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Carts = () => {
    return (
        <>
            <div className='about-sec gray-bg'>
                <div className="bound">
                    <div className='more-text subscribe-btn'><Link to="/" className='blue-btn'><ArrowBackIcon />Continue Shopping </Link></div>
                    <ShoppingCartIcon />
                    <h1> Your cart is empty</h1>
                    <Services />
                </div></div>

        </>
    )
}

export default Carts