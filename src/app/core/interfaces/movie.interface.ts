export interface IMovie {
    id: string;
    title: string;
    description: string;

    year?: number;
    duration?: number;
    rate?: number;

    thumb_url: string;
    movie_url: string;
}
