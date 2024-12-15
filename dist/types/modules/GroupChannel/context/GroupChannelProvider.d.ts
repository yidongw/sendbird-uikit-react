import React from 'react';
import type { EmojiCategory, SendbirdError, User } from '@sendbird/chat';
import { type FileMessage, FileMessageCreateParams, type MultipleFilesMessage, MultipleFilesMessageCreateParams, UserMessageCreateParams, UserMessageUpdateParams } from '@sendbird/chat/message';
import type { GroupChannel, MessageCollectionParams, MessageFilterParams } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import type { SendableMessageType } from '../../../utils';
import { UserProfileProviderProps } from '../../../lib/UserProfileContext';
import { ThreadReplySelectType } from './const';
import { ReplyType } from '../../../types';
import { ScrollTopics, ScrollTopicUnion } from './hooks/useMessageListScroll';
import { PubSubTypes } from '../../../lib/pubSub';
import { useMessageActions } from './hooks/useMessageActions';
export { ThreadReplySelectType } from './const';
export type OnBeforeHandler<T> = (params: T) => T | Promise<T> | void | Promise<void>;
type MessageListQueryParamsType = Omit<MessageCollectionParams, 'filter'> & MessageFilterParams;
type MessageActions = ReturnType<typeof useMessageActions>;
type MessageListDataSourceWithoutActions = Omit<ReturnType<typeof useGroupChannelMessages>, keyof MessageActions | `_dangerous_${string}`>;
export type OnBeforeDownloadFileMessageType = (params: {
    message: FileMessage | MultipleFilesMessage;
    index?: number;
}) => Promise<boolean>;
interface ContextBaseType extends Pick<UserProfileProviderProps, 'renderUserProfile' | 'disableUserProfile'> {
    channelUrl: string;
    isReactionEnabled?: boolean;
    isMessageGroupingEnabled?: boolean;
    isMultipleFilesMessageEnabled?: boolean;
    showSearchIcon?: boolean;
    replyType?: ReplyType;
    threadReplySelectType?: ThreadReplySelectType;
    disableMarkAsRead?: boolean;
    scrollBehavior?: 'smooth' | 'auto';
    forceLeftToRightMessageLayout?: boolean;
    startingPoint?: number;
    animatedMessageId?: number | null;
    onMessageAnimated?: () => void;
    messageListQueryParams?: MessageListQueryParamsType;
    filterEmojiCategoryIds?: (message: SendableMessageType) => EmojiCategory['id'][];
    onBeforeSendUserMessage?: OnBeforeHandler<UserMessageCreateParams>;
    onBeforeSendFileMessage?: OnBeforeHandler<FileMessageCreateParams>;
    onBeforeSendVoiceMessage?: OnBeforeHandler<FileMessageCreateParams>;
    onBeforeSendMultipleFilesMessage?: OnBeforeHandler<MultipleFilesMessageCreateParams>;
    onBeforeUpdateUserMessage?: OnBeforeHandler<UserMessageUpdateParams>;
    onBeforeDownloadFileMessage?: OnBeforeDownloadFileMessageType;
    onBackClick?(): void;
    onChatHeaderActionClick?(event: React.MouseEvent<HTMLElement>): void;
    onReplyInThreadClick?: (props: {
        message: SendableMessageType;
    }) => void;
    onSearchClick?(): void;
    onQuoteMessageClick?: (props: {
        message: SendableMessageType;
    }) => void;
    renderUserMentionItem?: (props: {
        user: User;
    }) => JSX.Element;
}
export interface GroupChannelContextType extends ContextBaseType, MessageListDataSourceWithoutActions, MessageActions {
    currentChannel: GroupChannel | null;
    fetchChannelError: SendbirdError | null;
    nicknamesMap: Map<string, string>;
    scrollRef: React.RefObject<HTMLDivElement>;
    scrollDistanceFromBottomRef: React.MutableRefObject<number>;
    scrollPositionRef: React.MutableRefObject<number>;
    scrollPubSub: PubSubTypes<ScrollTopics, ScrollTopicUnion>;
    messageInputRef: React.RefObject<HTMLDivElement>;
    quoteMessage: SendableMessageType | null;
    setQuoteMessage: React.Dispatch<React.SetStateAction<SendableMessageType | null>>;
    animatedMessageId: number | null;
    setAnimatedMessageId: React.Dispatch<React.SetStateAction<number | null>>;
    isScrollBottomReached: boolean;
    setIsScrollBottomReached: React.Dispatch<React.SetStateAction<boolean>>;
    scrollToBottom: (animated?: boolean) => void;
    scrollToMessage: (createdAt: number, messageId: number) => void;
    toggleReaction(message: SendableMessageType, emojiKey: string, isReacted: boolean): void;
}
export interface GroupChannelProviderProps extends ContextBaseType, Pick<UserProfileProviderProps, 'onUserProfileMessage' | 'onStartDirectMessage'> {
    children?: React.ReactNode;
}
export declare const GroupChannelContext: React.Context<GroupChannelContextType>;
export declare const GroupChannelProvider: (props: GroupChannelProviderProps) => React.JSX.Element;
export declare const useGroupChannelContext: () => GroupChannelContextType;
