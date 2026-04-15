import {useEffect, useState} from "react";
import filmsService from "../services/filmsService.ts";
import type {Film} from "../types/Film.ts";
import FilmListItem from "./FilmListItem.tsx";

export const FilmsList = () => {
    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        const fetchAllFilms = async () => {
            try {
                const films = await filmsService.getAllFilms();
                setFilms(films);
            } catch (error) {
                console.error('Error fetching films:', error);
            }
        };
        void fetchAllFilms();
    }, []);

    return (
        <div className="container-xxl py-3">
            <div className="row row-cols-lg-4">
                {films ? films.map(film => (
                    <div key={film.id} className="col">
                        <FilmListItem film={film}/>
                    </div>)) : 'Loading...'}
            </div>
        </div>
    );
};
