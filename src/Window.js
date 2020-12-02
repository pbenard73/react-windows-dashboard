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

        this.options = this.props.data.options === undefined ? {} : this.props.data.options
        this.minSize = this.options.minSize !== undefined ? this.options.minSize : [300, 300]
        this.resizable = this.options.resizable !== false

        this.sizableOptions = {
            width: this.minSize[0],
            height: this.minSize[1],
            minConstraints: this.minSize,
            onResizeStart: this.onResizeStart,
            style: {
            left: '100px',
            top:'100px',
            position:'absolute'
            }
        }

        if (this.resizable === false) {
            this.sizableOptions.maxConstraints = this.sizableOptions.minConstraints
        }

    }

    onResizeStart(e) {
        e.preventDefault()
    }

    toggle() {
        this.setState({ full: !this.state.full })
    }

    render() {
        return (
            <Draggable
                cancel='.react-resizable-handle'
                onStart={this.props.setActive}
                defaultClassName={
                    this.state.full === true ? "react-draggable window_container fullscreen" : "window_container react-draggable"
                }
                bounds='.dashboard'
            >
                <ResizableBox {...this.sizableOptions} id={this.props.data.uuid}>
                    <div className={`window ${this.props.active === true ? 'window_active' : ''}`} style={this.props.style}>
                        <div className='decorator'>
                            <span className='title'>{this.props.data.title}</span>
                            {this.resizable === false ? null : <span className='decorator_toggle' onClick={this.toggle}></span>}
                            <span className='decorator_close' onClick={this.props.onClose}></span>
                        </div>
                        <div className='window_content'>{this.props.children}</div>
                    </div>
                </ResizableBox>
            </Draggable>
        )
    }
}

export default Window
