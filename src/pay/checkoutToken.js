const TOKEN_STORAGE_PREFIX = 'acolead.checkoutToken.';

/** Capture #token=… into sessionStorage and strip it from the URL. */
export function captureCheckoutTokenFromHash(sessionId) {
  if (typeof window === 'undefined' || !sessionId) return null;

  const hash = window.location.hash?.replace(/^#/, '') || '';
  const params = new URLSearchParams(hash);
  const fromHash = params.get('token')?.trim() || '';

  if (fromHash) {
    sessionStorage.setItem(TOKEN_STORAGE_PREFIX + sessionId, fromHash);
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', `${pathname}${search}`);
    return fromHash;
  }

  return sessionStorage.getItem(TOKEN_STORAGE_PREFIX + sessionId);
}

export function getCheckoutToken(sessionId) {
  if (!sessionId) return null;
  return sessionStorage.getItem(TOKEN_STORAGE_PREFIX + sessionId);
}

export function clearCheckoutToken(sessionId) {
  sessionStorage.removeItem(TOKEN_STORAGE_PREFIX + sessionId);
}
