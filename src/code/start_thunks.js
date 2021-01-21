const code = `// ./thunks/main
const thunks = {
    addWindows: windowData => (dispatch, getState, windowData) => {
        let state = getState()
        let windows = { ...state.windows }
        const uuid = windowData.uuid

        if (windows[uuid] === undefined) {
            windows[uuid] = windowData
        }

        dispatch("setWindows", windows)
    },
    removeWindow: uuid => (dispatch, getState, uuid) => {
        let state = getState()
        let windows = { ...state.windows }

        if (windows[uuid] !== undefined) {
            windows[uuid] === undefined
            delete windows[uuid]
        }

        dispatch("setWindows", windows)
    },
}    

export default thunks`

export default code

