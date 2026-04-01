import React from 'react';
import banner_bg from '../../assets/new/banner_bg.png'
import { ThreeDots } from 'react-loader-spinner'
import { motion, useInView } from "framer-motion";
import logo1 from '../../assets/committeeAssets/logo1.png';
import logowhite from '../../assets/committeeAssets/logowhite.png';



export const Splash = () => {

    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (

        <div
            // style={{ backgroundImage: `url(${banner_bg})` }}
            // bg-[#F77F00]
            className="bg-cover bg-center min-h-screen flex  justify-center items-center  bg-gradient-to-r from-[#ff6a00] via-[#f77f00] to-[#ffb347] shadow-[0_0_20px_rgba(247,127,0,0.6)]">
            <motion.div
                className='flex flex-col justify-center items-center'

                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    scale: { type: "spring", visualDuration: 0.7, bounce: 0.6 },
                }}
            >

                <img src={logo1} className='object-contain w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full shadow-xl' />

               
                <ThreeDots
                    height="60"
                    width="100"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ margin: '8px' }}
                    wrapperClass="custom-loader"
                    visible={true}
                />
            </motion.div >


        </div>
    )
}
