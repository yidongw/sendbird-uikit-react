'use strict';

var React = require('react');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ComponentType;
(function (ComponentType) {
    ComponentType["Box"] = "box";
    ComponentType["Text"] = "text";
    ComponentType["Image"] = "image";
    ComponentType["TextButton"] = "textButton";
    ComponentType["ImageButton"] = "imageButton";
    ComponentType["Carousel"] = "carouselView";
})(ComponentType || (ComponentType = {}));

const outSingle$1 = (key, obj) => {
    if (typeof obj[key] !== 'string')
        return {};
    return { [key]: argbToRgba(obj[key]) };
};
function argbToRgba(string) {
    if (!string.startsWith('#')) {
        return string;
    }
    if (string.length === 9) {
        return `#${string.slice(3)}${string[1]}${string[2]}`;
    }
    if (string.length === 5) {
        return `#${string.slice(2)}${string[1]}`;
    }
    return string;
}
const outViewStyle$1 = (viewStyle) => {
    if (!viewStyle)
        return {};
    return {
        viewStyle: Object.assign(Object.assign(Object.assign({}, viewStyle), outSingle$1('backgroundColor', viewStyle)), outSingle$1('borderColor', viewStyle)),
    };
};
const outTextStyle$1 = (textStyle) => {
    if (!textStyle)
        return {};
    return {
        textStyle: Object.assign(Object.assign({}, textStyle), outSingle$1('color', textStyle)),
    };
};
const outImageStyle = (imageStyle) => {
    if (!imageStyle)
        return {};
    return {
        imageStyle: Object.assign(Object.assign({}, imageStyle), outSingle$1('tintColor', imageStyle)),
    };
};
const colorTransform = {
    run(prop) {
        if (prop.type === ComponentType.Text || prop.type === ComponentType.TextButton) {
            return Object.assign(Object.assign(Object.assign({}, prop), outViewStyle$1(prop.viewStyle)), outTextStyle$1(prop.textStyle));
        }
        if (prop.type === ComponentType.ImageButton || prop.type === ComponentType.Image) {
            return Object.assign(Object.assign(Object.assign({}, prop), outViewStyle$1(prop.viewStyle)), outImageStyle(prop.imageStyle));
        }
        return Object.assign(Object.assign({}, prop), outViewStyle$1(prop.viewStyle));
    },
};

const isNumber = (val) => {
    if (typeof val === 'string') {
        return !Number.isNaN(Number(val));
    }
    return typeof val === 'number' && !Number.isNaN(val);
};
const outSingle = (key, obj) => {
    if (obj[key] === undefined || obj[key] === null)
        return {};
    return isNumber(obj[key]) ? { [key]: Number(obj[key]) } : {};
};
const outSpacing = (key, spacing) => {
    if (!spacing)
        return {};
    return {
        [key]: {
            left: isNumber(spacing.left) ? Number(spacing.left) : spacing.left,
            right: isNumber(spacing.right) ? Number(spacing.right) : spacing.right,
            top: isNumber(spacing.top) ? Number(spacing.top) : spacing.top,
            bottom: isNumber(spacing.bottom) ? Number(spacing.bottom) : spacing.bottom,
        },
    };
};
const outSize = (key, size) => {
    if (!size)
        return {};
    return {
        [key]: {
            type: size.type,
            value: isNumber(size.value) ? Number(size.value) : size.value,
        },
    };
};
const outMetadata = (metaData) => {
    if (!metaData)
        return {};
    return {
        metaData: {
            pixelWidth: isNumber(metaData.pixelWidth) ? Number(metaData.pixelWidth) : metaData.pixelWidth,
            pixelHeight: isNumber(metaData.pixelHeight) ? Number(metaData.pixelHeight) : metaData.pixelHeight,
        },
    };
};
const outViewStyle = (viewStyle) => {
    if (!viewStyle)
        return {};
    return {
        viewStyle: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, viewStyle), outSingle('borderWidth', viewStyle)), outSingle('radius', viewStyle)), outSpacing('margin', viewStyle.margin)), outSpacing('padding', viewStyle.padding)),
    };
};
const outTextStyle = (textStyle) => {
    if (!textStyle)
        return {};
    return {
        textStyle: Object.assign(Object.assign(Object.assign({}, textStyle), outSingle('size', textStyle)), outSingle('weight', textStyle)),
    };
};
const outCarouselStyle = (carouselstyle) => {
    if (!carouselstyle)
        return {};
    return {
        carouselStyle: Object.assign(Object.assign({}, carouselstyle), outSingle('spacing', carouselstyle)),
    };
};
const outViewProps = (view) => {
    return Object.assign(Object.assign(Object.assign({}, outSize('width', view.width)), outSize('height', view.height)), outViewStyle(view.viewStyle));
};
const outTextProps = (text) => {
    return Object.assign(Object.assign(Object.assign({}, outViewProps(text)), outTextStyle(text.textStyle)), outSingle('maxTextLines', text));
};
const outImageProps = (image) => {
    return Object.assign(Object.assign({}, outViewProps(image)), outMetadata(image.metaData));
};
const outCarouselProps = (carousel) => {
    return Object.assign(Object.assign(Object.assign({}, outViewProps(carousel)), outCarouselStyle(carousel.carouselStyle)), { 
        // Convert only top-level items to find has fill width values.
        items: carousel.items.map((item) => (Object.assign(Object.assign({}, item), { body: Object.assign(Object.assign({}, item.body), { items: item.body.items.map((it) => numberTransform.run(it)) }) }))) });
};
const numberTransform = {
    run(prop) {
        if (prop.type === ComponentType.Text || prop.type === ComponentType.TextButton) {
            return Object.assign(Object.assign({}, prop), outTextProps(prop));
        }
        if (prop.type === ComponentType.ImageButton || prop.type === ComponentType.Image) {
            return Object.assign(Object.assign({}, prop), outImageProps(prop));
        }
        if (prop.type === ComponentType.Carousel) {
            return Object.assign(Object.assign({}, prop), outCarouselProps(prop));
        }
        return Object.assign(Object.assign({}, prop), outViewProps(prop));
    },
};

// -------- Set property mapper
const MAPPER = () => undefined;
const createParser = (params) => {
    var _a;
    const defaultMapper = (params === null || params === void 0 ? void 0 : params.defaultMapper) || MAPPER;
    const mapper = {
        defaultMapper,
        mapBoxProps: (params === null || params === void 0 ? void 0 : params.mapBoxProps) || defaultMapper,
        mapTextProps: (params === null || params === void 0 ? void 0 : params.mapTextProps) || defaultMapper,
        mapImageProps: (params === null || params === void 0 ? void 0 : params.mapImageProps) || defaultMapper,
        mapTextButtonProps: (params === null || params === void 0 ? void 0 : params.mapTextButtonProps) || defaultMapper,
        mapImageButtonProps: (params === null || params === void 0 ? void 0 : params.mapImageButtonProps) || defaultMapper,
        mapCarouselProps: (params === null || params === void 0 ? void 0 : params.mapCarouselProps) || defaultMapper,
    };
    const transforms = [colorTransform, numberTransform, ...((_a = params === null || params === void 0 ? void 0 : params.transforms) !== null && _a !== void 0 ? _a : [])];
    const transformDirty = new Set();
    return {
        setTransforms(newTransforms) {
            transforms.length = 0;
            transforms.push(...newTransforms);
            transformDirty.clear();
        },
        addTransforms(newTransforms) {
            transforms.push(...newTransforms);
        },
        parse(rawItem, options) {
            // Note: it is for mutable transforms
            // const uniqId =
            //   typeof options.depth === 'number' && typeof options.elemIdx === 'number'
            //     ? `id-${options.depth}-${options.elemIdx}`
            //     : rawItem.id ?? rawItem.elementId ?? JSON.stringify(rawItem);
            //
            // let item = rawItem;
            // if (!transformDirty.has(uniqId)) {
            //   item = transforms.reduce((it, transform) => transform(it), rawItem);
            //   transformDirty.add(uniqId);
            // }
            const item = transforms.reduce((it, transform) => transform.run(it), rawItem);
            switch (item.type) {
                case ComponentType.Box: {
                    return { transformed: item, properties: mapper.mapBoxProps(item, options) };
                }
                case ComponentType.Text: {
                    return { transformed: item, properties: mapper.mapTextProps(item, options) };
                }
                case ComponentType.Image: {
                    return { transformed: item, properties: mapper.mapImageProps(item, options) };
                }
                case ComponentType.TextButton: {
                    return { transformed: item, properties: mapper.mapTextButtonProps(item, options) };
                }
                case ComponentType.ImageButton: {
                    return { transformed: item, properties: mapper.mapImageButtonProps(item, options) };
                }
                case ComponentType.Carousel: {
                    return { transformed: item, properties: mapper.mapCarouselProps(item, options) };
                }
                default:
                    return { transformed: item, properties: undefined };
            }
        },
    };
};

const FRAGMENT = ({ children }) => React__default.default.createElement(React__default.default.Fragment, null, children);
function createRenderer(params) {
    var _a, _b, _c, _d, _e, _f;
    return {
        box: ((_a = params === null || params === void 0 ? void 0 : params.views) === null || _a === void 0 ? void 0 : _a.box) || FRAGMENT,
        text: ((_b = params === null || params === void 0 ? void 0 : params.views) === null || _b === void 0 ? void 0 : _b.text) || FRAGMENT,
        image: ((_c = params === null || params === void 0 ? void 0 : params.views) === null || _c === void 0 ? void 0 : _c.image) || FRAGMENT,
        imageButton: ((_d = params === null || params === void 0 ? void 0 : params.views) === null || _d === void 0 ? void 0 : _d.imageButton) || FRAGMENT,
        textButton: ((_e = params === null || params === void 0 ? void 0 : params.views) === null || _e === void 0 ? void 0 : _e.textButton) || FRAGMENT,
        carouselView: ((_f = params === null || params === void 0 ? void 0 : params.views) === null || _f === void 0 ? void 0 : _f.carouselView) || FRAGMENT,
    };
}

