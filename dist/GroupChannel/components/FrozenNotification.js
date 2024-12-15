import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-Qkp2VIaZ.js';
import { c as classnames } from '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';

var FrozenNotification = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: classnames('sendbird-notification', 'sendbird-notification--frozen', className), "data-testid": "sendbird-notification" },
        React__default.createElement(Label, { className: "sendbird-notification__text", testID: "sendbird-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification, FrozenNotification as default };
//# sourceMappingURL=FrozenNotification.js.map
