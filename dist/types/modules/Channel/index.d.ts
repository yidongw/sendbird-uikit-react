import React from 'react';
import { ChannelContextProps } from './context/ChannelProvider';
import { ChannelUIProps } from './components/ChannelUI';
export interface ChannelProps extends ChannelContextProps, ChannelUIProps {
}
/**
 * @deprecated This component is deprecated and will be removed in the next major update.
 * Please use the `GroupChannel` component from '@sendbird/uikit-react/GroupChannel' instead.
 * For more information, please refer to the migration guide:
 * https://docs.sendbird.com/docs/chat/uikit/v3/react/introduction/group-channel-migration-guide
 */
declare const Channel: (props: ChannelProps) => React.JSX.Element;
export default Channel;
