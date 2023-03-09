import {createBrowserRouter} from "react-router-dom"
import Pages from "../pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Home/>
  },
])

export default router