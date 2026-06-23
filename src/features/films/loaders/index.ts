import filmService from "../services/filmService.ts";
import type {LoaderFunctionArgs} from "react-router-dom";

export const filmListLoader = ({request: {url}}: LoaderFunctionArgs) => {
    const params = new URL(url).searchParams;
    return {filmsPromise: filmService.getAllFilms()};
};

export const filmDetailsLoader = ({params: {id}}: LoaderFunctionArgs) => (
    {filmPromise: filmService.getFilmById(id!)}
);