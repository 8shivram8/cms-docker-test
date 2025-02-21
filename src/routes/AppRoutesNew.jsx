import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LayoutNew from '../new components/LayoutNew';
import Routingflexibility from '../new components/feature components/Routingflexibility';

import DocumentFlexibility from '../new components/feature components/DocumentFlexibility';
import SdkIntegration from '../new components/feature components/SdkIntegration';
import DataCollectionNew from '../new components/feature components/DataCollectionNew';
import Privacy from '../new components/footer pages/Privacy';
import Terms from '../new components/footer pages/Terms';
import Refund from '../new components/footer pages/Refund';
import TrustSecurity from '../new components/security pages/TrustSecurity';
import LegalityNew from '../new components/security pages/LegalityNew';
import Teams from '../new components/Integration pages/Teams';
import Slack from '../new components/Integration pages/Slack';
import Salesforce from '../new components/Integration pages/Salesforce';
import Hubspot from '../new components/Integration pages/Hubspot';
import Razorpay from '../new components/Integration pages/Razorpay';
import Stripe from '../new components/Integration pages/Stripe';
import RealEstate from '../new components/feature components/RealEstate';
import SupplyChain from '../new components/feature components/SupplyChain';
import BackgroundVerification from '../new components/feature components/BackgroundVerification';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styled component/AppRoutesNew.css';
import MultiuserWorkflow from '../new components/feature components/MultiuserWorkflow';
import MainLayout from '../parent components/MainLayout';
import AcoSign from '../parent components/AcoSign';
import GoogleDrive from '../new components/Integration pages/GoogleDrive';
import Onedrive from '../new components/Integration pages/Onedrive';

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
                        {/* <Route path="" element={<MainLayout />} /> */}
                        <Route path="" element={<LayoutNew />} />
                        <Route path="/acoSign" element={<AcoSign />} />
                        <Route path="/services" element={< AcoSign/>} />
                        <Route path="/privacy" element={<Privacy />} />                      
                        <Route path="/terms-conditions" element={<Terms />} />
                        <Route path="/refund-policy" element={<Refund />} />
                        <Route path="/retail-real-estate" element={<RealEstate />} />
                        <Route path="/manufacturing-supply-chain" element={<SupplyChain />} />
                        <Route path="/multiuser-workflow" element={<MultiuserWorkflow />} />
                        <Route path="/background-verification" element={<BackgroundVerification />} />
                        <Route path="/trust-security" element={< TrustSecurity />} />
                        <Route path="/e-signature-legality" element={<LegalityNew />} />
                        <Route path="/teams-integration" element={<Teams />} />
                        <Route path="/slack-integration" element={<Slack />} />
                        <Route path="/salesforce-integration" element={<Salesforce />} />
                        <Route path="/hubspot-integration" element={<Hubspot />} />
                        <Route path="/razorpay-integration" element={<Razorpay />} />
                        <Route path="/stripe-integration" element={<Stripe />} />
                        <Route path="/googleDrive-integration" element={<GoogleDrive />} />
                        <Route path="/onedrive-integration" element={<Onedrive />} />
                        

                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>

    );
};

export default AppRoutesNew;
