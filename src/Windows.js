import React, { useState } from "react"

import Window from "./Window"

const Windows = props => {
    const [active, setActive] = useState(null)
    const [windows, setWindows] = useState({})

    const windowStyle = {
        border: "1px solid #e1e1e1",
        height: "100%",
        width: "100%",
        background: "white",
        borderRadius: "2px",
    }

    const externalActive = props.active !== undefined && props.setActive !== undefined

    const onWindowClose = uuid => props.onClose?.(uuid)

    const toggleActive = id => {
        if (externalActive === true) {
            return props.setActive(id)
        }

        setActive(id)
    }

    const minimize = id => props.minimize?.(id)

    const isActive = externalActive === true ? props.active : active

    return (
        <div className='windows'>
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
                    >
                        {data.component}
                    </Window>
                )
            })}
        </div>
    )
}

export default Windows
