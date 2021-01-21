const code = `<div className='App'>
	<Windows
	    dashboard={dashboard}
	    windows={{ ...this.props.windows }}
	    onClose={this.props.removeWindow}
	    order={this.props.order}
	    active={this.props.active}
	    setActive={this.props.setActive}
	/>
</div>`

export default code
