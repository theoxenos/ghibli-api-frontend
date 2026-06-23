import {FilmSearchOption, type TFilmSearchOption} from "../types";
import {Form} from "react-router-dom";


type TFilmSearchProps = {
    searchTerm?: string,
    searchOption?: TFilmSearchOption
};

const FilmSearch = ({searchTerm, searchOption}: TFilmSearchProps) => {

    const selectElementStyle = {flexBasis: 'auto', width: 'fit-content'};

    return (
        <Form method="get">
            <div className="input-group">
                <select id="searchOptions" name="searchOption" className="form-select flex-grow-0"
                        style={selectElementStyle} defaultValue={searchOption}>
                    {/*<option value="all">All</option>*/}
                    {Object.entries(FilmSearchOption).map(([key, value]) => (
                        <option key={key} value={value}>{key}</option>
                    ))}
                </select>
                <input id="searchTerm" name="searchTerm" type="search" className="form-control" placeholder="Search"
                       aria-label="Search"
                       aria-describedby="basic-addon1"
                       defaultValue={searchTerm}/>
                <button className="btn btn-outline-secondary" type="submit">
                    <span className="bi bi-search"></span>
                </button>
            </div>
        </Form>
    );
};
export default FilmSearch;