import { c as __spreadArray } from '../chunks/bundle-HcNswZ5p.js';
import React__default, { useContext } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-dybWaw0v.js';

function Badge(_a) {
    var count = _a.count, _b = _a.maxLevel, maxLevel = _b === void 0 ? 2 : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    var stringSet = useContext(LocalizationContext).stringSet;
    var maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
    return (React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-badge',
        ], false).join(' ') },
        React__default.createElement("div", { className: "sendbird-badge__text" },
            React__default.createElement(Label, { type: LabelTypography.CAPTION_2, color: LabelColors.ONCONTENT_1 }, typeof count === 'string'
                ? count
                : count > maximumNumber
                    ? "".concat(maximumNumber).concat(stringSet.BADGE__OVER)
                    : count))));
}

export { Badge as default };
//# sourceMappingURL=Badge.js.map
