'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditUserProfileProviderContext = React__default.default.createContext(null);
var EditUserProfileProvider = function (_a) {
    var children = _a.children, props = _tslib.__rest(_a, ["children"]);
    return React__default.default.createElement(EditUserProfileProviderContext.Provider, { value: props }, children);
};
var useEditUserProfileContext = function () {
    var context = React__default.default.useContext(EditUserProfileProviderContext);
    if (!context)
        throw new Error('EditUserProfileContext not found. Use within the EditUserProfile module.');
    return context;
};

exports.EditUserProfileProvider = EditUserProfileProvider;
exports.useEditUserProfileContext = useEditUserProfileContext;
//# sourceMappingURL=context.js.map
