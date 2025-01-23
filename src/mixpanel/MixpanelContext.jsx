import React, { createContext, useContext, useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const MixpanelContext = createContext(null);

export const MixpanelProvider = ({ children }) => {
  useEffect(() => {
    mixpanel.init('c8adf360786813ebcbdc0b2983d8b933', {
      ignore_dnt: true,
      debug: true,
      persistence: 'localStorage',
    });
  }, []);

  const trackEvent = (event, properties = {}) => {
    mixpanel.track(event, properties);
  };

  const identifyUser = (userId) => {
    mixpanel.identify(userId);
  };

  const setUserProfile = (properties) => {
    mixpanel.people.set(properties);
  };

  const logoutUser = () => {
    mixpanel.reset();
  };

  const contextValue = { trackEvent, identifyUser, setUserProfile, logoutUser };

  return (
    <MixpanelContext.Provider value={contextValue}>
      {children}
    </MixpanelContext.Provider>
  );
};

export const useMixpanel = () => {
  const context = useContext(MixpanelContext);
  if (!context) {
    throw new Error('useMixpanel must be used within a MixpanelProvider');
  }
  return context;
};
