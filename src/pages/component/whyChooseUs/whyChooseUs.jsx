import React, { forwardRef } from 'react';
import { motion, useInView } from "framer-motion";
import about01 from '../../assets/new/about01-2.png'
import PrimaryButton from '../../Buttons/primaryButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import second from '../../assets/committeeAssets/second.png'
export const WhyChooseUs = forwardRef((props, ref) => {

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <div ref={ref}>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-10 md:p-10 h-auto bg-white'>

                <motion.div
                    className="relative flex flex-col items-center justify-center max-w-xl lg:max-w-4xl mx-auto w-full"
                    ref={refTwo}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >
                    <div className='w-2/2 md:w-2/3 lg:w-2/3'>
                        <img src={second} alt="Consulting" className="w-full h-auto object-contain z-10 " />
                    </div>

                    <div className="absolute top-[15%] left-[8%] bg-white/90 backdrop-blur-sm py-3 px-2 md:px-4 lg:px-4 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 z-20 w-36 md:w-56 lg:w-64">
                        <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#F77F00] font-sans">10 Years</h3>
                        <p className="text-xs md:text-sm lg:text-base text-[#003049] font-medium font-sans">Consulting Experience</p>
                    </div>

                    <div className="absolute bottom-[10%] right-0 bg-white/90 backdrop-blur-sm py-3 px-2 md:px-4 lg:px-4 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 z-20 w-36 md:w-56 lg:w-64">
                        <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-[#F77F00] font-sans">25K+</h3>
                        <p className="text-xs md:text-sm lg:text-base text-[#003049] font-medium font-sans">Satisfied Customers</p>
                    </div>
                </motion.div>

                <motion.div
                    className='px-4 '
                    viewport={{ once: true }}
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >
                   
                    <h2 className="text-3xl md:text-5xl text-[#003049] font-bold text-[#0c263a] mb-4 font-sans">
                            Effortless Committee Management{" "}
                            <span className="text-[#F77F00]">

                                Built for Modern Savings
                            </span>
                        </h2>

                    <p className="text-base sm:text-lg lg:text-xl py-2 text-[#003049] text-start font-sans">
                        Transform your traditional Bachat Committee into a seamless digital experience. No paperwork, no confusion. Every contribution, every member, every payout — fully visible in real-time. We bring clarity and accountability to a system that relies on trust.
                    </p>
                     <p className="text-base sm:text-lg lg:text-xl py-2 text-[#003049] text-start font-sans">
                       Whether it’s a small family committee or a large community group, customize contribution amounts, duration, and payout order your way. Designed around how people actually save together. Build, manage, and grow committees with the people you trust — all in one place.
                    </p>
                     <p className="text-base sm:text-lg lg:text-xl py-2 text-[#003049] text-start font-sans">
                       A clean, intuitive interface for everyday users — backed by a robust system that grows with your financial needs.
                    </p>

                    {/* Features List */}
                    {/* <div className="text-base sm:text-lg lg:text-lg text-gray-800 text-start flex flex-col gap-3 font-medium ">
                        <div className="flex items-center gap-2 font-sans text-[#003049]"><CheckCircleIcon className="text-[#F77F00]" /> Comprehensive Trade Insights</div>
                        <div className="flex items-center gap-2 font-sans text-[#003049]"><CheckCircleIcon className="text-[#F77F00]" /> Timely Investment Ideas</div>
                        <div className="flex items-center gap-2 font-sans text-[#003049]"><CheckCircleIcon className="text-[#F77F00]" /> Track Real Returns</div>
                        <div className="flex items-center gap-2 font-sans text-[#003049]"><CheckCircleIcon className="text-[#F77F00]" /> Track Dividends & Tax Reporting</div>
                    </div> */}
                    <div className='py-6'>
                        <PrimaryButton title='Download Now' icon={PlayCircleIcon}/>
                    </div>
                </motion.div>
            </div>


            {/* <div className='section_2'>
                <motion.div className='h_phone_div'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >
                    <motion.div>
                        <img className='headphone2' src={stock7} alt="Headphone" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className='textSection'
                    viewport={{ once: true }}
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >
                    <span className='first_heading'>Choose Us</span>
                    <div className='lineee'></div>

                    <span className='sec_heading'>Why Should you choose Trading Diary</span>
                    <span className='descriptionn'> Empower your investment decisions with tools designed to give you a competitive advantage. From insight to execution and beyond, our platform empowers you with clarity, control, and confidence in ever-changing markets. </span>
                    <div className='task_divs'>
                        <div className='task_div'>
                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Comprehensive Trade Insights</span>
                        </div>
                        <div className='task_div'>
                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Timely Investment Ideas</span>
                        </div>
                        <div className='task_div'>
                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Track Real Returns</span>
                        </div>
                        <div className='task_div'>
                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Track Dividends & Tax Reporting</span>
                        </div>
                    </div>
                </motion.div>
            </div> */}
        </div>
    );
})

