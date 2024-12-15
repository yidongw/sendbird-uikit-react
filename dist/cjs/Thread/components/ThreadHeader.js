'use strict';

var React = require('react');
var ui_Icon = require('../../ui/Icon.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Header = require('../../ui/Header.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/IconButton.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ThreadHeader(_a) {
    var className = _a.className, channelName = _a.channelName, renderActionIcon = _a.renderActionIcon, onActionIconClick = _a.onActionIconClick, onChannelNameClick = _a.onChannelNameClick;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var MemoizedActionIcon = React.useMemo(function () {
        if (typeof renderActionIcon === 'function' && onActionIconClick) {
            return renderActionIcon({ onActionIconClick: onActionIconClick });
        }
        return null;
    }, [renderActionIcon]);
    return (React__default.default.createElement(ui_Header.default, { className: "sendbird-thread-header ".concat(className), renderMiddle: function () { return (React__default.default.createElement(ui_Header.default.Title, { title: stringSet.THREAD__HEADER_TITLE, subtitle: channelName, onClickSubtitle: onChannelNameClick })); }, renderRight: function () { return (MemoizedActionIcon || (React__default.default.createElement("div", { className: "sendbird-thread-header__action" },
            React__default.default.createElement(ui_Header.default.IconButton, { onClick: function (e) { return onActionIconClick(e); }, type: ui_Icon.IconTypes.CLOSE, color: ui_Icon.IconColors.ON_BACKGROUND_1 })))); } }));
}

module.exports = ThreadHeader;
//# sourceMappingURL=ThreadHeader.js.map
