import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useState } from 'react';
import { L as Label } from '../../chunks/bundle-Di0Zwz2X.js';
import Icon from '../../ui/Icon.js';
import { i as isOperator } from '../../chunks/bundle-DnsBu59R.js';
import { MenuItem } from './ChannelSettingsMenuItem.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-pQHYhigr.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CbLNLMef.js';
import '@sendbird/chat/groupChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';

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
