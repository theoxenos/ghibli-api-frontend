export const FilmSortOption = {
    Title: 'title',
    Date: 'date',
    RunningTime: 'runningTime',
} as const;

export type TFilmSortOption = typeof FilmSortOption[keyof typeof FilmSortOption];

export const isFilmSortOption = (value: string): value is TFilmSortOption => {
    return Object.values(FilmSortOption).includes(value as TFilmSortOption);
};