import React from 'react';
import type { User } from '@sendbird/chat';
import { GroupChannel, GroupChannelCreateParams, GroupChannelListOrder, GroupChannelListQuery as GroupChannelListQuerySb, GroupChannelUserIdsFilter, HiddenChannelFilter, MyMemberStateFilter, PublicChannelFilter, QueryType, SuperChannelFilter, UnreadChannelFilter } from '@sendbird/chat/groupChannel';
import { ChannelListActionTypes } from '../dux/actionTypes';
import { UserProfileProviderProps } from '../../../lib/UserProfileContext';
import { CHANNEL_TYPE } from '../../CreateChannel/types';
export interface ApplicationUserListQueryInternal {
    limit?: number;
    userIdsFilter?: Array<string>;
    metaDataKeyFilter?: string;
    metaDataValuesFilter?: Array<string>;
}
export interface GroupChannelListQueryParamsInternal {
    limit?: number;
    includeEmpty?: boolean;
    order?: GroupChannelListOrder;
    userIdsExactFilter?: Array<string>;
    userIdsIncludeFilter?: Array<string>;
    userIdsIncludeFilterQueryType?: QueryType;
    nicknameContainsFilter?: string | null;
    channelNameContainsFilter?: string;
    customTypesFilter?: Array<string> | null;
    customTypeStartsWithFilter?: string | null;
    channelUrlsFilter?: Array<string> | null;
    superChannelFilter?: SuperChannelFilter;
    publicChannelFilter?: PublicChannelFilter;
    metadataOrderKeyFilter?: string | null;
    memberStateFilter?: MyMemberStateFilter;
    hiddenChannelFilter?: HiddenChannelFilter;
    unreadChannelFilter?: UnreadChannelFilter;
    includeFrozen?: boolean;
    userIdsFilter?: GroupChannelUserIdsFilter;
}
interface ChannelListQueries {
    applicationUserListQuery?: ApplicationUserListQueryInternal;
    channelListQuery?: GroupChannelListQueryParamsInternal;
}
type OverrideInviteUserType = {
    users: Array<string>;
    onClose: () => void;
    channelType: CHANNEL_TYPE;
};
export interface ChannelListProviderProps extends Pick<UserProfileProviderProps, 'disableUserProfile' | 'renderUserProfile'> {
    allowProfileEdit?: boolean;
    onBeforeCreateChannel?(users: Array<string>): GroupChannelCreateParams;
    overrideInviteUser?(params: OverrideInviteUserType): void;
    onThemeChange?(theme: string): void;
    onProfileEditSuccess?(user: User): void;
    onChannelSelect?(channel: GroupChannel | null): void;
    sortChannelList?: (channels: GroupChannel[]) => GroupChannel[];
    queries?: ChannelListQueries;
    children?: React.ReactElement;
    className?: string | string[];
    disableAutoSelect?: boolean;
    activeChannelUrl?: string;
    typingChannels?: Array<GroupChannel>;
    isTypingIndicatorEnabled?: boolean;
    isMessageReceiptStatusEnabled?: boolean;
    reconnectOnIdle?: boolean;
}
export interface ChannelListProviderInterface extends ChannelListProviderProps {
    initialized: boolean;
    loading: boolean;
    allChannels: GroupChannel[];
    currentChannel: GroupChannel | null;
    channelListQuery: GroupChannelListQueryParamsInternal | null;
    currentUserId: string;
    channelListDispatcher: React.Dispatch<ChannelListActionTypes>;
    channelSource: GroupChannelListQuerySb | null;
    fetchChannelList: () => void;
}
/**
 * @deprecated This provider is deprecated and will be removed in the next major update.
 * Please use the `GroupChannelListProvider` from '@sendbird/uikit-react/GroupChannelList' instead.
 * For more information, please refer to the migration guide:
 * https://docs.sendbird.com/docs/chat/uikit/v3/react/introduction/group-channel-migration-guide
 */
declare const ChannelListProvider: React.FC<ChannelListProviderProps>;
declare function useChannelListContext(): ChannelListProviderInterface;
export { ChannelListProvider, useChannelListContext };
