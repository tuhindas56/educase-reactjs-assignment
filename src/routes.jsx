import Home from "./components/Home"
import Login from "./components/Login"
import Error from "./components/Error"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]

export default routes
