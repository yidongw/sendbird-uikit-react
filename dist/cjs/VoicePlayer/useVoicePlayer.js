'use strict';

var React = require('react');
var VoicePlayer_context = require('../chunks/bundle-2M4zbjEc.js');
var consts = require('../chunks/bundle-C0tdWwa4.js');
var ui_Modal = require('../chunks/bundle-DfISCDoH.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../useSendbirdStateContext.js');
require('../withSendbird.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-CzcmYPsN.js');
require('../ui/IconButton.js');
require('../ui/Button.js');
require('../chunks/bundle-D8-2bEdY.js');
require('../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-BYSQ-mQr.js');
require('../ui/SortByRow.js');

var useVoicePlayer = function (_a) {
    var _b;
    var _c = _a.key, key = _c === void 0 ? '' : _c, _d = _a.channelUrl, channelUrl = _d === void 0 ? '' : _d, audioFile = _a.audioFile, _e = _a.audioFileUrl, audioFileUrl = _e === void 0 ? '' : _e, _f = _a.audioFileMimeType, audioFileMimeType = _f === void 0 ? consts.VOICE_MESSAGE_MIME_TYPE : _f;
    var groupKey = VoicePlayer_context.generateGroupKey(channelUrl, key);
    var _g = VoicePlayer_context.useVoicePlayerContext(), play = _g.play, pause = _g.pause, stop = _g.stop, voicePlayerStore = _g.voicePlayerStore;
    var isRecordable = ui_Modal.useVoiceRecorderContext().isRecordable;
    var currentAudioUnit = ((_b = voicePlayerStore === null || voicePlayerStore === void 0 ? void 0 : voicePlayerStore.audioStorage) === null || _b === void 0 ? void 0 : _b[groupKey]) || VoicePlayer_context.AudioUnitDefaultValue();
    var playVoicePlayer = function () {
        if (!isRecordable) {
            play === null || play === void 0 ? void 0 : play({
                groupKey: groupKey,
                audioFile: audioFile,
                audioFileUrl: audioFileUrl,
                audioFileMimeType: audioFileMimeType,
            });
        }
    };
    var pauseVoicePlayer = function () {
        pause === null || pause === void 0 ? void 0 : pause(groupKey);
    };
    var stopVoicePlayer = function (text) {
        if (text === void 0) { text = ''; }
        stop === null || stop === void 0 ? void 0 : stop(text);
    };
    React.useEffect(function () {
        return function () {
            var _a;
            if (audioFile || audioFileUrl) {
                // Can't get the current AudioPlayer through the React hooks(useReducer or useState) in this scope
                var voiceAudioPlayerElement = document.getElementById(consts.VOICE_PLAYER_AUDIO_ID);
                (_a = voiceAudioPlayerElement === null || voiceAudioPlayerElement === void 0 ? void 0 : voiceAudioPlayerElement.pause) === null || _a === void 0 ? void 0 : _a.call(voiceAudioPlayerElement);
            }
        };
    }, []);
    return ({
        play: playVoicePlayer,
        pause: pauseVoicePlayer,
        stop: stopVoicePlayer,
        /**
         * The reason why we multiply this by *1000 is,
         * The unit of playbackTime and duration should be millisecond
         */
        playbackTime: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.playbackTime) || 0) * 1000,
        duration: ((currentAudioUnit === null || currentAudioUnit === void 0 ? void 0 : currentAudioUnit.duration) || 0) * 1000,
        playingStatus: currentAudioUnit.playingStatus,
    });
};

exports.useVoicePlayer = useVoicePlayer;
//# sourceMappingURL=useVoicePlayer.js.map
