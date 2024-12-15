'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var pubSub_topics = require('../../chunks/bundle-Dcn1Gf-8.js');
var ui_Modal = require('../../chunks/bundle-DfISCDoH.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../chunks/bundle-Dmsb_oex.js');
require('../../chunks/bundle-DRvomNLJ.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ui_Button = require('../../ui/Button.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../chunks/bundle-Bn25Hepq.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditDetails = function (props) {
    var onCancel = props.onCancel;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var _a = globalState.config, logger = _a.logger, theme = _a.theme, pubSub = _a.pubSub;
    var _b = OpenChannelSettings_context.useOpenChannelSettingsContext(), channel = _b.channel, onBeforeUpdateChannel = _b.onBeforeUpdateChannel, onChannelModified = _b.onChannelModified, setChannel = _b.setChannel;
    var inputRef = React.useRef(null);
    var formRef = React.useRef(null);
    var hiddenInputRef = React.useRef(null);
    var _c = React.useState(null), currentImg = _c[0], setCurrentImg = _c[1];
    var _d = React.useState(null), newFile = _d[0], setNewFile = _d[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    return (React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
            var _a, _b, _c, _d, _e;
            if (title !== '' && !((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value)) {
                if ((_b = formRef.current) === null || _b === void 0 ? void 0 : _b.reportValidity) { // might not work in explorer
                    formRef.current.reportValidity();
                }
                return;
            }
            var currentTitle = (_d = (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
            var currentImg = newFile;
            logger.info('ChannelSettings: Channel information being updated');
            var params = onBeforeUpdateChannel
                ? onBeforeUpdateChannel(currentTitle, currentImg, (_e = channel === null || channel === void 0 ? void 0 : channel.data) !== null && _e !== void 0 ? _e : '')
                : {
                    name: currentTitle,
                    coverUrlOrImage: currentImg !== null && currentImg !== void 0 ? currentImg : undefined,
                    data: channel === null || channel === void 0 ? void 0 : channel.data,
                };
            logger.info('ChannelSettings: Updating channel information', params);
            channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (updatedChannel) {
                logger.info('ChannelSettings: Channel information update succeeded', updatedChannel);
                onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(updatedChannel);
                setChannel === null || setChannel === void 0 ? void 0 : setChannel(updatedChannel);
                pubSub === null || pubSub === void 0 ? void 0 : pubSub.publish(pubSub_topics.pubSubTopics.UPDATE_OPEN_CHANNEL, updatedChannel);
            }).catch(function (error) {
                logger.error('ChannelSettings: Channel infomation update failed', error);
                setChannel === null || setChannel === void 0 ? void 0 : setChannel(null);
            });
            onCancel();
        }, type: ui_Button.ButtonTypes.PRIMARY },
        React__default.default.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React__default.default.createElement("div", { className: "channel-profile-form__img-section" },
                React__default.default.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React__default.default.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React__default.default.createElement(ui_Avatar.Avatar, { height: "80px", width: "80px", src: currentImg })) : (React__default.default.createElement(ui_OpenChannelAvatar, { height: 80, width: 80, channel: channel, theme: theme }))),
                React__default.default.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                        if (e.target.files) {
                            setCurrentImg(URL.createObjectURL(e.target.files[0]));
                            setNewFile(e.target.files[0]);
                        }
                        if (hiddenInputRef.current)
                            hiddenInputRef.current.value = '';
                    } }),
                React__default.default.createElement(ui_TextButton, { className: "channel-profile-form__avatar-button", onClick: function () { var _a; return (_a = hiddenInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, disableUnderline: true },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))),
            React__default.default.createElement("div", { className: "channel-profile-form__name-section" },
                React__default.default.createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME),
                React__default.default.createElement(ui_Input.default, { required: title !== '', name: "channel-profile-form__name", ref: inputRef, value: title, placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER })))));
};

module.exports = EditDetails;
//# sourceMappingURL=EditDetailsModal.js.map
