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
        element: <ListView />,
        children: [
          {
            path: "/list-view/category/mobile-accessories",
            element: <MobileAccessories />,
          },
        ],
      },
      {
        path: "details",
        element: <Details />,
        children: [
          {
            path: "/details/:product-id/description",
            element: <Description />,
          },
        ],
      },
      {
        path: "cart",
        element: <MyCart />,
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
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/category",
            element: <Category />,
          },
          {
            path: "/dashboard/brands",
            element: <Brands />,
          },
          {
            path: "/dashboard/features",
            element: <Features />,
          },
          {
            path: "/dashboard/upload-product",
            element: <UploadProduct />,
          },
          {
            path: "/dashboard/products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export { router };
