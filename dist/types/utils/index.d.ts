import SendbirdChat, { Emoji, EmojiContainer, User } from '@sendbird/chat';
import { GroupChannel, SendbirdGroupChat, GroupChannelListQuery, GroupChannelListOrder } from '@sendbird/chat/groupChannel';
import { AdminMessage, BaseMessage, FileMessage, MessageListParams, MultipleFilesMessage, Reaction, UploadedFileInfo, UserMessage } from '@sendbird/chat/message';
import { OpenChannel, SendbirdOpenChat } from '@sendbird/chat/openChannel';
import { HTMLTextDirection, Nullable } from '../types';
import { TemplateType } from '../ui/TemplateMessageItemBody/types';
export declare const SUPPORTED_MIMES: {
    IMAGE: string[];
    VIDEO: string[];
    AUDIO: string[];
    DOCUMENT: string[];
    APPLICATION: string[];
    ARCHIVE: string[];
};
export declare const SUPPORTED_FILE_EXTENSIONS: {
    IMAGE: string[];
    VIDEO: string[];
    AUDIO: string[];
    DOCUMENT: string[];
    ARCHIVE: string[];
};
export declare const getMimeTypesUIKitAccepts: (acceptableTypes?: string[]) => string;
export interface UIKitMessageTypes {
    ADMIN: 'ADMIN';
    TEXT: 'TEXT';
    FILE: 'FILE';
    MULTIPLE_FILES: 'MULTIPLE_FILES';
    THUMBNAIL: 'THUMBNAIL';
    OG: 'OG';
    UNKNOWN: 'UNKNOWN';
}
export declare const UIKitMessageTypes: UIKitMessageTypes;
export interface UIKitFileTypes {
    IMAGE: 'IMAGE';
    AUDIO: 'AUDIO';
    VIDEO: 'VIDEO';
    GIF: 'GIF';
    VOICE: 'VOICE';
    OTHERS: 'OTHERS';
}
export declare const UIKitFileTypes: UIKitFileTypes;
export interface SendingMessageStatus {
    NONE: 'none';
    SUCCEEDED: 'succeeded';
    FAILED: 'failed';
    PENDING: 'pending';
}
export type CoreMessageType = AdminMessage | UserMessage | FileMessage | MultipleFilesMessage;
export type SendableMessageType = UserMessage | FileMessage | MultipleFilesMessage;
export declare const isTextuallyNull: (text: string) => boolean;
export declare const isMOVType: (type: string) => boolean;
/**
 * @link: https://sendbird.atlassian.net/browse/SBISSUE-16031?focusedCommentId=270601
 * We limitedly support .mov file type for ThumbnailMessage only in Safari browser.
 * */
export declare const isSupportedVideoFileTypeInSafari: (type: string) => boolean;
export declare const isImage: (type: string) => boolean;
export declare const isVideo: (type: string) => boolean;
export declare const isGif: (type: string) => boolean;
export declare const isSupportedFileView: (type: string) => boolean;
export declare const isAudio: (type: string) => boolean;
export declare const getUIKitFileTypes: () => UIKitFileTypes;
export declare const getUIKitFileType: (type: string) => string;
export declare const isSentMessage: (message: SendableMessageType) => boolean;
export declare const isDeliveredMessage: (channel: GroupChannel, message: SendableMessageType) => boolean;
export declare const isReadMessage: (channel: GroupChannel, message: SendableMessageType) => boolean;
export declare const isFailedMessage: (message: SendableMessageType) => boolean;
export declare const isPendingMessage: (message: SendableMessageType) => boolean;
export declare const isSentStatus: (state: string) => boolean;
export declare const isAdminMessage: (message: CoreMessageType) => message is AdminMessage;
export declare const isUserMessage: (message: CoreMessageType) => message is UserMessage;
export declare const isFileMessage: (message?: CoreMessageType) => message is FileMessage;
export declare const isMultipleFilesMessage: (message?: CoreMessageType) => message is MultipleFilesMessage;
export declare const isParentMessage: (message: CoreMessageType) => boolean;
export declare const isThreadMessage: (message: CoreMessageType) => boolean;
export declare const isFormMessage: (message: CoreMessageType) => boolean;
export declare const isTemplateMessage: (message: CoreMessageType) => boolean;
export declare const isValidTemplateMessageType: (templatePayload: unknown) => boolean;
export declare const MessageTemplateTypes: Record<TemplateType, TemplateType>;
export declare const uiContainerType: {
    default: string;
};
export declare const isOGMessage: (message: CoreMessageType) => message is UserMessage;
export declare const isTextMessage: (message: CoreMessageType) => message is UserMessage;
export declare const isThumbnailMessage: (message: CoreMessageType) => message is FileMessage;
export declare const isImageMessage: (message: SendableMessageType) => message is FileMessage;
export declare const isVideoMessage: (message: SendableMessageType) => message is FileMessage;
export declare const isGifMessage: (message: SendableMessageType) => message is FileMessage;
export declare const isAudioMessage: (message: CoreMessageType) => message is FileMessage;
export declare const isImageFileInfo: (fileInfo: UploadedFileInfo) => boolean;
export declare const isAudioMessageMimeType: (type: string) => boolean;
export declare const isVoiceMessageMimeType: (type: string) => boolean;
export declare const isVoiceMessage: (message: Nullable<CoreMessageType>) => boolean;
export declare const isEditedMessage: (message: CoreMessageType) => boolean;
export declare const isEnabledOGMessage: (message: UserMessage) => boolean;
export declare const getUIKitMessageTypes: () => UIKitMessageTypes;
/**
 * Do not use this for MultipleFilesMessage. Use isMultipleFilesMessage() instead.
 */
