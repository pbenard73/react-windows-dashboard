const mainReduxer = new (class {
    state = {
        windows: {},
        order: [],
	    active: null,
    }

    actions = {
	setActiveInner: (state, active) => ({...state, active}),
	setOrder: (state, order) => ({...state, order}),
	setWindows: (state, windows) => ({...state, windows}),
    }
})()

export default mainReduxer
