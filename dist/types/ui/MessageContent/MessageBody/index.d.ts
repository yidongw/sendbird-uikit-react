import React from 'react';
import '../index.scss';
import { CoreMessageType } from '../../../utils';
import { SendBirdStateConfig } from '../../../lib/types';
import { Nullable } from '../../../types';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import type { OnBeforeDownloadFileMessageType } from '../../../modules/GroupChannel/context/GroupChannelProvider';
export type CustomSubcomponentsProps = Record<'ThumbnailMessageItemBody' | 'MultipleFilesMessageItemBody', Record<string, any>>;
export interface MessageBodyProps {
    className?: string;
    channel: Nullable<GroupChannel>;
    message: CoreMessageType;
    showFileViewer?: (bool: boolean) => void;
    onMessageHeightChange?: () => void;
    onBeforeDownloadFileMessage?: OnBeforeDownloadFileMessageType;
    mouseHover: boolean;
    isMobile: boolean;
    config: SendBirdStateConfig;
    isReactionEnabledInChannel: boolean;
    isByMe: boolean;
}
export declare const MessageBody: (props: MessageBodyProps) => React.JSX.Element;
export default MessageBody;
