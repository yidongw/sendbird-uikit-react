import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { useMessageSearchContext } from '../context.js';
import MessageSearchItem from '../../ui/MessageSearchItem.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import MessageSearchFileItem from '../../ui/MessageSearchFileItem.js';
import { a as isDefaultChannelName } from '../../chunks/bundle-Bd-i99nk.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-B_TSibjC.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DQk0aENq.js';

var MessageSearchUI = function (_a) {
    var renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderPlaceHolderNoString = _a.renderPlaceHolderNoString, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderSearchItem = _a.renderSearchItem;
    var _b = useMessageSearchContext(), isInvalid = _b.isInvalid, searchString = _b.searchString, requestString = _b.requestString, currentChannel = _b.currentChannel, retryCount = _b.retryCount, setRetryCount = _b.setRetryCount, loading = _b.loading, scrollRef = _b.scrollRef, hasMoreResult = _b.hasMoreResult, onScroll = _b.onScroll, allMessages = _b.allMessages, onResultClick = _b.onResultClick, selectedMessageId = _b.selectedMessageId, setSelectedMessageId = _b.setSelectedMessageId;
    var stringSet = useContext(LocalizationContext).stringSet;
    var handleRetryToConnect = function () {
        setRetryCount(retryCount + 1);
    };
    var handleOnScroll = function (e) {
        var scrollElement = e.target;
        var scrollTop = scrollElement.scrollTop, scrollHeight = scrollElement.scrollHeight, clientHeight = scrollElement.clientHeight;
        if (!hasMoreResult) {
            return;
        }
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            onScroll(function () {
                // after load more searched messages
            });
        }
    };
    var getChannelName = function () {
        if (!(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) && !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members)) {
            return stringSet.NO_TITLE;
        }
        if (isDefaultChannelName(currentChannel))
            return currentChannel.members.map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        return currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name;
    };
    if (isInvalid && searchString && requestString) {
        return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || (React__default.createElement("div", { className: "sendbird-message-search" },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG, retryToConnect: handleRetryToConnect })));
    }
    if (loading && searchString && requestString) {
        return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || (React__default.createElement("div", { className: "sendbird-message-search" },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.SEARCHING })));
    }
    if (!searchString) {
        return (renderPlaceHolderNoString === null || renderPlaceHolderNoString === void 0 ? void 0 : renderPlaceHolderNoString()) || (React__default.createElement("div", { className: "sendbird-message-search" },
            React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.SEARCH_IN, searchInString: getChannelName() })));
    }
    return (React__default.createElement("div", { className: "sendbird-message-search", onScroll: handleOnScroll, ref: scrollRef }, (allMessages.length > 0)
        ? (allMessages.map(function (message) {
            if (renderSearchItem) {
                return renderSearchItem({ message: message, onResultClick: onResultClick });
            }
            if (message.messageType === 'file') {
                return (React__default.createElement(MessageSearchFileItem, { className: "sendbird-message-search__message-search-item", message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                        onResultClick === null || onResultClick === void 0 ? void 0 : onResultClick(message);
                        setSelectedMessageId(message.messageId);
                    } }));
            }
            return (React__default.createElement(MessageSearchItem, { className: "sendbird-message-search__message-search-item", message: message, key: message.messageId, selected: (selectedMessageId === message.messageId), onClick: function () {
                    onResultClick === null || onResultClick === void 0 ? void 0 : onResultClick(message);
                    setSelectedMessageId(message.messageId);
                } }));
        }))
        : (renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList()) || (React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.NO_RESULTS }))));
};

export { MessageSearchUI, MessageSearchUI as default };
//# sourceMappingURL=MessageSearchUI.js.map
