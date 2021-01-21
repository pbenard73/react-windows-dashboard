import React, { Fragment } from "react"

import Code from "./../components/Code"

import  Respo  from "react-respo"

import dashboard from "./../code/start_dashboard"
import main from "./../code/start_main"
import hoc from "./../hocs/main"

class CreateDashboard extends React.Component {
    render() {
        return (
            <Respo container md={600} lg={1000}>
                <Respo xs={12} md={4}>
                    <h3>Create a custom Dashboard</h3>
                    <p>Create a component filling the screen, with a button opening a window</p>
                </Respo>
                <Respo md={8}>
                    <Code content={dashboard} />
                </Respo>
                <Respo md={4}>
                    <h3>Implement the Main Container</h3>
                    <p>Register your new dashboard inside your app</p>
                </Respo>
                <Respo md={8}>
                    <Code content={main} />
                </Respo>

                <p>Well now you can play with your new Dashboard !</p>
            </Respo>
        )
    }
}

export default hoc()(CreateDashboard)
