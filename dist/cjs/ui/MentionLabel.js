'use strict';

var React = require('react');
var ui_ContextMenu = require('../chunks/bundle-BKyZTqvq.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_UserProfile = require('./UserProfile.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-Bdr7xlea.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-C1poxl5k.js');
require('../withSendbird.js');
require('./IconButton.js');
require('../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-Cy1ruNzs.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DZhkNDpN.js');
require('../chunks/bundle-DrIKAEHN.js');
require('./Button.js');
require('./Icon.js');
require('css-vars-ponyfill');
require('../chunks/bundle-CJM9Pdwg.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-C6Q6BfQY.js');
require('../chunks/bundle-C8wv9DWs.js');
require('./ImageRenderer.js');
require('../chunks/bundle-B4PTJ_bJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MentionLabel(props) {
    var _a, _b, _c;
    var mentionTemplate = props.mentionTemplate, mentionedUserId = props.mentionedUserId, mentionedUserNickname = props.mentionedUserNickname, isByMe = props.isByMe;
    var mentionRef = React.useRef();
    var sendbirdState = useSendbirdStateContext.useSendbirdStateContext();
    var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
    var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
    var amIBeingMentioned = userId === mentionedUserId;
    var _d = React.useState(), user = _d[0], setUser = _d[1];
    var fetchUser = React.useCallback(function (toggleDropdown) {
        if (user || !(sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery)) {
            toggleDropdown();
            return;
        }
        var query = sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery({
            userIdsFilter: [mentionedUserId],
        });
        query.next().then(function (members) {
            if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
                setUser(members[0]);
            }
            toggleDropdown();
        });
    }, [sdk, mentionedUserId]);
    return (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement("a", { className: utils.classnames('sendbird-word__mention', amIBeingMentioned && 'sendbird-word__mention--me'), onClick: function () { return fetchUser(toggleDropdown); }, ref: mentionRef, "data-userid": mentionedUserId, "data-nickname": mentionedUserNickname, "data-sb-mention": true },
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.CAPTION_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 }, "".concat(mentionTemplate).concat(mentionedUserNickname)))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems
        /**
        * parentRef: For catching location(x, y) of MenuItems
        * parentContainRef: For toggling more options(menus & reactions)
        */
        , { 
            /**
            * parentRef: For catching location(x, y) of MenuItems
            * parentContainRef: For toggling more options(menus & reactions)
            */
            parentRef: mentionRef, parentContainRef: mentionRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
            React__default.default.createElement(ui_UserProfile, { user: user, onSuccess: closeDropdown, currentUserId: userId }))); } }));
}

module.exports = MentionLabel;
//# sourceMappingURL=MentionLabel.js.map
