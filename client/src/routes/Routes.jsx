import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/exportPages";
import HeroSectionLayouts from "../layouts/HeroSectionLayouts";
import {AnimalAndParts, Automobiles, ClothesAndWear, ComputerAndTech, HomeInteriors, MoreCategory, SportsAndOutdoor, ToolsEquipments} from "../components/export"

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
            element : <HomeInteriors />,
          },
          {
            path: "/user-layouts/computer-and-tech",
            element : <ComputerAndTech />
          },
          {
            path: "/user-layouts/tools-and-equipments",
            element : <ToolsEquipments />
          },
          {
            path: "/user-layouts/sports-and-outdoor",
            element : <SportsAndOutdoor />
          },
          {
            path: "/user-layouts/animal-and-pets",
            element : <AnimalAndParts />
          },
          {
            path: "/user-layouts/more-category",
            element : <MoreCategory />
          },
        ],
      },
    ],
  },
]);

export { router };
