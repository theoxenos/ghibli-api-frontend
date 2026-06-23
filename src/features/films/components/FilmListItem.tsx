import type {Film} from "../types";
import FilmListItemBadge, {FilmListItemBadgeSkeleton} from "./FilmListItemBadge.tsx";
import styles from "./FilmListItem.module.css";
import {Link} from "react-router-dom";
import SkeletonList from "../../../shared/components/SkeletonList.tsx";

const FilmListItem = ({film}: { film: Film }) => (
    <div className="card h-100">
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
        <div className="card-footer text-end">
            <Link to={`/films/${film.id}`} className="btn btn-primary">Detail</Link>
        </div>
    </div>
);

export default FilmListItem;

export const FilmListItemSkeleton = () => (
    <div className="card h-100">
        <img src="https://placehold.co/600x900" className="card-img-top" alt="Film poster placeholder"/>
        <div style={{height: '50px', width: '100%'}}
             className="d-flex justify-content-center align-items-center gap-0 gap-lg-3 bg-light"
        >
            <SkeletonList amount={4}>
                <FilmListItemBadgeSkeleton/>
            </SkeletonList>
        </div>
        <div className="card-body">
            <h5 className="card-title placeholder col-7"></h5>
            <div className="placeholder col-8"></div>
            <div className="placeholder col-8"></div>
            <div className="placeholder col-5"></div>
        </div>
        <div className="card-footer text-end">
            <a className="btn btn-primary disable placeholder col-3" aria-disabled={true}></a>
        </div>
    </div>
);