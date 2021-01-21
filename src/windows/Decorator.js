import React, { Fragment } from "react"

import Code from "./../components/Code"
import CustomDecorator from './../partials/customDecorator'
import decorator from "./../code/decorator"
import rounded from "./../code/decorator_rounded"

import hoc from './../hocs/main'

class Decorator extends React.Component {
    render() {
        return (
            <Fragment>
                <p>
                    Windows Decorator can be customized, one given in the main <code>Windows</code> Component properties,
                    second given in the window data object.
                </p>

                <p>A decorator is a method with an object as argument</p>

                <Code content={decorator} />
		<p onClick={this.openCustomDecorator} style={{cursor:'pointer'}}>Click here to see a rounded window</p>


		<p>Rounded window's code : </p>
                <Code content={rounded} />

            </Fragment>
        )
    }
}

export default hoc()(Decorator, CustomDecorator)
