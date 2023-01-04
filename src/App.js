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
import Onepage from "./pages/Onepage";

// The router elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        index:true,
        element: <Onepage />,
      },
      {
        path: "/Detail/:detailId",
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
  bg-blue-200
  text-black
  text-sm
  font-body
  min-h-screen
  max-w-full
  flex
  flex-col
`;

function App() {
  return (
    <div className={style} >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
