import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span className='text-white'>BE IN TOUCH WITH US :</span>
            <div className="email">
                <input type="text" className='p-x-2 py-2 pl-4 text-sm rounded-l-md ml-2' placeholder='Enter your email ...'/>
                <button className='bg-black p-x-2 py-2 pl-2 pr-2 text-sm rounded-r-md'> JOIN US</button>
            </div>
            <div className="icons">
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <GoogleIcon/>
            <PinterestIcon/>
            </div>
            
        </div>
         
    </div>
  )
}

export default Contact