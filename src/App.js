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
          position={'top-right'}
          autoClose={3000}
          theme={'dark'}
          bodyClassName={'font-poppins'}
          toastStyle={{background: 'rgba(13,35,68,0.95)', borderRadius: 10}}
        />
      </PersistGate>
    </StoreProvider>
  );
}

export default App;
