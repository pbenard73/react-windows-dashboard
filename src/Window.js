import { useState } from "react";

import Draggable from "react-draggable";
import { Resizable, ResizableBox } from "react-resizable";

import "./styles/Windows.scss";

const Window = props => {
    const onResizeStart = e => {
        e.preventDefault();
    };

    let [full, setFull] = useState(false);

    const toggle = () => setFull(!full);

    const options = props.options;
    const minSize =
        options.minSize !== undefined ? options.minSize : [300, 300];
    const resizable = options.resizable !== false;

    const sizableOptions = {
        width: minSize[0],
        height: minSize[1],
        minConstraints: minSize,
        onResizeStart: onResizeStart
    };

    if (resizable === false) {
        sizableOptions.maxConstraints = sizableOptions.minConstraints;
    }

    return (
        <Draggable
            cancel=".react-resizable-handle"
            onStart={props.active}
            className={full === true ? "fullscreen" : ""}
            defaultClassName={
                full === true
                    ? "react-draggable window_container fullscreen"
                    : "window_container react-draggable"
            }
            bounds=".dashboard"
        >
            <ResizableBox {...sizableOptions}>
                <div
                    className="window"
                    onClick={props.active}
                    style={props.style}
                >
                    <div className="decorator">
                        <span className="title">{props.title}</span>
                        {resizable === false ? null : (
                            <span
                                className="decorator_toggle"
                                onClick={toggle}
                            ></span>
                        )}
                        <span
                            className="decorator_close"
                            onClick={props.onClose}
                        ></span>
                    </div>
                    <div className="window_content">{props.children}</div>
                </div>
            </ResizableBox>
        </Draggable>
    );
};

export default Window;
