import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ESignWorkflow from './Feature pages/ESignWorkflow';
import BusinessWorkflow from './Feature pages/BusinessWorkflow';
import DailyDiary from './Feature pages/DailyDiary';
import Certification from './Certification';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/esignWorkflow" element={<ESignWorkflow />} />
            <Route path="/businessWorkflow" element={<BusinessWorkflow />} />
            <Route path="/dailyDiary" element={<DailyDiary />} />
            <Route path="/IGBCCertification" element={<Certification />} />
        </Routes>
    )
}

export default AppRoutes
