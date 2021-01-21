const code = `import arrayMove from "array-move"

const thunks = {
    setActive: uuid => (dispatch, getState, uuid) => {
        let state = getState()
        let order = [...state.order]
        const index = order.indexOf(uuid)
        order = arrayMove(order, index, order.length - 1)

        dispatch("setOrder", order)
        dispatch("setActiveInner", uuid)
    },
    addWindows: windowData => (dispatch, getState, windowData) => {
        let state = getState()
        let windows = { ...state.windows }
        let order = [...state.order]
        const uuid = windowData.uuid

        if (windows[uuid] === undefined) {
            windows[uuid] = windowData
        }

        const index = order.indexOf(uuid)
        if (index === -1) {
            order.push(uuid)
        } else {
            order = arrayMove(order, index, order.length - 1)
        }

        dispatch("setOrder", order)
        dispatch("setWindows", windows)
    },
    removeWindow: uuid => (dispatch, getState, uuid) => {
        let state = getState()
        let windows = { ...state.windows }
        let order = [...state.order]

        if (windows[uuid] !== undefined) {
            delete windows[uuid]
            delete windows[uuid]
        }

        const index = order.indexOf(uuid)
        if (index !== -1) {
            order.splice(index, 1)
        }

        dispatch("setOrder", order)
        dispatch("setWindows", windows)
    },
}

export default thunks`

export default code
