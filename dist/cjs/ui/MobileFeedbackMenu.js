'use strict';

var React = require('react');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
require('react-dom');
require('../chunks/bundle-DZhkNDpN.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-DrIKAEHN.js');
require('./IconButton.js');
require('./Button.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-CJM9Pdwg.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-BKyZTqvq.js');
require('./SortByRow.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MobileFeedbackMenu(props) {
    var hideMenu = props.hideMenu, onEditFeedback = props.onEditFeedback, onRemoveFeedback = props.onRemoveFeedback;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return (React__default.default.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
        React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-options-menu' },
            React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onEditFeedback();
                } },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.EDIT_COMMENT)),
            React__default.default.createElement("div", { className: 'sendbird-message__bottomsheet--feedback-option', onClick: function () {
                    hideMenu();
                    onRemoveFeedback();
                } },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ERROR }, stringSet.REMOVE_FEEDBACK)))));
}

module.exports = MobileFeedbackMenu;
//# sourceMappingURL=MobileFeedbackMenu.js.map
