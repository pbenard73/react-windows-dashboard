const mainReduxer = new (class {
    state = {
        windows: {},
        order: [],
    }

    actions = {
	setOrder: (state, order) => ({...state, order}),
	setWindows: (state, windows) => ({...state, windows}),
    }
})()

export default mainReduxer
