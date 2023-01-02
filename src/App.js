import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Adminpanel from "./pages/Adminpanel";

// The router elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Detail",
        element: <Detail />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Adminpanel",
        element: <Adminpanel />,
      },
    ]
  },
  
]);

// The page styling - in this case the overall styling for the body (substituted by a div in this case)
const style = `
  bg-sky-200
  text-black
  text-md
  font-body
  min-h-screen
  max-w-full
`;

function App() {
  return (
    <div className={style} >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
