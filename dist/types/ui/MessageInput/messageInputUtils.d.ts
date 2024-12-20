/**
 * Write new utils here
 * Migrate old utils as needed, and delete utils.js
 */
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import type { OpenChannel } from '@sendbird/chat/openChannel';
import type { SendBirdStateConfig } from '../../lib/types';
/**
 * FIXME: Simplify this in UIKit@v4
 * If customer is using MessageInput inside our modules(ie: Channel, Thread, etc),
 * we should use the config from the module.
 * If customer is using MessageInput outside our modules(ie: custom UI),
 * we expect Channel to be undefined and customer gets control to show/hide file-upload.
 * @param {*} channel GroupChannel | OpenChannel
 * @param {*} config SendBirdStateConfig
 * @returns boolean
 */
export declare const checkIfFileUploadEnabled: ({ channel, config }: {
    channel?: GroupChannel | OpenChannel;
    config?: SendBirdStateConfig;
}) => boolean;
