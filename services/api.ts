const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.EXPO_PUBLIC_YT_API_KEY;

if (!API_KEY) {
  console.warn(
    "[YouTube API] Missing EXPO_PUBLIC_YT_API_KEY. Requests will fail."
  );
}

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

type YoutubeSearchItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails?: {
      medium?: { url: string };
    };
  };
};

const ORDER_MAP: Record<SortOption, string> = {
  latest: "date",
  oldest: "date",
  popular: "viewCount",
};

function mapSearchItemToVideo(item: YoutubeSearchItem): YoutubeVideo {
  return {
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails?.medium?.url,
    channelTitle: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt,
    description: item.snippet.description,
  };
}

export async function searchVideos(
  query: string,
  maxResults = 10,
  sort: SortOption = "popular",
  pageToken?: string
): Promise<YoutubeSearchResult> {
  if (!query.trim()) {
    return { videos: [], totalResults: 0 };
  }

  const order = ORDER_MAP[sort] ?? "relevance";

  const url =
    `${BASE_URL}/search?` +
    `part=snippet&type=video&maxResults=${maxResults}` +
    `&order=${order}` +
    (pageToken ? `&pageToken=${pageToken}` : "") +
    `&q=${encodeURIComponent(query)}` +
    `&key=${API_KEY}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.warn("[YouTube API] searchVideos failed", res.status, res.statusText);
      return { videos: [], totalResults: 0 };
    }

    const json = await res.json();

    const mappedVideos: YoutubeVideo[] = (json.items || []).map(
      mapSearchItemToVideo
    );

    const videos =
      sort === "oldest" ? [...mappedVideos].reverse() : mappedVideos;

    const totalResults =
      json.pageInfo?.totalResults != null
        ? json.pageInfo.totalResults
        : videos.length;

    return {
      videos,
      totalResults,
      nextPageToken: json.nextPageToken,
    };
  } catch (error) {
    console.warn("[YouTube API] searchVideos error", error);
    return { videos: [], totalResults: 0 };
  }
}

export type YoutubeVideoDetails = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  stats: {
    viewCount?: string;
    likeCount?: string;
    [key: string]: any;
  };
};

export async function getVideoDetails(
  videoId: string
): Promise<YoutubeVideoDetails | null> {
  const url =
    `${BASE_URL}/videos?` +
    `part=snippet,contentDetails,statistics` +
    `&id=${videoId}` +
    `&key=${API_KEY}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.warn("[YouTube API] getVideoDetails failed", res.status, res.statusText);
      return null;
    }

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
  } catch (error) {
    console.warn("[YouTube API] getVideoDetails error", error);
    return null;
  }
}
