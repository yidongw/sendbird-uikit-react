'use strict';

var React = require('react');
var ui_PlaybackTime = require('../ui/PlaybackTime.js');
var ui_ProgressBar = require('../ui/ProgressBar.js');
var ui_TextButton = require('../ui/TextButton.js');
var ui_Icon = require('../ui/Icon.js');
var ui_Label = require('./bundle-CAR4EIKs.js');
var LocalizationContext = require('./bundle-Cy1ruNzs.js');
var consts = require('./bundle-BD0wJiNh.js');
var utils = require('./bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

/* eslint-disable no-redeclare */
var VoiceMessageInputStatus = {
    READY_TO_RECORD: 'READY_TO_RECORD',
    RECORDING: 'RECORDING',
    READY_TO_PLAY: 'READY_TO_PLAY',
    PLAYING: 'PLAYING',
};

var ControlerIcon = function (_a) {
    var inputState = _a.inputState;
    switch (inputState) {
        case VoiceMessageInputStatus.READY_TO_RECORD: {
            return (React__default.default.createElement("div", { className: "sendbird-controler-icon record-icon" }));
        }
        case VoiceMessageInputStatus.RECORDING: {
            return (React__default.default.createElement("div", { className: "sendbird-controler-icon stop-icon" }));
        }
        case VoiceMessageInputStatus.READY_TO_PLAY: {
            return (React__default.default.createElement(ui_Icon.default, { className: "sendbird-controler-icon play-icon", width: "20px", height: "20px", type: ui_Icon.IconTypes.PLAY, fillColor: ui_Icon.IconColors.ON_BACKGROUND_1 }));
        }
        case VoiceMessageInputStatus.PLAYING: {
            return (React__default.default.createElement("div", { className: "sendbird-controler-icon pause-icon" },
                React__default.default.createElement("div", { className: "sendbird-controler-icon pause-icon-inner" }),
                React__default.default.createElement("div", { className: "sendbird-controler-icon pause-icon-inner" })));
        }
        default:
            return React__default.default.createElement(React__default.default.Fragment, null);
    }
};

var VoiceMessageInput = function (_a) {
    var _b = _a.minRecordTime, minRecordTime = _b === void 0 ? consts.VOICE_RECORDER_DEFAULT_MIN : _b, maximumValue = _a.maximumValue, _c = _a.currentValue, currentValue = _c === void 0 ? 0 : _c, currentType = _a.currentType, onCancelClick = _a.onCancelClick, onControlClick = _a.onControlClick, onSubmitClick = _a.onSubmitClick, renderCancelButton = _a.renderCancelButton, renderControlButton = _a.renderControlButton, renderSubmitButton = _a.renderSubmitButton;
    var _d = React.useState(0), lastClickTime = _d[0], setLastClickTime = _d[1];
    var isReadyToRecord = React.useMemo(function () { return currentType === VoiceMessageInputStatus.READY_TO_RECORD; }, [currentType]);
    var isRecording = React.useMemo(function () { return currentType === VoiceMessageInputStatus.RECORDING; }, [currentType]);
    var isSendButtonDisabled = React.useMemo(function () {
        if (currentType === VoiceMessageInputStatus.READY_TO_RECORD
            || currentType === VoiceMessageInputStatus.RECORDING) {
            return minRecordTime > currentValue;
        }
        return false;
    }, [currentType, minRecordTime, currentValue]);
    var isPlayMode = React.useMemo(function () {
        return (currentType === VoiceMessageInputStatus.READY_TO_PLAY
            || currentType === VoiceMessageInputStatus.PLAYING);
    }, [currentType]);
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var handleOnCancelClick = function () {
        var currentTime = Date.now();
        if (currentTime - lastClickTime > consts.VOICE_RECORDER_CLICK_BUFFER_TIME) {
            onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick();
            setLastClickTime(currentTime);
        }
    };
    var handleOnControlClick = React.useCallback(function () {
        var currentTime = Date.now();
        if (currentTime - lastClickTime > consts.VOICE_RECORDER_CLICK_BUFFER_TIME) {
            onControlClick === null || onControlClick === void 0 ? void 0 : onControlClick(currentType);
            setLastClickTime(currentTime);
        }
    }, [currentType]);
    var handleOnSubmitClick = function () {
        var currentTime = Date.now();
        if (currentTime - lastClickTime > consts.VOICE_RECORDER_CLICK_BUFFER_TIME) {
            if (!isSendButtonDisabled) {
                onSubmitClick === null || onSubmitClick === void 0 ? void 0 : onSubmitClick();
            }
            setLastClickTime(currentTime);
        }
    };
    return (React__default.default.createElement("div", { className: "sendbird-voice-message-input" },
        React__default.default.createElement("div", { className: "sendbird-voice-message-input__indicator" },
            React__default.default.createElement("div", { className: "sendbird-voice-message-input__indicator__progress-bar" },
                React__default.default.createElement(ui_ProgressBar.ProgressBar, { className: "sendbird-voice-message-input__indicator__progress-bar__bar", disabled: isReadyToRecord, maxSize: maximumValue, currentSize: currentValue })),
            (isRecording) ? (React__default.default.createElement("div", { className: "sendbird-voice-message-input__indicator__on-rec" })) : null,
            React__default.default.createElement(ui_PlaybackTime.PlaybackTime, { className: "sendbird-voice-message-input__indicator__playback-time", time: isPlayMode ? maximumValue - currentValue : currentValue, labelColor: isReadyToRecord ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONCONTENT_1 })),
        React__default.default.createElement("div", { className: "sendbird-voice-message-input__controler" },
            (renderCancelButton === null || renderCancelButton === void 0 ? void 0 : renderCancelButton()) || (React__default.default.createElement(ui_TextButton, { className: "sendbird-voice-message-input__controler__cancel", onClick: handleOnCancelClick, disableUnderline: true },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.BUTTON__CANCEL))),
            (renderControlButton === null || renderControlButton === void 0 ? void 0 : renderControlButton(currentType)) || (React__default.default.createElement("div", { className: "sendbird-voice-message-input__controler__main", onClick: handleOnControlClick },
                React__default.default.createElement(ControlerIcon, { inputState: currentType }))),
            (renderSubmitButton === null || renderSubmitButton === void 0 ? void 0 : renderSubmitButton()) || (React__default.default.createElement("div", { className: utils.classnames('sendbird-voice-message-input__controler__submit', isSendButtonDisabled && 'voice-message--disabled'), onClick: handleOnSubmitClick },
                React__default.default.createElement(ui_Icon.default, { width: "19px", height: "19px", type: ui_Icon.IconTypes.SEND, fillColor: isSendButtonDisabled ? ui_Icon.IconColors.ON_BACKGROUND_4 : ui_Icon.IconColors.CONTENT }))))));
};

exports.VoiceMessageInput = VoiceMessageInput;
exports.VoiceMessageInputStatus = VoiceMessageInputStatus;
//# sourceMappingURL=bundle-BL2PtzAF.js.map
