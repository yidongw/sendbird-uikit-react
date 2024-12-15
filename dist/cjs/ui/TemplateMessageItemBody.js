'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var index = require('../chunks/bundle-e2d_I3io.js');
var ui_MessageTemplate = require('../chunks/bundle-TKyDCiE_.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var ui_FallbackTemplateMessageItemBody_tsx = require('./FallbackTemplateMessageItemBody.tsx.js');
var ui_LoadingTemplateMessageItemBody_tsx = require('./LoadingTemplateMessageItemBody.tsx.js');
var consts = require('../chunks/bundle-C0tdWwa4.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../withSendbird.js');
require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-D8-2bEdY.js');
require('./Loader.js');
require('./Icon.js');
require('../chunks/bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MessageTemplateWrapper = function (_a) {
    var message = _a.message, templateVersion = _a.templateVersion, templateItems = _a.templateItems;
    return React__default.default.createElement(ui_MessageTemplate.MessageProvider, { message: message },
        React__default.default.createElement(ui_MessageTemplate.MessageTemplate, { templateVersion: templateVersion, templateItems: templateItems }));
};

var splitColorVariables = function (colorVariables) {
    var light = {};
    var dark = {};
    for (var key in colorVariables) {
        if (Object.prototype.hasOwnProperty.call(colorVariables, key)) {
            var value = colorVariables[key];
            if (typeof value === 'object' && value !== null) {
                var _a = splitColorVariables(value), nestedLight = _a[0], nestedDark = _a[1];
                light[key] = nestedLight;
                dark[key] = nestedDark;
            }
            else if (typeof value === 'string') {
                var _b = value.split(','), lightColor = _b[0], darkColor = _b[1];
                light[key] = lightColor;
                dark[key] = darkColor || lightColor; // when dark color is not provided, use light color
            }
            else {
                light[key] = value;
                dark[key] = value;
            }
        }
    }
    return [light, dark];
};
function selectColorVariablesByTheme(_a) {
    var colorVariables = _a.colorVariables, theme = _a.theme;
    var _b = splitColorVariables(colorVariables), light = _b[0], dark = _b[1];
    return theme === 'light' ? light : dark;
}

var MessageTemplateErrorBoundary = /** @class */ (function (_super) {
    _tslib.__extends(MessageTemplateErrorBoundary, _super);
    function MessageTemplateErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MessageTemplateErrorBoundary.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MessageTemplateErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        var _a;
        (_a = this.props.logger) === null || _a === void 0 ? void 0 : _a.error('Error caught by ErrorBoundary: ', error, errorInfo);
    };
    MessageTemplateErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            return this.props.fallbackMessage;
        }
        return this.props.children;
    };
    return MessageTemplateErrorBoundary;
}(React.Component));

var flattenObjectHelper = function (currentObject, flattenObject, parentKeyPath) {
    if (parentKeyPath === void 0) { parentKeyPath = ''; }
    for (var _i = 0, _a = Object.entries(currentObject); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var currentKeyPath = parentKeyPath ? "".concat(parentKeyPath, ".").concat(key) : key;
        if (value && typeof value === 'object') {
            flattenObjectHelper(value, flattenObject, currentKeyPath);
        }
        else {
            flattenObject[currentKeyPath] = value;
        }
    }
};
/**
 * Returns flattened object.
 * ex.
 * given { key-1: { key-1.1: 'value-1.1' }, key-2: 'value-2' }
 * returns { key-1.key-1.1: 'value-1.1', key-2: 'value-2' }
 */
function flattenObject(object) {
    var result = {};
    flattenObjectHelper(object, result);
    return result;
}

