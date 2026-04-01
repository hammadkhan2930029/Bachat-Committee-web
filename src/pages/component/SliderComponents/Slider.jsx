import React, { useState, useEffect } from 'react';
import { Nav } from '../nav/nav';
import banner_bg from '../../assets/new/banner_bg.png'
import { motion, AnimatePresence, useInView } from "framer-motion";
import banner_img from '../../assets/new/banner_img-2.png'
import banner_coin from '../../assets/new/banner_coin.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import admin from '../../assets/committeeAssets/admin.png'
import PrimaryButton from '../../Buttons/primaryButton';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
//-------------------------------------------------
import new1 from '../../assets/committeeAssets/new1.png';
import new2 from '../../assets/committeeAssets/new2.png';
import newOne from '../../assets/committeeAssets/newOne.png';
import newTwo from '../../assets/committeeAssets/newTwo.png';



export const Slider = () => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <div style={{ backgroundImage: `url(${banner_bg})` }}
            className="bg-cover bg-center min-h-screen ">
            <Nav />

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-0">

                {/* LEFT SIDE (TEXT) */}
                <motion.div
                    ref={refTwo}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                    className="flex flex-col items-center justify-center lg:item-center  lg:justify-center text-center px-4 sm:px-8  lg:text-left lg:px-20 py-12 lg:py-0 -mt-12"
                >
                    <div className='flex flex-start w-full'>
                        <motion.img
                            src={banner_coin}
                            className="w-1/4 lg:w-1/4"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className="text-3xl  text-[#003049] sm:text-4xl font-sans md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight text-start uppercase">
                            Digital Bachat Committee
                            {" "}
                            <span className="text-[#F77F00]">
                                Save Together, Grow Together
                            </span>
                        </h1>
                       
                        <p className="text-base font-sans sm:text-lg md:text-lg lg:text-lg py-4 sm:py-6 max-w-md sm:max-w-lg lg:max-w-xl text-start ">
                            Manage your committee (BC) safely and transparently with our mobile app. Create groups, track contributions, and receive your turn without the stress of manual records.
                        </p>
                    </div>

                    <div className="w-full  flex font-sans flex-row lg-flex-row md:flex-row gap-4 mt-4 sm:mt-6">
                      
                        <PrimaryButton title='Get Started' icon={ArrowForwardIcon} />
                        <div className="group bg-transparent text-[#003049] hover:text-white font-semibold rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center gap-2 border border-[#D62828] px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-3 hover:bg-[#D62828] hover:shadow-lg active:scale-95">
                            <PlayCircleFilledWhiteOutlinedIcon className="text-xl text-[#D62828]  group-hover:text-white" />
                            <span>Watch Video</span>
                        </div>
                    
                    </div>
                    <div className='w-full   flex flex-start pt-12 '>
                        <span className='text-[#003049] font-semibold font-sans'>Follow Us</span>
                    </div>
                    <div className='w-full  flex flex-row flex-start justify-start items-center p-5 '>
                        <div className=' group border-1 border-gray-300  rounded-full p-2 hover:bg-[#D62828] hover:border-[#FCBF49] cursor-pointer '>

                            <a href='#'> <FacebookOutlinedIcon className="text-[#F77F00] group-hover:text-white" /></a>
                        </div>
                        <div className=' group border-1 border-gray-300 rounded-full p-2 hover:bg-[#D62828] cursor-pointer ml-1'>

                            <a href='#'><InstagramIcon className="text-[#F77F00] group-hover:text-white" /></a>
                        </div>
                        <div className='group border-1 border-gray-300 rounded-full p-2 hover:bg-[#D62828] cursor-pointer ml-1'>
                            <a href='#'><TwitterIcon className="text-[#F77F00] group-hover:text-white" /></a>
                        </div>
                        <div className='group border-1 border-gray-300 rounded-full p-2 hover:bg-[#D62828] cursor-pointer ml-1'>
                            <a href='#'> <YouTubeIcon className="text-[#F77F00] group-hover:text-white" /></a>
                        </div>
                        <div className='group border-1 border-gray-300 rounded-full p-2 hover:bg-[#D62828] cursor-pointer ml-1' >
                            <a href='#'> <LinkedInIcon className="text-[#F77F00] group-hover:text-white" /></a>
                        </div>


                    </div>
                </motion.div>

                {/* RIGHT SIDE (IMAGE) */}
                <motion.div
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                    className="flex items-center justify-center px-4 sm:px-8 py-6 lg:py-0"
                >
                    <motion.img
                        // src={banner_img}
                        src={newTwo}
                        className="w-full max-w-md sm:max-w-lg lg:max-w-lg object-contain rounded-xl drop-shadow-xl"

                        //  className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut"
                        }} />
                </motion.div>

            </div>

            {/* <div className="container">
                
            
                <img className="coverImg" src={tradingCover} alt="cover" />

             
                <div className="btnDiv">
                    <Button
                        variant="contained"
                        disableElevation
                        className="sliderbtn"
                        component={Link}
                        to="/login"
                    >
                        Get Started
                    </Button>
                </div>
            </div> */}
        </div>
    )
}