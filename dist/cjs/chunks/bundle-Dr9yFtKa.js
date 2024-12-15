'use strict';

var isIOS = function (userAgent) { return /iPhone|iPad|iPod/i.test(userAgent); };
var isWebkit = function (userAgent) { return /WebKit/i.test(userAgent); };
var isChrome = function (userAgent) { return /Chrome/i.test(userAgent); };
var isSafari = function (userAgent) { return !isChrome(userAgent) && /Safari/i.test(userAgent); };
var isMobileIOS = function (userAgent) {
    return isIOS(userAgent) && (isWebkit(userAgent) || isSafari(userAgent));
};

exports.isMobileIOS = isMobileIOS;
exports.isSafari = isSafari;
//# sourceMappingURL=bundle-Dr9yFtKa.js.map
