'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Avatar = require('../../chunks/bundle-Dmsb_oex.js');
require('../../chunks/bundle-DRvomNLJ.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ui_Button = require('../../ui/Button.js');
var ui_Modal = require('../../chunks/bundle-DfISCDoH.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Input = require('../../ui/Input.js');
var ui_TextButton = require('../../ui/TextButton.js');
var CreateOpenChannel_context = require('../context.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-LSLwWEwG.js');

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
