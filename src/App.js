import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { _router } from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // 1000ms animation duration
    }, []);
    return <RouterProvider router={_router} />;
};

export default App;
