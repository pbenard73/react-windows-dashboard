import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism"

const Code = props => {
    return (
        <SyntaxHighlighter language='javascript' style={prism} className="mycode">
            {props.content}
        </SyntaxHighlighter>
    )
}

export default Code
