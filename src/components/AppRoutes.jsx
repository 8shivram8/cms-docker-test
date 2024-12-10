import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainPage from './MainPage';
import ESignWorkflow from './Feature pages/ESignWorkflow';
import BusinessWorkflow from './Feature pages/BusinessWorkflow';
import DailyDiary from './Feature pages/DailyDiary';
import Certification from './Certification';
import Layout from './Layout';
import '../components/Styling/AppRoutes.css';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide-fade" timeout={600}>
                <Routes location={location}>
                    <Route path="/" element={<Layout><MainPage /></Layout>} />
                    <Route path="/esignWorkflow" element={<Layout><ESignWorkflow /></Layout>} />
                    <Route path="/businessWorkflow" element={<Layout><BusinessWorkflow /></Layout>} />
                    <Route path="/dailyDiary" element={<Layout><DailyDiary /></Layout>} />
                    <Route path="/IGBCCertification" element={<Layout><Certification /></Layout>} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default AppRoutes;
