import React, { Fragment } from "react"

import Code from "./../components/Code"

import hoc from "./../hocs/main"

import StartDashboard from "./../partials/startDashboard"

import reduxer from "./../code/start_reduxer"
import thunks from "./../code/start_thunks"
import hocCode from "./../code/start_hoc"
import index from "./../code/start_index"

class Installation extends React.Component {
    render() {
        return (
            <Fragment>
                <p>In this exemple, the Reactizy library is used in order to increase productivity.</p>

                <h3>Reduxer creation</h3>
		<p>Set the <code>windows</code> state to list rendered windows.</p>
                <Code content={reduxer} />

                <h3>Thunks creation</h3>
		<p>Set the actions to manage rendered windows.</p>
                <Code content={thunks} />

                <h3>Hoc creation</h3>
		<p>Create the Reatizy hoc</p>
                <Code content={hocCode} />

                <h3>Application Implemenation</h3>
		<p>Register the Reactizy hoc in your app</p>
                <Code content={index} />

		<p onClick={() => this.openCreateDashboard()}>Well the Dashboard can be create</p>
            </Fragment>
        )
    }
}

export default hoc()(Installation, StartDashboard)
