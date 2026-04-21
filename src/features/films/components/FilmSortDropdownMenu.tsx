import React from "react";
import type {TFilmSortOption} from "../types";
import {FilmSortOption} from "../types";

const FilmSortDropdownMenu = (
    {sortOption, handleSortChange}: {
        sortOption: TFilmSortOption, handleSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }
) => {

    const sortLabels: Record<TFilmSortOption, string> = {
        [FilmSortOption.Date]: 'Date',
        [FilmSortOption.RunningTime]: 'Running Time',
        [FilmSortOption.Title]: 'Title',
    };

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Sort: {sortLabels[sortOption]}
                <span className={`bi bi-arrow-up-short`}></span>
            </button>
            <ul className="dropdown-menu">
                {(Object.entries(sortLabels) as [TFilmSortOption, string][]).map(([value, label]) => (
                    <li key={value}>
                        <label className="dropdown-item">
                            <input type="radio" name="sort" value={value}
                                   checked={sortOption === value}
                                   onChange={handleSortChange}
                                   style={{marginRight: '8px'}}/>
                            {label}
                            {/*<span className={`bi bi-arrow${sortOption === value ? 'down' : 'up'}-short`}></span>*/}
                            <span className={`bi bi-arrow-up-short`}></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmSortDropdownMenu;