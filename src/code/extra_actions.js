const code = `const windowData = {
    uuid: "extra_actions",
    title: "Window Extra Actions",
    component: <ExtraActions />,
    center: true,
    actions: () => <span style={{margin:'0 5px', cursor:'pointer'}} onClick={() => alert("Why did you clicked ?")}>⛔</span>,
    options: {   
	size: [700, 485],
	minSize: [300, 100],
    },
}`

export default code
