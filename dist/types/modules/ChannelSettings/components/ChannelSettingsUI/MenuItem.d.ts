import React, { ReactNode } from 'react';
interface Props {
    renderLeft: () => ReactNode;
    renderMiddle: () => ReactNode;
    renderRight?: (props: MenuItemActionProps) => ReactNode;
    renderAccordion?: () => ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    accordionOpened?: boolean;
    setAccordionOpened?: (value: boolean) => void;
}
export declare const MenuItem: ({ renderLeft, renderMiddle, renderRight, renderAccordion, className, onClick, onKeyDown, accordionOpened, setAccordionOpened, }: Props) => React.JSX.Element;
export interface MenuItemActionProps {
    useAccordion: boolean;
    accordionOpened: boolean;
    children?: ReactNode;
}
export declare const MenuItemAction: ({ useAccordion, accordionOpened, children, }: MenuItemActionProps) => string | number | true | React.JSX.Element | Iterable<React.ReactNode>;
export default MenuItem;
