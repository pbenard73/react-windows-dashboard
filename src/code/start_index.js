const code = `// ./App.js
import { Store } from "reactizy"
import Main from "./containers/Main" // At this point the Main Container is not created
import hoc from "./hocs/main"

const assetPrefix = "/react-windows-dashboard"

function App() {
    return (
        <Store hocs={[hoc, true]}>
            <Main />
        </Store>
    )
}

export default App`

export default code

