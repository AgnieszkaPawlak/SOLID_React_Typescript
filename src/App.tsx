import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import {ErrorPage} from "../src/ErrorPage";
import { OpenClose } from './pages/open-closed/OpenClose';
import { SingleResponsibility } from './pages/single-responsibility/SingleResponsibility';
import { LiskovSubstitution } from './pages/liskov-substitution/LiskovSubstitution';
import { InterfaceSegregation } from './pages/interface-segregation/InterfaceSegregation';
import { DependencyInversion } from './pages/dependency-inversion/DependencyInversion';
import { Layout } from './layouts/Layout';


import { GlobalStyles } from './Global.styled'
 

const router = createBrowserRouter(
  [
    {
        path: "/",
        element: <Layout />,
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
  
  return <>
  <GlobalStyles/>
  <RouterProvider router={router} />

  </>
  

}

export default App;
