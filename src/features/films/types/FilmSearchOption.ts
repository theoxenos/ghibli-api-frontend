export const FilmSearchOption: Record<string, string> = {
    Title: 'title',
    Director: 'director',
    Producer: 'producer'
} as const;

export type TFilmSearchOption = keyof typeof FilmSearchOption;