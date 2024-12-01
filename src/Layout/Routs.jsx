import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Components/Root/Root";
import { Home } from "../Components/Pages/Home/MainComponentsHome/Home";
import { AddFood } from "../Components/Pages/AddFood/AddFood";
import { Availavlefood } from "../Components/Pages/AvailavleFood/Availavlefood";
import { FoodDetails } from "../Components/Pages/Home/FoodDetails/FoodDetails";
import { MyOrderRequest } from "../Components/Pages/MyOrderRequest/MyOrderRequest";
import { MyFood } from "../Components/Pages/MyFood/MyFood";
import Private from "../Components/Pages/Private/Praivate";

export const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://food-sharing-web-server-nine.vercel.app/addfood`),
      },
      {
        path: "addfood",
        element: <Private><AddFood></AddFood></Private>,
      },
      {
        path: "/available",
        element: <Private><Availavlefood></Availavlefood></Private>
      },
      {
        path:'/details/:id',
        element: <Private><FoodDetails></FoodDetails></Private>,
        loader: ({ params }) => fetch(`https://food-sharing-web-server-nine.vercel.app/addfood/${params.id}`)
      } ,
      {
        path: "/myfoodrequest",
        element: <Private><MyOrderRequest></MyOrderRequest></Private>,
        loader: () => fetch(`https://food-sharing-web-server-nine.vercel.app/orderFood`),
      },
      {
        path:'/myfoods',
        element:<Private><MyFood></MyFood></Private>
      }
    ],
  },
]);
export default Routs;
