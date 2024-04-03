import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer mt-[100px] ml-[200px] mb-[20px] mr-[200px]'>
        <div className="top">
            <div className="item-footer">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
                <div className="item-footer">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item-footer">
                    <h1>About</h1>
                    <span>
                    Embrace your unique style with our curated collection of fashion essentials. 👗👠
                    </span>
                </div>
                <div className="item-footer ">
                    <h1>Contact</h1>
                    <span>Have questions? Reach out to our friendly team for assistance!</span>
                </div>
            
        </div>
        <div className="bottom flex justify-between items-center mt-[50px]">
            <div className="item mt-[2rem] left flex items-center mb-[2rem] gap-[1rem]">
                <span className='text-[22px] font-bold text-[#2879fe] '>Vogue Vault</span>
                <span className='text-[12px]'>&copy; Copyright 2023 All Rights Reserved</span>
            </div>
            <div className="right">
                <img src="/img/Payment.png" className='payment w-[25rem] h-[6rem] ' alt="" />
            </div>
        </div>

        
    </div>
  )
}

export default Footer