import React, { Fragment } from "react"

import Code from "../components/Code"

import reduxer from "../code/start_reduxer"
import index from "../code/start_index"
import useWindowManager from "../partials/windowManager"

const Installation = () => {
    const windowManager = useWindowManager()

    return (
        <Fragment>
            <p>In this exemple, the redux toolkit is used in order to increase productivity.</p>

            <h3>Slice creation</h3>
            <Code content={reduxer} />

            <h3>Application Implemenation</h3>
            <Code content={index} />

            <p onClick={windowManager.openCreateDashboard}>Well the Dashboard can be create</p>
        </Fragment>
    )
}

export default Installation
