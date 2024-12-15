'use strict';

var React = require('react');
var GroupChannelList_components_GroupChannelListHeader = require('../GroupChannelList/components/GroupChannelListHeader.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var EditUserProfile = require('../EditUserProfile.js');
var ui_PlaceHolder = require('../ui/PlaceHolder.js');
var index = require('./bundle-CvCKKQx5.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListUIView = function (_a) {
    var renderHeader = _a.renderHeader, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, onChangeTheme = _a.onChangeTheme, onUserProfileUpdated = _a.onUserProfileUpdated, allowProfileEdit = _a.allowProfileEdit, channels = _a.channels, onLoadMore = _a.onLoadMore, initialized = _a.initialized, renderChannel = _a.renderChannel, renderAddChannel = _a.renderAddChannel, scrollRef = _a.scrollRef;
    var _b = React.useState(false), showProfileEdit = _b[0], setShowProfileEdit = _b[1];
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var renderer = {
        addChannel: renderAddChannel,
        channel: renderChannel,
        placeholder: {
            loading: function () {
                if (initialized)
                    return null;
                if (renderPlaceHolderLoading)
                    return renderPlaceHolderLoading();
                return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING });
            },
            empty: function () {
                if (!initialized)
                    return null;
                if (renderPlaceHolderEmptyList)
                    return renderPlaceHolderEmptyList();
                return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS });
            },
            error: function () {
                if (!initialized || !stores.sdkStore.error)
                    return null;
                if (renderPlaceHolderError)
                    return renderPlaceHolderError();
                return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG });
            },
        },
    };
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: "sendbird-channel-list__header" }, (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || (React__default.default.createElement(GroupChannelList_components_GroupChannelListHeader.GroupChannelListHeader, { onEdit: function () { return allowProfileEdit && setShowProfileEdit(true); }, allowProfileEdit: allowProfileEdit, renderIconButton: function () { return renderer.addChannel(); } }))),
        showProfileEdit && (React__default.default.createElement(EditUserProfile, { onThemeChange: onChangeTheme, onCancel: function () { return setShowProfileEdit(false); }, onEditProfile: function (user) {
                setShowProfileEdit(false);
                onUserProfileUpdated(user);
            } })),
        React__default.default.createElement(ChannelListComponent, { data: channels, renderItem: renderer.channel, onLoadMore: onLoadMore, placeholderLoading: renderer.placeholder.loading(), placeholderEmpty: renderer.placeholder.empty(), placeholderError: renderer.placeholder.error(), scrollRef: scrollRef })));
};
/**
 * To do: Implement windowing
 * Implement windowing if you are dealing with large number of messages/channels
 * https://github.com/bvaughn/react-window -> recommendation
 * We hesitate to bring one more dependency to our library,
 * we are planning to implement it inside the library
 * */
var ChannelListComponent = function (props) {
    var data = props.data, renderItem = props.renderItem, onLoadMore = props.onLoadMore, placeholderLoading = props.placeholderLoading, placeholderError = props.placeholderError, placeholderEmpty = props.placeholderEmpty, scrollRef = props.scrollRef;
    var onScroll = index.useOnScrollPositionChangeDetector({
        onReachedBottom: function () { return onLoadMore === null || onLoadMore === void 0 ? void 0 : onLoadMore(); },
    });
    return (React__default.default.createElement("div", { className: 'sendbird-channel-list__body', onScroll: onScroll, ref: scrollRef },
        placeholderError,
        React__default.default.createElement("div", null, data.map(function (item, index) { return renderItem({ item: item, index: index }); })),
        placeholderLoading,
        data.length === 0 && placeholderEmpty));
};

exports.GroupChannelListUIView = GroupChannelListUIView;
//# sourceMappingURL=bundle-CkC2GGZG.js.map
