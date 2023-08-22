import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Window from "./Window";
import { createGlobalStyle } from 'styled-components';
const Windows = (props) => {
    var _a, _b, _c, _d, _e;
    const [active, setActive] = useState(null);
    const windowStyle = ((_a = props.defaultStyles) === null || _a === void 0 ? void 0 : _a.window) || {
        border: "1px solid #e1e1e1",
        height: "100%",
        width: "100%",
        background: "white",
        borderRadius: "2px",
    };
    const externalActive = props.active !== undefined && props.setActive !== undefined;
    const onWindowClose = (uuid) => { var _a; return (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, uuid); };
    const toggleActive = (uuid) => {
        if (externalActive === true && props.setActive) {
            return props.setActive(uuid);
        }
        setActive(uuid);
    };
    const minimize = (uuid) => { var _a; return (_a = props.minimize) === null || _a === void 0 ? void 0 : _a.call(props, uuid); };
    const isActive = externalActive === true ? props.active : active;
    const GlobalStyle = createGlobalStyle `
    .react-resizable-handle {
        ${((_b = props.defaultStyles) === null || _b === void 0 ? void 0 : _b.resizableHandle) || `
            position: absolute;
            bottom: 3px;
            right: 3px;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid grey;
            border-right: 2px solid grey;
        `}
    }
    
    .window_content {
        ${((_c = props.defaultStyles) === null || _c === void 0 ? void 0 : _c.windowContent) || `height: calc(100% - 24px);overflow:auto;`}
    }
    
    .window_active {
        ${((_d = props.defaultStyles) === null || _d === void 0 ? void 0 : _d.windowContent) || `z-index: 1;`}
    }
    
    .fullscreen {
        ${((_e = props.defaultStyles) === null || _e === void 0 ? void 0 : _e.resizableHandle) || `
            position: absolute !important;
            transform: translate(0, 0) !important;
            width: calc(100% - 2px) !important;
            height: calc(100% - 2px) !important;
            transition: all 0.3s ease;
            top: 0% !important;
            left: 0% !important;
            z-index:2000;
        `}
    }
    `;
    return (_jsxs(_Fragment, { children: [_jsx(GlobalStyle, {}), _jsxs("div", Object.assign({ className: 'windows', style: { position: 'relative', height: '100%' } }, { children: [props.dashboard !== undefined ? props.dashboard : null, Object.keys(props.windows).map(uuid => {
                        const data = props.windows[uuid];
                        const decorator = data.decorator || props.decorator;
                        let order = undefined;
                        if (props.order !== undefined) {
                            order = props.order.indexOf(uuid) + 1;
                        }
                        const Component = data.component;
                        return (_jsx(Window, Object.assign({ active: isActive === uuid, setActive: () => toggleActive(uuid), data: Object.assign(Object.assign({}, data), { uuid }), style: windowStyle, order: order, minimize: minimize, minimized: (props.minimized || []).indexOf(uuid) !== -1, onClose: () => onWindowClose(uuid), decorator: decorator, onDragStart: props.onDragStart, onDrag: props.onDrag, onDragStop: props.onDragStop, defaultStyles: props.defaultStyles, cancelClass: props.cancelClass }, { children: _jsx(Component, {}) }), uuid));
                    })] }))] }));
};
export default Windows;
