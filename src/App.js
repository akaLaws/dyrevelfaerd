import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// The router elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing >,
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
