import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import './styles/Dashboard.scss';
import Windows from "./Windows";
import { Calculator } from 'react-mac-calculator-extra'

const assetPrefix = "/react-windows-dashboard"

const One = () => <div contenteditable="true">My Note</div>;
const Two = () => <div contenteditable="true">My Second Note</div>;

const Movie = () => (<iframe style={{width:'100%', height:'100%'}} src="https://www.youtube.com/embed/dfTPlsIq7d0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)

const Dashboard = props => {
    let [bg, setBg] = useState(`${assetPrefix}/pexels-veeterzy-114979.jpg`)
    return (
        <div className="dashboard" style={{backgroundImage: 'url(' + bg +')'}}>
            <img src={`${assetPrefix}/My computer.png`} onClick={props.add} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none'}}/>
            <img src={`${assetPrefix}/calculator-icon.png`} onClick={props.openCalc} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src={`${assetPrefix}/movie.png`} onClick={props.openMovie} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src={`${assetPrefix}/pexels-veeterzy-114979.jpg`} onClick={() => setBg(`${assetPrefix}/pexels-veeterzy-114979.jpg`)} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src={`${assetPrefix}/osx.jpg`} onClick={() => setBg(`${assetPrefix}/osx.jpg`)} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src={`${assetPrefix}/My computer.png`} onClick={props.openTwo} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none'}}/>
            
        </div>
    )
}

let initialWindows = {
    one: {
        component: <One />,
        title: "Note"
    }
};

function App() {
    let [windows, setWindows] = useState(initialWindows);
    let [index, setIndex] = useState(0);
    const add = () => {
        const newIndex = index + 1
        let newW = { ...windows };
        newW[`t${newIndex}`] = { ...initialWindows.one };
        setWindows(newW);
        setIndex(newIndex)
    };

    const openCalc = () => {
        const newIndex = index + 1
        let newW = { ...windows };
        newW[`t${newIndex}`] = { 
            title: 'Calculator',
            component: <Calculator />,
            options: {
                minSize:[320,490],
                resizable: false
            }
        };
        setWindows(newW);
        setIndex(newIndex)
    }

    const openMovie = () => {
        const newIndex = index + 1
        let newW = { ...windows };
        newW[`t${newIndex}`] = { 
            title: 'Movie',
            component: <Movie />,
            actions: props => [
                <span onClick={() => {alert('ouai gros'); props.onClose()}}>OK</span>
            ]
        };
        setWindows(newW);
        setIndex(newIndex)
    }

    const openTwo = () => {
        const newIndex = index + 1
        let newW = { ...windows };
        newW[`t${newIndex}`] = { 
            title: 'Second Note',
            component: <Two />,
            decorator: props => (
            <div className='window pinky' style={{...props.style, borderRadius:'50%'}} onContextM>
                <div className='window_content' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span onClick={props.onClose}>close me</span><br/>
                    {props.children}
                </div>
            </div>

            )
        };
        setWindows(newW);
        setIndex(newIndex)
    }

    const close = uuid => {
        let newW = { ...windows }
        if (newW[uuid] !== undefined) {
            newW[uuid] = undefined
            delete newW[uuid]
        }

        const element = document.querySelector(`#${uuid}`)
        if (element !== null) {
            element.classList.add('deleting')
        }

        setTimeout(() => setWindows(newW), 600)
    }

    const dashboard = <Dashboard add={add} openCalc={openCalc} openTwo={openTwo} openMovie={openMovie}/>

    return (
        <div className="App">
            <Windows dashboard={dashboard} onClose={close} windows={windows} />
        </div>
    );
}

export default App;
