'use strict';

var _tslib = require('./bundle-Bdr7xlea.js');
var React = require('react');
var index$1 = require('./bundle-BLoixwYr.js');
var utils = require('./bundle-Ck6ikNW6.js');
var reactDom = require('react-dom');
var LocalizationContext = require('./bundle-Cy1ruNzs.js');
var MediaQueryContext = require('./bundle-DrIKAEHN.js');
var ui_IconButton = require('../ui/IconButton.js');
var ui_Button = require('../ui/Button.js');
var ui_Icon = require('../ui/Icon.js');
var ui_Label = require('./bundle-CAR4EIKs.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
var uuid = require('./bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('./bundle-CJM9Pdwg.js');
var consts = require('./bundle-BD0wJiNh.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('./bundle-BKyZTqvq.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

/**
 * Mapping object to convert numeric keys to descriptive text
 * [(legacy) numeric key]: [(new) descriptive text]
 */
var colorMapping = {
    // Primary / Secondary / Error / Information
    100: 'extra-light',
    200: 'light',
    300: 'main',
    400: 'dark',
    500: 'extra-dark',
    // Overlay
    'overlay-01': 'overlay-dark',
    'overlay-02': 'overlay-light',
    // OnLight
    'onlight-01': 'onlight-text-high-emphasis',
    'onlight-02': 'onlight-text-mid-emphasis',
    'onlight-03': 'onlight-text-low-emphasis',
    'onlight-04': 'onlight-text-disabled',
    // OnDark
    'ondark-01': 'ondark-text-high-emphasis',
    'ondark-02': 'ondark-text-mid-emphasis',
    'ondark-03': 'ondark-text-low-emphasis',
    'ondark-04': 'ondark-text-disabled',
};
/**
 * Order of mappings to ensure longer keys are matched first
 * e.g. In --sendbird-dark-background-extra-dark, 'extra-dark' should be matched instead of 'dark'
 */
var colorMappingOrder = Object
    .values(colorMapping)
    .sort(function (a, b) { return b.length - a.length; });
/**
 * Convert colorMapping to a Map for quick lookup in mapColorKeys
 */
var colorMappingMap = new Map(Object.entries(colorMapping).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [value, key];
}));
/**
 * Converts descriptive color keys to their numeric equivalents.
 *
 * This function takes a set of CSS variable keys and transforms
 * descriptive color keys (e.g. 'extra-light', 'main') into their
 * numeric equivalents(e.g. 100, 200, ..., 500) as defined in the colorMapping object.
 *
 * e.g.
 * Input:
 * {
 *   '--sendbird-light-primary-extra-dark': '#00487c',
 *   '--sendbird-light-primary-dark': '#4bb3fd',
 *   '--sendbird-light-primary-main': '#3e6680',
 *   '--sendbird-light-primary-light': '#0496ff',
 *   '--sendbird-light-primary-extra-light': '#027bce',
 * }
 *
 * Output:
 * {
 *   '--sendbird-light-primary-500': '#00487c',
 *   '--sendbird-light-primary-400': '#4bb3fd',
 *   '--sendbird-light-primary-300': '#3e6680',
 *   '--sendbird-light-primary-200': '#0496ff',
 *   '--sendbird-light-primary-100': '#027bce',
 * }
 *
 * @param {ColorSet} colorSet - The input object containing CSS variables with descriptive keys.
 * @returns {ColorSet} The transformed object with numeric keys.
 */
var mapColorKeys = function (colorSet) {
    var mappedColors = {};
    Object.entries(colorSet).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var descriptiveKey = key;
        for (var _i = 0, colorMappingOrder_1 = colorMappingOrder; _i < colorMappingOrder_1.length; _i++) {
            var mappingValue = colorMappingOrder_1[_i];
            // Prepare a regex to match the mapping value at the end of the key
            // e.g., '-extra-dark$'
            var regex = new RegExp("-".concat(mappingValue, "$"));
            if (regex.test(key)) {
                // Find the corresponding numeric key for the mapping value using Map
                var numericKey = colorMappingMap.get(mappingValue);
                if (numericKey) {
                    // Replace the descriptive text with the numeric key
                    descriptiveKey = key.replace(regex, "-".concat(numericKey));
                    break;
                }
            }
        }
        mappedColors[descriptiveKey] = value;
    });
    return mappedColors;
};

// simple component to be used as modal root
var MODAL_ROOT = 'sendbird-modal-root';
var ModalRoot = function () { return (React__default.default.createElement("div", { id: MODAL_ROOT, className: MODAL_ROOT })); };

