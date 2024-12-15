'use strict';

var React = require('react');
var ui_ContextMenu = require('../chunks/bundle-BYSQ-mQr.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var ui_UserProfile = require('./UserProfile.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-DRvomNLJ.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-lGoyqUWm.js');
require('../withSendbird.js');
require('./IconButton.js');
require('../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DfISCDoH.js');
require('../chunks/bundle-CzcmYPsN.js');
require('./Button.js');
require('./Icon.js');
require('css-vars-ponyfill');
require('../chunks/bundle-2M4zbjEc.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-Dcn1Gf-8.js');
require('../chunks/bundle-Dmsb_oex.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BvFqbvri.js');

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
