import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography } from '../../chunks/bundle-Qkp2VIaZ.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';

var FrozenNotification = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React__default.createElement(Label, { className: "sendbird-frozen-channel-notification__text", type: LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenChannelNotification.js.map