var ModalHeader = function (_a) {
    var titleText = _a.titleText, onCloseClick = _a.onCloseClick;
    return (React__default.default.createElement("div", { className: "sendbird-modal__header" },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, titleText),
        React__default.default.createElement("div", { className: "sendbird-modal__close" },
            React__default.default.createElement(ui_IconButton, { width: "32px", height: "32px", onClick: onCloseClick },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, fillColor: ui_Icon.IconColors.DEFAULT, width: "24px", height: "24px" })))));
};
var ModalBody = function (_a) {
    var children = _a.children;
    return (React__default.default.createElement("div", { className: "sendbird-modal__body" },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, children)));
};
var ModalFooter = function (_a) {
    var submitText = _a.submitText, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.hideCancelButton, hideCancelButton = _c === void 0 ? false : _c, _d = _a.type, type = _d === void 0 ? ui_Button.ButtonTypes.DANGER : _d, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-modal__footer" },
        !hideCancelButton && (React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, onClick: onCancel },
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.BUTTON__CANCEL))),
        React__default.default.createElement(ui_Button.default, { type: type, disabled: disabled, onClick: onSubmit }, submitText)));
};
function Modal(props) {
    var _a;
    var _b = props.children, children = _b === void 0 ? null : _b, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.contentClassName, contentClassName = _d === void 0 ? '' : _d, _e = props.isCloseOnClickOutside, isCloseOnClickOutside = _e === void 0 ? false : _e, _f = props.isFullScreenOnMobile, isFullScreenOnMobile = _f === void 0 ? false : _f, titleText = props.titleText, submitText = props.submitText, _g = props.disabled, disabled = _g === void 0 ? false : _g, _h = props.hideFooter, hideFooter = _h === void 0 ? false : _h, _j = props.type, type = _j === void 0 ? ui_Button.ButtonTypes.DANGER : _j, renderHeader = props.renderHeader, _k = props.onSubmit, onSubmit = _k === void 0 ? utils.noop : _k, onClose = props.onClose, onCancel = props.onCancel, customFooter = props.customFooter;
    var handleClose = (_a = onClose !== null && onClose !== void 0 ? onClose : onCancel) !== null && _a !== void 0 ? _a : utils.noop;
    var eventHandlers = useSendbirdStateContext.useSendbirdStateContext().eventHandlers;
    var id = React.useState(function () { return "sbu-modal-".concat(uuid.uuidv4()); })[0];
    React.useEffect(function () {
        var _a, _b;
        return (_b = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.modal) === null || _a === void 0 ? void 0 : _a.onMounted) === null || _b === void 0 ? void 0 : _b.call(_a, { close: handleClose, id: id });
    }, []);
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    return reactDom.createPortal(React__default.default.createElement("div", { className: utils.classnames('sendbird-modal', className, isFullScreenOnMobile && isMobile && 'sendbird-modal--full-mobile') },
        React__default.default.createElement("div", { className: utils.classnames.apply(void 0, _tslib.__spreadArray(['sendbird-modal__content'], (Array.isArray(contentClassName) ? contentClassName : [contentClassName]), false)) },
            (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.default.createElement(ModalHeader, { titleText: titleText !== null && titleText !== void 0 ? titleText : '', onCloseClick: handleClose }),
            React__default.default.createElement(ModalBody, null, children),
            !hideFooter
                && (customFooter !== null && customFooter !== void 0 ? customFooter : (React__default.default.createElement(ModalFooter, { disabled: disabled, onCancel: handleClose, onSubmit: onSubmit, submitText: submitText !== null && submitText !== void 0 ? submitText : '', type: type })))),
        React__default.default.createElement("div", { className: utils.classnames('sendbird-modal__backdrop', isCloseOnClickOutside && 'sendbird-modal__backdrop--clickoutside'), onClick: function (e) {
                e === null || e === void 0 ? void 0 : e.stopPropagation();
                if (isCloseOnClickOutside) {
                    handleClose();
                }
            } })), document.getElementById(MODAL_ROOT));
}

