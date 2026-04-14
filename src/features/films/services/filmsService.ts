const endPoint = '/api/films';

const getAllFilms = async () => {
    const response = await fetch(`${endPoint}`);

    if (!response.ok) {
        throw new Error('Failed to fetch films');
    }

    return response.json();
};

export default {getAllFilms};