import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LayoutNew from './LayoutNew';
import Routingflexibility from './feature components/Routingflexibility';

import DocumentFlexibility from './feature components/DocumentFlexibility';
import SdkIntegration from './feature components/SdkIntegration';
import DataCollectionNew from './feature components/DataCollectionNew';
import Privacy from './footer pages/Privacy';
import Terms from './footer pages/Terms';
import Refund from './footer pages/Refund';
import TrustSecurity from './security pages/TrustSecurity';
import LegalityNew from './security pages/LegalityNew';
import Teams from './Integration pages/Teams';
import Slack from './Integration pages/Slack';
import Salesforce from './Integration pages/Salesforce';
import Hubspot from './Integration pages/Hubspot';
import Razorpay from './Integration pages/Razorpay';
import Stripe from './Integration pages/Stripe';
import RealEstate from './feature components/RealEstate';
import SupplyChain from './feature components/SupplyChain';
import EngineeringConstruction from './feature components/EngineeringConstruction';
import BackgroundVerification from './feature components/BackgroundVerification';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styled component/AppRoutesNew.css';

const AppRoutesNew = () => {
    const location = useLocation();
    const topRef = useRef(null);

    useEffect(() => {
        if (topRef.current) {
            topRef.current.focus();
        }
    }, [location]);

    return (
        <>
            <div ref={topRef} tabIndex="-1" style={{ position: "absolute", top: 0 }} />
            <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide-fade" timeout={600}>
            <Routes location={location}>
                <Route path="/" element={<LayoutNew />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms-conditions" element={<Terms />} />
                <Route path="/refund-policy" element={<Refund />} />
                <Route path="/retail-real-estate" element={<RealEstate />} />
                <Route path="/manufacturing-supply-chain" element={<SupplyChain />} />
                <Route path="/engineering-construction" element={<EngineeringConstruction />} />
                <Route path="/background-verification" element={<BackgroundVerification />} />
                <Route path="/trust-security" element={< TrustSecurity />} />
                <Route path="/e-signature-legality" element={<LegalityNew />} />
                <Route path="/teams-integration" element={<Teams />} />
                <Route path="/slack-integration" element={<Slack />} />
                <Route path="/salesforce-integration" element={<Salesforce />} />
                <Route path="/hubspot-integration" element={<Hubspot />} />
                <Route path="/razorpay-integration" element={<Razorpay />} />
                <Route path="/stripe-integration" element={<Stripe />} />

            </Routes>
            </CSSTransition>
            </TransitionGroup>
        </>

    );
};

export default AppRoutesNew;
