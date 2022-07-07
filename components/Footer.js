import React from 'react'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const Footer = () => {
    return (
    <div>
        <div className='grid gap-4 grid-cols-4 py-5 bg-gray-200'>
            <div className='text-center'>
            <a href='#'><i class="fa-brands fa-instagram fa-2x mx-2"></i></a> 
            <a href='#'><i class="fa-brands fa-github fa-2x mx-2"></i></a>
            <a href='#'><i class="fa-brands fa-facebook fa-2x mx-2"></i></a>
            <a href='#'><i class="fa-brands fa-twitter fa-2x mx-2"></i></a>
            </div>
            <div className=''>
                <h1 className=''>About</h1>
                <p className=''>About us 1</p>
                <p className=''>About us 2</p>
                <p className=''>About us 3</p>
                <p className=''>About us 4</p>
                <p className=''>About us 5</p>
            </div>
            <div className=''>
            <h1 className=''>Academics</h1>
                <p className=''>Academics 1</p>
                <p className=''>Academics 2</p>
                <p className=''>Academics 3</p>
                <p className=''>Academics 4</p>
                <p className=''>Academics 5</p>
            </div>
            <div className=''>
                <h1>Contact Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer