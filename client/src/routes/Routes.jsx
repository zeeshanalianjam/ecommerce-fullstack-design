import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {Home} from "../pages/exportPages";
import HeroSectionLayouts from "../layouts/HeroSectionLayouts";


const router = createBrowserRouter([
    {
        path: "/",
        element : <App />,
        children:[
            {
                path: "",
                element : <HeroSectionLayouts />
            }
        ]
    }
])


export {router}