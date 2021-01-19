import React from "react"

import Draggable from "react-draggable"
import { Resizable, ResizableBox } from "react-resizable"

import "./styles/Windows.scss"

class Window extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            full: false,
        }

        this.onResizeStart = this.onResizeStart.bind(this)
        this.toggle = this.toggle.bind(this)
        this.onStart = this.onStart.bind(this)

        const data = this.props.data
        this.options = data.options === undefined ? {} : data.options
        this.minSize = this.options.minSize !== undefined ? this.options.minSize : [300, 300]
        this.resizable = this.options.resizable !== false

        const checkPosition = () => {
            const check = type => {
                if (data[type] === undefined) {
                    return "100px"
                }

                if (typeof data[type] === "function") {
                    return data[type]()
                }

                return data[type]
            }

            if (typeof data.position === "function") {
                return data.position()
            } else if (data.center === true) {
                const wrapper = document.querySelector(".windows")

                const centering = (isLeft = true) => {
                    const value =
                        (isLeft === true ? wrapper.offsetWidth : wrapper.offsetHeight) / 2 -
                        this.minSize[isLeft === true ? 0 : 1] / 2

                    return (value < 0 ? 0 : value) + "px"
                }

                return { left: centering(), top: centering(false) }
            }

            return {
                left: check("left"),
                top: check("top"),
            }
        }

        this.sizableOptions = {
            width: this.minSize[0],
            height: this.minSize[1],
            minConstraints: this.minSize,
            onResizeStart: this.onResizeStart,
            style: {
                position: "absolute",
                ...checkPosition(),
            },
        }

        if (this.resizable === false) {
            this.sizableOptions.maxConstraints = this.sizableOptions.minConstraints
        }

        this.ref = React.createRef()
    }

    onResizeStart(e) {
        e.preventDefault()
    }

    toggle() {
        this.setState({ full: !this.state.full })
    }

    getBaseActions() {
        let data = {
            ...this.props,
            toggle: this.toggle,
            resizable: this.resizable,
            minimize: this.props.minimize,
        }

        data.actions = this.getExtraActions(data)

        return data
    }

    getExtraActions(props) {
        return props.data.actions !== undefined ? props.data.actions(props) : []
    }

    getBaseWindow(props = this.getBaseActions()) {
        return (
            <div className='window' style={props.style}>
                <div className='decorator'>
                    <span className='title'>{props.data.title}</span>
                    {this.getExtraActions(props)}
                    {this.resizable === false ? null : <span className='decorator_toggle nodrag' onClick={props.toggle}></span>}
                    <span className='decorator_close nodrag' onClick={props.onClose}></span>
                </div>
                <div className='window_content'>{props.children}</div>
            </div>
        )
    }

    renderInnerWindow() {
        return this.props.decorator === undefined ? this.getBaseWindow() : this.props.decorator(this.getBaseActions())
    }

    onStart(e) {
        if (e.target.closest(".nodrag") !== null) {
            return false
        }

        this.props.setActive()
    }

    render() {
        let className = "react-draggable window_container"
        if (this.state.full === true) {
            className += " fullscreen"
        }

        if (this.props.active === true) {
            className += " window_active"
        }

        if (this.props.minimized === true) {
            className += " window_minimized"
        }

        let options = { ...this.sizableOptions }
        if (this.props.order !== undefined) {
            options.style.zIndex = this.props.order
        }

        return (
            <Draggable
                cancel='.react-resizable-handle, .nodrag'
                onStart={this.onStart}
                defaultClassName={className}
                bounds='.dashboard'
            >
                <ResizableBox {...this.sizableOptions} id={this.props.data.uuid}>
                    {this.renderInnerWindow()}
                </ResizableBox>
            </Draggable>
        )
    }
}

export default Window
