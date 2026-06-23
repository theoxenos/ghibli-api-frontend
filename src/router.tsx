import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import {FilmDetails, filmDetailsLoader, filmListLoader, FilmsList} from "./features/films";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element: <FilmsList/>, loader: filmListLoader},
            {path: 'films/:id', element: <FilmDetails/>, loader: filmDetailsLoader}
        ]
    }
]);

export default router;