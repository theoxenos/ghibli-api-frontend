import {useParams} from "react-router-dom";
import style from "./FilmDetails.module.css";
import {useEffect, useState} from "react";
import filmService from "../services/filmService.ts";
import type {FilmResponse} from "../types/";

export const FilmDetails = () => {
    const routeParams = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [film, setFilm] = useState<FilmResponse | null>(null);

    useEffect(() => {
        const getFilm = async () => {
            try {
                setLoading(true);
                const film = await filmService.getFilmById(routeParams.id!);
                if (!film) {
                    setError('Film not found');
                    setLoading(false);
                    return;
                }
                setFilm(film);
                setLoading(false);
            } catch (e) {
                console.error('Error fetching film:', e);
                setError('Failed to fetch film');
                setLoading(false);
            }
        };
        void getFilm();
    }, [routeParams.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!film) {
        return <div>Film not found</div>;
    }

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
            <div className={`${style['banner-header']}`} style={{backgroundImage: `url(${film?.movieBanner})`}}>
                <div className="h-100 w-100 d-flex text-white justify-content-center"
                     style={{backdropFilter: 'blur(2px) brightness(.5)', minHeight: '500px'}}>
                    <div className="container-sm py-4 row flex-nowrap gap-4">
                        <div className={`p-0  ${style['poster-container']}`}>
                            <img className="rounded" src={film?.image} alt={film?.title}/>
                        </div>
                        <div className="col">
                            <h1 className="mt-4 display-6 fw-bold">{film?.title} ({film?.releaseDate})</h1>
                            <div className="d-flex gap-2 mb-5">
                                <span className={`badge ${convertRtScoreToCssClass(film?.rtScore)}`}>
                                    Rotten Tomatoes: {film?.rtScore !== undefined ? `${film?.rtScore}%` : 'N/A'}
                                </span>
                                <span className="badge bg-primary">
                                    Running Time: {formatRunningTime(film?.runningTime)}
                                </span>
                            </div>
                            <p className="lead">{film?.description}</p>
                            <p className="text-subtle">Directed by {film?.director}</p>
                            <p className="text-subtle">Produced by {film?.producer}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-3">
                <div className="row row-cols-1 row-cols-xxl-2">
                    <div className="col mb-3">
                        <h2>Species</h2>
                        <ul className="list-group">
                            {film?.species?.map((species, index) => (
                                <li key={index} className="list-group-item">
                                    {species.name}
                                    <ul>
                                        <li>Classification: {species.classification}</li>
                                        <li>Eye Colors: {species.eyeColors}</li>
                                        <li>Hair Colors: {species.hairColors}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Locations</h2>
                        <ul className="list-group">
                            {film?.locations?.map((location, index) => (
                                <li key={index} className="list-group-item">
                                    {location.name}
                                    <ul>
                                        <li>Climate: {location.climate}</li>
                                        <li>Terrain: {location.terrain}</li>
                                        <li>Surface Water: {location.surfaceWater}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>People</h2>
                        <ul className="list-group">
                            {film?.people?.map((person, index) => (
                                <li key={index} className="list-group-item">
                                    {person.name}
                                    <ul>
                                        <li>Gender: {person.gender}</li>
                                        <li>Age: {person.age}</li>
                                        <li>Eye Color: {person.eyeColor}</li>
                                        <li>Hair Color: {person.hairColor}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Vehicles</h2>
                        <ul className="list-group">
                            {film?.vehicles?.map((vehicle, index) => (
                                <li key={index} className="list-group-item">
                                    {vehicle.name}
                                    <ul>
                                        <li>Description: {vehicle.description}</li>
                                        <li>Vehicle Class: {vehicle.vehicleClass}</li>
                                        <li>Length: {vehicle.length}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </>
    );
};