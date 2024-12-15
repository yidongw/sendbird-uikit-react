'use strict';

var React = require('react');
var reactDom = require('react-dom');
var ui_Avatar = require('./bundle-C8wv9DWs.js');
var ui_Icon = require('../ui/Icon.js');
var ui_Label = require('./bundle-CAR4EIKs.js');
var index = require('./bundle-BLoixwYr.js');
var ui_Modal = require('./bundle-DZhkNDpN.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var FileViewerView = function (_a) {
    var message = _a.message, onCancel = _a.onCancel, deleteMessage = _a.deleteMessage, onDownloadClick = _a.onDownloadClick;
    var sender = message.sender, type = message.type, url = message.url, _b = message.name, name = _b === void 0 ? '' : _b, threadInfo = message.threadInfo;
    var profileUrl = sender.profileUrl, nickname = sender.nickname, userId = sender.userId;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    return reactDom.createPortal(React__default.default.createElement(FileViewerComponent, { profileUrl: profileUrl, nickname: nickname, type: type, url: url, name: name, onCancel: onCancel, onDelete: function () { return deleteMessage(message).then(function () { return onCancel(); }); }, isByMe: config.userId === userId, disableDelete: (threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.replyCount) ? threadInfo.replyCount > 0 : false, onDownloadClick: onDownloadClick }), document.getElementById(ui_Modal.MODAL_ROOT));
};
var FileViewerComponent = function (_a) {
    var 
    // sender
    profileUrl = _a.profileUrl, nickname = _a.nickname, 
    // file
    name = _a.name, type = _a.type, url = _a.url, 
    // others
    isByMe = _a.isByMe, onCancel = _a.onCancel, onDelete = _a.onDelete, disableDelete = _a.disableDelete, onDownloadClick = _a.onDownloadClick;
    return (React__default.default.createElement(ui_Modal.Modal, { onClose: onCancel },
        React__default.default.createElement("div", { className: "sendbird-fileviewer", "data-testid": "sendbird-fileviewer" },
            React__default.default.createElement("div", { className: "sendbird-fileviewer__header" },
                React__default.default.createElement("div", { className: "sendbird-fileviewer__header__left" },
                    React__default.default.createElement("div", { className: "sendbird-fileviewer__header__left__avatar" },
                        React__default.default.createElement(ui_Avatar.Avatar, { height: "32px", width: "32px", src: profileUrl })),
                    React__default.default.createElement("div", { className: "sendbird-fileviewer__header__left__text-container" },
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-fileviewer__header__left__filename", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, name),
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-fileviewer__header__left__sender-name", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, nickname))),
                React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right" },
                    index.isSupportedFileView(type) && (React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right__actions" },
                        React__default.default.createElement("a", { className: "sendbird-fileviewer__header__right__actions__download", rel: "noopener noreferrer", href: url, target: "_blank", onClick: onDownloadClick },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DOWNLOAD, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, height: "24px", width: "24px" })),
                        onDelete && isByMe && (React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right__actions__delete" },
                            React__default.default.createElement(ui_Icon.default, { className: disableDelete ? 'disabled' : '', type: ui_Icon.IconTypes.DELETE, fillColor: disableDelete ? ui_Icon.IconColors.GRAY : ui_Icon.IconColors.ON_BACKGROUND_1, height: "24px", width: "24px", onClick: function () {
                                    if (!disableDelete) {
                                        onDelete();
                                    }
                                } }))))),
                    React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right__actions__close" },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, height: "24px", width: "24px", onClick: onCancel })))),
            React__default.default.createElement("div", { className: "sendbird-fileviewer__content" },
                index.isVideo(type) && (React__default.default.createElement("video", { controls: true, className: "sendbird-fileviewer__content__video" },
                    React__default.default.createElement("source", { src: url, type: type }))),
                index.isImage(type) && React__default.default.createElement("img", { src: url, alt: name, className: "sendbird-fileviewer__content__img" }),
                !index.isSupportedFileView(type) && (React__default.default.createElement("div", { className: "sendbird-fileviewer__content__unsupported" },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, ui_Label.LabelStringSet.UI__FILE_VIEWER__UNSUPPORT)))))));
};

exports.FileViewerView = FileViewerView;
//# sourceMappingURL=bundle-D-EFC7w9.js.map
