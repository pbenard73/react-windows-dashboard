import React from 'react'
import useWindowManager from "../partials/windowManager"
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type:none;
    padding-left: 18px;
    > li {
        margin-bottom:5px;
        cursor: pointer;
        filter: brightness(1) ;
        transition: filter .3s ease;
        &:hover{
            filter: brightness(0.5) 
        }
    }
`

const Sidebar = () => {
    const windowManager = useWindowManager()

    return (
        <div style={{ background: '#1d2c2f', color: 'white', paddingTop:'20px' }}>
            <div className='logo' style={{ textAlign: 'center' }}>
                <img src='/react-windows-dashboard/logo.png' alt='logo' />
            </div>
            <h5>Configuration</h5>
            <List>
                <li><a onClick={windowManager.openInstallation}>Installation</a></li>
                <li><a onClick={windowManager.openStartContext}>Create Context</a></li>
                <li><a onClick={windowManager.openCreateDashboard}>Create Dashboard</a></li>
            </List>
            <h5>Get Started</h5>
            <List >
                <li><a onClick={windowManager.openOptions}>Components Options</a></li>
            </List>
            <h5>Cook Book</h5>
            <List >
                <li><a onClick={windowManager.openDecorator}>Customize Windows Decorator</a></li>
                <li><a onClick={windowManager.openOrdering}>Managing the Windows (Order & Active)</a></li>
                <li><a onClick={windowManager.openExtraActions}>Built-In Window Extra Actions</a></li>
                <li><a onClick={windowManager.openFocusWindows}>Styling Window Focus</a></li>
            </List>
            <div style={{ textAlign: 'center' }}>

                <IconButton component="a" href="https://github.com/pbenard73/react-windows-dashboard" target="_blank" >
                    <GitHubIcon style={{ color: 'white' }} />
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar