import React__default, { useState, useContext, useEffect } from 'react';
import { MessageSearchUI } from './MessageSearch/components/MessageSearchUI.js';
import { L as LocalizationContext } from './chunks/bundle-CbLNLMef.js';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import Loader from './ui/Loader.js';
import { MessageSearchProvider } from './MessageSearch/context.js';
import Header from './ui/Header.js';
import './ui/MessageSearchItem.js';
import './chunks/bundle-Ck-Lg2K3.js';
import './chunks/bundle-D4fsEPre.js';
import './chunks/bundle-CnkNoe49.js';
import './chunks/bundle-BxmZCK6X.js';
import './chunks/bundle-B5oDG6vR.js';
import './chunks/bundle-BbICJE5Z.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-pQHYhigr.js';
import './chunks/bundle-CjhP75at.js';
import './chunks/bundle-Di0Zwz2X.js';
import './chunks/bundle-B80WXNZi.js';
import './ui/PlaceHolder.js';
import './ui/MessageSearchFileItem.js';
import './chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-fwRBR_Yw.js';
import './chunks/bundle-DgxVBBM3.js';
import './chunks/bundle-CxwGa1l3.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './chunks/bundle-Bk1oUUzJ.js';
import './ui/TextButton.js';
import './chunks/bundle-DUTd4XYU.js';
import './ui/IconButton.js';

function MessageSearchPannel(props) {
    var channelUrl = props.channelUrl, onResultClick = props.onResultClick, onCloseClick = props.onCloseClick, messageSearchQuery = props.messageSearchQuery, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderNoString = props.renderPlaceHolderNoString, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList, renderSearchItem = props.renderSearchItem;
    var _a = useState(''), searchString = _a[0], setSearchString = _a[1];
    var _b = useState(''), inputString = _b[0], setInputString = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var timeout = null;
    useEffect(function () {
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
    return (React__default.createElement("div", { className: "sendbird-message-search-pannel" },
        React__default.createElement(Header, { className: "sendbird-message-search-pannel__header", renderMiddle: function () { return (React__default.createElement(Header.Title, { title: stringSet.SEARCH_IN_CHANNEL })); }, renderRight: function () { return (React__default.createElement(Header.IconButton, { className: "sendbird-message-search-pannel__header__close-button", onClick: onCloseClick, type: IconTypes.CLOSE, color: IconColors.ON_BACKGROUND_1 })); } }),
        React__default.createElement("div", { className: "sendbird-message-search-pannel__input" },
            React__default.createElement("div", { className: "sendbird-message-search-pannel__input__container" },
                React__default.createElement(Icon, { className: "sendbird-message-search-pannel__input__container__search-icon", type: IconTypes.SEARCH, fillColor: IconColors.ON_BACKGROUND_3, width: "24px", height: "24px" }),
                React__default.createElement("input", { className: "sendbird-message-search-pannel__input__container__input-area", placeholder: stringSet.SEARCH, value: inputString, onChange: handleOnChangeInputString }),
                inputString && loading && (React__default.createElement(Loader, { className: "sendbird-message-search-pannel__input__container__spinner", width: "20px", height: "20px" },
                    React__default.createElement(Icon, { type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "20px", height: "20px" }))),
                !loading && inputString && (React__default.createElement(Icon, { className: "sendbird-message-search-pannel__input__container__reset-input-button", type: IconTypes.REMOVE, fillColor: IconColors.ON_BACKGROUND_3, width: "20px", height: "20px", onClick: handleOnClickResetStringButton })))),
        React__default.createElement("div", { className: "sendbird-message-search-pannel__message-search" },
            React__default.createElement(MessageSearchProvider, { channelUrl: channelUrl, searchString: searchString, onResultClick: onResultClick, onResultLoaded: handleOnResultLoaded, messageSearchQuery: messageSearchQuery },
                React__default.createElement(MessageSearchUI, { renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderNoString: renderPlaceHolderNoString, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, renderSearchItem: renderSearchItem })))));
}

export { MessageSearchPannel as default };
//# sourceMappingURL=MessageSearch.js.map
