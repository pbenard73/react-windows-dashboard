import React, { Fragment } from "react"
import Respo from "react-respo"
import Code from "./../components/Code"

import container from "./../code/order_container"
import reduxer from "./../code/order_reduxer"
import thunks from "./../code/order_thunks"

const Ordering = () => (
    <Fragment>
        <p>
            Initial windows behaviour is to active only the focused window, and order others depending on the time of their
            rendering.
        </p>

        <p>
            In order to set the order of windows, the <code>order</code> props must be given to the windows container.
        </p>
        <p>Each time, a window is focused or created, the order should be update.</p>
        <p>
            The current window is setted via the <code>active</code> and <code>setActive</code> props to the windows
            container.
        </p>

        <Respo container md={800}>
            <Respo md={6}>
                <div style={{ padding: "15px" }}>
                    <h3>Thunks Code</h3>
                    <Code content={thunks} />
                </div>
            </Respo>
            <Respo md={6}>
                <div style={{ padding: "15px" }}>
                    <h3>Reduxer Code</h3>
                    <Code content={reduxer} />
                    <h3>Windows Container Code</h3>
                    <Code content={container} />
                </div>
            </Respo>
        </Respo>
    </Fragment>
)

export default Ordering
