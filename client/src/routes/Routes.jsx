import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Details, Home, ListView, MyCart } from "../pages/exportPages";
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
            path: "/details/category-name/category-id/catgory-name/product-name/product-id/description",
            element: <Description />
          }
        ]
      },
      {
        path : "cart",
        element : <MyCart />
      }
    ],
  },
]);

export { router };
