const code = `// ./reduxers/main
const mainReduxer = new (class {
    state = {
        windows: {},
    }

    actions = {
        setWindows: (state, windows) => ({...state, windows}),
    }
})()

export default mainReduxer`

export default code

