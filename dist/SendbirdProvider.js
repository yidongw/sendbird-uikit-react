import { _ as __assign, a as __awaiter, b as __generator, c as __spreadArray } from './chunks/bundle-Ck-Lg2K3.js';
import React__default, { useLayoutEffect, useRef, useEffect, useCallback, useMemo, useState, useReducer } from 'react';
import { UIKitConfigProvider, useUIKitConfig } from '@sendbird/uikit-tools';
import { SendbirdSdkContext } from './withSendbird.js';
import { m as mapColorKeys, V as VoiceRecorderProvider, E as EmojiManager, G as GlobalModalProvider, d as ModalRoot } from './chunks/bundle-ptS-tNRF.js';
import cssVars from 'css-vars-ponyfill';
import { K, a5 as isTextuallyNull } from './chunks/bundle-BL0uQSu6.js';
import { U as USER_ACTIONS } from './chunks/bundle-qVNDxr2e.js';
import { s as schedulerFactory, b as useUnmount, u as useOnlineStatus, a as useMarkAsDeliveredScheduler } from './chunks/bundle-qZpJFKwp.js';
import SendbirdChat, { SendbirdError, SendbirdProduct, SendbirdPlatform, DeviceOsPlatform, SendbirdErrorCode } from '@sendbird/chat';
import { OpenChannelModule } from '@sendbird/chat/openChannel';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
import { n as noop } from './chunks/bundle-pQHYhigr.js';
import { p as pubSubFactory } from './chunks/bundle--SXvYGPR.js';
import { b as VoicePlayerProvider } from './chunks/bundle-CHD1aKHO.js';
import { a as LocalizationProvider } from './chunks/bundle-CbLNLMef.js';
import { u as useMediaQueryContext, M as MediaQueryProvider } from './chunks/bundle-Bk1oUUzJ.js';
import { g as getStringSet } from './chunks/bundle-B80WXNZi.js';
import { C as CACHED_MESSAGE_TEMPLATES_TOKEN_KEY, p as CACHED_MESSAGE_TEMPLATES_KEY, m as VOICE_PLAYER_ROOT_ID, q as DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT, r as DEFAULT_UPLOAD_SIZE_LIMIT, s as VOICE_RECORDER_DEFAULT_MAX, j as VOICE_RECORDER_DEFAULT_MIN } from './chunks/bundle-DgxVBBM3.js';
import { g as getCaseResolvedReplyType } from './chunks/bundle-yYNXeh2L.js';
import { i as EmojiReactionListRoot, j as MenuRoot } from './chunks/bundle-A5WEPjt6.js';
export { useSendbirdStateContext } from './useSendbirdStateContext.js';
import 'react-dom';
import './ui/IconButton.js';
import './ui/Button.js';
import './chunks/bundle-Di0Zwz2X.js';
import './ui/Icon.js';
import './chunks/bundle-gMJSD9hQ.js';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-fwRBR_Yw.js';
import './chunks/bundle-CnkNoe49.js';
import './ui/SortByRow.js';

