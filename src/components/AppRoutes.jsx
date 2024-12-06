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
            <Route path="/esign-workflow" element={<ESignWorkflow />} />
            <Route path="/business-workflow" element={<BusinessWorkflow />} />
            <Route path="/daily-diary" element={<DailyDiary />} />
            <Route path="/IGBC-Certification" element={<Certification />} />
        </Routes>
    )
}

export default AppRoutes
