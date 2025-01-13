import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LayoutNew from './LayoutNew';

const AppRoutesNew = () => {
    const location = useLocation();

    return (

        <Routes location={location}>
            <Route path="/" element={<LayoutNew />} />
        </Routes>

    );
};

export default AppRoutesNew;
