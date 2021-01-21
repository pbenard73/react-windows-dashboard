const code = `// ./containers/Dashboard
import React from 'react'
import hoc from './../hocs/main'

class Dashboard extends React.Component {
	addNewWindowBindThis() {
		const windowData = {
			uuid: Date.now(),
			title: 'My Window',
			component: <div>The content of my window</div>
		}

		this.props.addWindow(windowData)
	}

	render() {
		return (
			<div className="dashboard" style={{background: 'cyan', width:'100vw', height:'100vh'}}>
				<button onClick={this.addNewWindow}>New Window</button>
			</div>
		)
	}
}

export default hoc()(Dashboard)`

export default code

