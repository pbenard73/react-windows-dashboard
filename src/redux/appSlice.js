import { createSlice } from "@reduxjs/toolkit"
import { arrayMoveImmutable } from "array-move"
import { useDispatch } from "react-redux"

const initialState = {
    windows: {},
    order: [],
    active: null,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActive: (state, {payload}) => {
            state.active = payload
        },
        setOrder: (state, {payload}) => {
            state.order = payload
        },
        setWindows: (state, {payload}) => {
            state.windows = payload
        },
    },
  })

  export const { setActive, setOrder, setWindows } = appSlice.actions

  export default appSlice.reducer

  export const useApp = () => {
    const topDispatch = useDispatch()

    return {
        setActive: uuid => topDispatch((dispatch, getState) => {
            let state = getState()
            let order = [...state.app.order]
            const index = order.indexOf(uuid)
            order = arrayMoveImmutable(order, index, order.length - 1)
    
            dispatch(setOrder(order))
            dispatch(setActive(uuid))
        }),
        addWindows: windowData => topDispatch((dispatch, getState) => {
            let state = getState()
            let windows = { ...state.app.windows }
            let order = [...state.app.order]
            const uuid = windowData.uuid
    
            if (windows[uuid] === undefined) {
                windows[uuid] = windowData
            }
    
            const index = order.indexOf(uuid)
            if (index === -1) {
                order.push(uuid)
            } else {
                order = arrayMoveImmutable(order, index, order.length - 1)
            }
    
            dispatch(setOrder(order))
            dispatch(setWindows(windows))
            dispatch(setActive(uuid))
        }),
        removeWindow: uuid => topDispatch((dispatch, getState) => {
            let state = getState()
            let windows = { ...state.app.windows }
            let order = [...state.app.order]
    
            if (windows[uuid] !== undefined) {
                delete windows[uuid]
                delete windows[uuid]
            }
    
            const index = order.indexOf(uuid)
            if (index !== -1) {
                order.splice(index, 1)
            }
    
            dispatch(setOrder(order))
            dispatch(setWindows(windows))
    
            const windowKeys = Object.keys(windows)
            if (windowKeys.length > 0) {
                dispatch(setActive(windowKeys[windowKeys.length - 1]))
            }
        }),
    }
  }
