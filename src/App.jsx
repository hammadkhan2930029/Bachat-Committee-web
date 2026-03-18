import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './pages/routes/route';
import FrontPage from './pages/component/frontPage';
function App() {
    return (
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />

                {routes.map((route, index) => (
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={route.element} 
                    />
                ))}
            </Routes>
        </BrowserRouter>
       
    );
}

export default App;
