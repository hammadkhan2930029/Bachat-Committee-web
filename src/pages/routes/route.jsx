import { ChooseUs } from "../component/chooseUs/chooseUs";
import { ContactUs } from "../component/contactUs/contactUs";
import { PrivacyPolicy } from "../component/privacyPolicy/privacypolicy";
import { TermsAndConditions } from "../component/termsAndConditions/termAndConditions";
import { Nav } from '../component/nav/nav';
import { Footer } from "../component/footer/footer";


export const routes = [
    { path: '/choose-us', element: <ChooseUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/nav', element: <Nav /> },
    { path: '/terms-conditions', element: <TermsAndConditions /> },
    { path: '/Footer', element: <Footer /> },
];
