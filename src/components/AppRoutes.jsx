import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ESignWorkflow from './Feature pages/ESignWorkflow';
import BusinessWorkflow from './Feature pages/BusinessWorkflow';
import DailyDiary from './Feature pages/DailyDiary';
import Certification from './Certification';
import Layout from './Layout';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><MainPage /></Layout>} />
            <Route path="/esignWorkflow" element={<Layout><ESignWorkflow /></Layout>} />
            <Route path="/businessWorkflow" element={<Layout><BusinessWorkflow /></Layout>} />
            <Route path="/dailyDiary" element={<Layout><DailyDiary /></Layout>} />
            <Route path="/IGBCCertification" element={<Layout><Certification /></Layout>} />
        </Routes>
    );
}

export default AppRoutes;
