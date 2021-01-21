const code = `(props) => {
	return (
	    <div className='window' style={props.style}>
		<div className='decorator'>
		    <span className='title'>{props.data.title}</span>
		    {props.resizable === false ? null : (
			<span className='decorator_toggle nodrag' onClick={props.toggle}></span>
		    )}
		    <span className='decorator_close nodrag' onClick={props.onClose}></span>
		</div>
		<div className='window_content'>{props.children}</div>
	    </div>
	)
}`

export default code
