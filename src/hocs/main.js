import { hocBuilder } from 'reactizy'

import mainReduxer from './../reduxers/main'
import thunks from './../thunks/main'

const hoc = hocBuilder({
	reduxers: [mainReduxer],
	thunks,
	options: {
		bindAll: true
	}
})

export default hoc
