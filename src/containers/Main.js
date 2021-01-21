import React from "react"

import Windows from "./../Windows"
import Dashboard from "./Dashboard"
import hoc from "./../hocs/main"

class Main extends React.Component {
    render() {
        const dashboard = <Dashboard />

        return (
            <div className='App'>
                <Windows
                    dashboard={dashboard}
                    windows={{ ...this.props.windows }}
                    onClose={this.props.removeWindow}
                    order={this.props.order}
                    active={this.props.active}
                    setActive={this.props.setActive}
                />
            </div>
        )
    }
}

export default hoc()(Main)
