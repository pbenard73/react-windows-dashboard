import React, { ReactNode, useState } from "react"

import Window from "./Window"
import { DraggableData, DraggableEvent } from "react-draggable"
import { createGlobalStyle } from 'styled-components'

interface WindowsProps {

    /**
     * @description Actual active window uuid
     */
    active?: string

    /**
     * @description Method to set a window active
     */
    setActive?: (uuid:string) => void

    /**
     * @description Method to close a window
     */
    onClose?: (uuid:string) => void

    /**
     * @description Method to register a window uuid in minimized pool
     */
    minimize?: (uuid:string) => void

    /**
     * @description React Node to use as Dashboard
     */
    dashboard?: ReactNode

    /**
     * @description Windows List
     */
    windows?: any

    /**
     * @description Custom decorator to use as default
     */
    decorator?: any

    /**
     * @description Array of window uuids to set the zIndex order
     */
    order?: string[]

    /**
     * @description Array of window uuids minimized
     */
    minimized?: string[]

    /**
     * @description Default style for override
     */
    defaultStyles?: DefaultStyles

    /**
     * @description Method to call on window drag start
     */
    onDragStart?: (e:DraggableEvent, data: DraggableData, windowData?: WindowData) => any

    /**
     * @description Method to call on window drag stop 
     */
    onDragStop?: (e:DraggableEvent, data: DraggableData, windowData?: WindowData) => any

    /**
     * @description Method to call when window is dragging
     */
    onDrag?: (e:DraggableEvent, data: DraggableData, windowData?: WindowData) => any
}

type CssString = string

export interface DefaultStyles {
    window?: CssString
    resizableHandle?: CssString
    windowContent?: CssString
    windowActive?: CssString
    fullscreen?: CssString
}

export interface WindowData {
    
    /**
     * @description Window uuid 
     */
    uuid: string

    /**
     * @description Title to show in window top bar
     */
    title: string
    
    options?: any

    /**
     * @description If set to false, the window won't be resizable
     */
    resizable?: boolean

    size?: number[]
    minSize?: number[]
    left?: any
    top?: any
    position?: any
    
    /**
     * @description Open window at center of the dashboard
     */
    center?: boolean
}

const Windows = (props: WindowsProps) => {
    const [active, setActive] = useState<string|null>(null)

    const windowStyle = props.defaultStyles?.window || {
        border: "1px solid #e1e1e1",
        height: "100%",
        width: "100%",
        background: "white",
        borderRadius: "2px",
    }

    const externalActive = props.active !== undefined && props.setActive !== undefined

    const onWindowClose = (uuid:string) => props.onClose?.(uuid)

    const toggleActive = (uuid:string) => {
        if (externalActive === true && props.setActive)  {
            return props.setActive(uuid)
        }

        setActive(uuid)
    }

    const minimize = (uuid:string) => props.minimize?.(uuid)

    const isActive = externalActive === true ? props.active : active

    const GlobalStyle = createGlobalStyle`
    .react-resizable-handle {
        ${props.defaultStyles?.resizableHandle || `
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
        ${props.defaultStyles?.windowContent || `height: calc(100% - 24px);overflow:auto;`}
    }
    
    .window_active {
        ${props.defaultStyles?.windowContent || `z-index: 1;`}
    }
    
    .fullscreen {
        ${props.defaultStyles?.resizableHandle || `
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

    return (
        <>
        <GlobalStyle />
        <div className='windows' style={{position:'relative', height:'100%'}}>
            {props.dashboard !== undefined ? props.dashboard : null}
            {Object.keys(props.windows).map(uuid => {
                const data = props.windows[uuid]
                const decorator = data.decorator || props.decorator
                let order = undefined
                
                if (props.order !== undefined) {
                    order = props.order.indexOf(uuid) + 1
                }

                return (
                    <Window
                        key={uuid}
                        active={isActive === uuid}
                        setActive={() => toggleActive(uuid)}
                        data={{ ...data, uuid }}
                        style={windowStyle}
                        order={order}
                        minimize={minimize}
                        minimized={(props.minimized || []).indexOf(uuid) !== -1}
                        onClose={() => onWindowClose(uuid)}
                        decorator={decorator}
                        onDragStart={props.onDragStart}
                        onDrag={props.onDrag}
                        onDragStop={props.onDragStop}
                        defaultStyles={props.defaultStyles}
                    >
                        {data.component}
                    </Window>
                )
            })}
        </div>
            </>
    )
}

export default Windows
