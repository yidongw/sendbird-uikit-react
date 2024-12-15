import React__default, { useState, useEffect, useMemo } from 'react';
import { ProgressBar, ProgressBarColorTypes } from './ProgressBar.js';
import { useVoicePlayer } from '../VoicePlayer/useVoicePlayer.js';
import { PlaybackTime } from './PlaybackTime.js';
import Loader from './Loader.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import { V as VOICE_PLAYER_STATUS } from '../chunks/bundle-CHD1aKHO.js';
import { c as classnames } from '../chunks/bundle-pQHYhigr.js';
import '../chunks/bundle-DgxVBBM3.js';
import '../chunks/bundle-ptS-tNRF.js';
import '../chunks/bundle-Ck-Lg2K3.js';
import '../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-CnkNoe49.js';
import 'react-dom';
import '../chunks/bundle-CbLNLMef.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-Bk1oUUzJ.js';
import './IconButton.js';
import './Button.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-A5WEPjt6.js';
import './SortByRow.js';

var VoiceMessageItemBody = function (_a) {
    var _b;
    var className = _a.className, message = _a.message, channelUrl = _a.channelUrl, _c = _a.isByMe, isByMe = _c === void 0 ? false : _c, _d = _a.isReactionEnabled, isReactionEnabled = _d === void 0 ? false : _d;
    var _e = useState(false), usingReaction = _e[0], setUsingReaction = _e[1];
    var _f = useVoicePlayer({
        channelUrl: channelUrl,
        key: "".concat(message === null || message === void 0 ? void 0 : message.messageId),
        audioFileUrl: message === null || message === void 0 ? void 0 : message.url,
        audioFileMimeType: message === null || message === void 0 ? void 0 : message.type,
    }), play = _f.play, 
    // do not pause on unmount, because on desktop layout
    // the component can be paused when it is played from
    // channel and same message is unmounted from the thread
    pause = _f.pause, _g = _f.playbackTime, playbackTime = _g === void 0 ? 0 : _g, duration = _f.duration, _h = _f.playingStatus, playingStatus = _h === void 0 ? VOICE_PLAYER_STATUS.IDLE : _h;
    useEffect(function () {
        var _a;
        if (isReactionEnabled && ((_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            setUsingReaction(true);
        }
        else {
            setUsingReaction(false);
        }
    }, [isReactionEnabled, (_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length]);
    var progressBarMaxSize = useMemo(function () {
        var _a;
        var DEFAULT_MAX_SIZE = 1;
        if (message === null || message === void 0 ? void 0 : message.metaArrays) {
            var duration_1 = (_a = message === null || message === void 0 ? void 0 : message.metaArrays.find(function (metaArray) { return metaArray.key === 'KEY_VOICE_MESSAGE_DURATION'; })) === null || _a === void 0 ? void 0 : _a.value[0];
            return duration_1 ? parseInt(duration_1) : DEFAULT_MAX_SIZE;
        }
        return DEFAULT_MAX_SIZE;
    }, [message === null || message === void 0 ? void 0 : message.metaArrays]);
    return (React__default.createElement("div", { className: classnames('sendbird-voice-message-item-body', className, usingReaction && 'is-reactions-contained') },
        React__default.createElement(ProgressBar, { className: "sendbird-voice-message-item-body__progress-bar", maxSize: duration || progressBarMaxSize, currentSize: playbackTime, colorType: isByMe ? ProgressBarColorTypes.PRIMARY : ProgressBarColorTypes.GRAY }),
        React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button" },
            (playingStatus === VOICE_PLAYER_STATUS.IDLE || playingStatus === VOICE_PLAYER_STATUS.PAUSED) && (React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button__button", onClick: play },
                React__default.createElement(Icon, { width: "18px", height: "18px", type: IconTypes.PLAY, fillColor: IconColors.PRIMARY }))),
            playingStatus === VOICE_PLAYER_STATUS.PREPARING && (React__default.createElement(Loader, { width: "22.2px", height: "22.2px" },
                React__default.createElement(Icon, { width: "22.2px", height: "22.2px", type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY_2 }))),
            playingStatus === VOICE_PLAYER_STATUS.PLAYING && (React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button__button", onClick: function () { pause(); } },
                React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button__button__pause" },
                    React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button__button__pause__inner" }),
                    React__default.createElement("div", { className: "sendbird-voice-message-item-body__status-button__button__pause__inner" }))))),
        React__default.createElement(PlaybackTime, { className: "sendbird-voice-message-item-body__playback-time", time: progressBarMaxSize - playbackTime, labelType: LabelTypography.BODY_1, labelColor: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 })));
};

export { VoiceMessageItemBody, VoiceMessageItemBody as default };
//# sourceMappingURL=VoiceMessageItemBody.js.map
