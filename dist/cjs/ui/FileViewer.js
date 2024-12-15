'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var reactDom = require('react-dom');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var ui_Modal = require('../chunks/bundle-DZhkNDpN.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
var ui_Avatar = require('../chunks/bundle-C8wv9DWs.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_Icon = require('./Icon.js');
var consts = require('../chunks/bundle-BD0wJiNh.js');
var useKeyDown = require('../chunks/bundle-DpdA7O8z.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-DrIKAEHN.js');
require('./IconButton.js');
require('./Button.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../chunks/bundle-CJM9Pdwg.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-BKyZTqvq.js');
require('./SortByRow.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-C2CwvM-u.js');
require('./ImageRenderer.js');
require('../chunks/bundle-B4PTJ_bJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
var ViewerTypes = {
    SINGLE: 'SINGLE',
    MULTI: 'MULTI',
};

function mapFileViewerComponentProps(_a) {
    var props = _a.props;
    if (props.viewerType === ViewerTypes.MULTI) {
        var _b = props, fileInfoList = _b.fileInfoList, currentIndex = _b.currentIndex;
        return fileInfoList[currentIndex];
    }
    var fileInfo = props;
    return {
        name: fileInfo.name,
        type: fileInfo.type,
        url: fileInfo.url,
    };
}

function DeleteButton(props) {
    if (props.viewerType !== ViewerTypes.MULTI) {
        var onDelete_1 = props.onDelete, isByMe = props.isByMe, disableDelete_1 = props.disableDelete, className = props.className;
        return (isByMe)
            ? (React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right__actions__delete ".concat(className) },
                React__default.default.createElement(ui_Icon.default, { className: disableDelete_1 ? 'disabled' : '', type: ui_Icon.IconTypes.DELETE, fillColor: disableDelete_1 ? ui_Icon.IconColors.GRAY : ui_Icon.IconColors.ON_BACKGROUND_1, height: "24px", width: "24px", onClick: function (e) { if (!disableDelete_1) {
                        onDelete_1 === null || onDelete_1 === void 0 ? void 0 : onDelete_1(e);
                    } } })))
            : React__default.default.createElement(React__default.default.Fragment, null);
    }
    return React__default.default.createElement(React__default.default.Fragment, null);
}

// this is a slider component that is used to navigate between images
function Slider(props) {
    if (props.viewerType === ViewerTypes.MULTI) {
        var onClickLeft_1 = props.onClickLeft, onClickRight_1 = props.onClickRight;
        return (React__default.default.createElement("div", { className: "sendbird-file-viewer-slider" },
            React__default.default.createElement("div", { className: "sendbird-file-viewer-arrow--left" },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SLIDE_LEFT, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, height: consts.SLIDER_BUTTON_ICON_SIDE_LENGTH, width: consts.SLIDER_BUTTON_ICON_SIDE_LENGTH, onClick: function (e) {
                        onClickLeft_1 === null || onClickLeft_1 === void 0 ? void 0 : onClickLeft_1();
                        e.stopPropagation();
                    } })),
            React__default.default.createElement("div", { className: "sendbird-file-viewer-arrow--right" },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SLIDE_LEFT, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, height: consts.SLIDER_BUTTON_ICON_SIDE_LENGTH, width: consts.SLIDER_BUTTON_ICON_SIDE_LENGTH, onClick: function (e) {
                        e.stopPropagation();
                        onClickRight_1 === null || onClickRight_1 === void 0 ? void 0 : onClickRight_1();
                    } }))));
    }
    // return empty fragment if viewerType is not ViewerTypes.MULTI
    return React__default.default.createElement(React__default.default.Fragment, null);
}