var DEFAULT_COLOR_SET = {
    '--sendbird-dark-primary-500': '#4d2aa6',
    '--sendbird-dark-primary-400': '#6440C4',
    '--sendbird-dark-primary-300': '#7B53EF',
    '--sendbird-dark-primary-200': '#9E8CF5',
    '--sendbird-dark-primary-100': '#E2DFFF',
    '--sendbird-dark-secondary-500': '#007A7A',
    '--sendbird-dark-secondary-400': '#189A8D',
    '--sendbird-dark-secondary-300': '#2EBA9F',
    '--sendbird-dark-secondary-200': '#6FD6BE',
    '--sendbird-dark-secondary-100': '#AEF2DC',
    '--sendbird-dark-information-100': '#b2d9ff',
    '--sendbird-dark-error-500': '#A30E2D',
    '--sendbird-dark-error-400': '#C11F41',
    '--sendbird-dark-error-300': '#E53157',
    '--sendbird-dark-error-200': '#FF6183',
    '--sendbird-dark-error-100': '#FFABBD',
    '--sendbird-dark-background-700': '#000000',
    '--sendbird-dark-background-600': '#161616',
    '--sendbird-dark-background-500': '#2C2C2C',
    '--sendbird-dark-background-400': '#393939',
    '--sendbird-dark-background-300': '#A8A8A8',
    '--sendbird-dark-background-200': '#D9D9D9',
    '--sendbird-dark-background-100': '#F0F0F0',
    '--sendbird-dark-background-50': '#FFFFFF',
    '--sendbird-dark-overlay': 'rgba(0, 0, 0, 0.32)',
    '--sendbird-dark-onlight-01': 'rgba(0, 0, 0, 0.88)',
    '--sendbird-dark-onlight-02': 'rgba(0, 0, 0, 0.50)',
    '--sendbird-dark-onlight-03': 'rgba(0, 0, 0, 0.38)',
    '--sendbird-dark-onlight-04': 'rgba(0, 0, 0, 0.12)',
    '--sendbird-dark-ondark-01': 'rgba(255, 255, 255, 0.88)',
    '--sendbird-dark-ondark-02': 'rgba(255, 255, 255, 0.50)',
    '--sendbird-dark-ondark-03': 'rgba(255, 255, 255, 0.38)',
    '--sendbird-dark-ondark-04': 'rgba(255, 255, 255, 0.12)',
    '--sendbird-dark-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
    '--sendbird-dark-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
    '--sendbird-dark-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
    '--sendbird-dark-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
    '--sendbird-dark-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    '--sendbird-light-primary-500': '#4d2aa6',
    '--sendbird-light-primary-400': '#6440C4',
    '--sendbird-light-primary-300': '#7B53EF',
    '--sendbird-light-primary-200': '#9E8CF5',
    '--sendbird-light-primary-100': '#E2DFFF',
    '--sendbird-light-secondary-500': '#007A7A',
    '--sendbird-light-secondary-400': '#189A8D',
    '--sendbird-light-secondary-300': '#2EBA9F',
    '--sendbird-light-secondary-200': '#6FD6BE',
    '--sendbird-light-secondary-100': '#AEF2DC',
    '--sendbird-light-information-100': '#b2d9ff',
    '--sendbird-light-error-500': '#A30E2D',
    '--sendbird-light-error-400': '#C11F41',
    '--sendbird-light-error-300': '#E53157',
    '--sendbird-light-error-200': '#FF6183',
    '--sendbird-light-error-100': '#FFABBD',
    '--sendbird-light-background-700': '#000000',
    '--sendbird-light-background-600': '#161616',
    '--sendbird-light-background-500': '#2C2C2C',
    '--sendbird-light-background-400': '#393939',
    '--sendbird-light-background-300': '#A8A8A8',
    '--sendbird-light-background-200': '#D9D9D9',
    '--sendbird-light-background-100': '#F0F0F0',
    '--sendbird-light-background-50': ' #FFFFFF',
    '--sendbird-light-overlay': 'rgba(0, 0, 0, 0.32)',
    '--sendbird-light-onlight-01': 'rgba(0, 0, 0, 0.88)',
    '--sendbird-light-onlight-02': 'rgba(0, 0, 0, 0.50)',
    '--sendbird-light-onlight-03': 'rgba(0, 0, 0, 0.38)',
    '--sendbird-light-onlight-04': 'rgba(0, 0, 0, 0.12)',
    '--sendbird-light-ondark-01': 'rgba(255, 255, 255, 0.88)',
    '--sendbird-light-ondark-02': 'rgba(255, 255, 255, 0.50)',
    '--sendbird-light-ondark-03': 'rgba(255, 255, 255, 0.38)',
    '--sendbird-light-ondark-04': 'rgba(255, 255, 255, 0.12)',
    '--sendbird-light-shadow-01': '0 1px 5px 0 rgba(33, 34, 66, 0.04), 0 0 3px 0 rgba(0, 0, 0, 0.08), 0 2px 1px 0 rgba(0, 0, 0, 0.12)',
    '--sendbird-light-shadow-02': '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.08), 0 8px 10px 1px rgba(0, 0, 0, 0.12)',
    '--sendbird-light-shadow-03': '0 6px 10px -5px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 16px 24px 2px rgba(0, 0, 0, 0.12)',
    '--sendbird-light-shadow-04': '0 9px 15px -7px rgba(0, 0, 0, 0.04), 0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 24px 38px 3px rgba(0, 0, 0, 0.12)',
    '--sendbird-light-shadow-message-input': '0 1px 5px 0 rgba(33, 34, 66, 0.12), 0 0 1px 0 rgba(33, 34, 66, 0.16), 0 2px 1px 0 rgba(33, 34, 66, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
};
var isEmpty = function (obj) {
    if (obj === null || obj === undefined) {
        return true;
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};
var useTheme = function (overrides) {
    useLayoutEffect(function () {
        if (!isEmpty(overrides)) {
            var variables = __assign(__assign({}, DEFAULT_COLOR_SET), mapColorKeys(overrides));
            cssVars({ variables: variables });
        }
    }, [overrides]);
};

var SDK_ACTIONS = {
    INIT_SDK: 'INIT_SDK',
    SET_SDK_LOADING: 'SET_SDK_LOADING',
    RESET_SDK: 'RESET_SDK',
    SDK_ERROR: 'SDK_ERROR',
};

var initialState$2 = {
    initialized: false,
    loading: false,
    sdk: {},
    error: false,
};

function reducer$2(state, action) {
    return K(action)
        .with({ type: SDK_ACTIONS.SET_SDK_LOADING }, function (_a) {
        var payload = _a.payload;
        return __assign(__assign({}, state), { initialized: false, loading: payload });
    })
        .with({ type: SDK_ACTIONS.SDK_ERROR }, function () {
        return __assign(__assign({}, state), { initialized: false, loading: false, error: true });
    })
        .with({ type: SDK_ACTIONS.INIT_SDK }, function (_a) {
        var payload = _a.payload;
        return {
            sdk: payload,
            initialized: true,
            loading: false,
            error: false,
        };
    })
        .with({ type: SDK_ACTIONS.RESET_SDK }, function () {
        return initialState$2;
    })
        .otherwise(function () {
        return state;
    });
}

var initialState$1 = {
    initialized: false,
    loading: false,
    user: {},
};

function reducer$1(state, action) {
    return K(action)
        .with({ type: USER_ACTIONS.INIT_USER }, function (_a) {
        var payload = _a.payload;
        return {
            initialized: true,
            loading: false,
            user: payload,
        };
    })
        .with({ type: USER_ACTIONS.RESET_USER }, function () {
        return initialState$1;
    })
        .with({ type: USER_ACTIONS.UPDATE_USER_INFO }, function (_a) {
        var payload = _a.payload;
        return __assign(__assign({}, state), { user: payload });
    })
        .otherwise(function () {
        return state;
    });
}

var APP_INFO_ACTIONS = {
    INITIALIZE_MESSAGE_TEMPLATES_INFO: 'INITIALIZE_MESSAGE_TEMPLATES_INFO',
    UPSERT_MESSAGE_TEMPLATES: 'UPSERT_MESSAGE_TEMPLATES',
    UPSERT_WAITING_TEMPLATE_KEYS: 'UPSERT_WAITING_TEMPLATE_KEYS',
    MARK_ERROR_WAITING_TEMPLATE_KEYS: 'MARK_ERROR_WAITING_TEMPLATE_KEYS',
};

function reducer(state, action) {
    return K(action)
        .with({ type: APP_INFO_ACTIONS.INITIALIZE_MESSAGE_TEMPLATES_INFO }, function (_a) {
        var payload = _a.payload;
        return {
            messageTemplatesInfo: payload,
            waitingTemplateKeysMap: {},
        };
    })
        .with({ type: APP_INFO_ACTIONS.UPSERT_MESSAGE_TEMPLATES }, function (_a) {
        var payload = _a.payload;
        var templatesInfo = state.messageTemplatesInfo;
        if (!templatesInfo)
            return state; // Not initialized. Ignore.
        var waitingTemplateKeysMap = __assign({}, state.waitingTemplateKeysMap);
        payload.forEach(function (templatesMapData) {
            var key = templatesMapData.key, template = templatesMapData.template;
            templatesInfo.templatesMap[key] = template;
            delete waitingTemplateKeysMap[key];
        });
        return __assign(__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap, messageTemplatesInfo: templatesInfo });
    })
        .with({ type: APP_INFO_ACTIONS.UPSERT_WAITING_TEMPLATE_KEYS }, function (_a) {
        var payload = _a.payload;
        var keys = payload.keys, requestedAt = payload.requestedAt;
        var waitingTemplateKeysMap = __assign({}, state.waitingTemplateKeysMap);
        keys.forEach(function (key) {
            var _a, _b;
            waitingTemplateKeysMap[key] = {
                erroredMessageIds: (_b = (_a = waitingTemplateKeysMap[key]) === null || _a === void 0 ? void 0 : _a.erroredMessageIds) !== null && _b !== void 0 ? _b : [],
                requestedAt: requestedAt,
            };
        });
        return __assign(__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap });
    })
        .with({ type: APP_INFO_ACTIONS.MARK_ERROR_WAITING_TEMPLATE_KEYS }, function (_a) {
        var payload = _a.payload;
        var keys = payload.keys, messageId = payload.messageId;
        var waitingTemplateKeysMap = __assign({}, state.waitingTemplateKeysMap);
        keys.forEach(function (key) {
            var waitingTemplateKeyData = waitingTemplateKeysMap[key];
            if (waitingTemplateKeyData && waitingTemplateKeyData.erroredMessageIds.indexOf(messageId) === -1) {
                waitingTemplateKeyData.erroredMessageIds.push(messageId);
            }
        });
        return __assign(__assign({}, state), { waitingTemplateKeysMap: waitingTemplateKeysMap });
    })
        .otherwise(function () {
        return state;
    });
}

var initialState = {
    waitingTemplateKeysMap: {},
};

function disconnectSdk(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, sdk = _b.sdk;
        return __generator(this, function (_c) {
            return [2 /*return*/, new Promise(function (resolve) {
                    sdkDispatcher({ type: SDK_ACTIONS.SET_SDK_LOADING, payload: true });
                    if (sdk === null || sdk === void 0 ? void 0 : sdk.disconnectWebSocket) {
                        sdk.disconnectWebSocket()
                            .then(function () {
                            sdkDispatcher({ type: SDK_ACTIONS.RESET_SDK });
                            userDispatcher({ type: USER_ACTIONS.RESET_USER });
                        })
                            .finally(function () {
                            resolve(true);
                        });
                    }
                    else {
                        resolve(true);
                    }
                })];
        });
    });
}

