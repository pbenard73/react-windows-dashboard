import React, { ReactNode, ReactNodeArray, useState } from "react"

import Draggable, { DraggableData, DraggableEvent } from "react-draggable"
import { ResizableBox } from "react-resizable"
import { DefaultStyles, WindowData } from './Windows'
import styled from 'styled-components'

interface WindowProps {
    data: WindowData

    active?: boolean
    minimized?: boolean
    order?: string | number

    decorator?: any
    style: any
    defaultStyles?: DefaultStyles

    minimize: (uuid: string) => void

    onClose: () => void
    setActive: () => void

    onDrag?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void
    onDragStart?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void
    onDragStop?: (e: DraggableEvent, data: DraggableData, windowData?: WindowData) => void

    children: ReactNode|ReactNode[]
}

const Decorator = styled.div`
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
`

const Window = (props: WindowProps) => {
    const [full, setFull] = useState<boolean>(false)

    const data = props.data
    const options = data.options || {}
    const resizable = options.resizable !== false
    const size = options.size || null
    const minSize = options.minSize || (size !== null ? size : [300, 300])

    const checkPosition = () => {
        const check = (type: 'left' | 'top') => {
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
            const wrapper = document.querySelector<HTMLElement>(".windows")
            const msize = size === null ? minSize : size

            const centering = (isLeft = true) => {
                const value =
                    (isLeft === true ? wrapper?.offsetWidth || 300 : wrapper?.offsetHeight || 300) / 2 - msize[isLeft === true ? 0 : 1] / 2

                return (value < 0 ? 0 : value) + "px"
            }

            return { left: centering(), top: centering(false) }
        }

        return {
            left: check("left"),
            top: check("top"),
        }
    }

    const onResizeStart = (e:any) => {
        e.preventDefault()
    }

    let sizableOptions = {
        width: minSize[0],
        height: minSize[1],
        minConstraints: minSize,
        maxConstraints: undefined,
        onResizeStart: onResizeStart,
        resizeHandles: resizable === false ? [] : options.direction || ["se"],
        style: {
            position: "absolute",
            ...checkPosition(),
        },
        bounds: undefined
    }

    if (resizable === false) {
        sizableOptions.maxConstraints = sizableOptions.minConstraints
    }

    if (size !== null) {
        sizableOptions.width = size[0]
        sizableOptions.height = size[1]
    }

    const toggle = () => setFull(!full)

    const getBaseActions = () => {
        let data = {
            ...props,
            toggle,
            resizable,
            minimize: props.minimize,
            actions: undefined
        }

        data.actions = getExtraActions(data)

        return data
    }

    const getExtraActions = (givenProps:any) => givenProps?.data?.actions?.(props) || []

    const getBaseWindow = (givenProps = getBaseActions()) => (
        <div className='window' style={givenProps.style}>
            <Decorator>
                <span className='title'>{givenProps.data.title}</span>
                {getExtraActions(givenProps)}
                {resizable === false ? null : <span className='decorator_toggle nodrag' onClick={givenProps.toggle}></span>}
                <span className='decorator_close nodrag' onClick={givenProps.onClose}></span>
            </Decorator>
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

    const onStart = (e: any, data: DraggableData) => {
        if (e.target.closest(".nodrag") !== null) {
            return false
        }

        props.onDragStart?.(e, data, props.data)
    }

    const onMouseDown = (e:any) => props.setActive()

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

    if (typeof props.data.options?.className === 'string') {
        className += ` ${props.data.options?.className}`
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
            <ResizableBox {...sizableOptions} >
                {renderInnerWindow()}
            </ResizableBox>
        </Draggable>
    )
}

export default Window
