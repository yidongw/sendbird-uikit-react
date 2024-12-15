'use strict';

var React = require('react');
var _tslib = require('./bundle-DRvomNLJ.js');
var consts = require('./bundle-C0tdWwa4.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var browser = require('./bundle-4kwoH67w.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var INITIALIZE_AUDIO_UNIT = 'INITIALIZE_AUDIO_UNIT';
var RESET_AUDIO_UNIT = 'RESET_AUDIO_UNIT';
var SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
var ON_VOICE_PLAYER_PLAY = 'ON_VOICE_PLAYER_PLAY';
var ON_VOICE_PLAYER_PAUSE = 'ON_VOICE_PLAYER_PAUSE';
var ON_CURRENT_TIME_UPDATE = 'ON_CURRENT_TIME_UPDATE';

var VOICE_PLAYER_STATUS = {
    IDLE: 'IDLE',
    PREPARING: 'PREPARING',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    COMPLETED: 'COMPLETED',
};
var AudioUnitDefaultValue = function () { return ({
    audioFile: null,
    playbackTime: 0,
    duration: 1000,
    playingStatus: VOICE_PLAYER_STATUS.IDLE,
}); };
var voicePlayerInitialState = {
    currentPlayer: null,
    currentGroupKey: '',
    audioStorage: {},
};

function voicePlayerReducer(state, action) {
    var _a, _b, _c, _d, _e;
    var _f, _g, _h, _j;
    switch (action.type) {
        case INITIALIZE_AUDIO_UNIT: {
            var groupKey = action.payload.groupKey;
            var audioUnit = (((_f = state.audioStorage) === null || _f === void 0 ? void 0 : _f[groupKey]) ? state.audioStorage[groupKey] : AudioUnitDefaultValue());
            audioUnit.playingStatus = VOICE_PLAYER_STATUS.PREPARING;
            return _tslib.__assign(_tslib.__assign({}, state), { audioStorage: _tslib.__assign(_tslib.__assign({}, state.audioStorage), (_a = {}, _a[groupKey] = audioUnit, _a)) });
        }
        case RESET_AUDIO_UNIT: {
            var groupKey = action.payload.groupKey;
            return _tslib.__assign(_tslib.__assign({}, state), { audioStorage: _tslib.__assign(_tslib.__assign({}, state.audioStorage), (_b = {}, _b[groupKey] = AudioUnitDefaultValue(), _b)) });
        }
        case SET_CURRENT_PLAYER: {
            var _k = action.payload, audioPlayer = _k.audioPlayer, groupKey = _k.groupKey;
            return _tslib.__assign(_tslib.__assign({}, state), { currentPlayer: audioPlayer, currentGroupKey: groupKey });
        }
        case ON_VOICE_PLAYER_PLAY: {
            var _l = action.payload, groupKey = _l.groupKey, audioFile = _l.audioFile;
            var audioUnit = (((_g = state.audioStorage) === null || _g === void 0 ? void 0 : _g[groupKey]) ? state.audioStorage[groupKey] : AudioUnitDefaultValue());
            audioUnit.audioFile = audioFile;
            audioUnit.playingStatus = VOICE_PLAYER_STATUS.PLAYING;
            return _tslib.__assign(_tslib.__assign({}, state), { audioStorage: _tslib.__assign(_tslib.__assign({}, state.audioStorage), (_c = {}, _c[groupKey] = audioUnit, _c)) });
        }
        case ON_VOICE_PLAYER_PAUSE: {
            var _m = action.payload, groupKey = _m.groupKey, duration = _m.duration, currentTime = _m.currentTime;
            var audioUnit = (((_h = state.audioStorage) === null || _h === void 0 ? void 0 : _h[groupKey]) ? state.audioStorage[groupKey] : AudioUnitDefaultValue());
            audioUnit.playingStatus = VOICE_PLAYER_STATUS.PAUSED;
            if (duration === currentTime) {
                audioUnit.playbackTime = 0;
            }
            return _tslib.__assign(_tslib.__assign({}, state), { audioStorage: _tslib.__assign(_tslib.__assign({}, state.audioStorage), (_d = {}, _d[groupKey] = audioUnit, _d)) });
        }
        case ON_CURRENT_TIME_UPDATE: {
            var groupKey = action.payload.groupKey;
            var _o = state.currentPlayer, currentTime = _o.currentTime, duration = _o.duration;
            var audioUnit = (((_j = state.audioStorage) === null || _j === void 0 ? void 0 : _j[groupKey]) ? state.audioStorage[groupKey] : AudioUnitDefaultValue());
            // sometimes the final time update is fired AFTER the pause event when audio is finished
            if (audioUnit.playbackTime === audioUnit.duration && audioUnit.playingStatus === VOICE_PLAYER_STATUS.PAUSED) {
                audioUnit.playbackTime = 0;
            }
            else if (currentTime > 0 && duration > 0) {
                audioUnit.playbackTime = currentTime;
                audioUnit.duration = duration;
            }
            return _tslib.__assign(_tslib.__assign({}, state), { audioStorage: _tslib.__assign(_tslib.__assign({}, state.audioStorage), (_e = {}, _e[groupKey] = audioUnit, _e)) });
        }
        default:
            return state;
    }
}

var generateGroupKey = function (channelUrl, key) {
    if (channelUrl === void 0) { channelUrl = ''; }
    if (key === void 0) { key = ''; }
    return ("".concat(channelUrl, "-").concat(key));
};
/**
 * Parses and returns the correct MIME type based on the browser.
 * If the browser is Safari and the file type is m4a, use 'audio/x-m4a' for the audio player.
 * Safari doesn't support 'audio/mp3' well.
 * Also, 'audio/m4a' should be converted to 'audio/x-m4a' to be correctly played in Safari.
 * @link: https://sendbird.atlassian.net/browse/CLNP-2997
 *
 * @param mimeType - The original MIME type.
 * @returns Converted file name and MIME type.
 */
var getParsedVoiceAudioFileInfo = function (mimeType) {
    if (browser.isSafari(navigator.userAgent) && mimeType.includes('m4a')) {
        return {
            name: consts.VOICE_MESSAGE_FILE_NAME__XM4A,
            mimeType: consts.VOICE_MESSAGE_MIME_TYPE__XM4A,
        };
    }
    return {
        name: consts.VOICE_MESSAGE_FILE_NAME,
        mimeType: consts.VOICE_MESSAGE_MIME_TYPE,
    };
};

var ALL = 'ALL';
var noop = function () { };
var VoicePlayerStoreDefaultValue = {
    currentGroupKey: '',
    currentPlayer: null,
    audioStorage: {},
};
var Context = React.createContext({
    play: noop,
    pause: noop,
    stop: noop,
    voicePlayerStore: VoicePlayerStoreDefaultValue,
});
var VoicePlayerProvider = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(voicePlayerReducer, voicePlayerInitialState), voicePlayerStore = _b[0], voicePlayerDispatcher = _b[1];
    var currentGroupKey = voicePlayerStore.currentGroupKey, currentPlayer = voicePlayerStore.currentPlayer, audioStorage = voicePlayerStore.audioStorage;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger;
    var stop = function (text) {
        if (text === void 0) { text = ''; }
        if (currentGroupKey.includes(text)) {
            logger.info('VoicePlayer: Pause playing(by text).');
            pause(currentGroupKey);
        }
    };
    var pause = function (groupKey) {
        if (currentPlayer) {
            if (groupKey === currentGroupKey) {
                logger.info('VoicePlayer: Pause playing(by group key).');
                currentPlayer.pause();
            }
            else if (groupKey === ALL) {
                logger.info('VoicePlayer: Pause playing(all).');
                currentPlayer.pause();
            }
        }
        else {
            logger.warning('VoicePlayer: No currentPlayer to pause.');
        }
    };
    var play = function (_a) {
        var groupKey = _a.groupKey, audioFile = _a.audioFile, _b = _a.audioFileUrl, audioFileUrl = _b === void 0 ? '' : _b, _c = _a.audioFileMimeType, audioFileMimeType = _c === void 0 ? consts.VOICE_MESSAGE_MIME_TYPE : _c;
        if (groupKey !== currentGroupKey) {
            pause(currentGroupKey);
        }
        // Clear the previous AudioPlayer element
        var voicePlayerRoot = document.getElementById(consts.VOICE_PLAYER_ROOT_ID);
        var voicePlayerAudioElement = document.getElementById(consts.VOICE_PLAYER_AUDIO_ID);
        if (voicePlayerRoot && voicePlayerAudioElement) {
            voicePlayerRoot.removeChild(voicePlayerAudioElement);
        }
        logger.info('VoicePlayer: Start getting audio file.');
        new Promise(function (resolve, reject) {
            var _a;
            voicePlayerDispatcher({
                type: INITIALIZE_AUDIO_UNIT,
                payload: { groupKey: groupKey },
            });
            // audio file passed as a parameter
            if (audioFile) {
                logger.info('VoicePlayer: Use the audioFile instance.');
                resolve(audioFile);
                return;
            }
            // audio file from the audioStorage
            var cachedAudioFile = (_a = audioStorage === null || audioStorage === void 0 ? void 0 : audioStorage[groupKey]) === null || _a === void 0 ? void 0 : _a.audioFile;
            if (cachedAudioFile) {
                logger.info('VoicePlayer: Get from the audioStorage.');
                resolve(cachedAudioFile);
                return;
            }
            // fetch the audio file from URL
            fetch(audioFileUrl)
                .then(function (res) { return res.blob(); })
                .then(function (blob) {
                var audioFile = new File([blob], getParsedVoiceAudioFileInfo(audioFileMimeType).name, {
                    lastModified: new Date().getTime(),
                    type: getParsedVoiceAudioFileInfo(audioFileMimeType).mimeType,
                });
                resolve(audioFile);
                logger.info('VoicePlayer: Get the audioFile from URL.');
            })
                .catch(reject);
        })
            .then(function (audioFile) {
            var _a;
            var voicePlayerRoot = document.getElementById(consts.VOICE_PLAYER_ROOT_ID);
            logger.info('VoicePlayer: Succeeded getting audio file.', { audioFile: audioFile });
            var currentAudioUnit = audioStorage[groupKey] || AudioUnitDefaultValue();
            var audioPlayer = new Audio((_a = URL === null || URL === void 0 ? void 0 : URL.createObjectURL) === null || _a === void 0 ? void 0 : _a.call(URL, audioFile));
            audioPlayer.id = consts.VOICE_PLAYER_AUDIO_ID;
            audioPlayer.currentTime = currentAudioUnit.playbackTime;
            audioPlayer.volume = 1;
            audioPlayer.loop = false;
            audioPlayer.onplaying = function () {
                logger.info('VoicePlayer: OnPlaying event is called from audioPlayer', { groupKey: groupKey, audioPlayer: audioPlayer });
                voicePlayerDispatcher({
                    type: ON_VOICE_PLAYER_PLAY,
                    payload: { groupKey: groupKey, audioFile: audioFile },
                });
            };
            audioPlayer.onpause = function () {
                logger.info('VoicePlayer: OnPause event is called from audioPlayer', { groupKey: groupKey, audioPlayer: audioPlayer });
                voicePlayerDispatcher({
                    type: ON_VOICE_PLAYER_PAUSE,
                    payload: { groupKey: groupKey, duration: audioPlayer.duration, currentTime: audioPlayer.currentTime },
                });
            };
            audioPlayer.ontimeupdate = function () {
                voicePlayerDispatcher({
                    type: ON_CURRENT_TIME_UPDATE,
                    payload: { groupKey: groupKey },
                });
            };
            audioPlayer.onerror = function (error) {
                logger.error('VoicePlayer: Failed to load the audioFile on the audio player.', error);
                voicePlayerDispatcher({
                    type: RESET_AUDIO_UNIT,
                    payload: { groupKey: groupKey },
                });
            };
            audioPlayer.dataset.sbGroupId = groupKey;
            // clean up the previous audio player
            try {
                voicePlayerRoot === null || voicePlayerRoot === void 0 ? void 0 : voicePlayerRoot.childNodes.forEach(function (node) {
                    var _a, _b;
                    var element = node;
                    var thisGroupKey = (_a = element.dataset) === null || _a === void 0 ? void 0 : _a.sbGroupKey;
                    if (thisGroupKey !== groupKey) {
                        (_b = element === null || element === void 0 ? void 0 : element.pause) === null || _b === void 0 ? void 0 : _b.call(element);
                        voicePlayerRoot.removeChild(element);
                        logger.info('VoicePlayer: Removed other player.', { element: element });
                    }
                });
            }
            finally {
                audioPlayer === null || audioPlayer === void 0 ? void 0 : audioPlayer.play();
                voicePlayerRoot === null || voicePlayerRoot === void 0 ? void 0 : voicePlayerRoot.appendChild(audioPlayer);
                voicePlayerDispatcher({
                    type: SET_CURRENT_PLAYER,
                    payload: { groupKey: groupKey, audioPlayer: audioPlayer },
                });
                logger.info('VoicePlayer: Succeeded playing audio player.', { groupKey: groupKey, audioPlayer: audioPlayer });
            }
        })
            .catch(function (error) {
            logger.warning('VoicePlayer: Failed loading audio file with URL.', error);
            voicePlayerDispatcher({
                type: RESET_AUDIO_UNIT,
                payload: { groupKey: groupKey },
            });
        });
    };
    return (React__default.default.createElement(Context.Provider, { value: {
            play: play,
            pause: pause,
            stop: stop,
            voicePlayerStore: voicePlayerStore,
        } },
        React__default.default.createElement("div", { id: consts.VOICE_PLAYER_ROOT_ID, style: { display: 'none' } }),
        children));
};
var useVoicePlayerContext = function () { return React.useContext(Context); };

exports.ALL = ALL;
exports.AudioUnitDefaultValue = AudioUnitDefaultValue;
exports.VOICE_PLAYER_STATUS = VOICE_PLAYER_STATUS;
exports.VoicePlayerProvider = VoicePlayerProvider;
exports.generateGroupKey = generateGroupKey;
exports.useVoicePlayerContext = useVoicePlayerContext;
//# sourceMappingURL=bundle-2M4zbjEc.js.map
