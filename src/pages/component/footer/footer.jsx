import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocation, useNavigate } from 'react-router-dom';
import logo2 from '../../assets/committeeAssets/logo2.png'

export const Footer = () => {

    const navigate = useNavigate()
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);
    const [footerLogo, setFooterLogo] = useState(null);
    const year = new Date().getFullYear();

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    const footer = {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
        address: "Karachi, Pakistan",
        email: "info@cogentdevs.com",
        phone: "+92 300 1234567"
    };

    return (
        // className='bg-[#00150f]'
        <div className='bg-[#003049]'>
            <div className='bg-cover bg-center min-h-full py-5 px-4 md:px-10'>
                <motion.div
                    className='flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-10 gap-10 lg:gap-0'
                    ref={refOne}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}>

                    {/* Logo & Social Section */}
                    <motion.div className='flex  flex-col justify-center items-center lg:items-center w-full lg:w-[35%] text-center lg:text-left'>

                        <motion.div
                            // className='border-b-4 border-[#F77F00] pb-2'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}>
                            <img
                                src={logo2}
                                alt="Logo"
                                className='object-contain w-[160px] md:w-[199px] lg:w-[160px] h-auto drop-shadow-[0_0_25px_rgba(247,127,0,0.5)]'
                            />
                        </motion.div>
                        <div className='w-[180px] md:w-[200px] lg:w-[200px] h-[3px] bg-[#F77F00] rounded-full mb-4'></div>


                        {/* Social Icons */}
                        <motion.div className='flex flex-row justify-center lg:justify-center gap-4 py-8 w-full'>
                            {[
                                { icon: <FacebookIcon />, link: footer.facebook, hover: 'group-hover:text-[#F77F00]' },
                                { icon: <TwitterIcon />, link: footer.twitter, hover: 'group-hover:text-[#F77F00]' },
                                { icon: <LinkedInIcon />, link: footer.linkedin, hover: 'group-hover:text-[#F77F00]' },
                                { icon: <YouTubeIcon />, link: footer.youtube, hover: 'group-hover:text-[#F77F00]' }
                            ].map((social, index) => social.link && (
                                <a key={index} href={social.link} target="_blank" rel="noreferrer">
                                    <div className='group w-[35px] h-[35px] md:w-[40px] md:h-[40px] rotate-45 rounded-lg bg-[#F77F00] hover:bg-white flex justify-center items-center transition-all duration-300 shadow-lg shadow-[#F77F00]/20'>
                                        <div className='-rotate-45 group-hover:scale-110 transition-transform'>
                                            {React.cloneElement(social.icon, {
                                                className: `text-white ${social.hover} text-[20px] md:text-[24px]`
                                            })}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </motion.div>

                        <motion.span className='text-gray-400 text-sm'>
                            Copyright © {year} Cogent Devs. <br className="md:hidden" /> All Rights Reserved.
                        </motion.span>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 gap-8 w-full lg:w-[65%] py-5  lg:pl-12 md:pl-12 sm:pl-0">



                        {/* Others */}
                        <div className='flex flex-col'>
                            <h3 className="text-gray-200 text-lg font-bold font-sans py-2">Others</h3>
                            <div className='w-[60px] h-[3px] bg-[#F77F00] rounded-full mb-4'></div>
                            <ul className="space-y-2">

                                {[{ label: 'Privacy Policy', path: 'privacy-policy' },
                                { label: 'Terms & Conditions', path: 'terms-conditions' }].map((item) => (
                                    <li key={item} onClick={() => navigate(`/${item.path}`)}
                                        className="text-gray-400 text-sm md:text-base font-sans hover:text-[#F77F00] cursor-pointer transition-colors">
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className='flex flex-col sm:col-span-2 md:col-span-1'>
                            <h3 className="text-gray-200 text-lg font-bold font-sans py-2">Contact</h3>
                            <div className='w-[60px] h-[3px] bg-[#F77F00] rounded-full mb-4'></div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-400 text-sm md:text-base font-sans hover:text-[#F77F00] transition-colors">
                                    <LocationOnIcon className="text-[#F77F00] shrink-0" />
                                    <span>{footer.address}</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-400 text-sm md:text-base font-sans hover:text-[#F77F00] transition-colors">
                                    <EmailIcon className="text-[#F77F00] shrink-0" />
                                    <span className="break-all">{footer.email}</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-400 text-sm md:text-base font-sans hover:text-[#F77F00] transition-colors">
                                    <CallIcon className="text-[#F77F00] shrink-0" />
                                    <span>{footer.phone}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}
