import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Brands,
  Category,
  Details,
  EmailVerification,
  Features,
  Home,
  ListView,
  Login,
  MyCart,
  PageNotFound,
  Products,
  Profile,
  Register,
  UploadProduct,
} from "../pages/exportPages";
import {
  AnimalAndParts,
  Automobiles,
  ClothesAndWear,
  ComputerAndTech,
  Description,
  HomeInteriors,
  MobileAccessories,
  MoreCategory,
  SportsAndOutdoor,
  ToolsEquipments,
} from "../components/export";
import Dashboard from "../layouts/Dashobard/Dashboard";
import AdminPermission from "../Admin/AdminPermission";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "/user-layouts/automobiles",
            element: <Automobiles />,
          },
          {
            path: "/user-layouts/clothes-and-wear",
            element: <ClothesAndWear />,
          },
          {
            path: "/user-layouts/home-interiors",
            element: <HomeInteriors />,
          },
          {
            path: "/user-layouts/computer-and-tech",
            element: <ComputerAndTech />,
          },
          {
            path: "/user-layouts/tools-and-equipments",
            element: <ToolsEquipments />,
          },
          {
            path: "/user-layouts/sports-and-outdoor",
            element: <SportsAndOutdoor />,
          },
          {
            path: "/user-layouts/animal-and-pets",
            element: <AnimalAndParts />,
          },
          {
            path: "/user-layouts/more-category",
            element: <MoreCategory />,
          },
        ],
      },
      {
        path: "list-view",
        element: <ProtectedRoute><ListView /></ProtectedRoute>,
        children: [
          {
            path: "/list-view/category/mobile-accessories",
            element:<ProtectedRoute><MobileAccessories /></ProtectedRoute>, 
          },
        ],
      },
      {
        path: "details",
        element: <ProtectedRoute><Details /></ProtectedRoute>, // <Details />,
        children: [
          {
            path: "/details/:product-id/description",
            element: <ProtectedRoute><Description /></ProtectedRoute>, // <Description />,
          },
        ],
      },
      {
        path: "cart",
        element: <ProtectedRoute><MyCart /></ProtectedRoute>, // <MyCart />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify-email",
        element: <EmailVerification />,
      },
      {
        path: "dashboard",
        element:<ProtectedRoute><Dashboard /></ProtectedRoute>, // <Dashboard />,
        children: [
          {
            path: "/dashboard/profile",
            element:<ProtectedRoute><Profile /></ProtectedRoute>,
          },
          {
            path: "/dashboard/category",
            element:<ProtectedRoute><AdminPermission><Category /></AdminPermission></ProtectedRoute> ,
          },
          {
            path: "/dashboard/brands",
            element:<ProtectedRoute><AdminPermission><Brands /></AdminPermission></ProtectedRoute> ,
          },
          {
            path: "/dashboard/features",
            element:<ProtectedRoute><AdminPermission><Features /></AdminPermission></ProtectedRoute> ,
          },
          {
            path: "/dashboard/upload-product",
            element: <ProtectedRoute><AdminPermission><UploadProduct /></AdminPermission></ProtectedRoute>,
          },
          {
            path: "/dashboard/products",
            element: <ProtectedRoute><AdminPermission><Products /></AdminPermission></ProtectedRoute>,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      }
    ],
  },
  
]);

export { router };
