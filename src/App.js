import { Store } from "reactizy"
import Main from "./containers/Main"
import hoc from "./hocs/main"

const assetPrefix = "/react-windows-dashboard"

function App() {
    return (
        <Store hocs={[hoc, true]}>
            <Main />
        </Store>
    )
}

export default App
