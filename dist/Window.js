import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import styled from 'styled-components';
const Decorator = styled.div `
    height: 20px;
    background: linear-gradient(45deg, #158fbb, rgba(3, 86, 101, 0.95));
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    span.title {
        margin-right: auto;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: calc(100% - 50px);
        overflow: hidden;
    }
    .decorator_toggle {
        width: 15px;
        height: 15px;
        display: block;
        cursor: pointer;
        position: relative;
        margin-right: 10px;
        &:before {
            content: "";
            position: absolute;
            border: 2px solid white;
            width: 11px;
            height: 11px;
            bottom: 0;
            left: 0;
        }
    }
    .decorator_close {
        width: 15px;
        height: 15px;
        display: block;
        cursor: pointer;
        position: relative;
        &:before {
            content: "";
            background: white;
            position: absolute;
            width: 2px;
            height: 125%;
            bottom: 0;
            left: 0;
            transform-origin: bottom center;
            transform: rotate(45deg);
        }
        &:after {
            content: "";
            background: white;
            position: absolute;
            width: 2px;
            height: 125%;
            bottom: 0;
            right: 0;
            transform-origin: bottom center;
            transform: rotate(-45deg);
        }
    }
`;
const Window = (props) => {
    var _a, _b;
    const [full, setFull] = useState(false);
    const data = props.data;
    const options = data.options || {};
    const resizable = options.resizable !== false;
    const size = options.size || null;
    const minSize = options.minSize || (size !== null ? size : [300, 300]);
    const cancelClass = props.cancelClass || 'nodrag';
    const checkPosition = () => {
        const check = (type) => {
            if (data[type] === undefined) {
                return "100px";
            }
            if (typeof data[type] === "function") {
                return data[type]();
            }
            return data[type];
        };
        if (typeof data.position === "function") {
            return data.position();
        }
        else if (data.center === true) {
            const wrapper = document.querySelector(".windows");
            const msize = size === null ? minSize : size;
            const centering = (isLeft = true) => {
                const value = (isLeft === true ? (wrapper === null || wrapper === void 0 ? void 0 : wrapper.offsetWidth) || 300 : (wrapper === null || wrapper === void 0 ? void 0 : wrapper.offsetHeight) || 300) / 2 - msize[isLeft === true ? 0 : 1] / 2;
                return (value < 0 ? 0 : value) + "px";
            };
            return { left: centering(), top: centering(false) };
        }
        return {
            left: check("left"),
            top: check("top"),
        };
    };
    const onResizeStart = (e) => {
        e.preventDefault();
    };
    let sizableOptions = {
        width: minSize[0],
        height: minSize[1],
        minConstraints: minSize,
        maxConstraints: undefined,
        onResizeStart: onResizeStart,
        resizeHandles: resizable === false ? [] : options.direction || ["se"],
        style: Object.assign({ position: "absolute" }, checkPosition()),
        bounds: undefined
    };
    if (resizable === false) {
        sizableOptions.maxConstraints = sizableOptions.minConstraints;
    }
    if (size !== null) {
        sizableOptions.width = size[0];
        sizableOptions.height = size[1];
    }
    const toggle = () => setFull(!full);
    const getBaseActions = () => {
        let data = Object.assign(Object.assign({}, props), { toggle,
            resizable, minimize: props.minimize, actions: undefined });
        data.actions = getExtraActions(data);
        return data;
    };
    const getExtraActions = (givenProps) => { var _a, _b; return ((_b = (_a = givenProps === null || givenProps === void 0 ? void 0 : givenProps.data) === null || _a === void 0 ? void 0 : _a.actions) === null || _b === void 0 ? void 0 : _b.call(_a, props)) || []; };
    const getBaseWindow = (givenProps = getBaseActions()) => (_jsxs("div", Object.assign({ className: 'window', style: givenProps.style }, { children: [_jsxs(Decorator, { children: [_jsx("span", Object.assign({ className: 'title' }, { children: givenProps.data.title })), getExtraActions(givenProps), resizable === false ? null : _jsx("span", { className: `decorator_toggle ${cancelClass}`, onClick: givenProps.toggle }), _jsx("span", { className: `decorator_close ${cancelClass}`, onClick: givenProps.onClose })] }), _jsx("div", Object.assign({ className: 'window_content' }, { children: givenProps.children }))] })));
    const renderInnerWindow = () => {
        if (props.decorator === undefined) {
            return getBaseWindow();
        }
        const Decorator = props.decorator;
        return _jsx(Decorator, Object.assign({}, getBaseActions()));
    };
    const onStart = (e, data) => {
        var _a;
        if (e.target.closest(`.${cancelClass}`) !== null) {
            return false;
        }
        (_a = props.onDragStart) === null || _a === void 0 ? void 0 : _a.call(props, e, data, props.data);
    };
    const onMouseDown = (e) => props.setActive();
    let className = "react-draggable window_container";
    if (full === true) {
        className += " fullscreen";
    }
    if (props.active === true) {
        className += " window_active";
    }
    if (props.minimized === true) {
        className += " window_minimized";
    }
    if (typeof ((_a = props.data.options) === null || _a === void 0 ? void 0 : _a.className) === 'string') {
        className += ` ${(_b = props.data.options) === null || _b === void 0 ? void 0 : _b.className}`;
    }
    let roptions = Object.assign({}, sizableOptions);
    if (props.order !== undefined) {
        roptions.style.zIndex = props.order;
    }
    return (_jsx(Draggable, Object.assign({ cancel: `.react-resizable-handle, .${cancelClass}`, onStart: onStart, onDrag: (e, data) => { var _a; return (_a = props.onDrag) === null || _a === void 0 ? void 0 : _a.call(props, e, data, props.data); }, onStop: (e, data) => { var _a; return (_a = props.onDragStop) === null || _a === void 0 ? void 0 : _a.call(props, e, data, props.data); }, defaultClassName: className, bounds: roptions.bounds !== undefined ? roptions.bounds : ".dashboard", onMouseDown: onMouseDown }, { children: _jsx(ResizableBox, Object.assign({}, sizableOptions, { children: renderInnerWindow() })) })));
};
export default Window;
