import {FilmDetails, FilmsList} from "./features/films/";
import {TopNavMenu} from "./features/topnavmenu/";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column vh-100">
                <TopNavMenu/>
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<FilmsList/>}/>
                        <Route path="/films/:id" element={<FilmDetails/>}/>
                    </Routes>
                </main>
            </div>


        </Router>
    );
};

export default App;