import './index.scss';
import { ReactElement } from 'react';
import type { FileMessage } from '@sendbird/chat/message';
import type { OnBeforeDownloadFileMessageType } from '../../modules/GroupChannel/context/GroupChannelProvider';
interface Props {
    className?: string | Array<string>;
    message: FileMessage;
    isByMe?: boolean;
    mouseHover?: boolean;
    isReactionEnabled?: boolean;
    truncateLimit?: number;
    onBeforeDownloadFileMessage?: OnBeforeDownloadFileMessageType;
}
export default function FileMessageItemBody({ className, message, isByMe, mouseHover, isReactionEnabled, truncateLimit, onBeforeDownloadFileMessage, }: Props): ReactElement;
export {};
