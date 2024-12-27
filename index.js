import { createRoot } from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router"
import ContactUs from "./Components/ContactUs"
import Home from "./Components/Home"
import ErrorElement from "./Components/ErrorElement"
import CountryDetails from "./Components/CountryDetails"










const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
])

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <RouterProvider router={router} />
  </>
)