var APP_VERSION_STRING = '3.15.10';
var INIT_SDK = SDK_ACTIONS.INIT_SDK, SET_SDK_LOADING = SDK_ACTIONS.SET_SDK_LOADING, RESET_SDK = SDK_ACTIONS.RESET_SDK, SDK_ERROR = SDK_ACTIONS.SDK_ERROR;
var INIT_USER = USER_ACTIONS.INIT_USER, UPDATE_USER_INFO = USER_ACTIONS.UPDATE_USER_INFO, RESET_USER = USER_ACTIONS.RESET_USER;
function getMissingParamError(_a) {
    var userId = _a.userId, appId = _a.appId;
    return "SendbirdProvider | useConnect/setupConnection/Connection failed UserId: ".concat(userId, " or appId: ").concat(appId, " missing");
}
function getConnectSbError(error) {
    return "SendbirdProvider | useConnect/setupConnection/Connection failed. ".concat((error === null || error === void 0 ? void 0 : error.code) || '', " ").concat((error === null || error === void 0 ? void 0 : error.message) || '');
}
function setUpConnection(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var errorMessage;
        var _this = this;
        var _c, _d;
        var logger = _b.logger, sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, initDashboardConfigs = _b.initDashboardConfigs, userId = _b.userId, appId = _b.appId, isNewApp = _b.isNewApp, customApiHost = _b.customApiHost, customWebSocketHost = _b.customWebSocketHost, configureSession = _b.configureSession, nickname = _b.nickname, profileUrl = _b.profileUrl, accessToken = _b.accessToken, isUserIdUsedForNickname = _b.isUserIdUsedForNickname, sdkInitParams = _b.sdkInitParams, customExtensionParams = _b.customExtensionParams, _e = _b.isMobile, isMobile = _e === void 0 ? false : _e, eventHandlers = _b.eventHandlers, initializeMessageTemplatesInfo = _b.initializeMessageTemplatesInfo;
        return __generator(this, function (_f) {
            (_c = logger.info) === null || _c === void 0 ? void 0 : _c.call(logger, 'SendbirdProvider | useConnect/setupConnection/init', { userId: userId, appId: appId });
            sdkDispatcher({ type: SET_SDK_LOADING, payload: true });
            if (!userId || !appId) {
                errorMessage = getMissingParamError({ userId: userId, appId: appId });
                (_d = logger.error) === null || _d === void 0 ? void 0 : _d.call(logger, errorMessage);
                sdkDispatcher({ type: SDK_ERROR });
                return [2 /*return*/, Promise.reject(errorMessage)];
            }
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var _a;
                    (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, "SendbirdProvider | useConnect/setupConnection/connect connecting using ".concat(accessToken !== null && accessToken !== void 0 ? accessToken : userId));
                    var sdk = initSDK({ appId: appId, customApiHost: customApiHost, customWebSocketHost: customWebSocketHost, isNewApp: isNewApp, sdkInitParams: sdkInitParams });
                    var sessionHandler = typeof configureSession === 'function' ? configureSession(sdk) : undefined;
                    setupSDK(sdk, { logger: logger, sessionHandler: sessionHandler, customExtensionParams: customExtensionParams, isMobile: isMobile });
                    sdk
                        .connect(userId, accessToken)
                        .then(function (user) { return onConnected(user); })
                        .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                        var sessionToken, user, error_1;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(shouldRetryWithValidSessionToken(error) && sessionHandler)) return [3 /*break*/, 6];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 5, , 6]);
                                    return [4 /*yield*/, new Promise(sessionHandler.onSessionTokenRequired)];
                                case 2:
                                    sessionToken = _b.sent();
                                    if (!sessionToken) return [3 /*break*/, 4];
                                    (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, "SendbirdProvider | useConnect/setupConnection/connect retry connect with valid session token: ".concat(sessionToken.slice(0, 10) + '...'));
                                    return [4 /*yield*/, sdk.connect(userId, sessionToken)];
                                case 3:
                                    user = _b.sent();
                                    return [2 /*return*/, onConnected(user)];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    error_1 = _b.sent();
                                    // NOTE: Filter out the error from `onSessionTokenRequired`.
                                    if (error_1 instanceof SendbirdError) {
                                        // connect in offline mode
                                        // if (sdk.isCacheEnabled && sdk.currentUser) return onConnected(sdk.currentUser);
                                        return [2 /*return*/, onConnectFailed(error_1)];
                                    }
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/, onConnectFailed(error)];
                            }
                        });
                    }); });
                    var onConnected = function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var error_2, error_3, updateParams, updatedUser;
                        var _b, _c, _d, _e, _f, _g, _h, _j;
                        return __generator(this, function (_k) {
                            switch (_k.label) {
                                case 0:
                                    (_b = logger.info) === null || _b === void 0 ? void 0 : _b.call(logger, 'SendbirdProvider | useConnect/setupConnection/onConnected', user);
                                    sdkDispatcher({ type: INIT_SDK, payload: sdk });
                                    userDispatcher({ type: INIT_USER, payload: user });
                                    _k.label = 1;
                                case 1:
                                    _k.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, initializeMessageTemplatesInfo(sdk)];
                                case 2:
                                    _k.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _k.sent();
                                    (_c = logger.error) === null || _c === void 0 ? void 0 : _c.call(logger, 'SendbirdProvider | useConnect/setupConnection/upsertMessageTemplateListInLocalStorage failed', { error: error_2 });
                                    return [3 /*break*/, 4];
                                case 4:
                                    _k.trys.push([4, 6, , 7]);
                                    return [4 /*yield*/, initDashboardConfigs(sdk)];
                                case 5:
                                    _k.sent();
                                    (_d = logger.info) === null || _d === void 0 ? void 0 : _d.call(logger, 'SendbirdProvider | useConnect/setupConnection/getUIKitConfiguration success');
                                    return [3 /*break*/, 7];
                                case 6:
                                    error_3 = _k.sent();
                                    (_e = logger.error) === null || _e === void 0 ? void 0 : _e.call(logger, 'SendbirdProvider | useConnect/setupConnection/getUIKitConfiguration failed', { error: error_3 });
                                    return [3 /*break*/, 7];
                                case 7:
                                    _k.trys.push([7, 10, , 11]);
                                    if (!((nickname !== user.nickname || profileUrl !== user.profileUrl) && !(isTextuallyNull(nickname) && isTextuallyNull(profileUrl)))) return [3 /*break*/, 9];
                                    (_f = logger.info) === null || _f === void 0 ? void 0 : _f.call(logger, 'SendbirdProvider | useConnect/setupConnection/updateCurrentUserInfo', { nickname: nickname, profileUrl: profileUrl });
                                    updateParams = {
                                        nickname: nickname || user.nickname || (isUserIdUsedForNickname ? user.userId : ''),
                                        profileUrl: profileUrl || user.profileUrl,
                                    };
                                    return [4 /*yield*/, sdk.updateCurrentUserInfo(updateParams)];
                                case 8:
                                    updatedUser = _k.sent();
                                    (_g = logger.info) === null || _g === void 0 ? void 0 : _g.call(logger, 'SendbirdProvider | useConnect/setupConnection/updateCurrentUserInfo success', updateParams);
                                    userDispatcher({ type: UPDATE_USER_INFO, payload: updatedUser });
                                    _k.label = 9;
                                case 9: return [3 /*break*/, 11];
                                case 10:
                                    _k.sent();
                                    return [3 /*break*/, 11];
                                case 11:
                                    resolve();
                                    (_j = (_h = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.connection) === null || _h === void 0 ? void 0 : _h.onConnected) === null || _j === void 0 ? void 0 : _j.call(_h, user);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    var onConnectFailed = function (e) { return __awaiter(_this, void 0, void 0, function () {
                        var errorMessage;
                        var _a, _b, _c, _d;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    if (!(sdk.isCacheEnabled && shouldClearCache(e))) return [3 /*break*/, 2];
                                    (_a = logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, "SendbirdProvider | useConnect/setupConnection/connect clear cache [".concat(e.code, "/").concat(e.message, "]"));
                                    return [4 /*yield*/, sdk.clearCachedData()];
                                case 1:
                                    _e.sent();
                                    _e.label = 2;
                                case 2:
                                    errorMessage = getConnectSbError(e);
                                    (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, errorMessage, { e: e, appId: appId, userId: userId });
                                    userDispatcher({ type: RESET_USER });
                                    sdkDispatcher({ type: RESET_SDK });
                                    sdkDispatcher({ type: SDK_ERROR });
                                    reject(errorMessage);
                                    (_d = (_c = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.connection) === null || _c === void 0 ? void 0 : _c.onFailed) === null || _d === void 0 ? void 0 : _d.call(_c, e);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                })];
        });
    });
}
/**
 * Initializes the Sendbird SDK with the provided parameters.
 * */
function initSDK(_a) {
    var appId = _a.appId, _b = _a.isNewApp, isNewApp = _b === void 0 ? false : _b, customApiHost = _a.customApiHost, customWebSocketHost = _a.customWebSocketHost, _c = _a.sdkInitParams, sdkInitParams = _c === void 0 ? {} : _c;
    // eslint-disable-next-line  prefer-object-spread -- not to break the existing types
    var params = Object.assign({}, {
        appId: appId,
        modules: [new GroupChannelModule(), new OpenChannelModule()],
        newInstance: isNewApp,
        localCacheEnabled: true,
    }, sdkInitParams);
    if (customApiHost)
        params.customApiHost = customApiHost;
    if (customWebSocketHost)
        params.customWebSocketHost = customWebSocketHost;
    return SendbirdChat.init(params);
}
/**
 * Sets up the Sendbird SDK after initialization.
 * Configures necessary settings, adds extensions, sets the platform, and configures the session handler if provided.
 */
