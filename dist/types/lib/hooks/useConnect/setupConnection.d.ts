import { SendbirdChatWith, SendbirdError } from '@sendbird/chat';
import { OpenChannelModule } from '@sendbird/chat/openChannel';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
import { SetupConnectionTypes } from './types';
import { CustomExtensionParams, SendbirdChatInitParams } from '../../types';
export declare function getMissingParamError({ userId, appId }: {
    userId?: string;
    appId?: string;
}): string;
export declare function getConnectSbError(error?: SendbirdError): string;
export declare function setUpConnection({ logger, sdkDispatcher, userDispatcher, initDashboardConfigs, userId, appId, isNewApp, customApiHost, customWebSocketHost, configureSession, nickname, profileUrl, accessToken, isUserIdUsedForNickname, sdkInitParams, customExtensionParams, isMobile, eventHandlers, initializeMessageTemplatesInfo, }: SetupConnectionTypes): Promise<void>;
/**
 * Initializes the Sendbird SDK with the provided parameters.
 * */
export declare function initSDK({ appId, isNewApp, customApiHost, customWebSocketHost, sdkInitParams, }: {
    appId: string;
    isNewApp?: boolean;
    customApiHost?: string;
    customWebSocketHost?: string;
    sdkInitParams?: SendbirdChatInitParams;
    customExtensionParams?: CustomExtensionParams;
}): SendbirdChatWith<(OpenChannelModule | GroupChannelModule)[] & import("@sendbird/chat/lib/__definition").Module[]>;
