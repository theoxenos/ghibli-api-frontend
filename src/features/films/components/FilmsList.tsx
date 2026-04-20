import React, {useEffect, useState} from "react";
import filmService from "../services/filmService.ts";
import type {Film, TFilmSearchOption} from "../types";
import {FilmSearchOption} from "../types";
import FilmListItem from "./FilmListItem.tsx";
import FilmSortDropdownMenu from "./FilmSortDropdownMenu.tsx";
import FilmSearch from "./FilmSearch.tsx";

export const FilmsList = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [searchOption, setSearchOption] = useState<TFilmSearchOption>(FilmSearchOption.Title);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('date');

    const fetchFilms = async (title?: string, director?: string, producer?: string): Promise<Film[]> => {
        try {
            return await filmService.getAllFilms(title, director, producer);
        } catch (error) {
            console.error('Error fetching films:', error);
            return [];
        }
    };

    useEffect(() => {
        void fetchFilms().then(setFilms);
    }, []);

    const handleSearchOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchOption(e.target.value as TFilmSearchOption);
        setSearchTerm('');
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(event.target.value);
    };

    const handleSearch = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const term = searchTerm.trim() ? searchTerm : undefined;
        const args: [string?, string?, string?] = [
            searchOption === FilmSearchOption.Title ? term : undefined,
            searchOption === FilmSearchOption.Director ? term : undefined,
            searchOption === FilmSearchOption.Producer ? term : undefined,
        ];
        setFilms(await fetchFilms(...args));
    };


    return (
        <div className="container-xxl py-3">
            <div className="row mb-3">
                <div className="col">
                    <FilmSearch
                        searchOption={searchOption}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleSearch={handleSearch}
                        handleSearchOptionChange={handleSearchOptionChange}
                    />
                </div>
                <div className="col-1">
                    <FilmSortDropdownMenu sortOption={sortOption} handleSortChange={handleSortChange}/>
                </div>
            </div>
            <div className="row row-cols-lg-4">
                {films ? films.sort((a, b) => {
                    if (sortOption === 'title') return a.title.localeCompare(b.title);
                    // if (sortOption === 'date') return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
                    if (sortOption === 'date') return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
                    if (sortOption === 'runningTime') return a.runningTime - b.runningTime;
                    return 0;
                }).map(film => (
                    <div key={film.id} className="col">
                        <FilmListItem film={film}/>
                    </div>)) : 'Loading...'}
            </div>
        </div>
    );
};
