import { useEffect } from 'react';
import { u as useVoicePlayerContext, A as AudioUnitDefaultValue, g as generateGroupKey } from '../chunks/bundle-zy1mnw8U.js';
import { V as VOICE_PLAYER_AUDIO_ID, a as VOICE_MESSAGE_MIME_TYPE } from '../chunks/bundle-DQk0aENq.js';
import { u as useVoiceRecorderContext } from '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../useSendbirdStateContext.js';
import '../withSendbird.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-dybWaw0v.js';
import '../chunks/bundle-DnSobLtx.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-Qkp2VIaZ.js';
import '../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-BKzcG-aC.js';
import '../ui/SortByRow.js';

var useVoicePlayer = function (_a) {
    var _b;
    var _c = _a.key, key = _c === void 0 ? '' : _c, _d = _a.channelUrl, channelUrl = _d === void 0 ? '' : _d, audioFile = _a.audioFile, _e = _a.audioFileUrl, audioFileUrl = _e === void 0 ? '' : _e, _f = _a.audioFileMimeType, audioFileMimeType = _f === void 0 ? VOICE_MESSAGE_MIME_TYPE : _f;
    var groupKey = generateGroupKey(channelUrl, key);
    var _g = useVoicePlayerContext(), play = _g.play, pause = _g.pause, stop = _g.stop, voicePlayerStore = _g.voicePlayerStore;
    var isRecordable = useVoiceRecorderContext().isRecordable;
    var currentAudioUnit = ((_b = voicePlayerStore === null || voicePlayerStore === void 0 ? void 0 : voicePlayerStore.audioStorage) === null || _b === void 0 ? void 0 : _b[groupKey]) || AudioUnitDefaultValue();
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
    useEffect(function () {
        return function () {
            var _a;
            if (audioFile || audioFileUrl) {
                // Can't get the current AudioPlayer through the React hooks(useReducer or useState) in this scope
                var voiceAudioPlayerElement = document.getElementById(VOICE_PLAYER_AUDIO_ID);
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

export { useVoicePlayer };
//# sourceMappingURL=useVoicePlayer.js.map
