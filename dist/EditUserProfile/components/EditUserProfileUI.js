import React__default, { useState, useRef, useContext } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useEditUserProfileContext } from '../context.js';
import { u as useLocalization, L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { U as USER_ACTIONS } from '../../chunks/bundle-qVNDxr2e.js';
import { M as Modal } from '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import { ButtonTypes } from '../../ui/Button.js';
import Input, { InputLabel } from '../../ui/Input.js';
import { A as Avatar } from '../../chunks/bundle-BbICJE5Z.js';
import TextButton from '../../ui/TextButton.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import '../../withSendbird.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-DUTd4XYU.js';

var EditUserProfileUIView = function (_a) {
    var _b;
    var formRef = _a.formRef, inputRef = _a.inputRef, onThemeChange = _a.onThemeChange, setProfileImage = _a.setProfileImage;
    var _c = useSendbirdStateContext(), stores = _c.stores, config = _c.config;
    var theme = config.theme, setCurrentTheme = config.setCurrentTheme;
    var user = (_b = stores.userStore) === null || _b === void 0 ? void 0 : _b.user;
    var stringSet = useLocalization().stringSet;
    var _d = useState(null), currentImg = _d[0], setCurrentImg = _d[1];
    var hiddenInputRef = useRef(null);
    return (React__default.createElement("form", { className: "sendbird-edit-user-profile", ref: formRef, onSubmit: function (e) { e.preventDefault(); } },
        React__default.createElement("section", { className: "sendbird-edit-user-profile__img" },
            React__default.createElement(InputLabel, null, stringSet.EDIT_PROFILE__IMAGE_LABEL),
            React__default.createElement("div", { className: "sendbird-edit-user-profile__img__avatar" },
                React__default.createElement(Avatar, { width: "80px", height: "80px", src: currentImg || (user === null || user === void 0 ? void 0 : user.profileUrl) })),
            React__default.createElement("input", { ref: hiddenInputRef, type: "file", accept: "image/gif, image/jpeg, image/png", style: { display: 'none' }, onChange: function (e) {
                    if (e.target.files) {
                        setCurrentImg(URL.createObjectURL(e.target.files[0]));
                        setProfileImage(e.target.files[0]);
                    }
                    if (hiddenInputRef.current) {
                        hiddenInputRef.current.value = '';
                    }
                } }),
            React__default.createElement(TextButton, { className: "sendbird-edit-user-profile__img__avatar-button", disableUnderline: true, onClick: function () { var _a; return (_a = hiddenInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } },
                React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: LabelColors.PRIMARY }, stringSet.EDIT_PROFILE__IMAGE_UPLOAD))),
        React__default.createElement("section", { className: "sendbird-edit-user-profile__name" },
            React__default.createElement(InputLabel, null, stringSet.EDIT_PROFILE__NICKNAME_LABEL),
            React__default.createElement(Input, { required: (user === null || user === void 0 ? void 0 : user.nickname) !== '', name: "sendbird-edit-user-profile__name__input", ref: inputRef, value: user === null || user === void 0 ? void 0 : user.nickname, placeHolder: stringSet.EDIT_PROFILE__NICKNAME_PLACEHOLDER })),
        React__default.createElement("section", { className: "sendbird-edit-user-profile__userid" },
            React__default.createElement(InputLabel, null, stringSet.EDIT_PROFILE__USERID_LABEL),
            React__default.createElement(Input, { disabled: true, name: "sendbird-edit-user-profile__userid__input", value: user === null || user === void 0 ? void 0 : user.userId })),
        React__default.createElement("section", { className: "sendbird-edit-user-profile__theme" },
            React__default.createElement(InputLabel, null, stringSet.EDIT_PROFILE__THEME_LABEL),
            React__default.createElement("div", { className: "sendbird-edit-user-profile__theme__theme-icon" }, theme === 'dark'
                ? (React__default.createElement(Icon, { onClick: function () {
                        setCurrentTheme('light');
                        onThemeChange === null || onThemeChange === void 0 ? void 0 : onThemeChange('light');
                    }, type: IconTypes.TOGGLE_ON, width: 44, height: 24 }))
                : (React__default.createElement(Icon, { onClick: function () {
                        setCurrentTheme('dark');
                        onThemeChange === null || onThemeChange === void 0 ? void 0 : onThemeChange('dark');
                    }, type: IconTypes.TOGGLE_OFF, width: 44, height: 24 }))))));
};

var handleUpdateUserInfo = function (_a) {
    var _b, _c, _d;
    var globalContext = _a.globalContext, formRef = _a.formRef, inputRef = _a.inputRef, profileImage = _a.profileImage, onEditProfile = _a.onEditProfile;
    var stores = globalContext.stores, dispatchers = globalContext.dispatchers;
    var sdk = stores.sdkStore.sdk;
    var user = stores.userStore.user;
    var userDispatcher = dispatchers.userDispatcher;
    if ((user === null || user === void 0 ? void 0 : user.nickname) !== '' && !inputRef.current.value) {
        (_c = (_b = formRef.current).reportValidity) === null || _c === void 0 ? void 0 : _c.call(_b); // might not work in explorer
        return;
    }
    sdk === null || sdk === void 0 ? void 0 : sdk.updateCurrentUserInfo({
        nickname: (_d = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _d === void 0 ? void 0 : _d.value,
        profileImage: profileImage !== null && profileImage !== void 0 ? profileImage : undefined,
    }).then(function (updatedUser) {
        userDispatcher({ type: USER_ACTIONS.UPDATE_USER_INFO, payload: updatedUser });
        onEditProfile === null || onEditProfile === void 0 ? void 0 : onEditProfile(updatedUser);
    });
};
var useEditUserProfileUISates = function (_a) {
    var onEditProfile = _a.onEditProfile;
    var globalContext = useSendbirdStateContext();
    var inputRef = useRef(null);
    var formRef = useRef(null);
    var _b = useState(null), profileImage = _b[0], setProfileImage = _b[1];
    var updateUserInfo = function () {
        handleUpdateUserInfo({
            globalContext: globalContext,
            formRef: formRef,
            inputRef: inputRef,
            profileImage: profileImage,
            onEditProfile: onEditProfile,
        });
    };
    return {
        formRef: formRef,
        inputRef: inputRef,
        updateUserInfo: updateUserInfo,
        profileImage: profileImage,
        setProfileImage: setProfileImage,
    };
};
var EditUserProfileUI = function () {
    var editProfileContext = useEditUserProfileContext();
    var onEditProfile = editProfileContext.onEditProfile, onCancel = editProfileContext.onCancel, onThemeChange = editProfileContext.onThemeChange;
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useEditUserProfileUISates({ onEditProfile: onEditProfile }), formRef = _a.formRef, inputRef = _a.inputRef, updateUserInfo = _a.updateUserInfo, setProfileImage = _a.setProfileImage;
    return (React__default.createElement(Modal, { titleText: stringSet.EDIT_PROFILE__TITLE, submitText: stringSet.BUTTON__SAVE, type: ButtonTypes.PRIMARY, onCancel: onCancel, isFullScreenOnMobile: true, onSubmit: updateUserInfo },
        React__default.createElement(EditUserProfileUIView, { formRef: formRef, inputRef: inputRef, setProfileImage: setProfileImage, onThemeChange: onThemeChange })));
};

export { EditUserProfileUI, EditUserProfileUIView, EditUserProfileUI as default, useEditUserProfileUISates };
//# sourceMappingURL=EditUserProfileUI.js.map
