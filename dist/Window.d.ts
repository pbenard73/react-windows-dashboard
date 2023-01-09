import { ReactNode } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import { DefaultStyles, WindowData } from './Windows';
interface WindowProps {
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
}
declare const Window: (props: WindowProps) => JSX.Element;
export default Window;
