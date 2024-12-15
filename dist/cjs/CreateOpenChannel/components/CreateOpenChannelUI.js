'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Avatar = require('../../chunks/bundle-C8wv9DWs.js');
require('../../chunks/bundle-Bdr7xlea.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Button = require('../../ui/Button.js');
var ui_Modal = require('../../chunks/bundle-DZhkNDpN.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Input = require('../../ui/Input.js');
var ui_TextButton = require('../../ui/TextButton.js');
var CreateOpenChannel_context = require('../context.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CLzI6bbe.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function CreateOpenChannelUI(_a) {
    var closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    var _b = React.useState(null), newFile = _b[0], setNewFile = _b[1];
    var _c = React.useState(null), currentImage = _c[0], setCurrentImg = _c[1];
    var inputFormRef = React.useRef(null);
    var inputFileRef = React.useRef(null);
    var inputTextRef = React.useRef(null);
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _d = CreateOpenChannel_context.useCreateOpenChannelContext(), logger = _d.logger, createNewOpenChannel = _d.createNewOpenChannel;
    return (React__default.default.createElement("div", { className: "sendbird-create-open-channel-ui" },
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, titleText: stringSet.CREATE_OPEN_CHANNEL_LIST__TITLE, submitText: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBMIT, type: ui_Button.ButtonTypes.PRIMARY, onCancel: closeModal, renderHeader: renderHeader, onSubmit: function () {
                var _a;
                var channelName = (_a = inputTextRef === null || inputTextRef === void 0 ? void 0 : inputTextRef.current) === null || _a === void 0 ? void 0 : _a.value;
                if (!channelName) {
                    logger.warning('CreateOpenChannelUI: You should fill the channel name');
                    return;
                }
                createNewOpenChannel({
                    name: channelName,
                    coverUrlOrImage: newFile !== null && newFile !== void 0 ? newFile : undefined,
                });
                closeModal === null || closeModal === void 0 ? void 0 : closeModal();
            } },
            React__default.default.createElement(React__default.default.Fragment, null, (renderProfileInput === null || renderProfileInput === void 0 ? void 0 : renderProfileInput()) || (React__default.default.createElement("form", { className: "sendbird-create-open-channel-ui__profile-input", ref: inputFormRef, onSubmit: function (e) { e.preventDefault(); } },
                React__default.default.createElement(ui_Input.InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_SECTION),
                React__default.default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section" },
                    React__default.default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar" }, currentImage
                        ? (React__default.default.createElement(ui_Avatar.Avatar, { width: "80px", height: "80px", src: currentImage })) : (React__default.default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar--default" },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "46px", height: "46px" })))),
                    React__default.default.createElement("input", { className: "sendbird-create-open-channel-ui__profile-input__img-section__input", ref: inputFileRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                            if (e.target.files) {
                                setCurrentImg(URL.createObjectURL(e.target.files[0]));
                                setNewFile(e.target.files[0]);
                            }
                            if (inputFileRef.current) {
                                inputFileRef.current.value = '';
                            }
                        } }),
                    React__default.default.createElement(ui_TextButton, { className: "sendbird-create-open-channel-ui__profile-input__img-section__button", onClick: function () { var _a; return (_a = inputFileRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, disableUnderline: true },
                        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_UPLOAD))),
                React__default.default.createElement("div", { style: { marginTop: '20px' } },
                    React__default.default.createElement(ui_Input.InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_SECTION)),
                React__default.default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__name-section" },
                    React__default.default.createElement(ui_Input.default, { name: "sendbird-create-open-channel-ui__profile-input__name-section__input", ref: inputTextRef, placeHolder: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_PLACE_HOLDER }))))))));
}

module.exports = CreateOpenChannelUI;
//# sourceMappingURL=CreateOpenChannelUI.js.map
