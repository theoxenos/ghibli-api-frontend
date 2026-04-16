import type {SpeciesResponse} from '../../species/types/SpeciesResponse';
import type {Location} from '../../locations/types/';
import type {Person} from '../../people/types/Person';
import type {Vehicle} from '../../vehicles/types/Vehicle';

export interface FilmResponse {
    id: string;
    title: string;
    image: string;
    description: string;
    movieBanner: string;
    releaseDate: number;
    runningTime: number;
    rtScore: number;
    director: string;
    producer: string;

    locations: Location[];
    people: Person[];
    species: SpeciesResponse[];
    vehicles: Vehicle[];
}