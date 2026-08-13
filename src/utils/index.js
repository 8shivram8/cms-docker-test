export const checkIsIOS = (userAgent) => {
    return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        || (/Macintosh/.test(userAgent)
            && navigator.maxTouchPoints
            && navigator.maxTouchPoints > 1);
};

export const checkIsAndroid = () => /android/i.test(navigator.userAgent);

// Detect if running in standalone mode (PWA)
const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

// If standalone, you might want different behavior
const isPWA = isStandalone;