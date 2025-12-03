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

export type YoutubeSearchResult = {
    videos: YoutubeVideo[];
    totalResults: number;
    nextPageToken?: string;
};

export type SortOption = "latest" | "oldest" | "popular";

function mapSearchItemToVideo(item: any): YoutubeVideo {
    return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.medium?.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
    };
}

export async function searchVideos(query: string, maxResults = 10, sort: SortOption = "popular", pageToken?: string): Promise<YoutubeSearchResult> {

    if (!query.trim()) {
        return { videos: [], totalResults: 0 };
    }

    let order = "relevance";
    if (sort === "latest" || sort === "oldest") order = "date";
    if (sort === "popular") order = "viewCount";

    const url =
        `${BASE_URL}/search?` +
        `part=snippet&type=video&maxResults=${maxResults}` +
        `&order=${order}`
        + (pageToken ? `&pageToken=${pageToken}` : "") +
        `&q=${encodeURIComponent(query)}` +
        `&key=${API_KEY}`;

    const res = await fetch(url);
    const json = await res.json();

    const mappedVideos = (json.items || []).map(mapSearchItemToVideo);

    const videos =
        sort === "oldest"
            ? [...mappedVideos].reverse()
            : mappedVideos;

    const totalResults =
        json.pageInfo?.totalResults != null
            ? json.pageInfo.totalResults
            : videos.length;

    return {
        videos,
        totalResults,
        nextPageToken: json.nextPageToken,
    };
}

export async function getVideoDetails(videoId: string) {
    const url =
        `${BASE_URL}/videos?` +
        `part=snippet,contentDetails,statistics` +
        `&id=${videoId}` +
        `&key=${API_KEY}`;

    const res = await fetch(url);
    const json = await res.json();
    const item = json.items?.[0];

    if (!item) return null;

    return {
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails?.high?.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        stats: item.statistics,
    };
}