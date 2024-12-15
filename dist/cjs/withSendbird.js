'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./chunks/bundle-Bdr7xlea.js');
var React = require('react');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var SendbirdSdkContext = React__default.default.createContext(null);
/**
 * @deprecated This function is deprecated. Use `useSendbirdStateContext` instead.
 * */
var withSendbirdContext = function (OriginalComponent, mapStoreToProps) {
    var ContextAwareComponent = function (props) { return (React__default.default.createElement(SendbirdSdkContext.Consumer, null, function (context) {
        if (mapStoreToProps && typeof mapStoreToProps !== 'function') {
            // eslint-disable-next-line no-console
            console.warn('Second parameter to withSendbirdContext must be a pure function');
        }
        var mergedProps = (mapStoreToProps && typeof mapStoreToProps === 'function')
            ? _tslib.__assign(_tslib.__assign({}, mapStoreToProps(context)), props) : _tslib.__assign(_tslib.__assign({}, context), props);
        return React__default.default.createElement(OriginalComponent, _tslib.__assign({}, mergedProps));
    })); };
    var componentName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
    ContextAwareComponent.displayName = "SendbirdAware".concat(componentName);
    return ContextAwareComponent;
};

exports.SendbirdSdkContext = SendbirdSdkContext;
exports.default = withSendbirdContext;
//# sourceMappingURL=withSendbird.js.map