var __rest$5 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SizeContext = React.createContext({
    sizes: {},
    updateSize: () => { },
});
const SizeContextProvider = ({ children }) => {
    const [sizes, setSizes] = React.useState({});
    const updateSize = React.useCallback((_a) => {
        var { id } = _a, rest = __rest$5(_a, ["id"]);
        if (id) {
            setSizes((prevSizes) => (Object.assign(Object.assign({}, prevSizes), { [id]: rest })));
        }
    }, []);
    return React__default.default.createElement(SizeContext.Provider, { value: { sizes, updateSize } }, children);
};
const useSizeContext = () => React.useContext(SizeContext);

var Layout;
(function (Layout) {
    Layout["Row"] = "row";
    Layout["Column"] = "column";
})(Layout || (Layout = {}));
var AlignValue;
(function (AlignValue) {
    AlignValue["Center"] = "center";
    AlignValue["Left"] = "left";
    AlignValue["Right"] = "right";
    AlignValue["Top"] = "top";
    AlignValue["Bottom"] = "bottom";
})(AlignValue || (AlignValue = {}));
/**
 * @description
 * Caution: Numbers are passed as string types in the message template builder.
 * Use `==` comparison instead of `===` comparison when using a regular enum instead of a string enum.
 */
var FlexSizeSpecValue;
(function (FlexSizeSpecValue) {
    FlexSizeSpecValue[FlexSizeSpecValue["FillParent"] = 0] = "FillParent";
    FlexSizeSpecValue[FlexSizeSpecValue["WrapContent"] = 1] = "WrapContent";
})(FlexSizeSpecValue || (FlexSizeSpecValue = {}));
var FontWeight;
(function (FontWeight) {
    FontWeight["Normal"] = "normal";
    FontWeight["Bold"] = "bold";
})(FontWeight || (FontWeight = {}));
var MediaContentMode;
(function (MediaContentMode) {
    MediaContentMode["AspectFit"] = "aspectFit";
    MediaContentMode["AspectFill"] = "aspectFill";
    MediaContentMode["ScalesToFill"] = "scalesToFill";
})(MediaContentMode || (MediaContentMode = {}));

const SUPPORTED_TEMPLATE_VERSIONS = [
    1,
    2, // Composite templates: Carousel
];
const alignInFlex = (align) => {
    switch (align) {
        case AlignValue.Right:
        case AlignValue.Bottom:
            return 'flex-end';
        case AlignValue.Center:
            return 'center';
        case AlignValue.Left:
        case AlignValue.Top:
        default:
            return 'flex-start';
    }
};
const isTemplateVersionSupported = (templateVersion) => {
    if (!templateVersion)
        return true;
    return SUPPORTED_TEMPLATE_VERSIONS.includes(Number(templateVersion));
};

