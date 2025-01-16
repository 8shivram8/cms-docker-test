import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LayoutNew from './LayoutNew';
import Routingflexibility from './feature components/Routingflexibility';

import DocumentFlexibility from './feature components/DocumentFlexibility';
import SdkIntegration from './feature components/SdkIntegration';
import DataCollectionNew from './feature components/DataCollectionNew';
import About from './footer pages/About';
import Privacy from './footer pages/Privacy';
import Terms from './footer pages/Terms';
import Refund from './footer pages/Refund';

const AppRoutesNew = () => {
    const location = useLocation();

    return (

        <Routes location={location}>
            <Route path="/" element={<LayoutNew />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/privacy" element={<Privacy />} /> 
            <Route path="/terms-conditions" element={<Terms />} /> 
            <Route path="/refund-policy" element={<Refund />} /> 
            <Route path="/routing-flexibility" element={<Routingflexibility />} />
            <Route path="/data-collection" element={<DataCollectionNew />} />
            <Route path="/document-flexibility" element={<DocumentFlexibility />} />
            <Route path="/sdk-integration" element={<SdkIntegration />} />
        </Routes>


    );
};

export default AppRoutesNew;
