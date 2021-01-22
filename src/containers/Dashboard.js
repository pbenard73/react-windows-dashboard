import React, { Fragment } from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import WindowManager from './../partials/windowManager'

import GitHubIcon from '@material-ui/icons/GitHub';

import hoc from './../hocs/main'

import "./../styles/Dashboard.scss"

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuStart: null,
            menuConfig: null,
            menuOverride: null,
        }
    }

    closeBindThis(callback) {
	this.setState({
            menuStart: null,
            menuConfig: null,
            menuOverride: null,
	}, () => callback())
    }

    renderMenuStart() {
        return (
            <Fragment>
                <Button onClick={e => this.setState({menuStart: e.target})}>Get Started</Button>
                {this.state.menuStart === null ? null : (
                    <Menu anchorEl={this.state.menuStart} open={true} onClose={() => this.setState({ menuStart: null })}>
			<MenuItem onClick={() => this.close(this.openInstallation)}>Installation</MenuItem>
			<MenuItem onClick={() => this.close(this.openStartContext)}>Part 1 : Create Context</MenuItem>
			<MenuItem onClick={() => this.close(this.openCreateDashboard)}>Part 2 : Create Dashboard</MenuItem>
                    </Menu>
                )}
            </Fragment>
        )
    }

    renderMenuConfig() {
        return (
            <Fragment>
                <Button onClick={e => this.setState({menuConfig: e.target})}>Configuration</Button>
                {this.state.menuConfig === null ? null : (
                    <Menu anchorEl={this.state.menuConfig} open={true} onClose={() => this.setState({ menuConfig: null })}>
			<MenuItem onClick={() => this.close(this.openOptions)}>Components Options</MenuItem>
                    </Menu>
                )}
            </Fragment>
        )
    }

    renderMenuOverride() {
        return (
            <Fragment>
                <Button onClick={e => this.setState({menuOverride: e.target})}>Cook Book</Button>
                {this.state.menuOverride === null ? null : (
                    <Menu
                        anchorEl={this.state.menuOverride}
                        open={true}
                        onClose={() => this.setState({ menuOverride: null })}
                    >
			<MenuItem onClick={() => this.close(this.openDecorator)}>Customize Windows Decorator</MenuItem>
			<MenuItem onClick={() => this.close(this.openOrdering)}>Managing the Windows (Order & Active)</MenuItem>
			<MenuItem onClick={() => this.close(this.openExtraActions)}>Built-In Window Extra Actions</MenuItem>
			<MenuItem onClick={() => this.close(this.openFocusWindows)}>Styling Window Focus</MenuItem>
                    </Menu>
                )}
            </Fragment>
        )
    }

    render() {
        return (
            <div className='dashboard' style={{ backgroundImage: "url(/react-windows-dashboard/background.jpg)" }}>
                <AppBar position='static' className='topbar'>
                    <Toolbar variant='dense'>
                        <div className='logo'>
                            <img src='/react-windows-dashboard/logo.png' alt='logo' />
                        </div>
                        {this.renderMenuStart()}
                        {this.renderMenuConfig()}
                        {this.renderMenuOverride()}
		<div style={{marginLeft: 'auto'}}>
			<IconButton component="a" href="https://github.com/pbenard73/react-windows-dashboard" target="_blank" >
<GitHubIcon style={{color:'white'}}/>
		</IconButton>
		</div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default hoc()(Dashboard, WindowManager)