function setupSDK(sdk, params) {
    var _a, _b;
    var logger = params.logger, sessionHandler = params.sessionHandler, isMobile = params.isMobile, customExtensionParams = params.customExtensionParams;
    (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/setupConnection/setVersion', { version: APP_VERSION_STRING });
    sdk.addExtension('sb_uikit', APP_VERSION_STRING);
    sdk.addSendbirdExtensions([{ product: SendbirdProduct.UIKIT_CHAT, version: APP_VERSION_STRING, platform: SendbirdPlatform === null || SendbirdPlatform === void 0 ? void 0 : SendbirdPlatform.JS }], { platform: isMobile ? DeviceOsPlatform.MOBILE_WEB : DeviceOsPlatform.WEB }, customExtensionParams);
    if (sessionHandler) {
        (_b = logger.info) === null || _b === void 0 ? void 0 : _b.call(logger, 'SendbirdProvider | useConnect/setupConnection/configureSession', sessionHandler);
        sdk.setSessionHandler(sessionHandler);
    }
}
function shouldClearCache(error) {
    if (!(error instanceof SendbirdError))
        return false;
    return [
        SendbirdErrorCode.USER_AUTH_DEACTIVATED,
        SendbirdErrorCode.USER_AUTH_DELETED_OR_NOT_FOUND,
        SendbirdErrorCode.SESSION_TOKEN_EXPIRED,
        SendbirdErrorCode.SESSION_REVOKED,
    ].includes(error.code);
}
function shouldRetryWithValidSessionToken(error) {
    if (!(error instanceof SendbirdError))
        return false;
    return [
        SendbirdErrorCode.SESSION_TOKEN_EXPIRED,
        /**
         * Note: INVALID_TOKEN has been added arbitrarily due to legacy constraints
         *
         * In the useEffect of the useConnect hook, authentication is being performed
         * but changes of the `accessToken` is not being detected.
         * `disconnectSdk` is called when connect is called redundantly for the same user ID, causing issues, so `accessToken` has been excluded form the deps.
         *
         * In case the `accessToken` is missed, an additional attempt to connect is made
         * */
        SendbirdErrorCode.INVALID_TOKEN,
    ].includes(error.code);
}

function connect(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var logger = _b.logger, sdkDispatcher = _b.sdkDispatcher, userDispatcher = _b.userDispatcher, appInfoDispatcher = _b.appInfoDispatcher, initDashboardConfigs = _b.initDashboardConfigs, userId = _b.userId, appId = _b.appId, _c = _b.isNewApp, isNewApp = _c === void 0 ? false : _c, customApiHost = _b.customApiHost, customWebSocketHost = _b.customWebSocketHost, configureSession = _b.configureSession, nickname = _b.nickname, profileUrl = _b.profileUrl, accessToken = _b.accessToken, sdk = _b.sdk, sdkInitParams = _b.sdkInitParams, customExtensionParams = _b.customExtensionParams, isMobile = _b.isMobile, eventHandlers = _b.eventHandlers, isUserIdUsedForNickname = _b.isUserIdUsedForNickname, initializeMessageTemplatesInfo = _b.initializeMessageTemplatesInfo;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, disconnectSdk({
                        logger: logger,
                        sdkDispatcher: sdkDispatcher,
                        userDispatcher: userDispatcher,
                        sdk: sdk,
                    })];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, setUpConnection({
                            logger: logger,
                            sdkDispatcher: sdkDispatcher,
                            userDispatcher: userDispatcher,
                            appInfoDispatcher: appInfoDispatcher,
                            initDashboardConfigs: initDashboardConfigs,
                            userId: userId,
                            appId: appId,
                            isNewApp: isNewApp,
                            customApiHost: customApiHost,
                            customWebSocketHost: customWebSocketHost,
                            configureSession: configureSession,
                            nickname: nickname,
                            profileUrl: profileUrl,
                            accessToken: accessToken,
                            sdkInitParams: sdkInitParams,
                            customExtensionParams: customExtensionParams,
                            isMobile: isMobile,
                            eventHandlers: eventHandlers,
                            isUserIdUsedForNickname: isUserIdUsedForNickname,
                            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
                        })];
                case 2:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function useConnect(triggerTypes, staticTypes) {
    var _this = this;
    var userId = triggerTypes.userId, appId = triggerTypes.appId, accessToken = triggerTypes.accessToken, isMobile = triggerTypes.isMobile, isUserIdUsedForNickname = triggerTypes.isUserIdUsedForNickname;
    var logger = staticTypes.logger, nickname = staticTypes.nickname, profileUrl = staticTypes.profileUrl, configureSession = staticTypes.configureSession, customApiHost = staticTypes.customApiHost, customWebSocketHost = staticTypes.customWebSocketHost, sdk = staticTypes.sdk, sdkDispatcher = staticTypes.sdkDispatcher, userDispatcher = staticTypes.userDispatcher, appInfoDispatcher = staticTypes.appInfoDispatcher, initDashboardConfigs = staticTypes.initDashboardConfigs, sdkInitParams = staticTypes.sdkInitParams, customExtensionParams = staticTypes.customExtensionParams, eventHandlers = staticTypes.eventHandlers, initializeMessageTemplatesInfo = staticTypes.initializeMessageTemplatesInfo;
    // Note: This is a workaround to prevent the creation of multiple SDK instances when React strict mode is enabled.
    var connectDeps = useRef({
        appId: '',
        userId: '',
    });
    useEffect(function () {
        var _a;
        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/useEffect', { userId: userId, appId: appId, accessToken: accessToken });
        var isNewApp = connectDeps.current.appId !== appId;
        if (connectDeps.current.appId === appId && connectDeps.current.userId === userId) {
            return;
        }
        else {
            connectDeps.current = { appId: appId, userId: userId };
        }
        connect({
            userId: userId,
            appId: appId,
            isNewApp: isNewApp,
            accessToken: accessToken,
            logger: logger,
            nickname: nickname,
            profileUrl: profileUrl,
            configureSession: configureSession,
            customApiHost: customApiHost,
            customWebSocketHost: customWebSocketHost,
            sdk: sdk,
            sdkDispatcher: sdkDispatcher,
            userDispatcher: userDispatcher,
            appInfoDispatcher: appInfoDispatcher,
            initDashboardConfigs: initDashboardConfigs,
            isUserIdUsedForNickname: isUserIdUsedForNickname,
            sdkInitParams: sdkInitParams,
            customExtensionParams: customExtensionParams,
            isMobile: isMobile,
            eventHandlers: eventHandlers,
            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
        }).catch(function (error) {
            var _a;
            (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/useEffect', error);
        });
    }, [userId, appId]);
    var reconnect = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'SendbirdProvider | useConnect/reconnect/useCallback', { sdk: sdk });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connect({
                            userId: userId,
                            appId: appId,
                            accessToken: accessToken,
                            logger: logger,
                            nickname: nickname,
                            profileUrl: profileUrl,
                            configureSession: configureSession,
                            customApiHost: customApiHost,
                            customWebSocketHost: customWebSocketHost,
                            sdk: sdk,
                            sdkDispatcher: sdkDispatcher,
                            userDispatcher: userDispatcher,
                            appInfoDispatcher: appInfoDispatcher,
                            initDashboardConfigs: initDashboardConfigs,
                            isUserIdUsedForNickname: isUserIdUsedForNickname,
                            sdkInitParams: sdkInitParams,
                            customExtensionParams: customExtensionParams,
                            isMobile: isMobile,
                            eventHandlers: eventHandlers,
                            initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
                        })];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'SendbirdProvider | useConnect/reconnect/useCallback', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [sdk]);
    return reconnect;
}

