const endPoint = '/api/films';

const buildQueryParams = (params: Record<string, string | undefined>): URLSearchParams => {
    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value) urlParams.append(key, value);
    });
    return urlParams;
};

const fetchApi = async (url: string, error?: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(error || `HTTP error! status: ${response.status}`);
    return response.json();
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getAllFilms = async (title?: string, director?: string, producer?: string) => {
    await wait(5_000);
    const params = buildQueryParams({title, director, producer});

    return fetchApi(`${endPoint}?${params}`);
};

const getFilmById = async (id: string) => {
    return fetchApi(`${endPoint}/${id}`);
};

export default {getAllFilms, getFilmById};