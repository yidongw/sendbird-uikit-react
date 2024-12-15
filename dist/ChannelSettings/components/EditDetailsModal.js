import React__default, { useRef, useState, useContext } from 'react';
import { useChannelSettingsContext } from '../context.js';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { M as Modal } from '../../chunks/bundle-ptS-tNRF.js';
import Input, { InputLabel } from '../../ui/Input.js';
import { A as Avatar } from '../../chunks/bundle-BbICJE5Z.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import { ButtonTypes } from '../../ui/Button.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import { u as uuidv4 } from '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-BL0uQSu6.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../chunks/bundle-A5WEPjt6.js';
import 'react-dom';
import '../../chunks/bundle-pQHYhigr.js';
import '../../ui/SortByRow.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../ui/Icon.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../chunks/bundle-Bi8yp0Ws.js';

var EditDetails = function (props) {
    var _a, _b, _c;
    var onSubmit = props.onSubmit, onCancel = props.onCancel;
    var _d = useChannelSettingsContext(), channel = _d.channel, onChannelModified = _d.onChannelModified, onBeforeUpdateChannel = _d.onBeforeUpdateChannel, setChannelUpdateId = _d.setChannelUpdateId;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var state = useSendbirdStateContext();
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
    var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
    var inputRef = useRef(null);
    var formRef = useRef(null);
    var hiddenInputRef = useRef(null);
    var _e = useState(null), currentImg = _e[0], setCurrentImg = _e[1];
    var _f = useState(null), newFile = _f[0], setNewFile = _f[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement(Modal, { isFullScreenOnMobile: true, titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE, submitText: stringSet.BUTTON__SAVE, onCancel: onCancel, onSubmit: function () {
            var _a, _b, _c;
            if (title !== '' && !((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value)) {
                if ((_b = formRef.current) === null || _b === void 0 ? void 0 : _b.reportValidity) { // might not work in explorer
                    formRef.current.reportValidity();
                }
                return;
            }
            var currentTitle = (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.value;
            var currentImg = newFile;
            logger.info('ChannelSettings: Channel information being updated', {
                currentTitle: currentTitle,
                currentImg: currentImg,
            });
            if (onBeforeUpdateChannel) {
                logger.info('ChannelSettings: onBeforeUpdateChannel');
                var params = onBeforeUpdateChannel(currentTitle !== null && currentTitle !== void 0 ? currentTitle : '', currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
                channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (groupChannel) {
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId(uuidv4());
                    onSubmit();
                });
            }
            else {
                logger.info('ChannelSettings: normal');
                channel === null || channel === void 0 ? void 0 : channel.updateChannel({
                    coverImage: currentImg,
                    name: currentTitle,
                    data: (channel === null || channel === void 0 ? void 0 : channel.data) || '',
                }).then(function (groupChannel) {
                    logger.info('ChannelSettings: Channel information updated', groupChannel);
                    onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
                    setChannelUpdateId === null || setChannelUpdateId === void 0 ? void 0 : setChannelUpdateId(uuidv4());
                    onSubmit();
                });
            }
        }, type: ButtonTypes.PRIMARY },
        React__default.createElement("form", { className: "channel-profile-form", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
            React__default.createElement("div", { className: "channel-profile-form__img-section" },
                React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE),
                React__default.createElement("div", { className: "channel-profile-form__avatar" }, currentImg
                    ? (React__default.createElement(Avatar, { height: "80px", width: "80px", src: currentImg })) : (React__default.createElement(ChannelAvatar, { height: 80, width: 80, channel: channel, userId: userId, theme: theme }))),
                React__default.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                        if (e.target.files) {
                            setCurrentImg(URL.createObjectURL(e.target.files[0]));
                            setNewFile(e.target.files[0]);
                        }
                        if (hiddenInputRef.current) {
                            hiddenInputRef.current.value = '';
                        }
                    } }),
                React__default.createElement(TextButton, { className: "channel-profile-form__avatar-button", onClick: function () { var _a; return (_a = hiddenInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, disableUnderline: true },
                    React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: LabelColors.PRIMARY }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))),
            React__default.createElement("div", { className: "channel-profile-form__name-section" },
                React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME),
                React__default.createElement(Input, { required: title !== '', name: "channel-profile-form__name", ref: inputRef, value: title, placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER })))));
};

export { EditDetails as default };
//# sourceMappingURL=EditDetailsModal.js.map
