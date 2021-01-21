import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import IconButton from "@material-ui/core/IconButton"

const Code = props => {
    const copy = () => {
        const el = document.createElement("textarea")
        el.value = props.content
        document.body.appendChild(el)
        el.select()
        document.execCommand("copy")
        document.body.removeChild(el)
    }

    return (
        <div className='code_visualizer'>
            <IconButton onClick={copy}>
                <FileCopyIcon />
            </IconButton>
            <SyntaxHighlighter language='javascript' style={prism} className='mycode'>
                {props.content}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code
