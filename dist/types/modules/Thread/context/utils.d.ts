import { GroupChannel, Member } from '@sendbird/chat/groupChannel';
import { SendableMessageType } from '../../../utils';
export declare const getNicknamesMapFromMembers: (members?: Member[]) => Map<string, string>;
export declare const getParentMessageFrom: (message: SendableMessageType | null) => import("@sendbird/chat/message").BaseMessage;
export declare const isParentMessage: (message: SendableMessageType) => boolean;
export declare const isThreadMessage: (message: SendableMessageType) => boolean;
export declare const isAboutSame: (a: number, b: number, px: number) => boolean;
export declare const isEmpty: (val: unknown) => boolean;
export declare function compareIds(a: number | string, b: number | string): boolean;
export declare const getMessageCreatedAt: (message: SendableMessageType) => string;
export declare const isReadMessage: (channel: GroupChannel, message: SendableMessageType) => boolean;
export declare const scrollIntoLast: (intialTry?: number) => void;