var TEMPLATE_FETCH_RETRY_BUFFER_TIME_IN_MILLIES = 500; // It takes about 450ms for isError update
var replaceVariablesInTemplateString = function (_a) {
    var template = _a.template, _b = _a.templateData, templateData = _b === void 0 ? {} : _b, colorVariables = _a.colorVariables, theme = _a.theme;
    var selectedThemeColorVariables = {};
    if (colorVariables && theme) {
        selectedThemeColorVariables = selectColorVariablesByTheme({
            colorVariables: colorVariables,
            theme: theme,
        });
    }
    var source = _tslib.__assign(_tslib.__assign({}, templateData), selectedThemeColorVariables);
    var flattenedSource = flattenObject(source);
    var replaced = template;
    Object.entries(flattenedSource).forEach(function (_a) {
        var key = _a[0], val = _a[1];
        var pattern = "\\{".concat(key, "\\}");
        var regex = new RegExp(pattern, 'g');
        replaced = replaced.replace(regex, val);
    });
    return replaced;
};
function TemplateMessageItemBody(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message, _d = _a.isByMe, isByMe = _d === void 0 ? false : _d, _e = _a.theme, theme = _e === void 0 ? 'light' : _e;
    var templateData = (_b = message.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b[consts.MESSAGE_TEMPLATE_KEY];
    var getFailedBody = function () {
        return React__default.default.createElement(ui_FallbackTemplateMessageItemBody_tsx.FallbackTemplateMessageItemBody, { className: className, message: message, isByMe: isByMe });
    };
    if (!(templateData === null || templateData === void 0 ? void 0 : templateData.key)) {
        return getFailedBody();
    }
    var templateKey = templateData.key;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    if (!globalState) {
        return getFailedBody();
    }
    var logger = globalState.config.logger;
    var _f = globalState.utils, getCachedTemplate = _f.getCachedTemplate, updateMessageTemplatesInfo = _f.updateMessageTemplatesInfo;
    var waitingTemplateKeysMap = globalState.stores.appInfoStore.waitingTemplateKeysMap;
    var waitingTemplateKeysMapString = Object.entries(waitingTemplateKeysMap)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, value.requestedAt, value.erroredMessageIds.join(',')].join('-');
    }).join('_');
    var _g = React.useState(getFilledMessageTemplateItems()), renderData = _g[0], setRenderData = _g[1];
    function findSubstrings(input, matchString) {
        var indices = [];
        var startIndex = 0;
        while ((startIndex = input.indexOf(matchString, startIndex)) !== -1) {
            indices.push({ start: startIndex, end: startIndex + matchString.length });
            startIndex += matchString.length;
        }
        return indices;
    }
    function replaceAtIndices(input, indices, replacement) {
        var result = '';
        var lastIndex = 0;
        indices.forEach(function (_a) {
            var start = _a.start, end = _a.end;
            result += input.slice(lastIndex, start) + replacement;
            lastIndex = end;
        });
        // Add any remaining part of the string after the last match
        result += input.slice(lastIndex);
        return result;
    }
    function replaceReservationKeys(templateString, reservationKey, replacement) {
        var indices = findSubstrings(templateString, reservationKey);
        return replaceAtIndices(templateString, indices, replacement);
    }
    /**
     * Returns filled rootTemplate. Given rootTemplate,
     * 1. replace any reservation key with matching cached template,
     * 2. fill variables and view_variables.
     *
     * Assume below facts:
     * - carousel type template cannot have a carousel typed template in any
     * depth of items.
     * - However, box type template can have a carousel typed template in any
     * depth of items.
     *
     * @param rootTemplate
     */
    function getFilledRootTemplate(rootTemplate) {
        var rootTemplateString = replaceVariablesInTemplateString({
            template: rootTemplate.uiTemplate,
            templateData: templateData.variables,
            colorVariables: rootTemplate.colorVariables,
            theme: theme,
        });
        if (templateData.view_variables) {
            var reservationKeyToItems_1 = {};
            Object.entries(templateData.view_variables).forEach(function (_a) {
                var reservationKey = _a[0], simpleTemplateDataList = _a[1];
                var filledSimpleTemplates = [];
                simpleTemplateDataList.forEach(function (simpleTemplateData) {
                    var simpleTemplateKey = simpleTemplateData === null || simpleTemplateData === void 0 ? void 0 : simpleTemplateData.key;
                    if (simpleTemplateKey) {
                        var cachedTemplate = getCachedTemplate(simpleTemplateKey);
                        if (!cachedTemplate) {
                            logger.error('TemplateMessageItemBody | simple template is expected to be cached: ', simpleTemplateKey);
                        }
                        var items = replaceVariablesInTemplateString({
                            template: cachedTemplate.uiTemplate,
                            templateData: simpleTemplateData.variables,
                            colorVariables: cachedTemplate.colorVariables,
                            theme: theme,
                        });
                        filledSimpleTemplates.push({
                            version: cachedTemplate.version,
                            body: {
                                items: JSON.parse(items),
                            },
                        });
                        reservationKeyToItems_1[reservationKey] = JSON.stringify(filledSimpleTemplates);
                    }
                });
            });
            Object.entries(reservationKeyToItems_1).forEach(function (_a) {
                var reservationKey = _a[0], filledSimpleTemplates = _a[1];
                rootTemplateString = replaceReservationKeys(rootTemplateString, "\"@{".concat(reservationKey, "}\""), filledSimpleTemplates);
            });
        }
        return JSON.parse(rootTemplateString);
    }
    function getFilledMessageTemplateItems() {
        var result = {
            filledMessageTemplateItemsList: [],
            isErrored: false,
        };
        var nonCachedTemplateKeys = [];
        var cachedTemplate = getCachedTemplate(templateKey);
        if (!cachedTemplate) {
            nonCachedTemplateKeys.push(templateKey);
        }
        if (templateData === null || templateData === void 0 ? void 0 : templateData.view_variables) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(templateData.view_variables).forEach(function (_a) {
                    var _ = _a[0], simpleTemplateDataList = _a[1];
                    simpleTemplateDataList.forEach(function (simpleTemplateData) {
                        var simpleTemplateKey = simpleTemplateData === null || simpleTemplateData === void 0 ? void 0 : simpleTemplateData.key;
                        if (simpleTemplateKey
                            && !getCachedTemplate(simpleTemplateKey)
                            && !nonCachedTemplateKeys.includes(simpleTemplateKey)) {
                            nonCachedTemplateKeys.push(simpleTemplateKey);
                        }
                    });
                });
            }
            catch (e) {
                logger.error('TemplateMessageItemBody | received view_variables is malformed: ', templateData);
                result.isErrored = true;
                return result;
            }
        }
        try {
            if (nonCachedTemplateKeys.length > 0) {
                tryFetchTemplateByKey(nonCachedTemplateKeys);
            }
            else if (cachedTemplate) {
                var items = getFilledRootTemplate(cachedTemplate);
                result.filledMessageTemplateItemsList.push({
                    version: cachedTemplate.version,
                    items: items,
                });
            }
        }
        catch (e) {
            logger.error('TemplateMessageItemBody | fetching non-cached templates by given template keys failed: ', e);
            result.isErrored = true;
        }
        return result;
    }
    React.useEffect(function () {
        if (!renderData.isErrored && renderData.filledMessageTemplateItemsList.length === 0) {
            var newRenderData = getFilledMessageTemplateItems();
            setRenderData(newRenderData);
        }
    }, [templateData.key, waitingTemplateKeysMapString]);
    /**
     * Attempt GET template by key IFF one of below cases is met:
     * 1. This is the first GET call for the template key.
     * 2. Minimum buffer time has passed since the previous GET error.
     */
    function tryFetchTemplateByKey(templateKeys) {
        if (templateKeys.length > 0) {
            var waitingTemplateKeyDataList_1 = [];
            templateKeys.forEach(function (templateKey) {
                var waitingTemplateKeyData = waitingTemplateKeysMap[templateKey];
                waitingTemplateKeyDataList_1.push([templateKey, waitingTemplateKeyData]);
            });
            var requestedAt_1 = Date.now();
            var keysToUpdate_1 = [];
            waitingTemplateKeyDataList_1.forEach(function (_a) {
                var templateKey = _a[0], waitingTemplateKeyData = _a[1];
                if (!waitingTemplateKeyData
                    || (waitingTemplateKeyData.erroredMessageIds.indexOf(message.messageId) === -1
                        && requestedAt_1 > waitingTemplateKeyData.requestedAt + TEMPLATE_FETCH_RETRY_BUFFER_TIME_IN_MILLIES)) {
                    keysToUpdate_1.push(templateKey);
                }
                else if (waitingTemplateKeyData.erroredMessageIds.indexOf(message.messageId) > -1) {
                    throw new Error("TemplateMessageItemBody | fetching template key ".concat(templateKey, " for messageId: ").concat(message.messageId, " has failed."));
                }
            });
            if (keysToUpdate_1.length > 0) {
                updateMessageTemplatesInfo(keysToUpdate_1, message.messageId, requestedAt_1);
            }
        }
    }
    if (renderData.isErrored) {
        return getFailedBody();
    }
    if (renderData.filledMessageTemplateItemsList.length === 0) {
        return React__default.default.createElement(ui_LoadingTemplateMessageItemBody_tsx.LoadingTemplateMessageItemBody, { className: className, isByMe: isByMe });
    }
    return (React__default.default.createElement("div", { className: index.getClassName([
            className,
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body',
        ]) },
        React__default.default.createElement(MessageTemplateErrorBoundary, { fallbackMessage: React__default.default.createElement(ui_FallbackTemplateMessageItemBody_tsx.FallbackTemplateMessageItemBody, { className: className, message: message, isByMe: isByMe }), logger: logger }, renderData.filledMessageTemplateItemsList.map(function (filledMessageTemplateItem, i) {
            var _a;
            return (React__default.default.createElement(MessageTemplateWrapper, { key: i, message: message, templateVersion: (_a = filledMessageTemplateItem.version) !== null && _a !== void 0 ? _a : 0, templateItems: filledMessageTemplateItem.items }));
        }))));
}

exports.TemplateMessageItemBody = TemplateMessageItemBody;
exports.default = TemplateMessageItemBody;
exports.replaceVariablesInTemplateString = replaceVariablesInTemplateString;
//# sourceMappingURL=TemplateMessageItemBody.js.map
