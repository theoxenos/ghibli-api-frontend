const endPoint = '/api/films';

const getAllFilms = async () => {
    const response = await fetch(`${endPoint}`);

    if (!response.ok) {
        throw new Error('Failed to fetch films');
    }

    return response.json();
};

const getFilmById = async (id: string) => {
    const response = await fetch(`${endPoint}/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch film');
    }

    return response.json();
};

export default {getAllFilms, getFilmById};