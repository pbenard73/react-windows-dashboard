import React from "react"

import styled from "styled-components"

const DashboardStyled = styled.div`
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    background-position: center center;
    display: flex;
    flex-direction: column;
    --var-bg: #f4f4f4;
    --var-line: #aee8f5;
    background: conic-gradient( var(--var-bg) 0.49turn, var(--var-line) 0.25turn 0.5turn, var(--var-bg) 0.5turn 0.99turn, var(--var-line) 0turn ) top left / 25px 25px repeat;

    align-items:center;
    justify-content:center;
    > .ghost_shadow {
        margin-top: -20vh;
        pointer-events:none;
        user-select: none;
        color: rgb(29, 44, 47);
        opacity: .4;
    }

`


const Dashboard = () => (
    <DashboardStyled className='dashboard'>
        <div className="ghost_shadow">
            <h1>React Windows Dashboard</h1>
            <h3><i>OS Like React Windows Manager</i></h3>
        </div>
    </DashboardStyled>
)

export default Dashboard
