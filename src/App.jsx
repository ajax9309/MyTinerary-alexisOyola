import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Cities from "./pages/Cities/Cities";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import Notfound from "./pages/Notfound/Notfound";
import City from "./pages/City/City";
import Signup from "./pages/SignUp/Signup";
import Signin from "./pages/SignIn/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Cities",
        element: <Cities />,
      },
      {
        path: "/City/:id",
        element: <City />,
      },
      {
        path: "/SignUp",
        element: <Signup />,
      },
      {
        path: "/SignIn",
        element: <Signin />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (<RouterProvider router={router} />
  );
}

export default App;
