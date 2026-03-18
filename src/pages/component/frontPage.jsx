import { useEffect, useRef, useState } from 'react'
import { Slider } from './SliderComponents/Slider'
import { WhyChooseUs } from './whyChooseUs/whyChooseUs';
import { FullCard } from './fullCard/fullCard';
import { ChooseUs } from './chooseUs/chooseUs';
import { Faqs } from './faqs/faqs';
import { Footer } from './footer/footer';
import LogoSlider from './logoSlider/logoSlider'
import { Splash } from './Splash/splash';

function FrontPage() {
    const [count, setCount] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setCount(false)
            setLoading(false)
        }, 2000);
    }, [])

    const chooseUsRef = useRef(null);
    const aboutRef = useRef(null);

    const loginRef = useRef(null);
    const blogsRef = useRef(null)
    const faqRef = useRef(null)




    return (
        <>
            {loading ? (
                <Splash />
            ) : (
                <div style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
                    <Slider />
                    <LogoSlider />
                    <div id="about">
                        <WhyChooseUs ref={aboutRef} />
                    </div>
                    <div id='demo'>
                        <FullCard />
                    </div>
                    <div id="whyUs">
                        <ChooseUs />
                    </div>
                    <div id="faqs">
                        <Faqs ref={faqRef} />
                    </div>
                    <Footer />

                </div>
            )}
        </>
    )
}

export default FrontPage;

