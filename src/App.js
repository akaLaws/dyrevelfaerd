import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// The router elements
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

// The page styling - in this case the overall styling for the body (substituted by a div in this case)
const style = `
  bg-sky-200
  text-black
  text-md
  font-body
`;

function App() {
  return (
    <div style={style}>
    <RouterProvider router={router} />

    </div>
  );
}

export default App;
