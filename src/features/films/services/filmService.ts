const endPoint = '/api/films';

const getAllFilms = async (title?: string, director?: string, producer?: string) => {
    const params = new URLSearchParams();
    if (title) params.append('title', title);
    if (director) params.append('director', director);
    if (producer) params.append('producer', producer);

    const response = await fetch(`${endPoint}?${params}`);

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