import React from "react"

import Respo from "react-respo"

const Options = () => (
    <Respo container md={1000} className='options'>
        <Respo md={6}>
            <div>
                <h3>Windows Options</h3>
                <dl>
                    <dt>windows</dt>
                    <dd>Object representing the windows uuid => windowData</dd>
                    <dt>dashboard</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Component representing the customized dashboard
                    </dd>
                    <dt>onClose</dt>
                    <dd>function performing the close event (uuid) => {}</dd>
                    <dt>active</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        uuid of the current windows
                    </dd>
                    <dt>setActive</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        function performing the activation of focused window (uuid) => {}
                    </dd>
                    <dt>minimize</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        function performing the minimizing event (uuid) => {}
                    </dd>
                    <dt>order</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Array representing the order of windows [uuid, (...uuids)]
                    </dd>
                    <dt>decorator</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        method rendering the windows decorator
                    </dd>
                    <dt>minimized</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Array representing the minimized windows [uuid, (...uuids)]
                    </dd>
                </dl>
            </div>
        </Respo>
        <Respo md={6}>
            <div>
                <h3>Window Options</h3>

                <dl>
                    <dt>uuid</dt>
                    <dd>unique identifier</dd>
                    <dt>title</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Title in the topbar
                    </dd>
                    <dt>decorator</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        method rendering the decorator
                    </dd>
                    <dt>center</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        render at center of the container
                    </dd>
                    <dt>position</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        method returning the position as object {`{left: '10px', top:'10px'}`}
                    </dd>
                    <dt>direction</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Array representing the resizable handler default ['se'] ('e'|'n'|'w'|'s'|'se'|'ne'|'nw'|'sw')
                    </dd>
                    <dt>options</dt>
                    <dd>
                        <span className='optional'>optional</span> object
                        <dl>
                            <dt>resizable</dt>
                            <dd>At false, the resizable behaviour is disabled</dd>
                            <dt>size</dt>
                            <dd>Array of integer representing the [width, height] in pixels</dd>
                            <dt>minSize</dt>
                            <dd>Array of integer representing the [width, height] in pixels</dd>
                            <dt>bounds</dt>
                            <dd>
                                <span> className="optional">optionnal</span>
                                <br /> query selector targeting the container bounds (default : '.dashboard')
                            </dd>
                        </dl>
                    </dd>
                    <dt>actions</dt>
                    <dd>
                        <span className='optional'>optional</span> <br />
                        Array representing extra actions to add in the topbar
                    </dd>
                </dl>
            </div>
        </Respo>
    </Respo>
)

export default Options
