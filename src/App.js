import {Provider as StoreProvider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"
import {persistedStore, store} from "./redux/store"
import {RouterProvider} from "react-router-dom"
import router from "./router"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import "react-activity/dist/Squares.css"

function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistedStore}>
        <RouterProvider router={router}/>
        <ToastContainer
          position={'bottom-center'}
          autoClose={3000}
          theme={'dark'}
        />
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
