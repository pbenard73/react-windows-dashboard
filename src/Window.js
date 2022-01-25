import React, { useState } from "react"

import Draggable from "react-draggable"
import { ResizableBox } from "react-resizable"

import "./styles/Windows.scss"

const Window = props => {
    const [full, setFull] = useState(false)

    const data = props.data
    const options = data.options || {}
    const resizable = options.resizable !== false
    const size = options.size || null
    const minSize = options.minSize || size !== null ? size : [300, 300]

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
            const msize = size === null ? minSize : size

            const centering = (isLeft = true) => {
                const value =
                    (isLeft === true ? wrapper.offsetWidth : wrapper.offsetHeight) / 2 - msize[isLeft === true ? 0 : 1] / 2

                return (value < 0 ? 0 : value) + "px"
            }

            return { left: centering(), top: centering(false) }
        }

        return {
            left: check("left"),
            top: check("top"),
        }
    }

    const onResizeStart = e => {
        e.preventDefault()
    }

    let sizableOptions = {
        width: minSize[0],
        height: minSize[1],
        minConstraints: minSize,
        onResizeStart: onResizeStart,
        resizeHandles: resizable === false ? [] : options.direction || ["se"],
        style: {
            position: "absolute",
            ...checkPosition(),
        },
    }

    if (resizable === false) {
        sizableOptions.maxConstraints = sizableOptions.minConstraints
    }

    if (size !== null) {
        sizableOptions.width = size[0]
        sizableOptions.height = size[1]
    }

    const ref = React.createRef()


    const toggle = () => setFull(!full)

    const getBaseActions = () => {
        let data = {
            ...props,
            toggle,
            resizable,
            minimize: props.minimize,
        }

        data.actions = getExtraActions(data)

        return data
    }

    const getExtraActions = givenProps => givenProps?.data?.actions?.(props) || []

    const getBaseWindow = (givenProps = getBaseActions()) => (
        <div className='window' style={givenProps.style}>
            <div className='decorator'>
                <span className='title'>{givenProps.data.title}</span>
                {getExtraActions(givenProps)}
                {resizable === false ? null : <span className='decorator_toggle nodrag' onClick={givenProps.toggle}></span>}
                <span className='decorator_close nodrag' onClick={givenProps.onClose}></span>
            </div>
            <div className='window_content'>{givenProps.children}</div>
        </div>
    )

    const renderInnerWindow = () => {
      if (props.decorator === undefined) {
        return getBaseWindow()
      }

      const Decorator = props.decorator

      return <Decorator {...getBaseActions()} />
    }

    const onStart = (e, data) => {
        if (e.target.closest(".nodrag") !== null) {
            return false
        }

        props.onDragStart(e, data, props.data)
    }

    const onMouseDown = e => props.setActive()

    let className = "react-draggable window_container"
    if (full === true) {
        className += " fullscreen"
    }

    if (props.active === true) {
        className += " window_active"
    }

    if (props.minimized === true) {
        className += " window_minimized"
    }

    let roptions = { ...sizableOptions }
    if (props.order !== undefined) {
        roptions.style.zIndex = props.order
    }

    return (
        <Draggable
            cancel='.react-resizable-handle, .nodrag'
            onStart={onStart}
            onDrag={(e, data) => props.onDrag?.(e, data, props.data)}
            onStop={(e, data) => props.onDragStop?.(e, data, props.data)}
            defaultClassName={className}
            bounds={roptions.bounds !== undefined ? roptions.bounds : ".dashboard"}
            onMouseDown={onMouseDown}
        >
            <ResizableBox {...sizableOptions} id={props.data.uuid}>
                {renderInnerWindow()}
            </ResizableBox>
        </Draggable>
    )
}

export default Window
