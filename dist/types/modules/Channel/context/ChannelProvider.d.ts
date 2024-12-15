import React from 'react';
import type { GroupChannel, Member } from '@sendbird/chat/groupChannel';
import type { BaseMessage, FileMessage, FileMessageCreateParams, MultipleFilesMessage, MultipleFilesMessageCreateParams, UserMessage, UserMessageCreateParams, UserMessageUpdateParams, MessageListParams as SDKMessageListParams } from '@sendbird/chat/message';
import type { EmojiContainer, SendbirdError, User } from '@sendbird/chat';
import { ReplyType, Nullable } from '../../../types';
import { UserProfileProviderProps } from '../../../lib/UserProfileContext';
import { CoreMessageType, SendableMessageType } from '../../../utils';
import { ThreadReplySelectType } from './const';
import * as channelActions from './dux/actionTypes';
import { ChannelActionTypes } from './dux/actionTypes';
export { ThreadReplySelectType } from './const';
export interface MessageListParams extends Partial<SDKMessageListParams> {
    /** @deprecated It won't work even if you activate this props */
    reverse?: boolean;
}
export type ChannelQueries = {
    messageListParams?: MessageListParams;
};
export interface ChannelContextProps extends Pick<UserProfileProviderProps, 'disableUserProfile' | 'renderUserProfile'> {
    children?: React.ReactElement;
    channelUrl: string;
    isReactionEnabled?: boolean;
    isMessageGroupingEnabled?: boolean;
    isMultipleFilesMessageEnabled?: boolean;
    showSearchIcon?: boolean;
    animatedMessage?: number | null;
    highlightedMessage?: number | null;
    startingPoint?: number | null;
    onBeforeSendUserMessage?(text: string, quotedMessage?: SendableMessageType): UserMessageCreateParams;
    onBeforeSendFileMessage?(file: File, quotedMessage?: SendableMessageType): FileMessageCreateParams;
    onBeforeUpdateUserMessage?(text: string): UserMessageUpdateParams;
    onBeforeSendVoiceMessage?: (file: File, quotedMessage?: SendableMessageType) => FileMessageCreateParams;
    onBeforeSendMultipleFilesMessage?: (files: Array<File>, quotedMessage?: SendableMessageType) => MultipleFilesMessageCreateParams;
    onChatHeaderActionClick?(event: React.MouseEvent<HTMLElement>): void;
    onSearchClick?(): void;
    onBackClick?(): void;
    replyType?: ReplyType;
    threadReplySelectType?: ThreadReplySelectType;
    queries?: ChannelQueries;
    filterMessageList?(messages: BaseMessage): boolean;
    disableMarkAsRead?: boolean;
    onReplyInThread?: (props: {
        message: SendableMessageType;
    }) => void;
    onQuoteMessageClick?: (props: {
        message: SendableMessageType;
    }) => void;
    onMessageAnimated?: () => void;
    onMessageHighlighted?: () => void;
    scrollBehavior?: 'smooth' | 'auto';
    reconnectOnIdle?: boolean;
}
interface MessageStoreInterface {
    allMessages: CoreMessageType[];
    localMessages: CoreMessageType[];
    loading: boolean;
    initialized: boolean;
    /** @deprecated Please use `unreadSinceDate` instead * */
    unreadSince: string;
    unreadSinceDate: Date | null;
    isInvalid: boolean;
    currentGroupChannel: Nullable<GroupChannel>;
    hasMorePrev: boolean;
    oldestMessageTimeStamp: number;
    hasMoreNext: boolean;
    latestMessageTimeStamp: number;
    emojiContainer: EmojiContainer;
    readStatus: any;
    typingMembers: Member[];
}
interface SendMessageParams {
    message: string;
    quoteMessage?: SendableMessageType;
    mentionedUsers?: User[];
    mentionTemplate?: string;
}
interface UpdateMessageParams {
    messageId: number;
    message: string;
    mentionedUsers?: User[];
    mentionTemplate?: string;
}
export type SendMessageType = (params: SendMessageParams) => void;
export type UpdateMessageType = (props: UpdateMessageParams, callback?: (err: SendbirdError, message: UserMessage) => void) => void;
export interface ChannelProviderInterface extends ChannelContextProps, MessageStoreInterface {
    scrollToMessage(createdAt: number, messageId: number): void;
    isScrolled?: boolean;
    setIsScrolled?: React.Dispatch<React.SetStateAction<boolean>>;
    messageActionTypes: typeof channelActions;
    messagesDispatcher: React.Dispatch<ChannelActionTypes>;
    quoteMessage: SendableMessageType | null;
    setQuoteMessage: React.Dispatch<React.SetStateAction<SendableMessageType | null>>;
    initialTimeStamp: number | null | undefined;
    setInitialTimeStamp: React.Dispatch<React.SetStateAction<number | null | undefined>>;
    animatedMessageId: number | null;
    highLightedMessageId: number | null | undefined;
    nicknamesMap: Map<string, string>;
    emojiAllMap: any;
    onScrollCallback: (callback: () => void) => void;
    onScrollDownCallback: (callback: (param: [BaseMessage[], null] | [null, unknown]) => void) => void;
    scrollRef: React.RefObject<HTMLDivElement>;
    setAnimatedMessageId: React.Dispatch<React.SetStateAction<number | null>>;
    setHighLightedMessageId: React.Dispatch<React.SetStateAction<number | null | undefined>>;
    messageInputRef: React.RefObject<HTMLInputElement>;
    deleteMessage(message: CoreMessageType): Promise<void>;
    updateMessage: UpdateMessageType;
    resendMessage(failedMessage: SendableMessageType): void;
    sendMessage: SendMessageType;
    sendFileMessage: (file: File, quoteMessage?: SendableMessageType) => Promise<FileMessage>;
    sendVoiceMessage: (file: File, duration: number, quoteMessage?: SendableMessageType) => Promise<FileMessage>;
    sendMultipleFilesMessage: (files: Array<File>, quoteMessage?: SendableMessageType) => Promise<MultipleFilesMessage>;
    toggleReaction(message: SendableMessageType, emojiKey: string, isReacted: boolean): void;
    renderUserMentionItem?: (props: {
        user: User;
    }) => JSX.Element;
}
/**
 * @deprecated This provider is deprecated and will be removed in the next major update.
 * Please use the `GroupChannelProvider` from '@sendbird/uikit-react/GroupChannel' instead.
 * For more information, please refer to the migration guide:
 * https://docs.sendbird.com/docs/chat/uikit/v3/react/introduction/group-channel-migration-guide
 */
declare const ChannelProvider: (props: ChannelContextProps) => React.JSX.Element;
declare const useChannelContext: () => ChannelProviderInterface;
export { ChannelProvider, useChannelContext, };
