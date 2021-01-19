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
        this.externalActive = this.props.active !== undefined && this.props.setActive !== undefined
	    this.minimize = this.minimize.bind(this)
    }

    onWindowClose(uuid) {
        if (this.props.onClose !== undefined) {
            this.props.onClose(uuid)
        }
    }

    toggleActive(id) {
        if (this.externalActive === true) {
            return this.props.setActive(id)
        }

        this.setState({ active: id })
    }

minimize(id) {
	this.props.minimize(id)
}

    render() {
			    //minimized={(this.props.minimized || []).indexOf(uuid) !== -1}
        const active = this.externalActive === true ? this.props.active : this.state.active
        return (
            <div className='windows'>
                {this.props.dashboard !== undefined ? this.props.dashboard : null}
                {Object.keys(this.props.windows).map(uuid => {
                    const data = this.props.windows[uuid]
                    let decorator = this.props.decorator
                    decorator = decorator === undefined ? data.decorator : decorator
                    let order = undefined
                    if (this.props.order !== undefined) {
                        order = this.props.order.indexOf(uuid) + 1
                    }

                    return (
                        <Window
                            key={uuid}
                            active={active === uuid}
                            setActive={() => this.toggleActive(uuid)}
                            data={{ ...data, uuid }}
                            style={this.windowStyle}
                            order={order}
			    minimize={this.minimize}
			    minimized={(this.props.minimized || []).indexOf(uuid) !== -1}
                            onClose={() => this.onWindowClose(uuid)}
                            decorator={decorator}
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
