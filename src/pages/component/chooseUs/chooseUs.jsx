import React, { useEffect, useState, useRef, forwardRef } from 'react'
import { motion, useInView } from "framer-motion";
import 'react-slideshow-image/dist/styles.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BrushIcon from '@mui/icons-material/Brush';
import WindowIcon from '@mui/icons-material/Window';
import features01 from '../../assets/new/features01.png';
import features02 from '../../assets/new/features02.png';


const data = [
    {
        url: features01,
        icon: <WorkspacePremiumIcon className="icon" />,
        heading: 'Transparent Contributions',
        data1: 'All payments and member contributions are tracked automatically for complete transparency..',
    },
    {
        url: features02,
        icon: <BrushIcon className="icon" />,
        heading: 'Organized Committee Management',
        data1: 'Manage members, payout schedules, and monthly contributions without manual records..',
    },
    {
        url: features01,
        icon: <WindowIcon className="icon" />,
        heading: 'Real-Time Notifications',
        data1: 'Get instant reminders and updates about contributions and payout turns.',
    },

];


export const ChooseUs = forwardRef((props, ref) => {

    const [currentImage, setCurrentImage] = useState(features01);
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <section className="bg-gradient-to-r from-gray-200 to-gray-40  py-16 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="mb-8">
                        <h1 className="text-3xl sm:text-4xl text-[#003049] font-sans md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight text-start ">
                      Why Choose Our App {" "}
                        <span className="text-[#F77F00]">
                            Simple & User-Friendly
                        </span>
                    </h1>
                        <p className="text-[#003049] max-w-md font-sans">
                            Our app is designed so anyone can create or join a committee within minutes.
                        </p>
                    </div>

                    <div className="space-y-4 ">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setCurrentImage(item.url)}
                                className="group p-6 bg-transparent hover:bg-white rounded-2xl transition-all duration-300 cursor-pointer border-1 border-gray-300 hover:shadow-xl hover:border-[#FCBF49] "
                            >
                                <h3 className="text-lg font-bold text-[#003049] group-hover:text-[#F77F00] transition-colors font-sans">
                                    {item.heading}
                                </h3>
                                <p className="text-[#003049] mt-2 text-sm leading-relaxed  transition-opacity duration-300 font-sans ">
                                    {item.data1}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 transform scale-110"></div>

                    <div className="relative z-10 w-full max-w-lg">
                        <img
                            src={currentImage}
                            alt="Feature Illustration"
                            className="w-full h-auto  drop-shadow-[0_0_25px_rgba(247,127,0,0.5)]"
                        />
                    </div>
                </motion.div>

            </div>
        </section>


    )

})

