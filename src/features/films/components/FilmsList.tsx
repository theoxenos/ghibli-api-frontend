import {type ChangeEvent, Suspense, useState} from "react";
import {type Film, FilmSortOption, isFilmSortOption, type TFilmSortOption} from "../types";
import FilmListItem, {FilmListItemSkeleton} from "./FilmListItem.tsx";
import FilmSortDropdownMenu from "./FilmSortDropdownMenu.tsx";
import FilmSearch from "./FilmSearch.tsx";
import {Await, useLoaderData} from "react-router-dom";
import SkeletonList from "../../../shared/components/SkeletonList.tsx";

export const FilmsList = () => {
    const {filmsPromise, searchParams: {searchTerm, searchOption}} = useLoaderData();

    const [sortOption, setSortOption] = useState<TFilmSortOption>(FilmSortOption.Date);

    const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        if (isFilmSortOption(value)) setSortOption(value);
    };

    return (
        <div className="container-xxl py-3">
            <div className="row mb-3 justify-content-between">
                <div className="col col-10">
                    <FilmSearch searchTerm={searchTerm} searchOption={searchOption}/>
                </div>
                <div className="col-2" style={{textAlign: 'right'}}>
                    <FilmSortDropdownMenu sortOption={sortOption} handleSortChange={handleSortChange}/>
                </div>
            </div>
            <div className="row row-cols-lg-4">
                <Suspense fallback={<FilmListFallback/>}>
                    <Await resolve={filmsPromise}>
                        {(films: Film[]) => (
                            films.sort((a, b) => {
                                if (sortOption === FilmSortOption.Title) return a.title.localeCompare(b.title);
                                // if (sortOption === 'date') return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
                                if (sortOption === FilmSortOption.Date) return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
                                if (sortOption === FilmSortOption.RunningTime) return a.runningTime - b.runningTime;
                                return 0;
                            }).map(film => (
                                <div key={film.id} className="col mb-3">
                                    <FilmListItem film={film}/>
                                </div>
                            ))
                        )}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
};

const FilmListFallback = () => (
    <SkeletonList amount={8}>
        <div className="col mb-3">
            <FilmListItemSkeleton/>
        </div>
    </SkeletonList>
);