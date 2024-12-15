import React__default, { useState, useRef, useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { A as Avatar } from '../../chunks/bundle-2pbuHA3C.js';
import '../../chunks/bundle-HcNswZ5p.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import { ButtonTypes } from '../../ui/Button.js';
import { M as Modal } from '../../chunks/bundle-ja8H3E0K.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Input, { InputLabel } from '../../ui/Input.js';
import TextButton from '../../ui/TextButton.js';
import { useCreateOpenChannelContext } from '../context.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DGMsaaNU.js';

function CreateOpenChannelUI(_a) {
    var closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    var _b = useState(null), newFile = _b[0], setNewFile = _b[1];
    var _c = useState(null), currentImage = _c[0], setCurrentImg = _c[1];
    var inputFormRef = useRef(null);
    var inputFileRef = useRef(null);
    var inputTextRef = useRef(null);
    var stringSet = useContext(LocalizationContext).stringSet;
    var _d = useCreateOpenChannelContext(), logger = _d.logger, createNewOpenChannel = _d.createNewOpenChannel;
    return (React__default.createElement("div", { className: "sendbird-create-open-channel-ui" },
        React__default.createElement(Modal, { isFullScreenOnMobile: true, titleText: stringSet.CREATE_OPEN_CHANNEL_LIST__TITLE, submitText: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBMIT, type: ButtonTypes.PRIMARY, onCancel: closeModal, renderHeader: renderHeader, onSubmit: function () {
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
            React__default.createElement(React__default.Fragment, null, (renderProfileInput === null || renderProfileInput === void 0 ? void 0 : renderProfileInput()) || (React__default.createElement("form", { className: "sendbird-create-open-channel-ui__profile-input", ref: inputFormRef, onSubmit: function (e) { e.preventDefault(); } },
                React__default.createElement(InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_SECTION),
                React__default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section" },
                    React__default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar" }, currentImage
                        ? (React__default.createElement(Avatar, { width: "80px", height: "80px", src: currentImage })) : (React__default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__img-section__avatar--default" },
                        React__default.createElement(Icon, { type: IconTypes.CHANNELS, fillColor: IconColors.CONTENT, width: "46px", height: "46px" })))),
                    React__default.createElement("input", { className: "sendbird-create-open-channel-ui__profile-input__img-section__input", ref: inputFileRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                            if (e.target.files) {
                                setCurrentImg(URL.createObjectURL(e.target.files[0]));
                                setNewFile(e.target.files[0]);
                            }
                            if (inputFileRef.current) {
                                inputFileRef.current.value = '';
                            }
                        } }),
                    React__default.createElement(TextButton, { className: "sendbird-create-open-channel-ui__profile-input__img-section__button", onClick: function () { var _a; return (_a = inputFileRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, disableUnderline: true },
                        React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: LabelColors.PRIMARY }, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__IMG_UPLOAD))),
                React__default.createElement("div", { style: { marginTop: '20px' } },
                    React__default.createElement(InputLabel, null, stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_SECTION)),
                React__default.createElement("div", { className: "sendbird-create-open-channel-ui__profile-input__name-section" },
                    React__default.createElement(Input, { name: "sendbird-create-open-channel-ui__profile-input__name-section__input", ref: inputTextRef, placeHolder: stringSet.CREATE_OPEN_CHANNEL_LIST__SUBTITLE__TEXT_PLACE_HOLDER }))))))));
}

export { CreateOpenChannelUI as default };
//# sourceMappingURL=CreateOpenChannelUI.js.map
