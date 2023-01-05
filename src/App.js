import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet
} from "react-router-dom";
import { useCookies } from 'react-cookie';


// Pages
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Adminpanel from "./pages/Adminpanel";
import Onepage from "./pages/Onepage";

const ProtectedRoute = ({ page, children }) => {
  // The router elements
 const cookies = useCookies(['token']);
// For some reason I have to use the 0 index though documentation states that "cookie.token" should do the trick
 if (!cookies[0].token) {
   return <Navigate to={page} replace />;
 }
 return children ? children : <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Onepage />,
        index:true,
      },
      {
        path: "/Detail/:detailId",
        element: <Detail />
          
      },
      {
        path: "/Login",
        element: 
            <Login />
      },
      {
        path: "/Adminpanel",
        element: 
          <ProtectedRoute page='/'>
            <Adminpanel />
          </ProtectedRoute>,
      },
    ]
  },
  
 ]);



function App() {
  // The page styling - in this case the overall styling for the body (substituted by a div in this case) - I should do this proper..
const style = `
bg-sky-100
text-black
text-sm
font-body
min-h-screen
max-w-full
flex
flex-col
`;

  return (
    <div className={style} >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