var FileViewerComponent = function (props) {
    var profileUrl = props.profileUrl, nickname = props.nickname, onClose = props.onClose, onDownloadClick = props.onDownloadClick;
    var _a = props, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight;
    var ref = React.useRef(null);
    var onKeyDown = useKeyDown.useKeyDown(ref, {
        Escape: function (e) { return onClose === null || onClose === void 0 ? void 0 : onClose(e); },
        ArrowLeft: function () { return onClickLeft === null || onClickLeft === void 0 ? void 0 : onClickLeft(); },
        ArrowRight: function () { return onClickRight === null || onClickRight === void 0 ? void 0 : onClickRight(); },
    });
    var _b = mapFileViewerComponentProps({ props: props }), name = _b.name, type = _b.type, url = _b.url;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement(ui_Modal.Modal, { onClose: onClose },
        React__default.default.createElement("div", { className: "sendbird-fileviewer", "data-testid": "sendbird-fileviewer", onKeyDown: onKeyDown, 
            // to focus
            tabIndex: 1, ref: ref },
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
                        React__default.default.createElement(DeleteButton, _tslib.__assign({ className: 'sendbird-fileviewer__header__right__actions__delete' }, props)))),
                    React__default.default.createElement("div", { className: "sendbird-fileviewer__header__right__actions__close" },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1, height: "24px", width: "24px", onClick: function (e) { return onClose === null || onClose === void 0 ? void 0 : onClose(e); } })))),
            React__default.default.createElement("div", { className: "sendbird-fileviewer__content" },
                index.isVideo(type) && (React__default.default.createElement("video", { controls: true, className: "sendbird-fileviewer__content__video" },
                    React__default.default.createElement("source", { src: url, type: type }))),
                index.isImage(type) && (React__default.default.createElement("img", { src: url, alt: name, className: props.viewerType === ViewerTypes.MULTI
                        ? 'sendbird-fileviewer__content__img__multi'
                        : 'sendbird-fileviewer__content__img' })),
                !index.isSupportedFileView(type) && (React__default.default.createElement("div", { className: "sendbird-fileviewer__content__unsupported" },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, (stringSet === null || stringSet === void 0 ? void 0 : stringSet.UI__FILE_VIEWER__UNSUPPORT) || 'Unsupported message'))),
                React__default.default.createElement(Slider, _tslib.__assign({}, props))))));
};
function FileViewer(_a) {
    var _b, _c, _d;
    var message = _a.message, _e = _a.statefulFileInfoList, statefulFileInfoList = _e === void 0 ? [] : _e, onClose = _a.onClose, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, onDelete = _a.onDelete, currentIndex = _a.currentIndex, onClickLeft = _a.onClickLeft, onClickRight = _a.onClickRight, onDownloadClick = _a.onDownloadClick;
    if (index.isMultipleFilesMessage(message)) {
        var castedMessage = message;
        return (React__default.default.createElement(FileViewerComponent, { profileUrl: castedMessage.sender.profileUrl, nickname: castedMessage.sender.nickname, viewerType: ViewerTypes.MULTI, fileInfoList: statefulFileInfoList.filter(function (fileInfo) {
                return fileInfo.url; // Caution: This assumes that defined url means file upload has completed.
            }).map(function (fileInfo) {
                return {
                    name: fileInfo.fileName || '',
                    type: fileInfo.mimeType || '',
                    url: fileInfo.url || '',
                };
            }), currentIndex: currentIndex || 0, onClickLeft: onClickLeft || utils.noop, onClickRight: onClickRight || utils.noop, onClose: onClose, onDownloadClick: onDownloadClick }));
    }
    else if (index.isFileMessage(message)) {
        var castedMessage = message;
        return reactDom.createPortal((React__default.default.createElement(FileViewerComponent, { profileUrl: (_b = castedMessage.sender) === null || _b === void 0 ? void 0 : _b.profileUrl, nickname: (_c = castedMessage.sender) === null || _c === void 0 ? void 0 : _c.nickname, name: castedMessage.name, type: castedMessage.type, url: castedMessage === null || castedMessage === void 0 ? void 0 : castedMessage.url, isByMe: isByMe, disableDelete: (((_d = castedMessage.threadInfo) === null || _d === void 0 ? void 0 : _d.replyCount) || 0) > 0, onClose: onClose, onDelete: onDelete || utils.noop, onDownloadClick: onDownloadClick })), document.getElementById(ui_Modal.MODAL_ROOT));
    }
    return React__default.default.createElement(React__default.default.Fragment, null);
}

exports.FileViewerComponent = FileViewerComponent;
exports.default = FileViewer;
//# sourceMappingURL=FileViewer.js.map
