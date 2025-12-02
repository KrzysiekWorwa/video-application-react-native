const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.EXPO_PUBLIC_YT_API_KEY;

export type YoutubeVideo = {
    id: string;
    title: string;
    thumbnail: string;
    channelTitle: string;
    publishedAt: string;
    description?: string;
};