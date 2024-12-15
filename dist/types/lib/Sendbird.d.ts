import './index.scss';
import './__experimental__typography.scss';
import React from 'react';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { StringSet } from '../ui/Label/stringSet';
import { ConfigureSessionTypes } from './hooks/useConnect/types';
import { UIKitOptions, CommonUIKitConfigProps, SendbirdChatInitParams, CustomExtensionParams, SBUEventHandlers } from './types';
import { HTMLTextDirection, RenderUserProfileProps, UserListQuery } from '../types';
import { SBUGlobalPubSub } from './pubSub/topics';
export { useSendbirdStateContext } from '../hooks/useSendbirdStateContext';
interface VoiceRecordOptions {
    maxRecordingTime?: number;
    minRecordingTime?: number;
}
export type ImageCompressionOutputFormatType = 'preserve' | 'png' | 'jpeg';
export interface ImageCompressionOptions {
    compressionRate?: number;
    resizingWidth?: number | string;
    resizingHeight?: number | string;
    outputFormat?: ImageCompressionOutputFormatType;
}
export interface SendbirdConfig {
    logLevel?: string | Array<string>;
    pubSub?: SBUGlobalPubSub;
    userMention?: {
        maxMentionCount?: number;
        maxSuggestionCount?: number;
    };
    isREMUnitEnabled?: boolean;
}
export interface SendbirdProviderProps extends CommonUIKitConfigProps, React.PropsWithChildren<unknown> {
    appId: string;
    userId: string;
    accessToken?: string;
    customApiHost?: string;
    customWebSocketHost?: string;
    configureSession?: ConfigureSessionTypes;
    theme?: 'light' | 'dark';
    config?: SendbirdConfig;
    nickname?: string;
    colorSet?: Record<string, string>;
    stringSet?: Partial<StringSet>;
    dateLocale?: Locale;
    profileUrl?: string;
    voiceRecord?: VoiceRecordOptions;
    userListQuery?: () => UserListQuery;
    imageCompression?: ImageCompressionOptions;
    allowProfileEdit?: boolean;
    disableMarkAsDelivered?: boolean;
    breakpoint?: string | boolean;
    htmlTextDirection?: HTMLTextDirection;
    forceLeftToRightMessageLayout?: boolean;
    uikitOptions?: UIKitOptions;
    isUserIdUsedForNickname?: boolean;
    sdkInitParams?: SendbirdChatInitParams;
    customExtensionParams?: CustomExtensionParams;
    isMultipleFilesMessageEnabled?: boolean;
    renderUserProfile?: (props: RenderUserProfileProps) => React.ReactElement;
    onStartDirectMessage?: (channel: GroupChannel) => void;
    /**
     * @deprecated Please use `onStartDirectMessage` instead. It's renamed.
     */
    onUserProfileMessage?: (channel: GroupChannel) => void;
    eventHandlers?: SBUEventHandlers;
}
export declare function SendbirdProvider(props: SendbirdProviderProps): React.JSX.Element;
export default SendbirdProvider;
