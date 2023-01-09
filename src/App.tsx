// import { Store } from "reactizy"
import { Provider } from "react-redux"
import Main from "./containers/Main"
import store from "./redux/store"

const assetPrefix = "/react-windows-dashboard"

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

export default App
