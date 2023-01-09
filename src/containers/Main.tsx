import React from "react"

import Windows from "../Windows"
import Dashboard from "./Dashboard"
import { useSelector } from "react-redux"
import { useApp } from "../redux/appSlice.js"
import useWindowManager from "../partials/windowManager.js"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"

const dashboard = <Dashboard />

const Wrapper = styled.div`
    display:flex;
    > div:first-child{
        width:200px;
        flex:none;
        + div {
            width: 100%;0
        }
    }
`

const Main = () => {
    const app = useApp()
    const {windows, order, active} = useSelector(state => state.app)
    const windowManager = useWindowManager()

    return (
        <Wrapper className='App'>
            <Sidebar />
            <Windows
                dashboard={dashboard}
                windows={windows}
                onClose={app.removeWindow}
                order={order}
                active={active}
                setActive={app.setActive}
            />
        </Wrapper>
    )
}

export default Main
