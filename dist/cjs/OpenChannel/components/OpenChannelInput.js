'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../chunks/bundle-D8WonUC2.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Ivv-MORg.js');
require('../../chunks/bundle-BvFqbvri.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannelInput = React__default.default.forwardRef(function (props, ref) {
    var _a = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, disabled = _a.disabled, handleSendMessage = _a.handleSendMessage, handleFileUpload = _a.handleFileUpload, amIMuted = _a.amIMuted;
    var channel = currentOpenChannel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var value = props.value;
    function getPlaceHolderString() {
        if (amIMuted) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED;
        }
        if (disabled) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED;
        }
        return '';
    }
    if (!channel) {
        return null;
    }
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-footer" },
        React__default.default.createElement(ui_MessageInput, { channel: currentOpenChannel, ref: ref, value: value, disabled: disabled, isVoiceMessageEnabled: false, onSendMessage: handleSendMessage, onFileUpload: handleFileUpload, placeholder: getPlaceHolderString() })));
});

module.exports = OpenChannelInput;
//# sourceMappingURL=OpenChannelInput.js.map
