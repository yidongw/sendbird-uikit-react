import { _ as __assign } from './bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { S as SuggestedMentionListView } from './bundle-KZzhMils.js';
import { useThreadContext } from '../Thread/context.js';

var SuggestedMentionList = function (props) {
    var currentChannel = useThreadContext().currentChannel;
    return (React__default.createElement(SuggestedMentionListView, __assign({}, props, { currentChannel: currentChannel })));
};

export { SuggestedMentionList as S };
//# sourceMappingURL=bundle-C_hBU-VS.js.map
