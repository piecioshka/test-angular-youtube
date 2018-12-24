export interface VideoInterface {
    id: string;
    title: string;
    description: string;

    year?: number;
    duration?: number;
    rate?: number;

    thumb_url: string;
    video_url: string;
}
