var noop = function () {
    /** noop * */
};
var deleteNullish = function (obj) {
    var cleaned = {};
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== undefined && value !== null) {
            cleaned[key] = value;
        }
    });
    return cleaned;
};
function openURL(url) {
    var safeURL = url;
    if (safeURL) {
        if (!safeURL.startsWith('http://') && !safeURL.startsWith('https://')) {
            safeURL = 'https://' + safeURL;
        }
        window.open(safeURL, '_blank', 'noopener,noreferrer');
    }
}
function classnames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(Boolean).join(' ');
}

export { classnames as c, deleteNullish as d, noop as n, openURL as o };
//# sourceMappingURL=bundle-pQHYhigr.js.map
