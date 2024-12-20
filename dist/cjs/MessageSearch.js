'use strict';

var React = require('react');
var MessageSearch_components_MessageSearchUI = require('./MessageSearch/components/MessageSearchUI.js');
var LocalizationContext = require('./chunks/bundle-CmBrGegh.js');
var ui_Icon = require('./ui/Icon.js');
var ui_Loader = require('./ui/Loader.js');
var MessageSearch_context = require('./MessageSearch/context.js');
var ui_Header = require('./ui/Header.js');
require('./ui/MessageSearchItem.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./chunks/bundle-C3e9xkw6.js');
require('./chunks/bundle-BCJ8mayg.js');
require('./chunks/bundle-DSQevcAL.js');
require('./chunks/bundle-BayL2H8_.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BYHj6UqH.js');
require('./chunks/bundle-BvFqbvri.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./ui/PlaceHolder.js');
require('./ui/MessageSearchFileItem.js');
require('./chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-4kwoH67w.js');
require('./chunks/bundle-C0tdWwa4.js');
require('./chunks/bundle-CMe3c_v7.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-CzcmYPsN.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');
require('./ui/IconButton.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageSearchPannel(props) {
    var channelUrl = props.channelUrl, onResultClick = props.onResultClick, onCloseClick = props.onCloseClick, messageSearchQuery = props.messageSearchQuery, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderNoString = props.renderPlaceHolderNoString, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList, renderSearchItem = props.renderSearchItem;
    var _a = React.useState(''), searchString = _a[0], setSearchString = _a[1];
    var _b = React.useState(''), inputString = _b[0], setInputString = _b[1];
    var _c = React.useState(false), loading = _c[0], setLoading = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var timeout = null;
    React.useEffect(function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            setSearchString(inputString);
            setLoading(true);
            timeout = null;
        }, 500);
    }, [inputString]);
    var handleOnChangeInputString = function (e) {
        setInputString(e.target.value);
    };
    var handleOnResultLoaded = function () {
        setLoading(false);
    };
    var handleOnClickResetStringButton = function (e) {
        e.stopPropagation();
        setInputString('');
        setSearchString('');
    };
    return (React__default.default.createElement("div", { className: "sendbird-message-search-pannel" },
        React__default.default.createElement(ui_Header.default, { className: "sendbird-message-search-pannel__header", renderMiddle: function () { return (React__default.default.createElement(ui_Header.default.Title, { title: stringSet.SEARCH_IN_CHANNEL })); }, renderRight: function () { return (React__default.default.createElement(ui_Header.default.IconButton, { className: "sendbird-message-search-pannel__header__close-button", onClick: onCloseClick, type: ui_Icon.IconTypes.CLOSE, color: ui_Icon.IconColors.ON_BACKGROUND_1 })); } }),
        React__default.default.createElement("div", { className: "sendbird-message-search-pannel__input" },
            React__default.default.createElement("div", { className: "sendbird-message-search-pannel__input__container" },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-message-search-pannel__input__container__search-icon", type: ui_Icon.IconTypes.SEARCH, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "24px", height: "24px" }),
                React__default.default.createElement("input", { className: "sendbird-message-search-pannel__input__container__input-area", placeholder: stringSet.SEARCH, value: inputString, onChange: handleOnChangeInputString }),
                inputString && loading && (React__default.default.createElement(ui_Loader, { className: "sendbird-message-search-pannel__input__container__spinner", width: "20px", height: "20px" },
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.PRIMARY, width: "20px", height: "20px" }))),
                !loading && inputString && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-message-search-pannel__input__container__reset-input-button", type: ui_Icon.IconTypes.REMOVE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "20px", height: "20px", onClick: handleOnClickResetStringButton })))),
        React__default.default.createElement("div", { className: "sendbird-message-search-pannel__message-search" },
            React__default.default.createElement(MessageSearch_context.MessageSearchProvider, { channelUrl: channelUrl, searchString: searchString, onResultClick: onResultClick, onResultLoaded: handleOnResultLoaded, messageSearchQuery: messageSearchQuery },
                React__default.default.createElement(MessageSearch_components_MessageSearchUI.MessageSearchUI, { renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderNoString: renderPlaceHolderNoString, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, renderSearchItem: renderSearchItem })))));
}

module.exports = MessageSearchPannel;
//# sourceMappingURL=MessageSearch.js.map