const memoize = (fn) => {
    const cache = new Map();
    const cached = function (val) {
        return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
};
/**
 * Generate each item's id by each item's array depth
 */
const setTemplateItemId = memoize((data) => {
    const addIdRecursively = (item, id) => {
        if ('items' in item && (item === null || item === void 0 ? void 0 : item.items) != null) {
            item.items.forEach((subItem, subIdx) => {
                const subId = `${id}-${subIdx}`;
                subItem.id = subId;
                addIdRecursively(subItem, subId);
            });
        }
    };
    data.forEach((item, idx) => {
        const id = `${idx}`;
        item.id = id;
        addIdRecursively(item, id);
    });
    return data;
});

const defaultProperties = {
    rootLayout: Layout.Column,
    view: {
        size: {
            width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
            height: { type: 'flex', value: FlexSizeSpecValue.WrapContent },
        },
    },
    box: {
        layout: Layout.Row,
        align: { vertical: AlignValue.Top, horizontal: AlignValue.Left },
    },
    textButton: {
        maxTextLines: 1,
    },
    carousel: {
        style: {
            spacing: 10,
            maxChildWidth: 240,
        },
    },
};

const createMessageTemplate = (opts) => {
    const Container = opts.Container || React__default.default.Fragment;
    const UnknownMessage = opts.UnknownMessage || (() => null);
    const parser = opts.parser || createParser();
    const renderer = opts.renderer || createRenderer();
    const MessageTemplateBase = ({ templateItems, templateVersion, parentLayout = defaultProperties.box.layout, depth = 0, }) => {
        if (!isTemplateVersionSupported(templateVersion)) {
            throw new Error(`Cannot parse template item due to unsupported template version: ${templateVersion}, ${SUPPORTED_TEMPLATE_VERSIONS}`);
        }
        return (React__default.default.createElement(React__default.default.Fragment, null, templateItems.map((rawItem, index, siblings) => {
            const result = parser.parse(rawItem, { parentLayout, depth, elemIdx: index, siblings });
            const item = result.transformed;
            const rendererProps = {
                key: index,
                siblings,
                parentLayout,
                parsedProperties: result.properties,
            };
            switch (item.type) {
                case ComponentType.Carousel: {
                    if (!Array.isArray(item.items) || item.items.length === 0) {
                        throw new Error('Cannot parse template item as Carousel if carousel has no items.');
                    }
                    return (React__default.default.createElement(renderer.carouselView, Object.assign({}, item, rendererProps), item.items.map((template, index) => (React__default.default.createElement(MessageTemplateBase, { key: index, templateItems: template.body.items || [], depth: depth + 1, templateVersion: template.version })))));
                }
                case ComponentType.Box: {
                    return (React__default.default.createElement(renderer.box, Object.assign({}, item, rendererProps),
                        React__default.default.createElement(MessageTemplateBase, { templateItems: item.items || [], parentLayout: item.layout, depth: depth + 1, templateVersion: templateVersion })));
                }
                case ComponentType.Text: {
                    return React__default.default.createElement(renderer.text, Object.assign({}, item, rendererProps));
                }
                case ComponentType.Image: {
                    return React__default.default.createElement(renderer.image, Object.assign({}, item, rendererProps));
                }
                case ComponentType.TextButton: {
                    return React__default.default.createElement(renderer.textButton, Object.assign({}, item, rendererProps));
                }
                case ComponentType.ImageButton: {
                    return React__default.default.createElement(renderer.imageButton, Object.assign({}, item, rendererProps));
                }
                default: {
                    // or throw new Error('Cannot parse template item')
                    return React__default.default.createElement(UnknownMessage, { item: item });
                }
            }
        })));
    };
    return {
        MessageTemplate: ({ templateVersion, templateItems, parentLayout = defaultProperties.rootLayout, }) => {
            const items = setTemplateItemId(templateItems);
            return (React__default.default.createElement(SizeContextProvider, null,
                React__default.default.createElement(Container, null,
                    React__default.default.createElement(MessageTemplateBase, { isRoot: true, parentLayout: parentLayout, templateItems: items, templateVersion: templateVersion }))));
        },
        MessageTemplateBase,
    };
};

var ActionType;
(function (ActionType) {
    ActionType["Web"] = "web";
    ActionType["Custom"] = "custom";
    ActionType["UIKit"] = "uikit";
})(ActionType || (ActionType = {}));

({
    version: 1,
    body: {
        items: [
            {
                type: ComponentType.Image,
                action: { type: ActionType.Web, data: 'https://docs.sendbird.com' },
                height: { type: 'fixed', value: 236 },
                viewStyle: {
                    padding: {
                        left: 4,
                        right: 4,
                        top: 4,
                        bottom: 4,
                    },
                },
                imageUrl: 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                imageStyle: { contentMode: MediaContentMode.AspectFill },
            },
            {
                type: ComponentType.Box,
                layout: Layout.Column,
                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                height: { type: 'fixed', value: 200 },
                items: [
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        viewStyle: { backgroundColor: '#fa6464' },
                    },
                    {
                        type: ComponentType.Box,
                        layout: Layout.Column,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.WrapContent },
                        viewStyle: { backgroundColor: '#ffaf5c' },
                        items: [
                            {
                                type: ComponentType.Text,
                                text: 'Message',
                                align: { horizontal: AlignValue.Center, vertical: AlignValue.Center },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                            },
                            {
                                type: ComponentType.Image,
                                action: { type: ActionType.Web, data: 'https://docs.sendbird.com' },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                                imageUrl: 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                                imageStyle: { contentMode: MediaContentMode.AspectFill },
                            },
                        ],
                    },
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'fixed', value: 20 },
                        viewStyle: { backgroundColor: '#ffe450' },
                    },
                    {
                        type: ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        viewStyle: { backgroundColor: '#329a1b' },
                    },
                ],
            },
            {
                type: ComponentType.Box,
                viewStyle: { padding: { top: 12, bottom: 12, left: 12, right: 12 } },
                layout: Layout.Column,
                items: [
                    {
                        type: ComponentType.Box,
                        align: { horizontal: AlignValue.Left, vertical: AlignValue.Center },
                        layout: Layout.Row,
                        viewStyle: {
                            borderWidth: 1,
                            borderColor: '#72723f',
                        },
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        height: { type: 'fixed', value: 150 },
                        items: [
                            {
                                type: ComponentType.Text,
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                height: { type: 'fixed', value: 50 },
                                text: 'Sample1 text',
                                maxTextLines: 1,
                                align: { vertical: AlignValue.Center, horizontal: AlignValue.Left },
                                viewStyle: {
                                    backgroundColor: '#cc4400',
                                },
                                textStyle: {
                                    size: 16,
                                    color: '#f8f8f8',
                                    weight: FontWeight.Bold,
                                },
                            },
                            {
                                type: ComponentType.ImageButton,
                                action: { type: ActionType.UIKit, data: 'uikit://delete' },
                                width: { type: 'fixed', value: 20 },
                                height: { type: 'fixed', value: 20 },
                                imageUrl: 'https://file-ap-1.sendbird.com/5b5379aa73fd460da22ffaf9a61d0d7f.png',
                                imageStyle: { contentMode: MediaContentMode.AspectFit },
                            },
                        ],
                    },
                    {
                        type: ComponentType.Text,
                        viewStyle: { padding: { top: 6, bottom: 12, left: 0, right: 0 } },
                        text: 'Esse eu esse duis ipsum et dolor eu ut sit amet consectetur cillum velit officia. Ex adipisicing elit quis ea sit. Occaecat in eu aliqua nulla magna id ut excepteur minim.',
                        maxTextLines: 2,
                        textStyle: { size: 14, color: '#e10000' },
                        width: { type: 'fixed', value: 200 },
                        height: { type: 'fixed', value: 50 },
                    },
                    {
                        type: ComponentType.TextButton,
                        action: { type: ActionType.Web, data: 'https://www.daum.net' },
                        text: 'Button 3',
                        textStyle: { size: 14, color: '#742ddd', weight: FontWeight.Bold },
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Image,
                'action': { 'type': ActionType.Web, 'data': 'https://www.naver.com/' },
                'height': { 'type': 'fixed', 'value': 136 },
                'imageUrl': 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
            },
            {
                'type': ComponentType.Box,
                'viewStyle': { 'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 }, backgroundColor: '#cccccc' },
                'layout': Layout.Column,
                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                'items': [
                    {
                        'type': ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        'layout': Layout.Row,
                        'items': [
                            {
                                'type': ComponentType.TextButton,
                                'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                width: { type: 'fixed', value: 150 },
                                'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 0, 'right': 4 } },
                                'text': 'Button 2',
                                'textStyle': { 'size': 14, 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.TextButton,
                                'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                                'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 4, 'right': 0 } },
                                'text': 'Button 3',
                                'textStyle': { 'size': 14, 'weight': FontWeight.Bold },
                            },
                        ],
                    },
                    {
                        'type': ComponentType.Box,
                        width: { type: 'flex', value: FlexSizeSpecValue.FillParent },
                        'layout': Layout.Row,
                        'items': [
                            {
                                'type': ComponentType.Text,
                                'text': 'Sample2 text',
                                'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                                'maxTextLines': 1,
                                'textStyle': { 'size': 16, 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.ImageButton,
                                'action': { 'type': ActionType.UIKit, 'data': 'uikit://delete' },
                                'width': { 'type': 'fixed', 'value': 20 },
                                'height': { 'type': 'fixed', 'value': 20 },
                                'imageUrl': 'https://file-ap-1.sendbird.com/5b5379aa73fd460da22ffaf9a61d0d7f.png',
                                'imageStyle': { 'contentMode': MediaContentMode.AspectFit },
                            },
                        ],
                    },
                    {
                        'type': ComponentType.Text,
                        'viewStyle': { 'padding': { 'top': 6, 'bottom': 12, 'left': 0, 'right': 0 } },
                        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aui',
                        'textStyle': { 'size': 14 },
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Box,
                'viewStyle': { 'backgroundColor': '#ffffff', 'borderWidth': 1, 'borderColor': '#eeeeee', 'radius': 16 },
                'layout': Layout.Column,
                'items': [
                    {
                        'type': ComponentType.Image,
                        'height': { 'type': 'fixed', 'value': 200 },
                        'imageUrl': 'https://img.freepik.com/free-vector/cartoon-happy-hours-background_52683-81243.jpg?w=2000&t=st=1666689198~exp=1666689798~hmac=23109d44ba03deee7aee069cbeebfcb48fa27f85e53c1cafc5d5d7345f1a2041',
                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                    },
                    {
                        'type': ComponentType.Box,
                        'viewStyle': { 'padding': { 'top': 15, 'bottom': 15, 'left': 15, 'right': 15 } },
                        'layout': Layout.Column,
                        'items': [
                            {
                                'type': ComponentType.Text,
                                'text': "Don't miss these deals today",
                                'maxTextLines': 1,
                                'textStyle': { 'size': 20, 'color': '#e10000', 'weight': FontWeight.Bold },
                            },
                            {
                                'type': ComponentType.Text,
                                'viewStyle': { 'margin': { 'top': 5, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'text': 'Pay with Maya and get cashback!',
                                'maxTextLines': 1,
                                'textStyle': { 'size': 14, 'color': '#e10000' },
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://yt3.ggpht.com/ytc/AMLnZu8Kg89ymE7qt5bsS9vMqi9h2aHiN6m9ID-IgxR6-Q=s900-c-k-c0x00ffffff-no-rj',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Meralco',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://1000logos.net/wp-content/uploads/2021/12/Globe-Telecom-logo.png',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill, tintColor: '#a49a9a' },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Globe',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Image,
                                        'width': { 'type': 'fixed', 'value': 50 },
                                        'height': { 'type': 'fixed', 'value': 50 },
                                        'viewStyle': {
                                            'backgroundColor': '#ffffff',
                                            'borderWidth': 1,
                                            'borderColor': '#eeeeee',
                                            'radius': 25,
                                        },
                                        'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cignal.svg/640px-Cignal.svg.png',
                                        'imageStyle': { 'contentMode': MediaContentMode.AspectFill },
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                        'viewStyle': { 'margin': { 'top': 0, 'bottom': 0, 'left': 15, 'right': 0 } },
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'Cignal',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 16, 'color': '#e10000', 'weight': FontWeight.Bold },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'viewStyle': { 'margin': { 'top': 3, 'bottom': 0, 'left': 0, 'right': 0 } },
                                                'text': '30% cashback, P300 min spend',
                                                'maxTextLines': 1,
                                                'textStyle': { 'size': 12, 'color': '#610000', 'weight': FontWeight.Bold },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'align': { 'horizontal': AlignValue.Left, 'vertical': AlignValue.Center },
                                'viewStyle': { 'margin': { 'top': 10, 'bottom': 0, 'left': 0, 'right': 0 } },
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.TextButton,
                                        'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                        'viewStyle': {
                                            'backgroundColor': '#e0e0e0',
                                            'radius': 16,
                                            'margin': { 'top': 0, 'bottom': 0, 'left': 0, 'right': 4 },
                                            'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 },
                                        },
                                        'text': 'Learn more',
                                        'textStyle': { 'size': 15, 'color': '#e10000', 'weight': FontWeight.Bold },
                                    },
                                    {
                                        'type': ComponentType.TextButton,
                                        'action': { 'type': ActionType.Web, 'data': 'https://www.daum.net' },
                                        'viewStyle': {
                                            'backgroundColor': '#e10000',
                                            'radius': 16,
                                            'margin': { 'top': 0, 'bottom': 0, 'left': 4, 'right': 0 },
                                            'padding': { 'top': 12, 'bottom': 12, 'left': 12, 'right': 12 },
                                        },
                                        'text': 'Pay now',
                                        'textStyle': { 'size': 15, 'color': '#ffffff', 'weight': FontWeight.Bold },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'type': ComponentType.Box,
                'layout': Layout.Column,
                'items': [
                    {
                        'type': ComponentType.Image,
                        'imageUrl': 'https://static.sendbird.com/sample/profiles/profile_40_512px.png',
                        'metaData': {
                            'pixelWidth': 512,
                            'pixelHeight': 512,
                        },
                        'imageStyle': {
                            'tintColor': '#44ff1188',
                        },
                        viewStyle: {
                            'padding': {
                                'top': 12,
                                'right': 12,
                                'bottom': 12,
                                'left': 12,
                            },
                        },
                    },
                    {
                        'type': ComponentType.Box,
                        'viewStyle': {
                            'padding': {
                                'top': 12,
                                'right': 12,
                                'bottom': 12,
                                'left': 12,
                            },
                        },
                        'layout': Layout.Column,
                        'items': [
                            {
                                'type': ComponentType.Box,
                                'layout': Layout.Row,
                                'items': [
                                    {
                                        'type': ComponentType.Box,
                                        'layout': Layout.Column,
                                        'items': [
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'hi',
                                                'maxTextLines': 3,
                                                'viewStyle': {
                                                    'padding': {
                                                        'top': 0,
                                                        'bottom': 6,
                                                        'left': 0,
                                                        'right': 0,
                                                    },
                                                },
                                                'textStyle': {
                                                    'size': 16,
                                                    'weight': FontWeight.Bold,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Text,
                                                'text': 'bye',
                                                'maxTextLines': 10,
                                                'textStyle': {
                                                    'size': 14,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        'type': ComponentType.ImageButton,
                                        'action': {
                                            'type': ActionType.UIKit,
                                            'data': 'sendbirduikit://delete',
                                        },
                                        'width': {
                                            'type': 'fixed',
                                            'value': 20,
                                        },
                                        'height': {
                                            'type': 'fixed',
                                            'value': 20,
                                        },
                                        'metaData': {
                                            'pixelWidth': 60,
                                            'pixelHeight': 60,
                                        },
                                        'imageUrl': 'https://dxstmhyqfqr1o.cloudfront.net/sendbird-message-builder/icon-more.png',
                                        'imageStyle': {
                                            'tintColor': '#ff8d5a',
                                        },
                                    },
                                ],
                            },
                            {
                                'type': ComponentType.Box,
                                'layout': Layout.Column,
                                'items': [
                                    {
                                        'type': ComponentType.Box,
                                        'viewStyle': {
                                            'margin': {
                                                'top': 16,
                                                'bottom': 0,
                                                'left': 0,
                                                'right': 0,
                                            },
                                        },
                                        'align': {
                                            'horizontal': AlignValue.Left,
                                            'vertical': AlignValue.Center,
                                        },
                                        'layout': Layout.Row,
                                        'items': [
                                            {
                                                'type': ComponentType.Image,
                                                'imageUrl': 'https://ca.slack-edge.com/T0ADCTNEL-ULE240VNV-83fd5776e78e-512',
                                                'width': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'height': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'metaData': {
                                                    'pixelWidth': 512,
                                                    'pixelHeight': 512,
                                                },
                                                'viewStyle': {
                                                    'backgroundColor': '#BDBDBD',
                                                    'radius': 20,
                                                },
                                                'imageStyle': {
                                                    'contentMode': MediaContentMode.AspectFill,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Box,
                                                'viewStyle': {
                                                    'margin': {
                                                        'top': 0,
                                                        'bottom': 0,
                                                        'left': 12,
                                                        'right': 0,
                                                    },
                                                },
                                                'layout': Layout.Column,
                                                'items': [
                                                    {
                                                        'type': ComponentType.Text,
                                                        'text': 'Chongbu',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 16,
                                                            'weight': FontWeight.Bold,
                                                        },
                                                    },
                                                    {
                                                        'type': ComponentType.Text,
                                                        'viewStyle': {
                                                            'margin': {
                                                                'top': 4,
                                                                'bottom': 0,
                                                                'left': 0,
                                                                'right': 0,
                                                            },
                                                        },
                                                        'text': ' ',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 14,
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        'type': ComponentType.Box,
                                        'viewStyle': {
                                            'margin': {
                                                'top': 16,
                                                'bottom': 0,
                                                'left': 0,
                                                'right': 0,
                                            },
                                        },
                                        'align': {
                                            'horizontal': AlignValue.Left,
                                            'vertical': AlignValue.Center,
                                        },
                                        'layout': Layout.Row,
                                        'items': [
                                            {
                                                'type': ComponentType.Image,
                                                'imageUrl': 'https://ca.slack-edge.com/T0ADCTNEL-U02LA25KY8J-d41a3e8c7554-512',
                                                'width': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'height': {
                                                    'type': 'fixed',
                                                    'value': 40,
                                                },
                                                'metaData': {
                                                    'pixelWidth': 512,
                                                    'pixelHeight': 512,
                                                },
                                                'viewStyle': {
                                                    'backgroundColor': '#BDBDBD',
                                                    'radius': 20,
                                                },
                                                'imageStyle': {
                                                    'contentMode': MediaContentMode.AspectFill,
                                                },
                                            },
                                            {
                                                'type': ComponentType.Box,
                                                'viewStyle': {
                                                    'margin': {
                                                        'top': 0,
                                                        'bottom': 0,
                                                        'left': 12,
                                                        'right': 0,
                                                    },
                                                },
                                                'layout': Layout.Column,
                                                'items': [
                                                    {
                                                        'type': ComponentType.Text,
                                                        'text': 'Amanda',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 16,
                                                            'weight': FontWeight.Bold,
                                                        },
                                                    },
                                                    {
                                                        'type': ComponentType.Text,
                                                        'viewStyle': {
                                                            'margin': {
                                                                'top': 4,
                                                                'bottom': 0,
                                                                'left': 0,
                                                                'right': 0,
                                                            },
                                                        },
                                                        'text': 'This is title message',
                                                        'maxTextLines': 1,
                                                        'textStyle': {
                                                            'size': 14,
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
({
    'version': '1',
    'body': {
        'items': [
            {
                'type': 'box',
                'layout': 'column',
                height: { type: 'fixed', value: 600 },
                'items': [
                    {
                        'type': 'box',
                        'layout': 'column',
                        'viewStyle': { 'radius': '8', 'padding': { 'top': '12', 'bottom': '12', 'left': '12', 'right': '12' } },
                        'items': [
                            {
                                'type': 'text',
                                'text': 'Title text',
                                'textStyle': { 'color': '#E0000000', 'size': '16', 'weight': 'bold' },
                                'maxTextLines': '5',
                                'viewStyle': {},
                                'action': { 'data': 'www.naver.com' },
                            },
                            {
                                'type': 'text',
                                'viewStyle': { 'margin': { 'top': '8', 'right': '0', 'bottom': '0', 'left': '0' } },
                                'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aui',
                                'textStyle': { 'color': '#E0000000', 'size': '14', 'weight': 'normal' },
                                'maxTextLines': '5',
                                'action': { 'data': 'https://www.naver.com' },
                            },
                            {
                                'type': 'box',
                                'layout': 'row',
                                'viewStyle': { 'margin': { 'top': '12', 'right': '0', 'bottom': '0', 'left': '0' } },
                                'items': [
                                    {
                                        'type': 'textButton',
                                        'viewStyle': {
                                            'backgroundColor': '#E0E0E0',
                                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                                        },
                                        'text': 'Button 1',
                                        'textStyle': { 'color': '#742DDD', 'size': '14', 'weight': 'bold' },
                                        'maxTextLines': '5',
                                        'action': { 'data': 'www.naver.com' },
                                    },
                                    {
                                        'type': 'textButton',
                                        'viewStyle': {
                                            'backgroundColor': '#E0E0E0',
                                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                                            'margin': { 'left': '8', 'right': '0', 'top': '0', 'bottom': '0' },
                                        },
                                        'text': 'Button 2',
                                        'textStyle': { 'color': '#742DDD', 'size': '14', 'weight': 'bold' },
                                        'maxTextLines': '5',
                                        'action': { 'data': 'https://www.naver.com' },
                                    },
                                ],
                            },
                        ],
                        'action': { 'data': 'https://www.naver.com' },
                    },
                    {
                        'type': 'image',
                        'viewStyle': {},
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'imageUrl': 'https://file-preprod.sendbird.com/d03c08bb3f9041a88c1207b6bbf15ab8.png',
                        'metaData': { 'pixelWidth': '1062', 'pixelHeight': '1070' },
                    },
                    {
                        'type': 'textButton',
                        'viewStyle': {
                            'backgroundColor': '#E0E0E0',
                            'padding': { 'top': '10', 'bottom': '10', 'left': '20', 'right': '20' },
                        },
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'text': 'Button',
                        'textStyle': { 'color': '#742DDD', 'size': '16', 'weight': 'normal' },
                        'maxTextLines': '5',
                        'action': { 'data': 'www.naver.com' },
                    },
                    {
                        'type': 'imageButton',
                        'viewStyle': {},
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'imageUrl': 'https://file-preprod.sendbird.com/38fdf5c1056f42b89a44b38155cc4b49.jpg',
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'metaData': { 'pixelWidth': '1080', 'pixelHeight': '2640' },
                        'action': { 'data': 'www.naver.com' },
                    },
                ],
                'viewStyle': {},
            },
        ],
    },
});
({
    'version': 1,
    'body': {
        'items': [
            {
                'elementId': 'root',
                'type': 'box',
                'layout': 'column',
                'width': {
                    'type': 'flex',
                    'value': FlexSizeSpecValue.FillParent,
                },
                'height': {
                    'type': 'flex',
                    'value': FlexSizeSpecValue.WrapContent,
                },
                'items': [
                    {
                        'type': 'text',
                        'viewStyle': {
                            'backgroundColor': '#a0c0ffff',
                            'margin': {
                                'top': 16,
                                'bottom': 16,
                                'left': 16,
                                'right': 16,
                            },
                            'padding': {
                                'top': 16,
                                'bottom': 16,
                                'left': 16,
                                'right': 16,
                            },
                        },
                        'text': 'Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap Wrap ',
                        'textStyle': {
                            'size': 14,
                            'color': '#222121e0',
                            'weight': 'normal',
                        },
                        'maxTextLines': 5,
                        'width': {
                            'type': 'flex',
                            'value': FlexSizeSpecValue.FillParent,
                        },
                        'height': {
                            'type': 'flex',
                            'value': 1,
                        },
                        'align': {
                            'horizontal': 'left',
                            'vertical': 'top',
                        },
                        'elementId': 'c0e15878-4984-408d-abaa-4b495c2e3872',
                    },
                    {
                        'type': 'imageButton',
                        'viewStyle': {
                            margin: {
                                left: 24,
                                right: 12,
                            },
                        },
                        'width': { 'type': 'flex', 'value': FlexSizeSpecValue.FillParent },
                        'height': { 'type': 'fixed', 'value': 250 },
                        'imageUrl': 'https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_1280.jpg',
                        'imageStyle': { 'contentMode': 'aspectFill' },
                        'metaData': { 'pixelWidth': '1080', 'pixelHeight': '2640' },
                        'action': { 'data': 'www.naver.com' },
                    },
                ],
            },
        ],
    },
});

const SWIPE_THRESHOLD = 24;
function useCarousel({ spacing, childrenLength, paddingInlineStart, paddingInlineEnd }) {
    // TODO: RTL support
    const paddingStart = paddingInlineStart;
    const paddingEnd = paddingInlineEnd;
    const carouselRef = React.useRef(null);
    const childrenRefs = React.useRef(Array.from({ length: childrenLength }, () => React__default.default.createRef()));
    const isDragging = React.useRef(false);
    const isScrolling = React.useRef(false);
    const animationFrame = React.useRef(null);
    const drag = React.useRef({
        sx: null,
        sy: null,
        offset: 0,
        translateX: 0,
        currentIndex: 0,
    });
    const [childWidths, setChildWidths] = React.useState(() => childrenRefs.current.map(() => 0));
    const itemPositions = React.useMemo(() => {
        let currentPosition = paddingStart;
        return childWidths.map((width, i) => {
            const start = currentPosition - (i > 0 ? spacing : 0);
            const end = start - width;
            currentPosition = end;
            return { start, end };
        });
    }, [childWidths, spacing, paddingStart]);
    const totalContentWidth = React.useMemo(() => {
        const totalItemWidth = childWidths.reduce((acc, width) => acc + width, 0);
        const totalSpacing = spacing * (childrenLength - 1);
        return totalItemWidth + totalSpacing;
    }, [childWidths, spacing, childrenLength]);
    React.useLayoutEffect(() => {
        setChildWidths(childrenRefs.current.map((ref) => { var _a, _b; return (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0; }));
    }, [childrenLength]);
    React.useLayoutEffect(() => {
        if (itemPositions.length > 0) {
            drag.current.translateX = itemPositions[0].start;
            animate();
        }
    }, [itemPositions]);
    const dragStart = () => {
        if (!carouselRef.current)
            return;
        isDragging.current = true;
        carouselRef.current.style.cursor = 'grabbing';
        carouselRef.current.style.transition = 'none';
        animationFrame.current = requestAnimationFrame(animate);
    };
    const dragStop = () => {
        if (!carouselRef.current)
            return;
        isDragging.current = false;
        carouselRef.current.style.cursor = 'grab';
        carouselRef.current.style.transition = 'transform 0.5s ease';
        if (animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = null;
        }
    };
    const dragRelease = () => {
        const { offset, currentIndex } = drag.current;
        const thresholdExceeded = Math.abs(offset) >= SWIPE_THRESHOLD;
        const swipeToNext = offset < 0 && currentIndex < childrenLength - 1;
        const swipeToPrev = offset > 0 && currentIndex > 0;
        let newIndex = currentIndex;
        if (thresholdExceeded && swipeToNext) {
            newIndex = currentIndex + 1;
        }
        else if (thresholdExceeded && swipeToPrev) {
            newIndex = currentIndex - 1;
        }
        function clampTranslateX(translateX) {
            var _a, _b;
            const containerWidth = (_b = (_a = carouselRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
            const start = paddingStart;
            const end = Math.min(0, containerWidth - totalContentWidth) - paddingEnd;
            return Math.min(start, Math.max(end, translateX));
        }
        drag.current.currentIndex = newIndex;
        drag.current.translateX = clampTranslateX(itemPositions[newIndex].start);
        drag.current.offset = 0;
    };
    const scrollStart = () => {
        isScrolling.current = true;
    };
    const scrollStop = () => {
        isScrolling.current = false;
    };
    const animate = () => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${drag.current.translateX + drag.current.offset}px)`;
        }
        if (animationFrame.current) {
            animationFrame.current = requestAnimationFrame(animate);
        }
    };
    const blockScroll = () => {
        if (carouselRef.current) {
            carouselRef.current.style.touchAction = 'pan-x';
        }
    };
    const unblockScroll = () => {
        if (carouselRef.current) {
            carouselRef.current.style.touchAction = 'pan-y';
        }
    };
    const onMouseDown = (event) => {
        dragStart();
        scrollStop();
        drag.current.sx = event.clientX;
        drag.current.sy = event.clientY;
        drag.current.offset = 0;
        animationFrame.current = requestAnimationFrame(animate);
    };
    const onMouseMove = (event) => {
        if (!isDragging.current || drag.current.sx === null)
            return;
        drag.current.offset = event.clientX - drag.current.sx;
    };
    const onMouseUp = () => {
        if (!isDragging.current)
            return;
        scrollStop();
        dragRelease();
        dragStop();
    };
    const onMouseLeave = () => {
        if (!isDragging.current)
            return;
        scrollStop();
        dragRelease();
        dragStop();
    };
    const onTouchStart = (event) => {
        scrollStop();
        dragStop();
        const touch = event.touches[0];
        drag.current.sx = touch.clientX;
        drag.current.sy = touch.clientY;
        drag.current.offset = 0;
        animationFrame.current = requestAnimationFrame(animate);
    };
    const onTouchMove = (event) => {
        if (drag.current.sx === null || drag.current.sy === null || isScrolling.current)
            return;
        const { clientX, clientY } = event.touches[0];
        const { sx, sy } = drag.current;
        if (isDragging.current) {
            drag.current.offset = clientX - sx;
            return;
        }
        const isVerticalScroll = Math.abs(clientY - sy) > Math.abs(clientX - sx);
        if (isVerticalScroll) {
            scrollStart();
        }
        else {
            drag.current.offset = clientX - sx;
            blockScroll();
            dragStart();
        }
    };
    const onTouchEnd = () => {
        unblockScroll();
        scrollStop();
        dragRelease();
        dragStop();
    };
    return {
        carouselRef,
        childrenRefs,
        handlers: {
            onMouseDown,
            onMouseMove,
            onMouseUp,
            onMouseLeave,
            onTouchStart,
            onTouchMove,
            onTouchEnd,
        },
    };
}

var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Carousel = ({ children, style, spacing = defaultProperties.carousel.style.spacing, maxChildWidth = defaultProperties.carousel.style.maxChildWidth, }) => {
    const _a = style !== null && style !== void 0 ? style : {}, { paddingInlineStart = 0, paddingInlineEnd = 0 } = _a, restStyle = __rest$4(_a, ["paddingInlineStart", "paddingInlineEnd"]);
    const { carouselRef, childrenRefs, handlers } = useCarousel({
        spacing,
        childrenLength: children.length,
        paddingInlineStart: Number(paddingInlineStart),
        paddingInlineEnd: Number(paddingInlineEnd),
    });
    return (React__default.default.createElement("div", Object.assign({}, handlers, { ref: carouselRef, className: 'sb-message-template__carousel', style: Object.assign(Object.assign({}, restStyle), { gap: spacing, width: '100%', overflow: 'visible' }) }), children.map((item, index) => (React__default.default.createElement(CarouselChild, { ref: childrenRefs.current[index], key: index, maxChildWidth: maxChildWidth }, item)))));
};
const CarouselChild = React__default.default.forwardRef(function CarouselChild({ maxChildWidth, children }, ref) {
    const maxWidth = shouldSetMaxChildWidth(children.props, maxChildWidth) ? maxChildWidth : 'fit-content';
    return (React__default.default.createElement("div", { ref: ref, style: { maxWidth, width: '100%', flexShrink: 0, overflow: 'hidden', userSelect: 'none' } }, children));
});
// Note: Set the maxChildWidth because it's impossible to determine the maximum width of items in the Carousel Child template when they have FillParent
function shouldSetMaxChildWidth(props, maxChildWidth) {
    return !!props.templateItems.find((it) => {
        var _a, _b, _c, _d;
        const hasFillWidth = ((_a = it.width) === null || _a === void 0 ? void 0 : _a.type) === 'flex' && ((_b = it.width) === null || _b === void 0 ? void 0 : _b.value) === FlexSizeSpecValue.FillParent;
        const overMaxChildWidth = ((_c = it.width) === null || _c === void 0 ? void 0 : _c.type) === 'fixed' && ((_d = it.width) === null || _d === void 0 ? void 0 : _d.value) >= maxChildWidth;
        return hasFillWidth || overMaxChildWidth;
    });
}

function isWrappedText(view) {
    var _a;
    return view.type === ComponentType.Text && ((_a = view.width) === null || _a === void 0 ? void 0 : _a.value) == FlexSizeSpecValue.WrapContent;
}
// Compares the size spec to the option and returns whether they are equal or not.
const isSizeCompatibleWithOption = ({ size, option, }) => {
    if (option === 'wrap') {
        return size.type === 'flex' && size.value == FlexSizeSpecValue.WrapContent;
    }
    if (option === 'fill') {
        return size.type === 'flex' && size.value == FlexSizeSpecValue.FillParent;
    }
    return size.type === 'fixed';
};
const isGif = (url) => {
    var _a;
    if (typeof url !== 'string')
        return false;
    const extension = (_a = url.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    return extension === 'gif';
};

var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CanvasReactMessageTemplateImage = (props) => {
    const { imageSize, canvasRef, canvasProps } = useCanvasMessageTemplateImage(props);
    return (React__default.default.createElement("canvas", Object.assign({}, canvasProps, { ref: canvasRef, width: imageSize === null || imageSize === void 0 ? void 0 : imageSize.width, height: imageSize === null || imageSize === void 0 ? void 0 : imageSize.height, onError: props.onError })));
};
const useCanvasMessageTemplateImage = (_a) => {
    var { metaData, tintColor } = _a, props = __rest$3(_a, ["metaData", "tintColor"]);
    const canvasRef = React.useRef(null);
    const [fallbackImageSize, setFallbackImageSize] = React.useState();
    const imageSize = React.useMemo(() => {
        if ((metaData === null || metaData === void 0 ? void 0 : metaData.pixelHeight) && (metaData === null || metaData === void 0 ? void 0 : metaData.pixelWidth)) {
            return { width: metaData.pixelWidth, height: metaData.pixelHeight };
        }
        return fallbackImageSize;
    }, [fallbackImageSize, metaData === null || metaData === void 0 ? void 0 : metaData.pixelHeight, metaData === null || metaData === void 0 ? void 0 : metaData.pixelWidth]);
    React.useEffect(() => {
        if (imageSize == null) {
            console.log('Canvas_ReactMessageTemplateImage: no metaData, render fit to container');
            if (canvasRef.current) {
                canvasRef.current.style.width = '100%';
                canvasRef.current.style.height = '100%';
                const containerSize = canvasRef.current.getBoundingClientRect();
                setFallbackImageSize(containerSize);
            }
        }
    }, [imageSize]);
    React.useEffect(() => {
        if (props.src) {
            const img = new Image();
            const onImageLoad = () => {
                if (canvasRef.current && tintColor && imageSize) {
                    const ctx = canvasRef.current.getContext('2d');
                    if (ctx) {
                        const { width: imageWidth, height: imageHeight } = imageSize;
                        // reset context before draw, consider `.save()` and `.restore()` api
                        ctx.clearRect(0, 0, imageWidth, imageHeight);
                        ctx.beginPath();
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.fillStyle = '#000';
                        // draw
                        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
                        ctx.globalCompositeOperation = 'source-atop';
                        ctx.fillStyle = tintColor;
                        ctx.fillRect(0, 0, imageWidth, imageHeight);
                    }
                }
            };
            const onImageError = (event) => {
                var _a;
                // @ts-ignore
                (_a = props.onError) === null || _a === void 0 ? void 0 : _a.call(props, event);
            };
            img.addEventListener('load', onImageLoad);
            img.addEventListener('error', onImageError);
            img.src = props.src;
            return () => {
                img.removeEventListener('load', onImageLoad);
                img.removeEventListener('error', onImageError);
            };
        }
        return;
    }, [props.src, imageSize, tintColor]);
    return {
        canvasRef,
        canvasProps: props,
        imageSize,
    };
};

const ImgReactMessageTemplateImage = (props) => {
    return React__default.default.createElement("img", Object.assign({}, props, { onError: props.onError, referrerPolicy: "no-referrer" }));
};

const PlaceholderReactMessageTemplateImage = (props) => {
    return React__default.default.createElement("div", { style: Object.assign(Object.assign({}, props.style), { backgroundColor: 'transparent' }) });
};

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ReactMessageTemplateImage = (_a) => {
    var { tintColor, metaData } = _a, props = __rest$2(_a, ["tintColor", "metaData"]);
    const { hasError, onError } = useImageLoadError(props.src);
    if (props.onError)
        console.warn('`onError` is intercepted and not executed in the ReactMessageTemplateImage.');
    if (hasError) {
        return React__default.default.createElement(PlaceholderReactMessageTemplateImage, Object.assign({}, props));
    }
    else if (tintColor && !isGif(props.src)) {
        return React__default.default.createElement(CanvasReactMessageTemplateImage, Object.assign({}, props, { onError: onError, tintColor: tintColor, metaData: metaData }));
    }
    else {
        return React__default.default.createElement(ImgReactMessageTemplateImage, Object.assign({}, props, { onError: onError }));
    }
};
const useImageLoadError = (source) => {
    const [hasError, setHasError] = React.useState(false);
    React.useEffect(() => setHasError(false), [source]);
    return {
        hasError,
        onError: React.useCallback(() => setHasError(true), []),
    };
};

function getDefaultStyles(overrides) {
    return Object.assign({ display: 'flex', overflow: 'hidden', boxSizing: 'border-box' }, overrides);
}
function setViewProps(styles, props, options) {
    setViewSize(styles, props, options);
    setViewStyle(styles, props);
}
function setBorderStyle(styles, borderWidth, borderColor, radius) {
    if (borderWidth) {
        styles['--border-width'] = `${borderWidth}px`;
        styles['--border-color'] = borderColor || 'transparent';
    }
    if (radius) {
        styles['borderRadius'] = radius;
        styles['--border-radius'] = `${radius}px`;
    }
}
function setViewStyle(styles, props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { viewStyle } = props;
    styles['marginBlockStart'] = (_a = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _a === void 0 ? void 0 : _a.top;
    styles['marginBlockEnd'] = (_b = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _b === void 0 ? void 0 : _b.bottom;
    styles['marginInlineStart'] = (_c = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _c === void 0 ? void 0 : _c.left;
    styles['marginInlineEnd'] = (_d = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _d === void 0 ? void 0 : _d.right;
    const marginHorizontal = ((_f = (_e = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _e === void 0 ? void 0 : _e.left) !== null && _f !== void 0 ? _f : 0) + ((_h = (_g = viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.margin) === null || _g === void 0 ? void 0 : _g.right) !== null && _h !== void 0 ? _h : 0);
    if (marginHorizontal > 0 && styles.width === '100%')
        styles.width = `calc(100% - ${marginHorizontal}px)`;
    if (viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.backgroundColor)
        styles['backgroundColor'] = viewStyle.backgroundColor;
    // use JSON.stringify to escape special characters in image URL
    if (viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.backgroundImageUrl) {
        styles['backgroundImage'] = `url(${JSON.stringify(viewStyle.backgroundImageUrl)})`;
        styles['backgroundSize'] = '100% 100%';
        styles['backgroundPosition'] = 'center';
    }
    setBorderStyle(styles, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.borderWidth, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.borderColor, viewStyle === null || viewStyle === void 0 ? void 0 : viewStyle.radius);
}
function getViewSizeStyle(width, height, parentLayout) {
    const style = {};
    if (width.type === 'flex' && width.value == FlexSizeSpecValue.FillParent) {
        style['width'] = '100%';
        if (parentLayout === Layout.Row) {
            style['flex'] = 1;
        }
    }
    else if (width.type === 'fixed' && width.value >= 0) {
        style['width'] = width.value;
    }
    if (height.type === 'flex' && height.value == FlexSizeSpecValue.FillParent) {
        style['height'] = '100%';
        if (parentLayout === Layout.Column) {
            style['flex'] = 1;
        }
    }
    else if (height.type === 'fixed' && height.value >= 0) {
        style['height'] = height.value;
    }
    return style;
}
function setViewSize(styles, props, options) {
    var _a, _b;
    const { width: defaultWidth, height: defaultHeight } = defaultProperties.view.size;
    const { parentLayout } = options;
    const sizeStyle = getViewSizeStyle((_a = props.width) !== null && _a !== void 0 ? _a : defaultWidth, (_b = props.height) !== null && _b !== void 0 ? _b : defaultHeight, parentLayout);
    Object.assign(styles, sizeStyle);
}
function setAlign(styles, layout = defaultProperties.box.layout, align = defaultProperties.box.align) {
    if (layout === Layout.Row) {
        styles['flexDirection'] = 'row';
        styles['alignItems'] = alignInFlex(align.vertical);
        styles['justifyContent'] = alignInFlex(align.horizontal);
    }
    if (layout === Layout.Column) {
        styles['flexDirection'] = 'column';
        styles['alignItems'] = alignInFlex(align.horizontal);
        styles['justifyContent'] = alignInFlex(align.vertical);
    }
}
function setTextAlign(styles, align = defaultProperties.box.align.horizontal) {
    styles.textAlign = align;
}
function setImageStyle(styles, imageStyle) {
    const { contentMode = MediaContentMode.AspectFit } = imageStyle || {};
    if (contentMode) {
        switch (contentMode) {
            case MediaContentMode.AspectFill:
                styles['objectFit'] = 'cover';
                break;
            case MediaContentMode.AspectFit:
                styles['objectFit'] = 'contain';
                break;
            case MediaContentMode.ScalesToFill:
                styles['objectFit'] = 'fill';
                break;
        }
    }
}
// uses image meta-data to render images that doesn't break the UI
// https://sendbird.atlassian.net/wiki/spaces/UK/pages/2008220608/Message+template+-+Image+policy
function setImageAspectRatio(styles, props) {
    var _a, _b, _c, _d;
    const imageMetaData = props === null || props === void 0 ? void 0 : props.metaData;
    if (!(imageMetaData === null || imageMetaData === void 0 ? void 0 : imageMetaData.pixelHeight) || !(imageMetaData === null || imageMetaData === void 0 ? void 0 : imageMetaData.pixelWidth)) {
        return;
    }
    if (((_a = props === null || props === void 0 ? void 0 : props.width) === null || _a === void 0 ? void 0 : _a.type) === 'fixed' || ((_b = props === null || props === void 0 ? void 0 : props.height) === null || _b === void 0 ? void 0 : _b.type) === 'fixed') {
        return;
    }
    styles['aspectRatio'] = `${(_c = props === null || props === void 0 ? void 0 : props.metaData) === null || _c === void 0 ? void 0 : _c.pixelWidth} / ${(_d = props === null || props === void 0 ? void 0 : props.metaData) === null || _d === void 0 ? void 0 : _d.pixelHeight}`;
}
function webkitLineClampStyles(numberOfLines) {
    return {
        WebkitLineClamp: numberOfLines,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        overflow: 'hidden',
        overflowWrap: 'anywhere',
        flex: 1,
    };
}
function setTextStyle(styles, props, options) {
    const { textStyle, width } = props;
    // TODO: Change default as design
    const { size, color, weight } = textStyle || {};
    if (size)
        styles['fontSize'] = size;
    if (color)
        styles['color'] = color;
    if (weight)
        styles['fontWeight'] = weight;
    if ((width === null || width === void 0 ? void 0 : width.type) === 'flex' && (width === null || width === void 0 ? void 0 : width.value) == FlexSizeSpecValue.WrapContent) {
        styles['width'] = 'fit-content';
        styles['maxWidth'] = '100%';
    }
    if (props.type === ComponentType.Text) {
        const { siblings, elemIdx } = options;
        // To push out any subsequent components from the container,
        // if a prior one is long enough to occupy an entire line
        // @link https://sendbird.atlassian.net/browse/NOTI-709
        if (siblings != null && siblings.length >= 2 && siblings.every(isWrappedText)) {
            styles.flexShrink = siblings.length - 1 === elemIdx ? 1 : 0;
        }
    }
}

// create a context provider for MessageComponent
//  - this is a wrapper for MessageComponent
const MessageContext = React__default.default.createContext(null);
const MessageProvider = (props) => {
    const { message, handleWebAction, handleCustomAction, handlePredefinedAction, children } = props;
    const value = React__default.default.useMemo(() => ({
        message,
        handleWebAction,
        handleCustomAction,
        handlePredefinedAction,
    }), [message === null || message === void 0 ? void 0 : message.updatedAt]);
    return React__default.default.createElement(MessageContext.Provider, { value: value }, children);
};
const useMessageContext = () => {
    const context = React__default.default.useContext(MessageContext);
    if (!context) {
        throw new Error('useMessageContext must be used within a MessageProvider');
    }
    return context;
};

/**
 * Preserves a reference to the given callback function as an argument while the component is mounted.
 * Wraps the given callback in React's Ref to preserve the reference.
 * @param callback want to be preserved
 */
function usePreservedCallback(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    return React.useCallback((...args) => {
        return callbackRef.current(...args);
    }, [callbackRef]);
}

/**
 * This hook can be used when you want to safely effect the value stored in useRef
 * Got this idea from https://github.com/facebook/react/issues/15176
 * @param callback
 * @param deps
 * @returns effect callback
 */
function useRefEffect(callback, deps) {
    const preservedCallback = usePreservedCallback(callback);
    const disposeRef = React.useRef(noop);
    const effect = React.useCallback((element) => {
        disposeRef.current();
        disposeRef.current = noop;
        if (element != null) {
            const cleanup = callback(element);
            if (typeof cleanup === 'function') {
                disposeRef.current = cleanup;
            }
        }
    }, [preservedCallback, ...deps]);
    return effect;
}
function noop() { }

/**
 * Subscribes to ResizeObserver on the component exposing the Ref,
 * to detect changes in the size of DOM elements.
 * The ResizeObserver API is required.
 * If you are targeting browsers that do not support that API, probably need to add appropriate polyfill too.
 * @param onResize
 * @returns ref
 */
function useResizeObserver(onResize) {
    const resizeCallback = usePreservedCallback(onResize);
    const ref = useRefEffect((elem) => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0] != null) {
                resizeCallback(entries[0]);
            }
        });
        observer.observe(elem);
        return () => {
            observer.unobserve(elem);
        };
    }, [resizeCallback]);
    return ref;
}

/**
 * @returns an element's width / height observed by IntersectionObserver,
 * and ref to detect its resize event
 */
function useElementSize() {
    const [width, setWidth] = React.useState(-1);
    const [height, setHeight] = React.useState(-1);
    const [contentWidth, setContentWidth] = React.useState(-1);
    const [contentHeight, setContentHeight] = React.useState(-1);
    const [paddingWidth, setPaddingWidth] = React.useState(-1);
    const [paddingHeight, setPaddingHeight] = React.useState(-1);
    const ref = useResizeObserver((entry) => {
        // contentRect: content size only
        const { width: contentWidth, height: contentHeight } = entry.contentRect;
        // target: content + padding + border size
        const target = entry.target;
        const { width, height } = target.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
        setContentWidth(contentWidth);
        setContentHeight(contentHeight);
        setPaddingWidth(width - contentWidth);
        setPaddingHeight(height - contentHeight);
    });
    return { ref, width, height, contentWidth, contentHeight, paddingWidth, paddingHeight };
}

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function isViewCompatibleWithSizeOption({ width = defaultProperties.view.size.width, height = defaultProperties.view.size.height, parentLayout = defaultProperties.box.layout, option, }) {
    if (parentLayout === Layout.Row) {
        return isSizeCompatibleWithOption({
            size: width,
            option,
        });
    }
    return isSizeCompatibleWithOption({
        size: height,
        option,
    });
}
function useRecalculateWidth(params) {
    const { style, props } = params;
    const _a = useElementSize(), { ref: elemRef } = _a, size = __rest$1(_a, ["ref"]);
    const { updateSize, sizes } = useSizeContext();
    const { id, siblings, parentLayout } = props;
    const { width, height, paddingWidth, paddingHeight, contentWidth, contentHeight } = size;
    React.useEffect(() => {
        updateSize({
            id: props.id,
            width,
            height,
            paddingWidth,
            paddingHeight,
            contentWidth,
            contentHeight,
        });
    }, [props.id, width, height, paddingWidth, paddingHeight, contentWidth, contentHeight, updateSize]);
    const currentStyle = React.useMemo(() => {
        const sumViewSize = (acc = 0, view) => {
            var _a, _b, _c, _d;
            if (parentLayout === Layout.Row) {
                return acc + ((_b = (_a = sizes[view.id]) === null || _a === void 0 ? void 0 : _a.contentWidth) !== null && _b !== void 0 ? _b : 0);
            }
            return acc + ((_d = (_c = sizes[view.id]) === null || _c === void 0 ? void 0 : _c.contentHeight) !== null && _d !== void 0 ? _d : 0);
        };
        const hasFillOption = isViewCompatibleWithSizeOption({
            width: props.width,
            height: props.height,
            parentLayout,
            option: 'fill',
        });
        if (hasFillOption) {
            const wrapSiblingsSize = siblings
                .filter(({ width, height }) => !isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'fill',
            }))
                .reduce(sumViewSize, 0);
            const fillSiblingCount = siblings.filter(({ width, height }) => isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'fill',
            })).length;
            const maxSizeOption = (() => {
                if (parentLayout === Layout.Row) {
                    return {
                        maxWidth: `calc((100% - ${wrapSiblingsSize}px) / ${fillSiblingCount})`,
                    };
                }
                return {
                    maxHeight: `calc((100% - ${wrapSiblingsSize}px) / ${fillSiblingCount})`,
                };
            })();
            return Object.assign(Object.assign(Object.assign({}, style), maxSizeOption), (width == 0 && { height: 0 }));
        }
        else {
            const currentElemIdx = siblings.findIndex((sibling) => sibling.id === id);
            const forwardSiblingsSize = siblings
                .slice(0, currentElemIdx)
                .filter(({ width, height }) => isViewCompatibleWithSizeOption({
                width: width,
                height: height,
                parentLayout,
                option: 'wrap',
            }))
                .reduce(sumViewSize, 0);
            return Object.assign(Object.assign(Object.assign({}, style), (width === 0 && { height: 0 })), (parentLayout === Layout.Row
                ? {
                    maxWidth: `calc(100% - ${forwardSiblingsSize}px)`,
                }
                : {
                    maxHeight: `calc(100% - ${forwardSiblingsSize}px)`,
                }));
        }
    }, [props.width, props.height, parentLayout, sizes, siblings, style, width, id]);
    return { recalculatedStyle: currentStyle, elemRef };
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const hasValidUrlProtocol = (url = '') => ['http://', 'https://', 'ftp://'].some((protocol) => url.startsWith(protocol));
/**
 * @param url - url to be checked
 * @returns url with http:// protocol if it doesn't have any protocol
 * @example
 * returnUrl('www.sendbird.com') // returns 'http://www.sendbird.com'
 * returnUrl('https://www.sendbird.com') // returns 'https://www.sendbird.com'
 * returnUrl('ftp://www.sendbird.com') // returns 'ftp://www.sendbird.com'
 * returnUrl('sendbird.com') // returns 'https://sendbird.com'
 **/
const returnUrl = (url = '') => {
    if (hasValidUrlProtocol(url)) {
        return url;
    }
    return `https://${url}`;
};
// todo: semantic html here is not perfect, need to revisit. Same for Button
const ActionHandler = ({ children, props, className, style }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { recalculatedStyle, elemRef } = useRecalculateWidth({ style, props });
    const { message, handleWebAction, handleCustomAction, handlePredefinedAction } = useMessageContext();
    const borderClass = ((_a = props.viewStyle) === null || _a === void 0 ? void 0 : _a.borderWidth) ? 'sb-message-template__border' : '';
    const paddingStyles = {
        paddingBlockStart: (_c = (_b = props.viewStyle) === null || _b === void 0 ? void 0 : _b.padding) === null || _c === void 0 ? void 0 : _c.top,
        paddingBlockEnd: (_e = (_d = props.viewStyle) === null || _d === void 0 ? void 0 : _d.padding) === null || _e === void 0 ? void 0 : _e.bottom,
        paddingInlineStart: (_g = (_f = props.viewStyle) === null || _f === void 0 ? void 0 : _f.padding) === null || _g === void 0 ? void 0 : _g.left,
        paddingInlineEnd: (_j = (_h = props.viewStyle) === null || _h === void 0 ? void 0 : _h.padding) === null || _j === void 0 ? void 0 : _j.right,
    };
    const onClick = (e) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_a = props.action) === null || _a === void 0 ? void 0 : _a.type) === 'web') {
            if (handleWebAction) {
                handleWebAction(e, props.action, message);
            }
            else {
                (_c = window === null || window === void 0 ? void 0 : window.open(returnUrl((_b = props === null || props === void 0 ? void 0 : props.action) === null || _b === void 0 ? void 0 : _b.data), '_blank', 'noopener noreferrer')) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
        else if (((_d = props.action) === null || _d === void 0 ? void 0 : _d.type) === 'custom') {
            if (handleCustomAction) {
                handleCustomAction(e, props.action, message);
            }
            else {
                (_f = window === null || window === void 0 ? void 0 : window.open(returnUrl((_e = props === null || props === void 0 ? void 0 : props.action) === null || _e === void 0 ? void 0 : _e.data), '_blank', 'noopener noreferrer')) === null || _f === void 0 ? void 0 : _f.focus();
            }
        }
        else if (((_g = props.action) === null || _g === void 0 ? void 0 : _g.type) === 'uikit') {
            handlePredefinedAction === null || handlePredefinedAction === void 0 ? void 0 : handlePredefinedAction(e, props.action, message);
        }
    };
    if (props.type === ComponentType.TextButton) {
        return (React__default.default.createElement("button", { className: clx(className, borderClass), "data-sb-template-id": props.elementId, style: Object.assign(Object.assign({}, style), paddingStyles), onClick: onClick }, children));
    }
    const { display, flexDirection, justifyContent, alignItems, objectFit } = recalculatedStyle, wrapperStyles = __rest(recalculatedStyle, ["display", "flexDirection", "justifyContent", "alignItems", "objectFit"]);
    return (React__default.default.createElement("div", { ref: elemRef, className: clx(className, borderClass, props.action && 'sb-message-template__action'), "data-sb-template-id": props.elementId, style: wrapperStyles, onClick: onClick },
        React__default.default.createElement("div", { style: Object.assign({ display,
                flexDirection,
                justifyContent,
                alignItems,
                objectFit, width: '100%', height: '100%' }, paddingStyles) }, children)));
};
function clx(...names) {
    return names.filter((it) => !!it).join(' ');
}

/**
 * Text that is fixed or fill parent should be wrapped in a div with max-width: 100% and max-height: 100%
 * This is to prevent text from overflowing the padding of the container
 */
function isFixedOrFill(view) {
    var _a, _b, _c, _d;
    const heightType = (_a = view === null || view === void 0 ? void 0 : view.height) === null || _a === void 0 ? void 0 : _a.type;
    const widthType = (_b = view === null || view === void 0 ? void 0 : view.width) === null || _b === void 0 ? void 0 : _b.type;
    const isFixedDiamension = heightType === 'fixed' || widthType === 'fixed';
    const isFill = (heightType === 'flex' && ((_c = view === null || view === void 0 ? void 0 : view.height) === null || _c === void 0 ? void 0 : _c.value) === FlexSizeSpecValue.FillParent) ||
        (widthType === 'flex' && ((_d = view === null || view === void 0 ? void 0 : view.width) === null || _d === void 0 ? void 0 : _d.value) === FlexSizeSpecValue.FillParent);
    return isFixedDiamension || isFill;
}
function convertNewlinesToBr(text) {
    return text.split('\n').map((line, index) => (React__default.default.createElement(React__default.default.Fragment, { key: index },
        line,
        React__default.default.createElement("br", null))));
}
function renderText(view) {
    const { text, maxTextLines } = view;
    const isToBeWrapped = isFixedOrFill(view);
    const hasMaxLines = typeof maxTextLines === 'number' && maxTextLines > 0;
    const convertedText = convertNewlinesToBr(text);
    if (hasMaxLines || isToBeWrapped) {
        const wrapperStyling = Object.assign(Object.assign({}, ((hasMaxLines || isToBeWrapped) && { maxWidth: '100%' })), (isToBeWrapped && { maxHeight: '100%', overflow: 'hidden' }));
        return (React__default.default.createElement("div", { style: wrapperStyling }, hasMaxLines ? React__default.default.createElement("div", { style: webkitLineClampStyles(maxTextLines) }, convertedText) : convertedText));
    }
    return hasMaxLines ? React__default.default.createElement("div", { style: webkitLineClampStyles(maxTextLines) }, convertedText) : convertedText;
}
const renderer = createRenderer({
    views: {
        box(props) {
            return (React__default.default.createElement(ActionHandler, { className: "sb-message-template__box", elementId: props.elementId, style: props.parsedProperties, props: props }, props.children));
        },
        text(props) {
            return (React__default.default.createElement(ActionHandler, { className: "sb-message-template__text", elementId: props.elementId, style: props.parsedProperties, props: props }, renderText(props)));
        },
        image(props) {
            var _a;
            // todo: add image backup
            return (React__default.default.createElement(ActionHandler, { className: "sb-message-template__image-container", elementId: props.elementId, style: props.parsedProperties, props: props },
                React__default.default.createElement(ReactMessageTemplateImage, { className: "sb-message-template__image", alt: "image", src: props.imageUrl, style: { width: '100%', height: '100%', aspectRatio: 'inherit', objectFit: 'inherit' }, tintColor: (_a = props.imageStyle) === null || _a === void 0 ? void 0 : _a.tintColor, metaData: props.metaData })));
        },
        textButton(props) {
            return (React__default.default.createElement(ActionHandler, { className: "sb-message-template__text-button", elementId: props.elementId, style: props.parsedProperties, props: props }, renderText(Object.assign({ maxTextLines: defaultProperties.textButton.maxTextLines }, props))));
        },
        imageButton(props) {
            var _a;
            return (React__default.default.createElement(ActionHandler, { className: "sb-message-template__image-container sb-message-template__image-button", elementId: props.elementId, style: props.parsedProperties, props: props },
                React__default.default.createElement(ReactMessageTemplateImage, { className: "sb-message-template__image", alt: "image-button", src: props.imageUrl, style: { width: '100%', height: '100%', aspectRatio: 'inherit', objectFit: 'inherit' }, tintColor: (_a = props.imageStyle) === null || _a === void 0 ? void 0 : _a.tintColor, metaData: props.metaData })));
        },
        carouselView(props) {
            var _a, _b;
            return (React__default.default.createElement(Carousel, { maxChildWidth: (_a = props.carouselStyle) === null || _a === void 0 ? void 0 : _a.maxChildWidth, spacing: (_b = props.carouselStyle) === null || _b === void 0 ? void 0 : _b.spacing, style: props.parsedProperties }, props.children));
        },
    },
});
const parser = createParser({
    mapBoxProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setAlign(styles, props.layout, props.align);
        return styles;
    },
    mapTextProps(props, options) {
        var _a;
        const styles = getDefaultStyles({ whiteSpace: 'pre-line', wordBreak: 'break-word' });
        // Better not set flex 1 to text
        setViewProps(styles, props, options);
        setTextStyle(styles, props, options);
        setAlign(styles, Layout.Row, props.align);
        setTextAlign(styles, (_a = props.align) === null || _a === void 0 ? void 0 : _a.horizontal);
        return styles;
    },
    mapImageProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setImageStyle(styles, props.imageStyle);
        setImageAspectRatio(styles, props);
        return styles;
    },
    mapTextButtonProps(props, options) {
        const styles = getDefaultStyles({ whiteSpace: 'pre-line', alignItems: 'center', justifyContent: 'center' });
        setViewProps(styles, props, options);
        setTextStyle(styles, props, options);
        return styles;
    },
    mapImageButtonProps(props, options) {
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        setImageStyle(styles, props.imageStyle);
        setImageAspectRatio(styles, props);
        return styles;
    },
    mapCarouselProps(props, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const styles = getDefaultStyles();
        setViewProps(styles, props, options);
        styles['paddingBlockStart'] = (_b = (_a = props.viewStyle) === null || _a === void 0 ? void 0 : _a.padding) === null || _b === void 0 ? void 0 : _b.top;
        styles['paddingBlockEnd'] = (_d = (_c = props.viewStyle) === null || _c === void 0 ? void 0 : _c.padding) === null || _d === void 0 ? void 0 : _d.bottom;
        styles['paddingInlineStart'] = (_f = (_e = props.viewStyle) === null || _e === void 0 ? void 0 : _e.padding) === null || _f === void 0 ? void 0 : _f.left;
        styles['paddingInlineEnd'] = (_h = (_g = props.viewStyle) === null || _g === void 0 ? void 0 : _g.padding) === null || _h === void 0 ? void 0 : _h.right;
        return styles;
    },
});
createMessageTemplate({
    renderer,
    parser,
    Container: ({ children, className }) => {
        return (React__default.default.createElement("div", { className: `sb-message-template__parent ${className}`, style: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
                marginBlockEnd: 24,
            } }, children));
    },
});

var CustomTemplate = createMessageTemplate({
    parser: parser,
    renderer: renderer,
    Container: function (_a) {
        var children = _a.children, className = _a.className;
        return (React__default.default.createElement("div", { className: [
                "sb-message-template__parent ".concat(className),
                'sendbird-message-template__root',
            ].join(' ') }, children));
    },
}).MessageTemplate;
function MessageTemplate(_a) {
    var templateItems = _a.templateItems, templateVersion = _a.templateVersion;
    return React__default.default.createElement(CustomTemplate, { templateItems: templateItems, templateVersion: templateVersion });
}

exports.MessageProvider = MessageProvider;
exports.MessageTemplate = MessageTemplate;
//# sourceMappingURL=bundle-Dd_liLM9.js.map
