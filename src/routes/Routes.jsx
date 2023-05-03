import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import CardLayout from "../layouts/CardLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Cards from "../pages/Cards/Cards";
// import CardDetails from "../pages/CardDetails/CardDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			/*{
				path: "card-details/:id",
				element: <CardDetails></CardDetails>,
			}, */
		],
	},
	{
		path: "cards",
		element: <CardLayout></CardLayout>,
		children: [
			{
				path: ":id",
				element: <Cards></Cards>,
				loader: ({params}) => fetch(`http://localhost:7000/cards/${params.id}`)
			},
		],
	},
]);

export default router;
