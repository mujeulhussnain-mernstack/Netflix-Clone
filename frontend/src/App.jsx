import "./App.css";
import Browse from "./pages/Browse";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast"
import LoginOrSignup from "./pages/LoginOrSignup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <LoginOrSignup />
      </>
    ),
  },
  {
    path: "/browse",
    element: (
      <>
        <Header />
        <Browse />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <Toaster/>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
