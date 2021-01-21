import IconButton from "@material-ui/core/IconButton"

const action = {
    openCustomDecoratorBindThis: function () {
        const windowData = {
            uuid: "custom_decorator",
            component: <div>{`This is my rounded window's content`}</div>,
            options: {
                size: [250, 250],
                resizable: false,
            },
            decorator: props => {
                return (
                    <div
                        className=''
                        style={{
                            borderRadius: "50%",
                            width: "250px",
                            height: "250px",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            border: "12px solid #51c4f0",
                            textAlign: "center",
                            padding: "15px",
                        }}
                    >
                        <IconButton onClick={props.onClose} style={{ marginBottom: "30px" }}>
                            X
                        </IconButton>
                        {props.children}
                    </div>
                )
            },
        }

        this.props.addWindows(windowData)
    },
}

export default action
