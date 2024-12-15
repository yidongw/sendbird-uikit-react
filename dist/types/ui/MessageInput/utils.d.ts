import { BaseChannel } from '@sendbird/chat';
/**
 * - Converts `<` and `>` characters to their HTML entities (`&#60;` and `&#62;`).
 * - All other characters (including special symbols, emojis, and non-English text) remain unchanged.
 */
export declare const sanitizeString: (str?: string) => string;
/**
 * NodeList cannot be used with Array methods
 * @param {NodeListOf<ChildNode>} childNodes
 * @returns Array of child nodes
 */
export declare const nodeListToArray: (childNodes?: Node['childNodes'] | null) => ChildNode[];
export declare function isChannelTypeSupportsMultipleFilesMessage(channel: BaseChannel): boolean;
export declare function extractTextAndMentions(childNodes: NodeListOf<ChildNode>): {
    messageText: string;
    mentionTemplate: string;
};