// Logger, pretty much explains it
// in SendbirdProvider
// const [logger, setLogger] = useState(LoggerFactory(logLevel));
var LOG_LEVELS = {
    DEBUG: 'debug',
    WARNING: 'warning',
    ERROR: 'error',
    INFO: 'info',
    ALL: 'all',
};
var colorLog = function (level) {
    switch (level) {
        case LOG_LEVELS.WARNING:
            return ('color: Orange');
        case LOG_LEVELS.ERROR:
            return ('color: Red');
        default:
            return ('color: Gray');
    }
};
var printLog = function (_a) {
    var level = _a.level, title = _a.title, _b = _a.description, description = _b === void 0 ? '' : _b, _c = _a.payload, payload = _c === void 0 ? [] : _c;
    // eslint-disable-next-line no-console
    console.log.apply(console, __spreadArray(["%c SendbirdUIKit | ".concat(level, " | ").concat(new Date().toISOString(), " | ").concat(title, " ").concat(description && '|'), colorLog(level), description], payload, false));
};
var getDefaultLogger = function () { return ({
    info: noop,
    error: noop,
    warning: noop,
}); };
var LoggerFactory = function (lvl, customInterface) {
    var logInterface = printLog;
    var lvlArray = Array.isArray(lvl) ? lvl : [lvl];
    var applyLog = function (lgLvl) { return function (title, description) {
        var payload = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            payload[_i - 2] = arguments[_i];
        }
        return logInterface({
            level: lgLvl,
            title: title,
            description: description,
            payload: payload,
        });
    }; };
    return lvlArray.reduce(function (accumulator, currentLvl) {
        if (currentLvl === LOG_LEVELS.DEBUG || currentLvl === LOG_LEVELS.ALL) {
            return (__assign(__assign({}, accumulator), { info: applyLog(LOG_LEVELS.INFO), error: applyLog(LOG_LEVELS.ERROR), warning: applyLog(LOG_LEVELS.WARNING) }));
        }
        if (currentLvl === LOG_LEVELS.INFO) {
            return (__assign(__assign({}, accumulator), { info: applyLog(LOG_LEVELS.INFO) }));
        }
        if (currentLvl === LOG_LEVELS.ERROR) {
            return (__assign(__assign({}, accumulator), { error: applyLog(LOG_LEVELS.ERROR) }));
        }
        if (currentLvl === LOG_LEVELS.WARNING) {
            return (__assign(__assign({}, accumulator), { warning: applyLog(LOG_LEVELS.WARNING) }));
        }
        return __assign({}, accumulator);
    }, getDefaultLogger());
};
// TODO: Make this to hook, useLogger

var VoiceMessageProvider = function (_a) {
    var children = _a.children;
    return (React__default.createElement(VoicePlayerProvider, null,
        React__default.createElement(VoiceRecorderProvider, null, children)));
};

function uikitConfigMapper(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
    var legacyConfig = _a.legacyConfig, _9 = _a.uikitOptions, uikitOptions = _9 === void 0 ? {} : _9;
    var replyType = legacyConfig.replyType, isMentionEnabled = legacyConfig.isMentionEnabled, isReactionEnabled = legacyConfig.isReactionEnabled, disableUserProfile = legacyConfig.disableUserProfile, isVoiceMessageEnabled = legacyConfig.isVoiceMessageEnabled, isTypingIndicatorEnabledOnChannelList = legacyConfig.isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList = legacyConfig.isMessageReceiptStatusEnabledOnChannelList, showSearchIcon = legacyConfig.showSearchIcon;
    return {
        common: {
            enableUsingDefaultUserProfile: (_c = (_b = uikitOptions.common) === null || _b === void 0 ? void 0 : _b.enableUsingDefaultUserProfile) !== null && _c !== void 0 ? _c : (typeof disableUserProfile === 'boolean' ? !disableUserProfile : undefined),
        },
        groupChannel: {
            enableOgtag: (_d = uikitOptions.groupChannel) === null || _d === void 0 ? void 0 : _d.enableOgtag,
            enableMention: (_f = (_e = uikitOptions.groupChannel) === null || _e === void 0 ? void 0 : _e.enableMention) !== null && _f !== void 0 ? _f : isMentionEnabled,
            enableReactions: (_h = (_g = uikitOptions.groupChannel) === null || _g === void 0 ? void 0 : _g.enableReactions) !== null && _h !== void 0 ? _h : isReactionEnabled,
            enableReactionsSupergroup: (_j = uikitOptions.groupChannel) === null || _j === void 0 ? void 0 : _j.enableReactionsSupergroup,
            enableTypingIndicator: (_k = uikitOptions.groupChannel) === null || _k === void 0 ? void 0 : _k.enableTypingIndicator,
            enableVoiceMessage: (_m = (_l = uikitOptions.groupChannel) === null || _l === void 0 ? void 0 : _l.enableVoiceMessage) !== null && _m !== void 0 ? _m : isVoiceMessageEnabled,
            replyType: (_p = (_o = uikitOptions.groupChannel) === null || _o === void 0 ? void 0 : _o.replyType) !== null && _p !== void 0 ? _p : (replyType != null ? getCaseResolvedReplyType(replyType).lowerCase : undefined),
            threadReplySelectType: (_q = uikitOptions.groupChannel) === null || _q === void 0 ? void 0 : _q.threadReplySelectType,
            input: {
                enableDocument: (_s = (_r = uikitOptions.groupChannel) === null || _r === void 0 ? void 0 : _r.input) === null || _s === void 0 ? void 0 : _s.enableDocument,
            },
            typingIndicatorTypes: (_t = uikitOptions.groupChannel) === null || _t === void 0 ? void 0 : _t.typingIndicatorTypes,
            enableFeedback: (_u = uikitOptions.groupChannel) === null || _u === void 0 ? void 0 : _u.enableFeedback,
            enableSuggestedReplies: (_v = uikitOptions.groupChannel) === null || _v === void 0 ? void 0 : _v.enableSuggestedReplies,
            showSuggestedRepliesFor: (_w = uikitOptions.groupChannel) === null || _w === void 0 ? void 0 : _w.showSuggestedRepliesFor,
            suggestedRepliesDirection: (_x = uikitOptions.groupChannel) === null || _x === void 0 ? void 0 : _x.suggestedRepliesDirection,
            enableMarkdownForUserMessage: (_y = uikitOptions.groupChannel) === null || _y === void 0 ? void 0 : _y.enableMarkdownForUserMessage,
            enableFormTypeMessage: (_z = uikitOptions.groupChannel) === null || _z === void 0 ? void 0 : _z.enableFormTypeMessage,
        },
        groupChannelList: {
            enableTypingIndicator: (_1 = (_0 = uikitOptions.groupChannelList) === null || _0 === void 0 ? void 0 : _0.enableTypingIndicator) !== null && _1 !== void 0 ? _1 : isTypingIndicatorEnabledOnChannelList,
            enableMessageReceiptStatus: (_3 = (_2 = uikitOptions.groupChannelList) === null || _2 === void 0 ? void 0 : _2.enableMessageReceiptStatus) !== null && _3 !== void 0 ? _3 : isMessageReceiptStatusEnabledOnChannelList,
        },
        groupChannelSettings: {
            enableMessageSearch: (_5 = (_4 = uikitOptions.groupChannelSettings) === null || _4 === void 0 ? void 0 : _4.enableMessageSearch) !== null && _5 !== void 0 ? _5 : showSearchIcon,
        },
        openChannel: {
            enableOgtag: (_6 = uikitOptions.openChannel) === null || _6 === void 0 ? void 0 : _6.enableOgtag,
            input: {
                enableDocument: (_8 = (_7 = uikitOptions.openChannel) === null || _7 === void 0 ? void 0 : _7.input) === null || _8 === void 0 ? void 0 : _8.enableDocument,
            },
        },
    };
}

function useMarkAsReadScheduler(_a, _b) {
    var isConnected = _a.isConnected;
    var logger = _b.logger;
    var markAsReadScheduler = useMemo(function () { return schedulerFactory({
        logger: logger,
        cb: function (channel) {
            try {
                channel.markAsRead();
            }
            catch (error) {
                logger.warning('Channel: Mark as delivered failed', { channel: channel, error: error });
            }
        },
    }); }, []);
    useEffect(function () {
        // for simplicity, we clear the queue when the connection is lost
        if (!isConnected) {
            markAsReadScheduler.clear();
        }
    }, [isConnected]);
    useUnmount(function () { markAsReadScheduler.clear(); });
    return markAsReadScheduler;
}

var uikitConfigStorage = {
    getItem: function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : null];
            });
        });
    },
    setItem: function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, localStorage.setItem(key, value)];
            });
        });
    },
};

