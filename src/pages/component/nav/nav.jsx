import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PrimaryButton from '../../Buttons/primaryButton';
import logo2 from '../../assets/committeeAssets/logo2.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export const Nav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [isSticky, setIsSticky] = useState(false);
    const [color, setColor] = useState(null)
    const [headerLogo, setHeaderLogo] = useState(null);


    //------------------------------------------------------------------

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        };

        const handleScroll = () => {
            if (window.scrollY > 100) {

                setIsSticky(true);
            } else {
                setIsSticky(false);

            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    //-------------------------------------------------
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });

    //-------------------------------------------------
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            const yOffSet = -130
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffSet
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }


    return (


        <div className={`w-full transition-all duration-300  ${isSticky
            ? "fixed top-0 left-0 z-50 bg-white shadow-lg"
            : "relative bg-transparent"
            }`}>
            <motion.nav

                ref={refOne}
                initial={{ opacity: 0, y: -20 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}

                className="w-full bg-transparent transition-all duration-300 px-4 md:px-10 py-4 relative z-50"
            >
                <div className="flex items-center justify-between lg:justify-around ">

                    <div className="w-25 cursor-pointer">
                        <img
                            src={logo2}
                            alt="Logo"
                            className="w-full"
                            onClick={() => navigate("/")}
                        />
                    </div>

                    <div className="hidden lg:flex space-x-8 text-[#003049] font-medium ">
                        <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${location.pathname === '/' ? 'text-[#F77F00]' : 'text-[#003049]'}`} onClick={() => navigate('/')}>Home</span>
                        <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 1 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                            onClick={() => {
                                scrollToSection('about')
                                setColor(1)
                            }}>About</span>
                        <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 2 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                            onClick={() => {
                                scrollToSection('whyUs')
                                setColor(2)
                            }}>Why us</span>
                        <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 3 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                            onClick={() => {
                                scrollToSection('demo')
                                setColor(3)
                            }}>Demo</span>



                        <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 4 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                            onClick={() => {
                                setColor(4)
                                scrollToSection('faqs')

                            }}>FAQs</span>



                    </div>

                    <div className="hidden lg:block">

                        <PrimaryButton title='GET THE APP'
                            icon={ArrowForwardIcon}
                            onClick={() => {
                                // navigate('/login')
                            }} />
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-gray-800 text-2xl"
                        >
                            {mobileOpen ? (<CloseIcon className="w-10 h-10 text-black" />) : (<MenuIcon className="w-10 h-10 text-black" />)}

                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden absolute top-full left-0 w-full bg-white p-4 rounded-b-lg shadow-lg flex flex-col space-y-4 text-[#003049] font-medium z-50"
                        >
                            <span className="hover:text-[#F77F00] cursor-pointer" onClick={() => navigate('/')}>Home</span>

                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 1 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    setColor(1)
                                    scrollToSection('about')
                                    setMobileOpen(false)
                                }}>About</span>

                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 2 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    scrollToSection('whyUs')
                                    setColor(2)
                                    setMobileOpen(false)

                                }}>Why us</span>
                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 7 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    scrollToSection('demo')
                                    setColor(7)
                                    setMobileOpen(false)

                                }}>Demo</span>

                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 3 ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    setColor(3)
                                    scrollToSection('faqs')
                                    setMobileOpen(false)


                                }}>FAQs</span>

                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 4 || location.pathname === '/privacy-policy' ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    navigate('/privacy-policy')
                                    setColor(4)
                                    setMobileOpen(false)

                                }}>Privacy Policy</span>

                            <span className={`hover:text-[#F77F00] cursor-pointer font-sans text-lg ${color == 5 || location.pathname === '/terms-conditions' ? 'text-[#F77F00]' : 'text-[#003049]'}`}
                                onClick={() => {
                                    navigate('/terms-conditions')
                                    setColor(5)
                                    setMobileOpen(false)

                                }}>Terms & Conditions</span>

                            <PrimaryButton title='GET THE APP'
                                icon={ArrowForwardIcon}

                            // onClick={() => {
                            //     navigate('/login')
                            // }} 
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

        </div>

    );
};
