import {Outlet} from "react-router-dom";
import {TopNavMenu} from "./features/topnavmenu";

const MainLayout = () =>
    (
        <div className="d-flex flex-column vh-100">
            <TopNavMenu/>
            <main className="flex-grow-1">
                <Outlet/>
            </main>
        </div>
    );

export default MainLayout;