# Windows React Dashboard

React Dashboard with windowed components

[Demo](https://pbenard73.github.io/react-windows-dashboard/)

![react-windows-dashboard screenshot](https://github.com/pbenard73/react-windows-dashboard/raw/master/doc/screenshot.png)

## Installation

`npm install --save-dev react-windows-dashboard`

## Usage

```js
import React, { useState } from "react";
import { Windows } from "react-windows-dashboard";

/**
 * A simple note component
 */
const Note = () => <div contenteditable="true">A note</div>;

/**
 * A movie component
 */
const Movie = () => (
    <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://www.youtube.com/embed/dfTPlsIq7d0"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
);

/**
 * The dashboard to use
 *
 * Note that dashboard has 2 icons (set your own image pathes)
 */
const Dashboard = props => (
    <div
        className="dashboard"
        style={{
            background: "whitesmoke",
            height: "100vh",
            width: "100vw",
            columnCount: 12
        }}
    >
        <img
            src="/My computer.png"
            onClick={() => props.add()}
            style={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
                userSelect: "none"
            }}
        />
        <img
            src="/movie.png"
            onClick={props.openMovie}
            style={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
                userSelect: "none",
                margin: "10px 0"
            }}
        />
    </div>
);

/**
 * The initial state of opened windows
 */
let initialWindows = {
    first_note: {
        component: <Note />,
        title: "Note"
    }
};

function App() {
    let [windows, setWindows] = useState(initialWindows);
    let [index, setIndex] = useState(0);

    /**
     * Add a window in the state
     */
    const addWindow = myWindow => {
        const newIndex = index + 1;
        let newWindows = { ...windows };
        newWindows[`window_${newIndex}`] =
            myWindow !== undefined
                ? myWindow
                : { ...initialWindows.first_note };
        setWindows(newWindows);
        setIndex(newIndex);
    };

    /**
     * Open a movie window
     */
    const openMovie = () => {
        addWindow({
            title: "Movie",
            component: <Movie />
        });
    };

    /**
     * Close window behaviour
     */
    const close = uuid => {
        let newWindows = { ...windows };
        if (newWindows[uuid] !== undefined) {
            newWindows[uuid] = undefined;
            delete newWindows[uuid];
        }

        setWindows(newWindows);
    };

    /**
     * The rendered dashboard
     */
    const dashboard = <Dashboard add={addWindow} openMovie={openMovie} />;

    return (
        <div className="App">
            <Windows dashboard={dashboard} onClose={close} windows={windows} />
        </div>
    );
}

export default App;
```

## Options

### Window properties

* title
    *   The window title
* component
    * The inner react Component
* decorator 
    * method that returns the window decorator
* actions
    * method that returns extra top right actions,


#### default decorator

```js
    (
        <div className='window' style={props.style}>
            <div className='decorator'>
                <span className='title'>{props.data.title}</span>
                {this.getExtraActions(props)}
                {this.resizable === false ? null : <span className='decorator_toggle' onClick={props.toggle}></span>}
                <span className='decorator_close' onClick={props.onClose}></span>
            </div>
            <div className='window_content'>{props.children}</div>
        </div>
    )
```

#### extra actions usage

```js
    actions: props => [
        <span onClick={() => {alert('something'); props.onClose()}}>OK</span>
    ]
```
