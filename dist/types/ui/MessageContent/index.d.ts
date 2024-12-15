import React, { ReactElement, ReactNode } from 'react';
import './index.scss';
import { type MessageMenuProps } from '../MessageMenu';
import { MessageEmojiMenuProps } from '../MessageItemReactionMenu';
import { EmojiReactionsProps } from '../EmojiReactions';
import type { OnBeforeDownloadFileMessageType } from '../../modules/GroupChannel/context/GroupChannelProvider';
import { CoreMessageType, SendableMessageType } from '../../utils';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { type EmojiCategory, EmojiContainer } from '@sendbird/chat';
import { ThreadReplySelectType } from '../../modules/Channel/context/const';
import { Nullable, ReplyType } from '../../types';
import { MessageProfileProps } from './MessageProfile';
import { MessageBodyProps } from './MessageBody';
import { MessageHeaderProps } from './MessageHeader';
import { MobileBottomSheetProps } from '../MobileMenu/types';
export { MessageBody } from './MessageBody';
export { MessageHeader } from './MessageHeader';
export { MessageProfile } from './MessageProfile';
export interface MessageContentProps extends MessageComponentRenderers {
    className?: string | Array<string>;
    userId: string;
    channel: Nullable<GroupChannel>;
    message: CoreMessageType;
    disabled?: boolean;
    chainTop?: boolean;
    chainBottom?: boolean;
    isReactionEnabled?: boolean;
    disableQuoteMessage?: boolean;
    replyType?: ReplyType;
    threadReplySelectType?: ThreadReplySelectType;
    nicknamesMap?: Map<string, string>;
    emojiContainer?: EmojiContainer;
    scrollToMessage?: (createdAt: number, messageId: number) => void;
    showEdit?: (bool: boolean) => void;
    showRemove?: (bool: boolean) => void;
    showFileViewer?: (bool: boolean) => void;
    resendMessage?: (message: SendableMessageType) => void;
    deleteMessage?: (message: CoreMessageType) => Promise<void>;
    toggleReaction?: (message: SendableMessageType, reactionKey: string, isReacted: boolean) => void;
    setQuoteMessage?: (message: SendableMessageType) => void;
    onReplyInThread?: (props: {
        message: SendableMessageType;
    }) => void;
    onQuoteMessageClick?: (props: {
        message: SendableMessageType;
    }) => void;
    onMessageHeightChange?: () => void;
    onBeforeDownloadFileMessage?: OnBeforeDownloadFileMessageType;
}
export interface MessageComponentRenderers {
    renderSenderProfile?: (props: MessageProfileProps) => ReactNode;
    renderMessageBody?: (props: MessageBodyProps) => ReactNode;
    renderMessageHeader?: (props: MessageHeaderProps) => ReactNode;
    renderMessageMenu?: (props: MessageMenuProps) => ReactNode;
    renderEmojiMenu?: (props: MessageEmojiMenuProps) => ReactNode;
    renderEmojiReactions?: (props: EmojiReactionsProps) => ReactNode;
    renderMobileMenuOnLongPress?: (props: MobileBottomSheetProps) => React.ReactElement;
    filterEmojiCategoryIds?: (message: SendableMessageType) => EmojiCategory['id'][];
}
export declare function MessageContent(props: MessageContentProps): ReactElement;
export default MessageContent;
