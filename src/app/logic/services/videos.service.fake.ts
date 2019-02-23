import { of } from 'rxjs';

import { VideoInterface } from '../interfaces/video.interface';

const video: VideoInterface = {
    id: 'fake-id',
    title: 'fake-title',
    description: 'fake-descriptino',

    year: 0,
    duration: 1,
    rate: 2,

    thumb_url: 'fake-thumb_url',
    video_url: 'fake-video_url',
};
const videos = [video, video, video];

export class FakeVideosService {
    fetchVideos() {
        return of(videos);
    }
    async fetchVideoById() {
        return video;
    }
    async fetchVideoByTitle() {
        return video;
    }
}
