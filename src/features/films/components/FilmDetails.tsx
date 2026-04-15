import {useParams} from "react-router-dom";
import {useFetch} from "../../../shared/hooks/useFetch.ts";
import type {Film} from "../types/Film.ts";
import style from "./FilmDetails.module.css";

export const FilmDetails = () => {
    const routeParams = useParams();
    const {data, loading, error} = useFetch<Film>(`/api/films/${routeParams.id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const convertRtScoreToCssClass = (score: number | undefined) => {
        if (score === undefined || score === null) {
            return 'bg-secondary';
        } else if (score < 50) {
            return 'bg-danger';
        } else if (score < 70) {
            return 'bg-warning';
        } else {
            return 'bg-success';
        }
    };

    const formatRunningTime = (time: number | undefined) => {
        if (time === undefined) return 'N/A';
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
        <>
            <div className={`${style['banner-header']}`} style={{backgroundImage: `url(${data?.movieBanner})`}}>
                <div className="h-100 w-100 d-flex text-white justify-content-center"
                     style={{backdropFilter: 'blur(2px) brightness(.5)', minHeight: '500px'}}>
                    <div className="container-sm py-4 row flex-nowrap gap-4">
                        <div className={`p-0  ${style['poster-container']}`}>
                            <img className="rounded" src={data?.image} alt={data?.title}/>
                        </div>
                        <div className="col">
                            <h1 className="mt-4 display-6 fw-bold">{data?.title} ({data?.releaseDate})</h1>
                            <div className="d-flex gap-2 mb-5">
                                <span className={`badge ${convertRtScoreToCssClass(data?.rtScore)}`}>
                                    Rotten Tomatoes: {data?.rtScore !== undefined ? `${data?.rtScore}%` : 'N/A'}
                                </span>
                                <span className="badge bg-primary">
                                    Running Time: {formatRunningTime(data?.runningTime)}
                                </span>
                            </div>
                            <p className="lead">{data?.description}</p>
                            <p className="text-subtle">Directed by {data?.director}</p>
                            <p className="text-subtle">Produced by {data?.producer}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
            </div>
        </>
    );
};