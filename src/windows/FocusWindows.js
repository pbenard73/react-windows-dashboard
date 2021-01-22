import { Fragment } from "react"

import Code from "./../components/Code"
import style from "./../code/styling_focus"

const FocusWindows = () => (
    <Fragment>
        <p>The focused window component receives the class <code>window_active</code>, so it{"'"}s easy to style the windows focused and not focused via css.</p>

	<p>On fullscreen the window component receive the <code>fullscreen</code> class.</p>

        <Code content={style} />
    </Fragment>
)

export default FocusWindows
