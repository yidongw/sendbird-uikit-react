import { _ as __assign } from '../../chunks/bundle-HcNswZ5p.js';
import React__default, { useState } from 'react';
import { L as Label } from '../../chunks/bundle-Qkp2VIaZ.js';
import Icon from '../../ui/Icon.js';
import { i as isOperator } from '../../chunks/bundle-D-F3KakE.js';
import { MenuItem } from './ChannelSettingsMenuItem.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DhMUg-L7.js';
import '@sendbird/chat/groupChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-zVlBKrSk.js';

var MenuListByRole = function (_a) {
    var menuItems = _a.menuItems;
    var channel = useChannelSettingsContext().channel;
    var menuItemsByRole = isOperator(channel) ? menuItems.operator : menuItems.nonOperator;
    // State to track the open accordion key
    var _b = useState(null), openAccordionKey = _b[0], setOpenAccordionKey = _b[1];
    return (React__default.createElement("div", { className: "sendbird-channel-settings__operator" }, Object.entries(menuItemsByRole).map(function (_a) {
        var key = _a[0], item = _a[1];
        if (item.hideMenu)
            return null;
        return (React__default.createElement(MenuItem, { key: key, onClick: item.onClick, onKeyDown: item.onKeyDown, renderLeft: function () { return React__default.createElement(Icon, __assign({}, item.icon)); }, renderMiddle: function () { return React__default.createElement(Label, __assign({}, item.label)); }, renderRight: item.rightComponent, renderAccordion: item.accordionComponent, accordionOpened: openAccordionKey === key, setAccordionOpened: function () {
                setOpenAccordionKey(function (prevKey) { return (prevKey === key ? null : key); });
            } }));
    })));
};

export { MenuListByRole, MenuListByRole as default };
//# sourceMappingURL=ChannelSettingMenuList.js.map
