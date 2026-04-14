import {useEffect, useState} from "react";
import filmsService from "../services/filmsService.ts";
import type {Film} from "../types/Film.ts";

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

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + '...';
    };

    return (
        <div className="container-xxl py-3">
            <div className="row row-cols-lg-4">
                {films ? films.map(film => (
                    <div key={film.id} className="col">
                        <div className="card mb-4">
                            <img src={film.image} className="card-img-top" alt={`${film.title} poster`}/>
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{truncateDescription(film.description, 150)}</p>
                            </div>
                        </div>
                    </div>)) : 'Loading...'}
            </div>
        </div>
    );
};