/**
 * Takes JSON parsed template and then returns processed message template for storing it in global state.
 */
var getProcessedTemplate = function (parsedTemplate) {
    return {
        version: Number(parsedTemplate.ui_template.version),
        uiTemplate: JSON.stringify(parsedTemplate.ui_template.body.items),
        colorVariables: parsedTemplate.color_variables,
    };
};
var getProcessedTemplatesMap = function (parsedTemplates) {
    var processedTemplates = {};
    parsedTemplates.forEach(function (template) {
        processedTemplates[template.key] = getProcessedTemplate(template);
    });
    return processedTemplates;
};

var MESSAGE_TEMPLATES_FETCH_LIMIT = 20;
var INITIALIZE_MESSAGE_TEMPLATES_INFO = APP_INFO_ACTIONS.INITIALIZE_MESSAGE_TEMPLATES_INFO, UPSERT_MESSAGE_TEMPLATES = APP_INFO_ACTIONS.UPSERT_MESSAGE_TEMPLATES, UPSERT_WAITING_TEMPLATE_KEYS = APP_INFO_ACTIONS.UPSERT_WAITING_TEMPLATE_KEYS, MARK_ERROR_WAITING_TEMPLATE_KEYS = APP_INFO_ACTIONS.MARK_ERROR_WAITING_TEMPLATE_KEYS;
function useMessageTemplateUtils(_a) {
    var _this = this;
    var sdk = _a.sdk, logger = _a.logger, appInfoStore = _a.appInfoStore, appInfoDispatcher = _a.appInfoDispatcher;
    var messageTemplatesInfo = appInfoStore === null || appInfoStore === void 0 ? void 0 : appInfoStore.messageTemplatesInfo;
    var getCachedTemplate = function (key) {
        var _a, _b;
        if (!messageTemplatesInfo)
            return null;
        var cachedTemplate = null;
        var cachedMessageTemplates = (_a = messageTemplatesInfo === null || messageTemplatesInfo === void 0 ? void 0 : messageTemplatesInfo.templatesMap) !== null && _a !== void 0 ? _a : null;
        if (cachedMessageTemplates) {
            cachedTemplate = (_b = cachedMessageTemplates[key]) !== null && _b !== void 0 ? _b : null;
        }
        return cachedTemplate;
    };
    /**
     * Fetches a single message template by given key and then
     * returns processed template for updating templates info in global state.
     * If no such templates exists (error) or any error occurs in response, return null.
     */
    var fetchAllMessageTemplates = function (readySdk) { return __awaiter(_this, void 0, void 0, function () {
        var hasMore, paginationToken, fetchedTemplates, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hasMore = true;
                    paginationToken = null;
                    fetchedTemplates = [];
                    _a.label = 1;
                case 1:
                    if (!hasMore) return [3 /*break*/, 3];
                    return [4 /*yield*/, readySdk.message.getMessageTemplatesByToken(paginationToken, { limit: MESSAGE_TEMPLATES_FETCH_LIMIT })];
                case 2:
                    res = _a.sent();
                    hasMore = res.hasMore;
                    paginationToken = res.token;
                    res.templates.forEach(function (messageTemplate) {
                        fetchedTemplates.push(JSON.parse(messageTemplate.template));
                    });
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, fetchedTemplates];
            }
        });
    }); };
    var initializeMessageTemplatesInfo = function (readySdk) { return __awaiter(_this, void 0, void 0, function () {
        var sdkMessageTemplateToken, cachedMessageTemplatesToken, cachedMessageTemplates, parsedTemplates, newMessageTemplatesInfo, parsedTemplates, newMessageTemplatesInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sdkMessageTemplateToken = (_a = readySdk.appInfo) === null || _a === void 0 ? void 0 : _a.messageTemplateInfo.token;
                    /**
                     * no sdkMessageTemplateToken => no templates => clear cached
                     */
                    if (!sdkMessageTemplateToken) {
                        localStorage.removeItem(CACHED_MESSAGE_TEMPLATES_TOKEN_KEY);
                        localStorage.removeItem(CACHED_MESSAGE_TEMPLATES_KEY);
                        return [2 /*return*/];
                    }
                    cachedMessageTemplatesToken = localStorage.getItem(CACHED_MESSAGE_TEMPLATES_TOKEN_KEY);
                    cachedMessageTemplates = localStorage.getItem(CACHED_MESSAGE_TEMPLATES_KEY);
                    if (!(!cachedMessageTemplatesToken
                        || cachedMessageTemplatesToken !== sdkMessageTemplateToken)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchAllMessageTemplates(readySdk)];
                case 1:
                    parsedTemplates = _b.sent();
                    newMessageTemplatesInfo = {
                        token: sdkMessageTemplateToken,
                        templatesMap: getProcessedTemplatesMap(parsedTemplates),
                    };
                    appInfoDispatcher({ type: INITIALIZE_MESSAGE_TEMPLATES_INFO, payload: newMessageTemplatesInfo });
                    localStorage.setItem(CACHED_MESSAGE_TEMPLATES_TOKEN_KEY, sdkMessageTemplateToken);
                    localStorage.setItem(CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify(parsedTemplates));
                    return [3 /*break*/, 3];
                case 2:
                    if (cachedMessageTemplatesToken
                        && cachedMessageTemplatesToken === sdkMessageTemplateToken
                        && cachedMessageTemplates) {
                        parsedTemplates = JSON.parse(cachedMessageTemplates);
                        newMessageTemplatesInfo = {
                            token: sdkMessageTemplateToken,
                            templatesMap: getProcessedTemplatesMap(parsedTemplates),
                        };
                        appInfoDispatcher({ type: INITIALIZE_MESSAGE_TEMPLATES_INFO, payload: newMessageTemplatesInfo });
                    }
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    /**
     * If given message is a template message with template key and if the key does not exist in the cache,
     * update the cache by fetching the template.
     */
    var updateMessageTemplatesInfo = function (templateKeys, messageId, requestedAt) { return __awaiter(_this, void 0, void 0, function () {
        var newParsedTemplates_1, hasMore, token, result, e_1, cachedMessageTemplates, parsedTemplates_1, existingKeys_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!appInfoDispatcher) return [3 /*break*/, 7];
                    appInfoDispatcher({
                        type: UPSERT_WAITING_TEMPLATE_KEYS,
                        payload: {
                            keys: templateKeys,
                            requestedAt: requestedAt,
                        },
                    });
                    newParsedTemplates_1 = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    hasMore = true;
                    token = null;
                    _b.label = 2;
                case 2:
                    if (!hasMore) return [3 /*break*/, 4];
                    return [4 /*yield*/, sdk.message.getMessageTemplatesByToken(token, {
                            keys: templateKeys,
                        })];
                case 3:
                    result = _b.sent();
                    result.templates.forEach(function (newTemplate) {
                        newParsedTemplates_1.push(JSON.parse(newTemplate.template));
                    });
                    hasMore = result.hasMore;
                    token = result.token;
                    return [3 /*break*/, 2];
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'Sendbird | fetchProcessedMessageTemplates failed', e_1, templateKeys);
                    return [3 /*break*/, 6];
                case 6:
                    if (newParsedTemplates_1.length > 0) {
                        cachedMessageTemplates = localStorage.getItem(CACHED_MESSAGE_TEMPLATES_KEY);
                        if (cachedMessageTemplates) {
                            parsedTemplates_1 = JSON.parse(cachedMessageTemplates);
                            existingKeys_1 = parsedTemplates_1.map(function (parsedTemplate) { return parsedTemplate.key; });
                            newParsedTemplates_1.forEach(function (newParsedTemplate) {
                                if (!existingKeys_1.includes(newParsedTemplate.key)) {
                                    parsedTemplates_1.push(newParsedTemplate);
                                }
                            });
                            localStorage.setItem(CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify(parsedTemplates_1));
                        }
                        else {
                            localStorage.setItem(CACHED_MESSAGE_TEMPLATES_KEY, JSON.stringify([newParsedTemplates_1]));
                        }
                        // Update memory
                        appInfoDispatcher({
                            type: UPSERT_MESSAGE_TEMPLATES,
                            payload: newParsedTemplates_1.map(function (newParsedTemplate) {
                                return {
                                    key: newParsedTemplate.key,
                                    template: getProcessedTemplate(newParsedTemplate),
                                };
                            }),
                        });
                    }
                    else {
                        appInfoDispatcher({
                            type: MARK_ERROR_WAITING_TEMPLATE_KEYS,
                            payload: {
                                keys: templateKeys,
                                messageId: messageId,
                            },
                        });
                    }
                    _b.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return {
        getCachedTemplate: getCachedTemplate,
        updateMessageTemplatesInfo: updateMessageTemplatesInfo,
        initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
    };
}

var useHTMLTextDirection = function (direction) {
    useEffect(function () {
        /**
         * It sets the 'dir' attribute of the closest parent <div> element of the element with VOICE_PLAYER_ROOT_ID cause:
         * - An empty <div> element is created in the VoiceMessageProvider, which is the highest-level <div> element within the SendbirdProvider.
         * - It tries to find the nearest parent <div> element within the SendbirdProvider and sets 'dir' attribute,
         * ensuring that the directionality is applied correctly.
         * */
        var targetElement = document.getElementById(VOICE_PLAYER_ROOT_ID);
        targetElement.parentElement.dir = direction;
    }, [direction]);
};

function SendbirdProvider(props) {
    var localConfigs = uikitConfigMapper({
        legacyConfig: {
            replyType: props.replyType,
            isMentionEnabled: props.isMentionEnabled,
            isReactionEnabled: props.isReactionEnabled,
            disableUserProfile: props.disableUserProfile,
            isVoiceMessageEnabled: props.isVoiceMessageEnabled,
            isTypingIndicatorEnabledOnChannelList: props.isTypingIndicatorEnabledOnChannelList,
            isMessageReceiptStatusEnabledOnChannelList: props.isMessageReceiptStatusEnabledOnChannelList,
            showSearchIcon: props.showSearchIcon,
        },
        uikitOptions: props.uikitOptions,
    });
    return (React__default.createElement(UIKitConfigProvider, { storage: uikitConfigStorage, localConfigs: {
            common: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.common,
            groupChannel: {
                channel: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannel,
                channelList: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannelList,
                setting: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.groupChannelSettings,
            },
            openChannel: {
                channel: localConfigs === null || localConfigs === void 0 ? void 0 : localConfigs.openChannel,
            },
        } },
        React__default.createElement(SendbirdSDK, __assign({}, props))));
}
var SendbirdSDK = function (_a) {
    var _b, _c, _d;
    var appId = _a.appId, userId = _a.userId, children = _a.children, accessToken = _a.accessToken, customApiHost = _a.customApiHost, customWebSocketHost = _a.customWebSocketHost, configureSession = _a.configureSession, _e = _a.theme, theme = _e === void 0 ? 'light' : _e, _f = _a.config, config = _f === void 0 ? {} : _f, _g = _a.nickname, nickname = _g === void 0 ? '' : _g, colorSet = _a.colorSet, stringSet = _a.stringSet, dateLocale = _a.dateLocale, _h = _a.profileUrl, profileUrl = _h === void 0 ? '' : _h, voiceRecord = _a.voiceRecord, userListQuery = _a.userListQuery, _j = _a.imageCompression, imageCompression = _j === void 0 ? {} : _j, _k = _a.allowProfileEdit, allowProfileEdit = _k === void 0 ? false : _k, _l = _a.disableMarkAsDelivered, disableMarkAsDelivered = _l === void 0 ? false : _l, renderUserProfile = _a.renderUserProfile, _onUserProfileMessage = _a.onUserProfileMessage, _onStartDirectMessage = _a.onStartDirectMessage, _m = _a.breakpoint, breakpoint = _m === void 0 ? false : _m, _o = _a.isUserIdUsedForNickname, isUserIdUsedForNickname = _o === void 0 ? true : _o, sdkInitParams = _a.sdkInitParams, customExtensionParams = _a.customExtensionParams, _p = _a.isMultipleFilesMessageEnabled, isMultipleFilesMessageEnabled = _p === void 0 ? false : _p, eventHandlers = _a.eventHandlers, _q = _a.htmlTextDirection, htmlTextDirection = _q === void 0 ? 'ltr' : _q, _r = _a.forceLeftToRightMessageLayout, forceLeftToRightMessageLayout = _r === void 0 ? false : _r;
    var onStartDirectMessage = _onStartDirectMessage !== null && _onStartDirectMessage !== void 0 ? _onStartDirectMessage : _onUserProfileMessage;
    var _s = config.logLevel, logLevel = _s === void 0 ? '' : _s, _t = config.userMention, userMention = _t === void 0 ? {} : _t, _u = config.isREMUnitEnabled, isREMUnitEnabled = _u === void 0 ? false : _u, customPubSub = config.pubSub;
    var isMobile = useMediaQueryContext().isMobile;
    var _v = useState(LoggerFactory(logLevel)), logger = _v[0], setLogger = _v[1];
    var pubSub = useState(function () { return customPubSub !== null && customPubSub !== void 0 ? customPubSub : pubSubFactory(); })[0];
    var _w = useReducer(reducer$2, initialState$2), sdkStore = _w[0], sdkDispatcher = _w[1];
    var _x = useReducer(reducer$1, initialState$1), userStore = _x[0], userDispatcher = _x[1];
    var _y = useReducer(reducer, initialState), appInfoStore = _y[0], appInfoDispatcher = _y[1];
    var _z = useUIKitConfig(), configs = _z.configs, configsWithAppAttr = _z.configsWithAppAttr, initDashboardConfigs = _z.initDashboardConfigs;
    var sdkInitialized = sdkStore.initialized;
    var sdk = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.sdk;
    var _0 = (_b = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) !== null && _b !== void 0 ? _b : {}, uploadSizeLimit = _0.uploadSizeLimit, multipleFilesMessageFileCountLimit = _0.multipleFilesMessageFileCountLimit;
    useTheme(colorSet);
    var _1 = useMessageTemplateUtils({
        sdk: sdk,
        logger: logger,
        appInfoStore: appInfoStore,
        appInfoDispatcher: appInfoDispatcher,
    }), getCachedTemplate = _1.getCachedTemplate, updateMessageTemplatesInfo = _1.updateMessageTemplatesInfo, initializeMessageTemplatesInfo = _1.initializeMessageTemplatesInfo;
    var utils = {
        updateMessageTemplatesInfo: updateMessageTemplatesInfo,
        getCachedTemplate: getCachedTemplate,
    };
    var reconnect = useConnect({
        appId: appId,
        userId: userId,
        accessToken: accessToken,
        isUserIdUsedForNickname: isUserIdUsedForNickname,
        isMobile: isMobile,
    }, {
        logger: logger,
        nickname: nickname,
        profileUrl: profileUrl,
        configureSession: configureSession,
        customApiHost: customApiHost,
        customWebSocketHost: customWebSocketHost,
        sdkInitParams: sdkInitParams,
        customExtensionParams: customExtensionParams,
        sdk: sdk,
        sdkDispatcher: sdkDispatcher,
        userDispatcher: userDispatcher,
        appInfoDispatcher: appInfoDispatcher,
        initDashboardConfigs: initDashboardConfigs,
        eventHandlers: eventHandlers,
        initializeMessageTemplatesInfo: initializeMessageTemplatesInfo,
    });
    useUnmount(function () {
        if (typeof sdk.disconnect === 'function') {
            disconnectSdk({
                logger: logger,
                sdkDispatcher: sdkDispatcher,
                userDispatcher: userDispatcher,
                sdk: sdk,
            });
        }
    }, [sdk.disconnectWebSocket]);
    // to create a pubsub to communicate between parent and child
    useEffect(function () {
        setLogger(LoggerFactory(logLevel));
    }, [logLevel]);
    // should move to reducer
    var _2 = useState(theme), currentTheme = _2[0], setCurrentTheme = _2[1];
    useEffect(function () {
        setCurrentTheme(theme);
    }, [theme]);
    useEffect(function () {
        var body = document.querySelector('body');
        body === null || body === void 0 ? void 0 : body.classList.remove('sendbird-experimental__rem__units');
        if (isREMUnitEnabled) {
            body === null || body === void 0 ? void 0 : body.classList.add('sendbird-experimental__rem__units');
        }
    }, [isREMUnitEnabled]);
    // add-remove theme from body
    useEffect(function () {
        logger.info('Setup theme', "Theme: ".concat(currentTheme));
        try {
            var body = document.querySelector('body');
            body === null || body === void 0 ? void 0 : body.classList.remove('sendbird-theme--light');
            body === null || body === void 0 ? void 0 : body.classList.remove('sendbird-theme--dark');
            body === null || body === void 0 ? void 0 : body.classList.add("sendbird-theme--".concat(currentTheme || 'light'));
            logger.info('Finish setup theme');
            // eslint-disable-next-line no-empty
        }
        catch (e) {
            logger.warning('Setup theme failed', "".concat(e));
        }
        return function () {
            try {
                var body = document.querySelector('body');
                body === null || body === void 0 ? void 0 : body.classList.remove('sendbird-theme--light');
                body === null || body === void 0 ? void 0 : body.classList.remove('sendbird-theme--dark');
                // eslint-disable-next-line no-empty
            }
            catch (_a) { }
        };
    }, [currentTheme]);
    useHTMLTextDirection(htmlTextDirection);
    var isOnline = useOnlineStatus(sdkStore.sdk, logger);
    var markAsReadScheduler = useMarkAsReadScheduler({ isConnected: isOnline }, { logger: logger });
    var markAsDeliveredScheduler = useMarkAsDeliveredScheduler({ isConnected: isOnline }, { logger: logger });
    var localeStringSet = React__default.useMemo(function () {
        return __assign(__assign({}, getStringSet('en')), stringSet);
    }, [stringSet]);
    /**
     * Feature Configuration - TODO
     * This will be moved into the UIKitConfigProvider, aftering Dashboard applies
     */
    var uikitMultipleFilesMessageLimit = useMemo(function () {
        return Math.min(DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT, multipleFilesMessageFileCountLimit !== null && multipleFilesMessageFileCountLimit !== void 0 ? multipleFilesMessageFileCountLimit : Number.MAX_SAFE_INTEGER);
    }, [multipleFilesMessageFileCountLimit]);
    // Emoji Manager
    var emojiManager = useMemo(function () {
        return new EmojiManager({
            sdk: sdk,
            logger: logger,
        });
    }, [sdkStore.initialized]);
    return (React__default.createElement(SendbirdSdkContext.Provider, { value: {
            stores: {
                sdkStore: sdkStore,
                userStore: userStore,
                appInfoStore: appInfoStore,
            },
            dispatchers: {
                sdkDispatcher: sdkDispatcher,
                userDispatcher: userDispatcher,
                appInfoDispatcher: appInfoDispatcher,
                reconnect: reconnect,
            },
            config: {
                disableMarkAsDelivered: disableMarkAsDelivered,
                renderUserProfile: renderUserProfile,
                onStartDirectMessage: onStartDirectMessage,
                onUserProfileMessage: onStartDirectMessage, // legacy of onStartDirectMessage
                allowProfileEdit: allowProfileEdit,
                isOnline: isOnline,
                userId: userId,
                appId: appId,
                accessToken: accessToken,
                theme: currentTheme,
                setCurrentTheme: setCurrentTheme,
                setCurrenttheme: setCurrentTheme, // deprecated: typo
                isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
                uikitUploadSizeLimit: uploadSizeLimit !== null && uploadSizeLimit !== void 0 ? uploadSizeLimit : DEFAULT_UPLOAD_SIZE_LIMIT,
                uikitMultipleFilesMessageLimit: uikitMultipleFilesMessageLimit,
                userListQuery: userListQuery,
                logger: logger,
                pubSub: pubSub,
                imageCompression: __assign({ compressionRate: 0.7, outputFormat: 'preserve' }, imageCompression),
                voiceRecord: {
                    maxRecordingTime: (_c = voiceRecord === null || voiceRecord === void 0 ? void 0 : voiceRecord.maxRecordingTime) !== null && _c !== void 0 ? _c : VOICE_RECORDER_DEFAULT_MAX,
                    minRecordingTime: (_d = voiceRecord === null || voiceRecord === void 0 ? void 0 : voiceRecord.minRecordingTime) !== null && _d !== void 0 ? _d : VOICE_RECORDER_DEFAULT_MIN,
                },
                userMention: {
                    maxMentionCount: (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10,
                    maxSuggestionCount: (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15,
                },
                markAsReadScheduler: markAsReadScheduler,
                markAsDeliveredScheduler: markAsDeliveredScheduler,
                // Remote configs set from dashboard by UIKit feature configuration
                common: configs.common,
                groupChannel: {
                    enableOgtag: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableOgtag,
                    enableTypingIndicator: configs.groupChannel.channel.enableTypingIndicator,
                    enableReactions: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactions,
                    enableMention: configs.groupChannel.channel.enableMention,
                    replyType: configs.groupChannel.channel.replyType,
                    threadReplySelectType: configs.groupChannel.channel.threadReplySelectType,
                    enableVoiceMessage: configs.groupChannel.channel.enableVoiceMessage,
                    enableDocument: configs.groupChannel.channel.input.enableDocument,
                    typingIndicatorTypes: configs.groupChannel.channel.typingIndicatorTypes,
                    enableFeedback: configs.groupChannel.channel.enableFeedback,
                    enableSuggestedReplies: configs.groupChannel.channel.enableSuggestedReplies,
                    showSuggestedRepliesFor: configs.groupChannel.channel.showSuggestedRepliesFor,
                    suggestedRepliesDirection: configs.groupChannel.channel.suggestedRepliesDirection,
                    enableMarkdownForUserMessage: configs.groupChannel.channel.enableMarkdownForUserMessage,
                    enableFormTypeMessage: configs.groupChannel.channel.enableFormTypeMessage,
                    enableReactionsSupergroup: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactionsSupergroup,
                },
                groupChannelList: {
                    enableTypingIndicator: configs.groupChannel.channelList.enableTypingIndicator,
                    enableMessageReceiptStatus: configs.groupChannel.channelList.enableMessageReceiptStatus,
                },
                groupChannelSettings: {
                    enableMessageSearch: sdkInitialized && configsWithAppAttr(sdk).groupChannel.setting.enableMessageSearch,
                },
                openChannel: {
                    enableOgtag: sdkInitialized && configsWithAppAttr(sdk).openChannel.channel.enableOgtag,
                    enableDocument: configs.openChannel.channel.input.enableDocument,
                },
                // deprecated configs
                disableUserProfile: !configs.common.enableUsingDefaultUserProfile,
                isReactionEnabled: sdkInitialized && configsWithAppAttr(sdk).groupChannel.channel.enableReactions,
                isMentionEnabled: configs.groupChannel.channel.enableMention,
                isVoiceMessageEnabled: configs.groupChannel.channel.enableVoiceMessage,
                replyType: getCaseResolvedReplyType(configs.groupChannel.channel.replyType).upperCase,
                isTypingIndicatorEnabledOnChannelList: configs.groupChannel.channelList.enableTypingIndicator,
                isMessageReceiptStatusEnabledOnChannelList: configs.groupChannel.channelList.enableMessageReceiptStatus,
                showSearchIcon: sdkInitialized && configsWithAppAttr(sdk).groupChannel.setting.enableMessageSearch,
                htmlTextDirection: htmlTextDirection,
                forceLeftToRightMessageLayout: forceLeftToRightMessageLayout,
            },
            eventHandlers: eventHandlers,
            emojiManager: emojiManager,
            utils: utils,
        } },
        React__default.createElement(MediaQueryProvider, { logger: logger, breakpoint: breakpoint },
            React__default.createElement(LocalizationProvider, { stringSet: localeStringSet, dateLocale: dateLocale },
                React__default.createElement(VoiceMessageProvider, null,
                    React__default.createElement(GlobalModalProvider, null, children)))),
        React__default.createElement(EmojiReactionListRoot, null),
        React__default.createElement(ModalRoot, null),
        React__default.createElement(MenuRoot, null)));
};

export { SendbirdProvider, SendbirdProvider as default };
//# sourceMappingURL=SendbirdProvider.js.map
