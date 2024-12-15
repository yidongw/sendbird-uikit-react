import React, { KeyboardEvent, MouseEvent, ReactElement, TouchEvent } from 'react';
import './index.scss';
export interface ReactionButtonProps {
    children: ReactElement;
    className?: string | Array<string>;
    width?: string | number;
    height?: string | number;
    selected?: boolean;
    /**
     * @deprecated Please use the testID instead
     */
    dataSbId?: string;
    testID?: string;
    onClick?: (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => void;
}
declare const ReactionButton: React.ForwardRefExoticComponent<ReactionButtonProps & React.RefAttributes<HTMLDivElement>>;
export default ReactionButton;
