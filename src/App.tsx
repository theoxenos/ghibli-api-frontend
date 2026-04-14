import {FilmsList} from "./features/films/";
import {TopNavMenu} from "./features/topnavmenu/";

const App = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <TopNavMenu/>
            <main className="flex-grow-1">
                <FilmsList/>
            </main>
        </div>
    );
};

export default App;