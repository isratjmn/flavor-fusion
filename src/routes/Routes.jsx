import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import CardLayout from "../layouts/CardLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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

		],
	},
	{
					
		path: "cards",
		element: <CardLayout></CardLayout>,
        /* children: [
			{
				path: '/:id',
				element: <p></p>
			}
		] */
			
	}
]);

export default router;
