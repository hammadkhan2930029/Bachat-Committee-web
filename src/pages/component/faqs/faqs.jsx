
import React, { useState, forwardRef, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { motion, useInView } from "framer-motion";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import faq2 from '../../assets/new/faq-2.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

export const Faqs = forwardRef((props, ref) => {

    const navigate = useNavigate()
    const [select_drop, setSelect_drop] = useState(1)
    const [select_drop_2, setSelect_drop_2] = useState(4)

    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    const stockMarketQA = [
        {
            id: 1,
            question: "What is a Bachat Committee?",
            answer: "A Bachat Committee is a group savings system where members contribute a fixed amount regularly, and each member receives the total pooled amount in their assigned turn."
        },
        {
            id: 2,
            question: "How does the app work?",
            answer: "You can create or join a committee, add members, set contribution amounts and duration, and track all payments and payouts digitally — all in one place."
        },
        {
            id: 3,
            question: "Is this app free to use?",
            answer: "Yes, the app is currently free for all users. Any future charges or premium features will always be clearly communicated."
        },
        {
            id: 4,
            question: "Does the app hold or manage my money?",
            answer: "The app is designed to help you organize and manage committees digitally. Financial transactions are conducted between members as per the agreed method."
        },
        {
            id: 5,
            question: "Can I create my own committee?",
            answer: "Yes, you can easily create your own committee, invite members, and define contribution amounts, duration, and payout order."
        },
        {
            id: 6,
            question: "Can I join multiple committees?",
            answer: "Yes, you can participate in multiple committees at the same time and manage all of them بسهولة from within the app."
        },
        {
            id: 7,
            question: "How do I invite others to join?",
            answer: "You can invite members بسهولة through a shareable link or referral code via WhatsApp, SMS, or other platforms."
        }

    ];
    return (
        <motion.div ref={ref} className='py-10 px-5'>
            <div className='flex flex-col justify-center items-center'>
                <motion.div
                    ref={refOne}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .8 }}
                    className=" flex flex-col justify-center items-center pt-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4 font-sans text-center">

                        <span className="text-[#F77F00]">
                            Frequently {" "}
                        </span>
                        Asked Questions
                    </h2>
                    {/* <p className="text-[#003049] max-w-md font-sans text-center">
                        Hey there! Got questions? We've got answers. Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
                    </p> */}
                </motion.div>
                {/* -------------------------------------------- */}
                <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center w-full'>
                    <div className='flex flex-col justify-center items-center  w-full  md:w-full lg:w-[45%]  lg:h-screen'>
                        {stockMarketQA.map((item, index) => {
                            return (

                                <motion.div
                                    ref={refOne}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: .8 }}
                                    className='w-full border-b-2 border-gray-200  ' onClick={() => setSelect_drop(item.id)}>
                                    <div className='flex flex-row justify-between items-center p-3 '>
                                        <span className={`${select_drop === item.id ? 'text-[#F77F00]' : 'text-black'} text-lg font-bold transition-all duration-300`}>{item.question}</span>
                                        <div className={`border ${select_drop === item.id ? 'border-[#FCBF49] text-[#F77F00]' : 'border-gray-200 text-gray-500'} rounded-full transition-all duration-300`}>
                                            {select_drop === item.id ? (<RemoveIcon />) : (<AddIcon />)}
                                        </div>

                                    </div>
                                    {select_drop === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className='overflow-hidden'>
                                            <p className='text-sm text-[#003049] p-2'>{item.answer}</p>
                                        </motion.div>
                                    )}

                                </motion.div>
                            )
                        })}
                        <div className='flex justify-center items-center py-10'>

                            <span className='text-md text-[#003049] p-2'>Still have questions? Our support team is here to help you every step of the way. </span>
                            <a href='#'><WhatsAppIcon className='text-green-600' /></a>
                        </div>

                    </div>

                    <motion.div
                        ref={refOne}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: .8 }}
                        className='w-full md:w-full lg:w-[40%]  flex justify-center md:pt-5  lg:h-screen'>
                        <img src={faq2} className='w-auto lg:w-[80%] object-contain drop-shadow-[0_0_25px_rgba(247,127,0,0.5)]' />
                    </motion.div>

                </div>

            </div>

        </motion.div>
       

    )
})
