'use strict';

var React = require('react');
var ui_Modal = require('../chunks/bundle-DfISCDoH.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-CzcmYPsN.js');
require('../ui/IconButton.js');
require('../ui/Button.js');
require('../chunks/bundle-D8-2bEdY.js');
require('../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-2M4zbjEc.js');
require('../chunks/bundle-BYSQ-mQr.js');
require('../ui/SortByRow.js');

// export interface UseVoiceRecorderProps extends VoiceRecorderEventHandler {
//   /**
//    * onRecordingStarted
//    * onRecordingEnded
//    */
// }
/* eslint-disable no-redeclare */
var VoiceRecorderStatus = {
    PREPARING: 'PREPARING',
    READY_TO_RECORD: 'READY_TO_RECORD',
    RECORDING: 'RECORDING',
    COMPLETED: 'COMPLETED',
};
var useVoiceRecorder = function (_a) {
    var _b = _a.onRecordingStarted, onRecordingStarted = _b === void 0 ? utils.noop : _b, _c = _a.onRecordingEnded, onRecordingEnded = _c === void 0 ? utils.noop : _c;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var voiceRecord = config.voiceRecord;
    var maxRecordingTime = voiceRecord.maxRecordingTime;
    var voiceRecorder = ui_Modal.useVoiceRecorderContext();
    var isRecordable = voiceRecorder.isRecordable;
    var _d = React.useState(null), recordedFile = _d[0], setRecordedFile = _d[1];
    var _e = React.useState(VoiceRecorderStatus.PREPARING), recordingStatus = _e[0], setRecordingStatus = _e[1];
    React.useEffect(function () {
        if (isRecordable && recordingStatus === VoiceRecorderStatus.PREPARING) {
            setRecordingStatus(VoiceRecorderStatus.READY_TO_RECORD);
        }
    }, [isRecordable]);
    var start = React.useCallback(function () {
        voiceRecorder === null || voiceRecorder === void 0 ? void 0 : voiceRecorder.start({
            onRecordingStarted: function () {
                setRecordingStatus(VoiceRecorderStatus.RECORDING);
                onRecordingStarted();
                startTimer();
            },
            onRecordingEnded: function (audioFile) {
                setRecordingStatus(VoiceRecorderStatus.COMPLETED);
                onRecordingEnded(audioFile);
                setRecordedFile(audioFile);
                stopTimer();
            },
        });
    }, [onRecordingStarted, onRecordingEnded]);
    var stop = React.useCallback(function () {
        voiceRecorder === null || voiceRecorder === void 0 ? void 0 : voiceRecorder.stop();
        stopTimer();
    }, [voiceRecorder]);
    var cancel = React.useCallback(function () {
        stop();
        setRecordedFile(null);
    }, [voiceRecorder]);
    // Timer
    var _f = React.useState(0), recordingTime = _f[0], setRecordingTime = _f[1];
    var timer = React.useRef(null);
    function startTimer() {
        stopTimer();
        setRecordingTime(0);
        timer.current = setInterval(function () {
            setRecordingTime(function (prevTime) {
                var newTime = prevTime + 100;
                if (newTime > maxRecordingTime) {
                    stopTimer();
                }
                return newTime;
            });
        }, 100);
    }
    function stopTimer() {
        if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
        }
    }
    React.useEffect(function () {
        if (recordingTime > maxRecordingTime) {
            stop();
        }
    }, [recordingTime, maxRecordingTime, stop]);
    return ({
        start: start,
        stop: stop,
        cancel: cancel,
        recordingStatus: recordingStatus,
        recordingTime: recordingTime,
        recordedFile: recordedFile,
        recordingLimit: maxRecordingTime,
    });
};

exports.VoiceRecorderStatus = VoiceRecorderStatus;
exports.useVoiceRecorder = useVoiceRecorder;
//# sourceMappingURL=useVoiceRecorder.js.map
