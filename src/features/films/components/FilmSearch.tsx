import {FilmSearchOption} from "../types";
import React from "react";

const FilmSearch = (
    {searchOption, searchTerm, setSearchTerm, handleSearch, handleSearchOptionChange}:
    {
        searchOption: string,
        searchTerm: string,
        setSearchTerm: (term: string) => void,
        handleSearch: (e: React.SubmitEvent<HTMLFormElement>) => void,
        handleSearchOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    }
) => {

    const selectElementStyle = {flexBasis: 'auto', width: 'fit-content'};

    return (
        <form onSubmit={handleSearch}>
            <div className="input-group">
                <select id="searchOptions" className="form-select flex-grow-0"
                        style={selectElementStyle}
                        value={searchOption}
                        onChange={handleSearchOptionChange}>
                    {/*<option value="all">All</option>*/}
                    {Object.entries(FilmSearchOption).map(([key, value]) => (
                        <option key={key} value={value}>{key}</option>
                    ))}
                </select>
                <input id="searchTerm" type="text" className="form-control" placeholder="Search"
                       aria-label="Search"
                       aria-describedby="basic-addon1" value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className="btn btn-outline-secondary" type="submit">
                    <span className="bi bi-search"></span>
                </button>
            </div>
        </form>
    );
};
export default FilmSearch;