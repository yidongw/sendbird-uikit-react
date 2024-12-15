var ONE_MiB = 1024 * 1024;
var SCROLL_BUFFER = 10;
var SCROLL_BOTTOM_DELAY_FOR_SEND = 100;
var SCROLL_BOTTOM_DELAY_FOR_FETCH = 100;
// voice message record
var VOICE_RECORDER_CLICK_BUFFER_TIME = 250;
var VOICE_RECORDER_DEFAULT_MIN = 1000; // 1 seconds
var VOICE_RECORDER_DEFAULT_MAX = 600000; // 10 minutes
var VOICE_RECORDER_AUDIO_BIT_RATE = 12000;
var VOICE_RECORDER_AUDIO_SAMPLE_RATE = 11025;
var BROWSER_SUPPORT_MIME_TYPE_LIST = ['audio/webm', 'audio/mp4', 'audio/mpeg', 'audio/ogg'];
/**
 * Append Audio element to the root
 * because I can't get the Audio element in the useEffect unmount scope
 */
var VOICE_PLAYER_ROOT_ID = 'sendbird-voice-player-provider-root';
var VOICE_PLAYER_AUDIO_ID = 'sendbird-global-audio-player-id';
// voice message file
var VOICE_MESSAGE_FILE_NAME = 'Voice_message.mp3';
var VOICE_MESSAGE_FILE_NAME__XM4A = 'Voice_message.m4a';
var VOICE_MESSAGE_MIME_TYPE = 'audio/mp3;sbu_type=voice';
var VOICE_MESSAGE_MIME_TYPE__XM4A = 'audio/x-m4a;sbu_type=voice';
// meta array
var META_ARRAY_VOICE_DURATION_KEY = 'KEY_VOICE_MESSAGE_DURATION';
var META_ARRAY_MESSAGE_TYPE_KEY = 'KEY_INTERNAL_MESSAGE_TYPE';
var META_ARRAY_MESSAGE_TYPE_VALUE__VOICE = 'voice/mp3';
// delivery receipt in feature list
var DELIVERY_RECEIPT = 'delivery_receipt';
// file viewer slider
var SLIDER_BUTTON_ICON_SIDE_LENGTH = '32px';
// multiple files message file info count limit
var DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT = 10;
var DEFAULT_UPLOAD_SIZE_LIMIT = 25 * 1024 * 1024;
// Local storage item key for sdk templates token
var CACHED_MESSAGE_TEMPLATES_TOKEN_KEY = 'sendbird_message_templates_token_key';
// Local storage item key for templates in JSON string form
var CACHED_MESSAGE_TEMPLATES_KEY = 'sendbird_message_templates_key';
var MESSAGE_TEMPLATE_KEY = 'message_template';

export { BROWSER_SUPPORT_MIME_TYPE_LIST as B, CACHED_MESSAGE_TEMPLATES_TOKEN_KEY as C, DELIVERY_RECEIPT as D, META_ARRAY_VOICE_DURATION_KEY as M, ONE_MiB as O, SCROLL_BUFFER as S, VOICE_PLAYER_AUDIO_ID as V, VOICE_MESSAGE_MIME_TYPE as a, VOICE_RECORDER_AUDIO_SAMPLE_RATE as b, SCROLL_BOTTOM_DELAY_FOR_FETCH as c, SCROLL_BOTTOM_DELAY_FOR_SEND as d, VOICE_MESSAGE_FILE_NAME as e, META_ARRAY_MESSAGE_TYPE_KEY as f, META_ARRAY_MESSAGE_TYPE_VALUE__VOICE as g, MESSAGE_TEMPLATE_KEY as h, VOICE_RECORDER_CLICK_BUFFER_TIME as i, VOICE_RECORDER_DEFAULT_MIN as j, VOICE_MESSAGE_FILE_NAME__XM4A as k, VOICE_MESSAGE_MIME_TYPE__XM4A as l, VOICE_PLAYER_ROOT_ID as m, SLIDER_BUTTON_ICON_SIDE_LENGTH as n, VOICE_RECORDER_AUDIO_BIT_RATE as o, CACHED_MESSAGE_TEMPLATES_KEY as p, DEFAULT_MULTIPLE_FILES_MESSAGE_LIMIT as q, DEFAULT_UPLOAD_SIZE_LIMIT as r, VOICE_RECORDER_DEFAULT_MAX as s };
//# sourceMappingURL=bundle-DgxVBBM3.js.map
