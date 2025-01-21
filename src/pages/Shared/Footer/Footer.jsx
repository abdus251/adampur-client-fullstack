import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="p-4 footer-center bg-base-00 text-base-content ">
                    <div>
                         <div className="flex gap-5 mb-10 justify-center">
                                <Link><FaFacebookF /></Link>
                                <Link><FaInstagram /></Link>
                                <Link to='https://mail.google.com/mail/u/0/#sent?compose=new'><AiOutlineMail/></Link>
                                </div>
                        <small className='font-noto-sans-bengali'> কপিরাইট © {new Date().getFullYear()} - আদমপুর সরকারি প্রাথমিক বিদ্যালয়, <br /> বন্দর, নারায়ণগঞ্জ</small>
                    </div>
                </div>
        </div>
    )
}

export default Footer