export declare const getUIKitMessageType: (message: CoreMessageType) => string;
/**
 * @deprecated use SendingStatus of @sendbird/chat instead
 * */
export declare const getSendingMessageStatus: () => SendingMessageStatus;
export declare const getClassName: (classNames: string | Array<string | Array<string>>) => string;
export declare const startsWithAtAndEndsWithBraces: (str: string) => boolean;
export declare const removeAtAndBraces: (str: string) => string;
export declare const isReactedBy: (userId: string, reaction: Reaction) => boolean;
interface StringSet {
    TOOLTIP__YOU: string;
    TOOLTIP__AND_YOU: string;
    TOOLTIP__UNKNOWN_USER: string;
}
export declare const getEmojiTooltipString: (reaction: Reaction, userId: string, memberNicknamesMap: Map<string, string>, stringSet: StringSet) => string;
interface UIKitStore {
    stores: {
        sdkStore: {
            sdk: SendbirdChat | SendbirdOpenChat | SendbirdGroupChat;
        };
        userStore: {
            user: User;
        };
    };
    config: {
        isReactionEnabled: boolean;
        htmlTextDirection: HTMLTextDirection;
        forceLeftToRightMessageLayout: boolean;
    };
}
export declare const getCurrentUserId: (store: UIKitStore) => string;
export declare const getUseReaction: (store: UIKitStore, channel: GroupChannel | OpenChannel) => boolean;
export declare function getSuggestedReplies(message?: BaseMessage): string[];
export declare const isMessageSentByMe: (userId: string, message: SendableMessageType) => boolean;
/** @deprecated
 * URL detection in a message text will be handled in utils/tokens/tokenize.ts
 */
export declare const isUrl: (text: string) => boolean;
export declare const isMentionedText: (text: string) => boolean;
export declare const truncateString: (fullStr: string, strLen?: number) => string;
export declare const copyToClipboard: (text: string) => boolean;
export declare const getEmojiListAll: (emojiContainer: EmojiContainer) => Array<Emoji>;
export declare const getEmojiMapAll: (emojiContainer: EmojiContainer) => Map<string, Emoji>;
export declare const getEmojiListByCategoryIds: (emojiContainer: EmojiContainer, categoryIds: number[]) => Array<Emoji>;
export declare const getEmojiUrl: (emojiContainer?: EmojiContainer, emojiKey?: string) => string;
export declare const getUserName: (user: User) => string;
export declare const getSenderName: (message: SendableMessageType) => string;
export declare const hasSameMembers: <T>(a: T[], b: T[]) => boolean;
export declare const isFriend: (user: Nullable<User>) => boolean;
export declare const filterMessageListParams: (params: MessageListParams, message: SendableMessageType) => boolean;
export declare const filterChannelListParams: (params: GroupChannelListQuery, channel: GroupChannel, currentUserId: string) => boolean;
export declare const sortChannelList: (channels: GroupChannel[], order: GroupChannelListOrder) => GroupChannel[];
/**
 * Upserts given channel to the channel list and then returns the sorted channel list.
 */
export declare const getChannelsWithUpsertedChannel: (_channels: Array<GroupChannel>, channel: GroupChannel, order?: GroupChannelListOrder) => Array<GroupChannel>;
export declare const getMatchedUserIds: (word: string, users: Array<User>, _template?: string) => boolean;
export declare enum StringObjType {
    normal = "normal",
    mention = "mention",
    url = "url"
}
export interface StringObj {
    type: StringObjType;
    value: string;
    userId?: string;
}
/**
 * @deprecated
 * use modules/message/utils/tokenize instead
 */
export declare const convertWordToStringObj: (word: string, _users: Array<User>, _template?: string) => Array<StringObj>;
export declare const arrayEqual: (array1: Array<unknown>, array2: Array<unknown>) => boolean;
export declare const isSendableMessage: (message?: BaseMessage | null) => message is SendableMessageType;
/**
 * If the channel is just created, the channel's createdAt and currentUser's invitedAt are the same.
 */
export declare const isChannelJustCreated: (channel: GroupChannel) => boolean;
export declare const getHTMLTextDirection: (direction: HTMLTextDirection, forceLeftToRightMessageLayout: boolean) => string;
export declare const DEFAULT_GROUP_CHANNEL_NAME = "Group Channel";
export declare const DEFAULT_AI_CHATBOT_CHANNEL_NAME = "AI Chatbot Widget Channel";
export declare const isDefaultChannelName: (channel: GroupChannel) => boolean;
export {};
