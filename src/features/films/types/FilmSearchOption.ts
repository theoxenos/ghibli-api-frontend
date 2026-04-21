export const FilmSearchOption = {
    Title: 'title',
    Director: 'director',
    Producer: 'producer'
} as const;

export type TFilmSearchOption = typeof FilmSearchOption[keyof typeof FilmSearchOption];

export const isFilmSearchOption = (value: string): value is TFilmSearchOption => {
    return Object.values(FilmSearchOption).includes(value as TFilmSearchOption);
};