var Context = React.createContext({
    start: utils.noop,
    stop: utils.noop,
    isRecordable: false,
});
var VoiceRecorderProvider = function (props) {
    var _a;
    var children = props.children;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger, groupChannel = config.groupChannel;
    var _b = React.useState(null), mediaRecorder = _b[0], setMediaRecorder = _b[1];
    var _c = React.useState(false), isRecordable = _c[0], setIsRecordable = _c[1];
    var _d = React.useState(false), permissionWarning = _d[0], setPermissionWarning = _d[1];
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var isVoiceMessageEnabled = groupChannel.enableVoiceMessage;
    var _e = React.useState(null), webAudioUtils = _e[0], setWebAudioUtils = _e[1];
    var browserSupportMimeType = (_a = consts.BROWSER_SUPPORT_MIME_TYPE_LIST.find(function (mimeType) { return MediaRecorder.isTypeSupported(mimeType); })) !== null && _a !== void 0 ? _a : '';
    if (isVoiceMessageEnabled && !browserSupportMimeType) {
        logger.error('VoiceRecorder: Browser does not support mimeType', { mimmeTypes: consts.BROWSER_SUPPORT_MIME_TYPE_LIST });
    }
    React.useEffect(function () {
        if (isVoiceMessageEnabled && !webAudioUtils) {
            Promise.resolve().then(function () { return require('./bundle-BtwsnauE.js'); }).then(function (module) { return setWebAudioUtils(module); });
        }
    }, [isVoiceMessageEnabled, webAudioUtils]);
    var start = React.useCallback(function (eventHandler) {
        var _a, _b;
        if (isVoiceMessageEnabled && !webAudioUtils) {
            logger.error('VoiceRecorder: Recording audio processor is being loaded.');
            return;
        }
        var checkPermission = function () {
            try {
                // Type '"microphone"' is not assignable to type 'PermissionName'.ts(2322)
                // this is typescript issue
                // https://github.com/microsoft/TypeScript/issues/33923
                // @ts-expect-error
                navigator.permissions.query({ name: 'microphone' }).then(function (result) {
                    if (result.state === 'denied') {
                        logger.warning('VoiceRecorder: Permission denied.');
                        setPermissionWarning(true);
                    }
                });
            }
            catch (error) {
                logger.warning('VoiceRecorder: Failed to check permission.', error);
            }
        };
        logger.info('VoiceRecorder: Start recording.');
        if (mediaRecorder) {
            stop();
            logger.info('VoiceRecorder: Previous mediaRecorder is stopped.');
        }
        checkPermission();
        (_b = (_a = navigator === null || navigator === void 0 ? void 0 : navigator.mediaDevices) === null || _a === void 0 ? void 0 : _a.getUserMedia) === null || _b === void 0 ? void 0 : _b.call(_a, { audio: true }).then(function (stream) {
            var _a;
            logger.info('VoiceRecorder: Succeeded getting media stream.', stream);
            setIsRecordable(true);
            var mediaRecorder = new MediaRecorder(stream, {
                mimeType: browserSupportMimeType,
                audioBitsPerSecond: consts.VOICE_RECORDER_AUDIO_BIT_RATE,
            });
            // when recording stops
            mediaRecorder.ondataavailable = function (e) {
                logger.info('VoiceRecorder: Succeeded getting an available data.', e.data);
                var audioFile = new File([e.data], consts.VOICE_MESSAGE_FILE_NAME, {
                    lastModified: new Date().getTime(),
                    type: consts.VOICE_MESSAGE_MIME_TYPE,
                });
                webAudioUtils === null || webAudioUtils === void 0 ? void 0 : webAudioUtils.downsampleToWav(audioFile, function (buffer) {
                    var _a;
                    var mp3Buffer = webAudioUtils === null || webAudioUtils === void 0 ? void 0 : webAudioUtils.encodeMp3(buffer);
                    var mp3blob = new Blob(mp3Buffer, { type: consts.VOICE_MESSAGE_MIME_TYPE });
                    var convertedAudioFile = new File([mp3blob], consts.VOICE_MESSAGE_FILE_NAME, {
                        lastModified: new Date().getTime(),
                        type: consts.VOICE_MESSAGE_MIME_TYPE,
                    });
                    (_a = eventHandler === null || eventHandler === void 0 ? void 0 : eventHandler.onRecordingEnded) === null || _a === void 0 ? void 0 : _a.call(eventHandler, convertedAudioFile);
                    logger.info('VoiceRecorder: Succeeded converting audio file.', convertedAudioFile);
                });
                var tracks = stream.getAudioTracks();
                tracks.forEach(function (track) { return track.stop(); });
                setIsRecordable(false);
            };
            mediaRecorder.onstart = (_a = eventHandler === null || eventHandler === void 0 ? void 0 : eventHandler.onRecordingStarted) !== null && _a !== void 0 ? _a : utils.noop;
            mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.start();
            setMediaRecorder(mediaRecorder);
        }).catch(function (err) {
            logger.error('VoiceRecorder: Failed getting media stream.', err);
            setMediaRecorder(null);
        });
    }, [mediaRecorder, webAudioUtils]);
    var stop = React.useCallback(function () {
        // Stop recording
        mediaRecorder === null || mediaRecorder === void 0 ? void 0 : mediaRecorder.stop();
        setMediaRecorder(null);
        setIsRecordable(false);
        logger.info('VoiceRecorder: Stop recording.');
    }, [mediaRecorder]);
    return (React__default.default.createElement(Context.Provider, { value: { start: start, stop: stop, isRecordable: isRecordable } },
        children,
        permissionWarning && (React__default.default.createElement(Modal, { hideFooter: true, onClose: function () { return setPermissionWarning(false); } },
            React__default.default.createElement(React__default.default.Fragment, null, stringSet.VOICE_RECORDING_PERMISSION_DENIED)))));
};
var useVoiceRecorderContext = function () { return React.useContext(Context); };
var index = {
    VoiceRecorderProvider: VoiceRecorderProvider,
    useVoiceRecorderContext: useVoiceRecorderContext,
};

