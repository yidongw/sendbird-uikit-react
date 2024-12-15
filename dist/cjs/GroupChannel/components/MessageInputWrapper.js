'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-CdcQAzUs.js');
var GroupChannel_context = require('../context.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('./SuggestedMentionList.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-DEjC6RIv.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-BL2PtzAF.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../chunks/bundle-BdRSDnh9.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CVdJh4P7.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MessageInputWrapper = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return React__default.default.createElement(MessageInputWrapperView.MessageInputWrapperView, _tslib.__assign({}, props, context));
};

exports.VoiceMessageInputWrapper = MessageInputWrapperView.VoiceMessageInputWrapper;
exports.MessageInputWrapper = MessageInputWrapper;
exports.default = MessageInputWrapper;
//# sourceMappingURL=MessageInputWrapper.js.map
