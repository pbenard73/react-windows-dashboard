import React, { Fragment } from "react"

import Code from "./../components/Code"

import decorator from "./../code/decorator"

const Decorator = () => (
    <Fragment>
        <p>
            Windows Decorator can be customized, one given in the main <code>Windows</code> Component properties, second
            given in the window data object.
        </p>

        <p>A decorator is a method with an object as argument</p>

        <Code content={decorator} />
    </Fragment>
)

export default Decorator