var GlobalModalContext = React.createContext({
    openModal: utils.noop,
});
var GlobalModalProvider = function (_a) {
    var children = _a.children;
    // Idea from https://dev.to/nurislamov/simple-modals-queue-in-react-4g6c
    var _b = React.useState([]), globalModalQueue = _b[0], setGlobalModalQueue = _b[1];
    var openModal = React.useCallback(function (props) {
        setGlobalModalQueue(function (currentQue) { return _tslib.__spreadArray(_tslib.__spreadArray([], currentQue, true), [props], false); });
    }, []);
    var closeModal = React.useCallback(function () {
        setGlobalModalQueue(function (currentQue) { return currentQue.slice(1); });
    }, []);
    var ModalComponent = React.useMemo(function () { return function () {
        return index$1.K(globalModalQueue)
            .when(function (q) { return q.length === 0; }, function () {
            return React__default.default.createElement(React__default.default.Fragment, null);
        })
            .otherwise(function () {
            var _a = globalModalQueue[0], modalProps = _a.modalProps, childElement = _a.childElement;
            return (React__default.default.createElement(Modal, _tslib.__assign({}, modalProps, { className: utils.classnames('sendbird-global-modal', modalProps === null || modalProps === void 0 ? void 0 : modalProps.className), onClose: function () {
                    var _a;
                    (_a = modalProps === null || modalProps === void 0 ? void 0 : modalProps.onClose) === null || _a === void 0 ? void 0 : _a.call(modalProps);
                    closeModal();
                } }), childElement({
                closeModal: closeModal,
            })));
        });
    }; }, [globalModalQueue]);
    return (React__default.default.createElement(GlobalModalContext.Provider, { value: {
            openModal: openModal,
        } },
        React__default.default.createElement(ModalComponent, null),
        children));
};
var useGlobalModalContext = function () { return React.useContext(GlobalModalContext); };

var EmojiManager = /** @class */ (function () {
    function EmojiManager(props) {
        var _this = this;
        var _a;
        var sdk = props.sdk, logger = props.logger;
        (_a = sdk === null || sdk === void 0 ? void 0 : sdk.getAllEmoji) === null || _a === void 0 ? void 0 : _a.call(sdk).then(function (emojiContainer) {
            _this._emojiContainer = emojiContainer;
            logger === null || logger === void 0 ? void 0 : logger.info('EmojiManager | Succeeded getting all emojis. ', emojiContainer);
        }).catch(function () {
            logger === null || logger === void 0 ? void 0 : logger.warning('EmojiManager | Failed getting all emojis.');
        });
    }
    Object.defineProperty(EmojiManager.prototype, "AllEmojisAsArray", {
        get: function () {
            return this._emojiContainer.emojiCategories.flatMap(function (category) { return category.emojis; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmojiManager.prototype, "AllEmojisAsMap", {
        get: function () {
            return this._emojiContainer.emojiCategories
                .flatMap(function (category) { return category.emojis; })
                .reduce(function (map, emoji) {
                map.set(emoji.key, emoji.url);
                return map;
            }, new Map());
        },
        enumerable: false,
        configurable: true
    });
    EmojiManager.prototype.getAllEmojis = function (type) {
        var _this = this;
        return index$1.K(type)
            .when(function (type) { return ['array', 'arr'].includes(type); }, function () { return _this.AllEmojisAsArray; })
            .when(function (type) { return ['map'].includes(type); }, function () { return _this.AllEmojisAsMap; })
            .otherwise(function () { return _this.AllEmojisAsArray; });
    };
    EmojiManager.prototype.getEmojiUrl = function (reactionKey) {
        var _a, _b;
        return (_b = (_a = this.AllEmojisAsArray.find(function (emoji) { return emoji.key === reactionKey; })) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : '';
    };
    Object.defineProperty(EmojiManager.prototype, "emojiContainer", {
        get: function () {
            return this._emojiContainer;
        },
        enumerable: false,
        configurable: true
    });
    return EmojiManager;
}());

exports.EmojiManager = EmojiManager;
exports.GlobalModalProvider = GlobalModalProvider;
exports.MODAL_ROOT = MODAL_ROOT;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalRoot = ModalRoot;
exports.VoiceRecorderProvider = VoiceRecorderProvider;
exports.index = index;
exports.mapColorKeys = mapColorKeys;
exports.useGlobalModalContext = useGlobalModalContext;
exports.useVoiceRecorderContext = useVoiceRecorderContext;
//# sourceMappingURL=bundle-DZhkNDpN.js.map
