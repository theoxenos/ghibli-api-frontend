import type {Film} from "../types/Film.ts";
import FilmListItemBadge from "./FilmListItemBadge.tsx";
import styles from "./FilmListItem.module.css";

const FilmListItem = ({film}: { film: Film }) => (
    <div className="card mb-4">
        <img src={film.image} className="card-img-top" alt={`${film.title} poster`}/>
        <div style={{height: '50px', width: '100%'}}
             className="d-flex justify-content-center align-items-center gap-0 gap-lg-3 bg-light"
        >
            <FilmListItemBadge icon="bi-person" amount={-1}/>
            <FilmListItemBadge icon="bi-egg" amount={-1}/>
            <FilmListItemBadge icon="bi-geo" amount={-1}/>
            <FilmListItemBadge icon="bi-rocket" amount={-1}/>
        </div>
        <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className={`card-text ${styles['line-clamp-3']}`}>{film.description}</p>
        </div>
    </div>
);

export default FilmListItem;