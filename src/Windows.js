import React from "react";
import ReactDOM from "react-dom";

import Window from "./Window";

class Windows extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            windows: {},
            active: null
        };
        this.windowStyle = {
            border: "1px solid #e1e1e1",
            height: "100%",
            width: "100%",
            background: "white",
            borderRadius: "2px"
        };

        this.classNames = {
            window_active: "window_active"
        };

        this.onWindowClose = this.onWindowClose.bind(this);
    }

    componentDidMount() {
        this.updateWindows();
    }

    componentDidUpdate() {
        this.updateWindows();
    }

    onWindowClose(uuid) {
        if (this.props.onClose !== undefined) {
            this.props.onClose(uuid);
        }
    }

    toggleActive(id) {
        const active = document.querySelector(
            `.${this.classNames.window_active}`
        );
        if (active !== null) {
            active.classList.remove(this.classNames.window_active);
        }
        const newActive = document.querySelector(`#window_wrapper_${id}`);
        if (null !== newActive) {
            newActive.classList.add(this.classNames.window_active);
        }
    }

    removeExisting(uuid) {
        let element = document.querySelector(`#window_wrapper_${uuid}`);
        if (element !== null) {
            element.remove();
        }
    }

    checkNewWindows() {
        const windows =
            this.props.windows !== undefined ? this.props.windows : {};

        const props = Object.keys(windows);
        const exists = Object.keys(this.state.windows);

        if (props.length === 0 && exists.length > 0) {
            return exists
        }

        let same = true
        props.forEach(uuid => {
            const index = exists.indexOf(uuid);
            if (index !== -1) {
                exists.splice(index, 1);
            } else {
               same = false
            }
        });


        return exists.length > 0 ? exists : same === true ? true : [];
    }

    updateWindows() {
        let windowsToRemove = this.checkNewWindows()
        if (windowsToRemove === true) {
            return;
        }

        windowsToRemove.forEach(uuid => this.removeExisting(uuid));

        const container = this.ref.current;

        const propsWindows =
            this.props.windows !== undefined ? this.props.windows : {};
        let windows = {};

        let windowsUuid = Object.keys(propsWindows);

        if (windowsUuid.length === 0) {
            windows = {};
        }

        windowsUuid.forEach(uuid => {
            let wrapperId = `window_wrapper_${uuid}`;
            let wrapper = document.querySelector(`#${wrapperId}`);

            if (wrapper === null) {
                wrapper = document.createElement("div");
                wrapper.setAttribute("id", wrapperId);
                wrapper.classList.add("window_wrapper");
                container.append(wrapper);
            }

            const data = propsWindows[uuid];

            windows[uuid] = ReactDOM.createPortal(
                [
                    <Window
                        active={() => this.toggleActive(uuid)}
                        title={data.title}
                        style={this.windowStyle}
                        onClose={() => this.onWindowClose(uuid)}
                        options={data.options !== undefined ? data.options:{}}
                    >
                        {data.component}
                    </Window>
                ],
                wrapper,
                uuid
            );
        });

        this.setState({ windows });
    }

    render() {
        return (
            <div className="windows" ref={this.ref}>
                {this.props.dashboard !== undefined ? this.props.dashboard : null}
                {Object.values(this.state.windows)}
            </div>
        );
    }
}

export default Windows;
