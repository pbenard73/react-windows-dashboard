import React from "react"

import Window from "./Window"

class Windows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windows: {},
            active: null,
        }
        this.windowStyle = {
            border: "1px solid #e1e1e1",
            height: "100%",
            width: "100%",
            background: "white",
            borderRadius: "2px",
        }

        this.onWindowClose = this.onWindowClose.bind(this)
    }

    onWindowClose(uuid) {
        if (this.props.onClose !== undefined) {
            this.props.onClose(uuid)
        }
    }

    toggleActive(id) {
        this.setState({ active: id })
    }

    render() {
        return (
            <div className='windows'>
                {this.props.dashboard !== undefined ? this.props.dashboard : null}
                {Object.keys(this.props.windows).map(uuid => {
                    const data = this.props.windows[uuid]
                    return (
                        <Window
                            key={uuid}
                            active={this.state.active === uuid}
                            setActive={() => this.toggleActive(uuid)}
                            data={{...data, uuid}}
                            style={this.windowStyle}
                            onClose={() => this.onWindowClose(uuid)}
                        >
                            {data.component}
                        </Window>
                    )
                })}
            </div>
        )
    }
}

export default Windows
