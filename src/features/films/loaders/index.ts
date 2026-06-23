import filmService from "../services/filmService.ts";
import type {LoaderFunctionArgs} from "react-router-dom";
import {FilmSearchOption} from "../types";

export const filmListLoader = ({request: {url}}: LoaderFunctionArgs) => {
    const params = new URL(url).searchParams;
    const searchTerm = params.get('searchTerm')?.trim();
    const searchOption = params.get('searchOption');

    const args: [string?, string?, string?] = [
        searchOption === FilmSearchOption.Title ? searchTerm : undefined,
        searchOption === FilmSearchOption.Director ? searchTerm : undefined,
        searchOption === FilmSearchOption.Producer ? searchTerm : undefined,
    ];

    return {filmsPromise: filmService.getAllFilms(...args), searchParams: {searchTerm, searchOption}};
};

export const filmDetailsLoader = ({params: {id}}: LoaderFunctionArgs) => (
    {filmPromise: filmService.getFilmById(id!)}
);