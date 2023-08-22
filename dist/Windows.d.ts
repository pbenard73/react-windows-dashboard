import { ReactNode } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
export interface WindowsProps {
    /**
     * @description Actual active window uuid
     */
    active?: string;
    /**
     * @description Method to set a window active
     */
    setActive?: (uuid: string) => void;
    /**
     * @description Method to close a window
     */
    onClose?: (uuid: string) => void;
    /**
     * @description Method to register a window uuid in minimized pool
     */
    minimize?: (uuid: string) => void;
    /**
     * @description React Node to use as Dashboard
     */
    dashboard?: ReactNode;
    /**
     * @description Windows List
     */
    windows?: any;
    /**
     * @description Custom decorator to use as default
     */
    decorator?: any;
    /**
     * @description Array of window uuids to set the zIndex order
     */
    order?: string[];
    /**
     * @description Array of window uuids minimized
     */
    minimized?: string[];
    /**
     * @description Default style for override
     */
    defaultStyles?: DefaultStyles;
    /**
     * @description Method to call on window drag start
     */
    onDragStart?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => any;
    /**
     * @description Method to call on window drag stop
     */
    onDragStop?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => any;
    /**
     * @description Method to call when window is dragging
     */
    onDrag?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => any;
    /**
     * @description Default cancel class name
     */
    cancelClass?: string;
    /**
     * @description Extra css selector to cancel event
     */
    cancelSelector?: string;
}
export type CssString = string;
export interface WindowProps {
    data: WindowData;
    active?: boolean;
    minimized?: boolean;
    order?: string | number;
    decorator?: any;
    style: any;
    defaultStyles?: DefaultStyles;
    minimize: (uuid: string) => void;
    onClose: () => void;
    setActive: () => void;
    onDrag?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void;
    onDragStart?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void;
    onDragStop?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void;
    children: ReactNode | ReactNode[];
    cancelClass?: string;
    cancelSelector?: string;
}
export interface DefaultStyles {
    window?: CssString;
    resizableHandle?: CssString;
    windowContent?: CssString;
    windowActive?: CssString;
    fullscreen?: CssString;
}
export interface WindowData {
    /**
     * @description Window uuid
     */
    uuid: string;
    /**
     * @description Title to show in window top bar
     */
    title: string;
    options?: any;
    /**
     * @description If set to false, the window won't be resizable
     */
    resizable?: boolean;
    size?: number[];
    minSize?: number[];
    left?: any;
    top?: any;
    position?: any;
    /**
     * @description Open window at center of the dashboard
     */
    center?: boolean;
}
declare const Windows: (props: WindowsProps) => JSX.Element;
export default Windows;
