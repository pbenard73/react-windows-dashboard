import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import './styles/Dashboard.scss';
import Windows from "./Windows";
import { Calculator } from 'react-mac-calculator-extra'

const One = () => <div contenteditable="true">MY DIV </div>;

const Movie = () => (<iframe style={{width:'100%', height:'100%'}} src="https://www.youtube.com/embed/dfTPlsIq7d0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)

const Dashboard = props => {
    let [bg, setBg] = useState('/pexels-veeterzy-114979.jpg')
    return (
        <div className="dashboard" style={{backgroundImage: 'url(' + bg +')'}}>
            <img src="/My computer.png" onClick={props.add} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none'}}/>
            <img src="/calculator-icon.png" onClick={props.openCalc} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src="/movie.png" onClick={props.openMovie} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src="/pexels-veeterzy-114979.jpg" onClick={() => setBg('/pexels-veeterzy-114979.jpg')} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            <img src="/osx.jpg" onClick={() => setBg('/osx.jpg')} style={{width: '80px', height:'80px', cursor:'pointer', userSelect:'none',margin: '10px 0'}}/>
            
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

        const element = document.querySelector(`#window_wrapper_${uuid} .window`)
        if (element !== null) {
            element.classList.add('deleting')
        }

        setTimeout(() => setWindows(newW), 600)
    }

    const dashboard = <Dashboard add={add} openCalc={openCalc} openMovie={openMovie}/>

    return (
        <div className="App">
            <Windows dashboard={dashboard} onClose={close} windows={windows} />
        </div>
    );
}

export default App;
