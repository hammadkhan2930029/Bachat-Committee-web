
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion, useInView } from "framer-motion";
import homeVideo from '../../assets/home-video.webp'
import { AppImages } from '../../Constant/AppImages'

export const FullCard = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <motion.div className='bg-[#FCBF49] overflow-hidden'
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}>
            <div className='flex flex-col justify-center items-center py-10 px-4'>

                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4 font-sans">
                        Check the Demo {" "}
                        <span className="text-[#F77F00]">
                            Video!
                        </span>
                    </h2>

                </div>
                <motion.div
                    style={{ backgroundImage: `url(${AppImages.screenFull})` }}
                    className="
    /* Width & Centering */
    relative w-[95%] sm:w-[90%] md:w-4/5 lg:w-[80%] m-5 
    
    /* Responsive Height: Hardcoded pixels ki jagah aspect-ratio best rehta hai */
    /* Agar aapko pixels hi chahiye toh ye scale behtar hai: */
    h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[600px]
    
    /* Background & Object Positioning */
    object-contain bg-cover bg-no-repeat bg-center 
    
    /* Design Aesthetics */
    rounded-[30px] sm:rounded-[40px] md:rounded-[50px] 
    flex justify-center items-center 
    shadow-2xl transition-all duration-300
"
                    // className="relative w-[90%] md:w-4/5 lg:w-2/3 h-[250px]   sm:h-[350px] md:h-[580px] object-contain bg-cover bg-no-repeat bg-center rounded-[50px] flex justify-center items-center shadow-2xl"
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>

                    <motion.div className='group bg-[#F77F00] hover:bg-white p-3 md:p-5 rounded-full z-10 cursor-pointer shadow-lg  transition-all duration-300  hover:shadow-xl hover:scale-110'
                        ref={refOne}
                        initial={{ opacity: 0, y: -100 }}
                        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .8 }}>



                        <PlayArrowIcon className='group-hover:text-[#F77F00] text-white' sx={{ fontSize: { xs: 40, md: 60 } }} />



                    </motion.div>
                </motion.div>
            </div>
        </motion.div>


    )
}
