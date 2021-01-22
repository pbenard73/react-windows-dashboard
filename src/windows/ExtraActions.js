import { Fragment } from "react"

import Code from "./../components/Code"
import actions from "./../code/extra_actions"

const ExtraActions = () => (
    <Fragment>
        <p>Extra actions can be provided to builtin window system, it allows you to add some feature into the top bar.</p>

        <p>
            Just has to fill the <code>actions</code> field of window data by a function receiving window props as arguments
            and returning JSX
        </p>

        <Code content={actions} />
    </Fragment>
)

export default ExtraActions
