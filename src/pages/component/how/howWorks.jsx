import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { motion, useInView } from "framer-motion";
import { forwardRef } from 'react';

export const HowWorks = forwardRef((prop, ref) => {
    const refOne = React.useRef(null);


    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (

        <motion.div

            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <motion.div ref={ref} className='flex flex-col justify-center items-center py-12 '>
                <h2 className="text-3xl md:text-5xl font-bold text-[#003049] mb-4 font-sans">
                    How its{" "}
                    <span className="text-[#F77F00]">
                        Work!
                    </span>
                </h2>

                <div className='w-full md:w-full lg:w-[90%] flex flex-col md:flex-row lg:flex-row lg:justify-around items-center p-10'>

                    <div className='group  min-h-[300px] md:min-h-[350px] lg:min-h-[290px] transition-all  duration-500 ease-in-out hover:-translate-y-3   hover:border-[#F77F00] hover:border-1 m-2  w-80 p-8 rounded-xl bg-gradient-to-t from-gray-100 to-slate-50 shadow-lg  flex flex-col items-center text-center' >
                        <div className='bg-white p-4 shadow-sm rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg'>
                            <HowToRegIcon className="text-gray-600 transition-colors duration-500 group-hover:text-[#F77F00] !text-4xl" />

                        </div>
                        <span className="text-2xl text-[#0c263a] py-6 font-sans font-bold transition-colors duration-500 group-hover:text-[#F77F00]">
                            Register/Login
                        </span>

                        <p className="text-gray-400 text-sm transition-colors duration-500 group-hover:text-gray-600">
                            Start your journey by creating a secure account on our platform.
                        </p>
                    </div>
                    {/* --------------------------- */}

                    <div className='min-h-[300px] md:min-h-[350px] lg:min-h-[290px] transition-all  duration-500 ease-in-out hover:-translate-y-3  group hover:border-[#F77F00] hover:border-1 m-2  w-80 p-8 rounded-xl bg-gradient-to-t from-gray-100 to-slate-50 shadow-lg  flex flex-col items-center text-center' >
                        <div className='bg-white p-4 shadow-sm rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg'>
                            <LoginIcon className="text-gray-600 transition-colors duration-500 group-hover:text-[#F77F00] !text-4xl" />

                        </div>

                        <span className="text-2xl text-[#0c263a] py-6 font-sans font-bold transition-colors duration-500 group-hover:text-[#F77F00]">Manage Data</span>
                        <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-700">
                            Organize and track your financial assets with our smart tools, ensuring every detail is at your fingertips.
                        </p>
                    </div>
                    {/* --------------------------- */}

                    <div className='min-h-[300px] md:min-h-[350px] lg:min-h-[290px] transition-all  duration-500 ease-in-out hover:-translate-y-3  group hover:border-[#F77F00] hover:border-1 m-2  w-80 p-8 rounded-xl bg-gradient-to-t from-gray-100 to-slate-50 shadow-lg  flex flex-col items-center text-center'>
                        <div className='bg-white p-4 shadow-sm rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg'>
                            <ManageAccountsIcon className="text-gray-600 transition-colors duration-500 group-hover:text-[#F77F00] !text-4xl" />

                        </div>
                        <span className="text-2xl text-[#0c263a] py-6 font-sans font-bold transition-colors duration-500 group-hover:text-[#F77F00]">Empower Decisions</span>
                        <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-700">
                            Make informed choices using real-time analytics and expert insights designed to grow your investment portfolio.
                        </p>
                    </div>
                </div>



            </motion.div>

        </motion.div>


    )
})
