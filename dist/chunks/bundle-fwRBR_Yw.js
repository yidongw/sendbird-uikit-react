var isIOS = function (userAgent) { return /iPhone|iPad|iPod/i.test(userAgent); };
var isWebkit = function (userAgent) { return /WebKit/i.test(userAgent); };
var isChrome = function (userAgent) { return /Chrome/i.test(userAgent); };
var isSafari = function (userAgent) { return !isChrome(userAgent) && /Safari/i.test(userAgent); };
var isMobileIOS = function (userAgent) {
    return isIOS(userAgent) && (isWebkit(userAgent) || isSafari(userAgent));
};

export { isSafari as a, isMobileIOS as i };
//# sourceMappingURL=bundle-fwRBR_Yw.js.map
