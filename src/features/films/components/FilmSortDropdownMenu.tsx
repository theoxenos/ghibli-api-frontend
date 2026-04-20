import React from "react";

const FilmSortDropdownMenu = (
    {sortOption, handleSortChange}: {
        sortOption: string, handleSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }) => (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
            Sort: {sortOption}
        </button>
        <ul className="dropdown-menu">
            <li>
                <label className="dropdown-item">
                    <input type="radio" name="sort" value="date"
                           checked={sortOption === 'date'}
                           onChange={handleSortChange}
                           style={{marginRight: '8px'}}/> Date (Asc)
                </label>
            </li>
            <li>
                <label className="dropdown-item">
                    <input type="radio" name="sort" value="runningTime"
                           checked={sortOption === 'runningTime'}
                           onChange={handleSortChange}
                           style={{marginRight: '8px'}}/> Running Time (Asc)
                </label>
            </li>
            <li>
                <label className="dropdown-item">
                    <input type="radio" name="sort" value="title"
                           checked={sortOption === 'title'}
                           onChange={handleSortChange}
                           style={{marginRight: '8px'}}/> Title (Asc)
                </label>
            </li>
        </ul>
    </div>
);

export default FilmSortDropdownMenu;