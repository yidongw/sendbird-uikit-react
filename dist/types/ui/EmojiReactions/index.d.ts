import './index.scss';
import { ReactElement } from 'react';
import type { EmojiCategory, EmojiContainer, User } from '@sendbird/chat';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import { Nullable, SpaceFromTriggerType } from '../../types';
import { SendableMessageType } from '../../utils';
export interface EmojiReactionsProps {
    className?: string | Array<string>;
    userId: string;
    message: SendableMessageType;
    channel: Nullable<GroupChannel>;
    emojiContainer: EmojiContainer;
    memberNicknamesMap: Map<string, string>;
    spaceFromTrigger?: SpaceFromTriggerType;
    isByMe?: boolean;
    toggleReaction?: (message: SendableMessageType, key: string, byMe: boolean) => void;
    onPressUserProfile?: (member: User) => void;
    filterEmojiCategoryIds?: (message: SendableMessageType) => EmojiCategory['id'][];
}
declare const EmojiReactions: ({ className, userId, message, channel, emojiContainer, memberNicknamesMap, spaceFromTrigger, isByMe, toggleReaction, onPressUserProfile, filterEmojiCategoryIds, }: EmojiReactionsProps) => ReactElement;
export default EmojiReactions;
