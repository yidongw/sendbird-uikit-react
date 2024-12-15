import type { User } from '@sendbird/chat';
import React from 'react';
export interface EditUserProfileProps {
    children?: React.ReactElement;
    onCancel?(): void;
    onThemeChange?(theme: string): void;
    onEditProfile?(updatedUser: User): void;
}
export interface EditUserProfileProviderInterface {
    onCancel?(): void;
    onThemeChange?(theme: string): void;
    onEditProfile?(updatedUser: User): void;
}
declare const EditUserProfileProvider: ({ children, ...props }: EditUserProfileProps) => React.JSX.Element;
declare const useEditUserProfileContext: () => EditUserProfileProviderInterface;
export { EditUserProfileProvider, useEditUserProfileContext, };
