import { RouterProvider } from "react-router-dom"
import { router } from "./lib/router/router"

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App