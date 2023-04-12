import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
// import './App.scss';
import {ErrorPage} from "../src/ErrorPage";
import { OpenClose } from './pages/open-closed/OpenClose';
import { SingleResponsibility } from './pages/single-responsibility/SingleResponsibility';
import { LiskovSubstitution } from './pages/liskov-substitution/LiskovSubstitution';
import { InterfaceSegregation } from './pages/interface-segregation/InterfaceSegregation';
import { DependencyInversion } from './pages/dependency-inversion/DependencyInversion';
import { RootLayout } from './layouts/RootLayout';

const router = createBrowserRouter(
  [
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
    },
    {
      path: "/open-close",
      element: <OpenClose />,
    },
    {
      path: "/single-responsibility",
      element: <SingleResponsibility />,
    },
    {
      path: "/liskov-substitution",
      element: <LiskovSubstitution />,
    },
    {
      path: "/interface-segregation",
      element: <InterfaceSegregation />,
    },
    {
      path: "/dependency-inversion",
      element: <DependencyInversion />,
    },
]);

function App() {
  
  return <RouterProvider router={router} />
}

export default App;
