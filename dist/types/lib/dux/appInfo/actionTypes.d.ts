import { CreateAction } from '../../../utils/typeHelpers/reducers/createAction';
import { MessageTemplatesInfo, ProcessedMessageTemplate } from './initialState';
export declare const APP_INFO_ACTIONS: {
    readonly INITIALIZE_MESSAGE_TEMPLATES_INFO: "INITIALIZE_MESSAGE_TEMPLATES_INFO";
    readonly UPSERT_MESSAGE_TEMPLATES: "UPSERT_MESSAGE_TEMPLATES";
    readonly UPSERT_WAITING_TEMPLATE_KEYS: "UPSERT_WAITING_TEMPLATE_KEYS";
    readonly MARK_ERROR_WAITING_TEMPLATE_KEYS: "MARK_ERROR_WAITING_TEMPLATE_KEYS";
};
export type TemplatesMapData = {
    key: string;
    template: ProcessedMessageTemplate;
};
type APP_INFO_PAYLOAD_TYPES = {
    [APP_INFO_ACTIONS.INITIALIZE_MESSAGE_TEMPLATES_INFO]: MessageTemplatesInfo;
    [APP_INFO_ACTIONS.UPSERT_MESSAGE_TEMPLATES]: TemplatesMapData[];
    [APP_INFO_ACTIONS.UPSERT_WAITING_TEMPLATE_KEYS]: {
        keys: string[];
        requestedAt: number;
    };
    [APP_INFO_ACTIONS.MARK_ERROR_WAITING_TEMPLATE_KEYS]: {
        keys: string[];
        messageId: number;
    };
};
export type AppInfoActionTypes = CreateAction<APP_INFO_PAYLOAD_TYPES>;
export {};
