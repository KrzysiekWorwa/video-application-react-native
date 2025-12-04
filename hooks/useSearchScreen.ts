import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import {
    searchVideos,
    SortOption,
    YoutubeSearchResult,
    YoutubeVideo,
} from "@/services/api";
import { useEffect, useMemo, useState } from "react";

type UseSearchScreenParams = {
    initialQuery: string;
};

export function useSearchScreen({ initialQuery }: UseSearchScreenParams) {
    const [searchText, setSearchText] = useState(initialQuery);
    const [sort, setSort] = useState<SortOption>("popular");
    const [isSortVisible, setIsSortVisible] = useState(false);

    const [videos, setVideos] = useState<YoutubeVideo[]>([]);
    const [nextPageToken, setNextPageToken] = useState<string | null>(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        if (initialQuery) {
            setSearchText(initialQuery);
        }
    }, [initialQuery]);

    const debouncedSearchText = useDebounce(searchText, 500);

    const { data, loading } = useFetch<YoutubeSearchResult>(
        () =>
            debouncedSearchText
                ? searchVideos(debouncedSearchText, 20, sort)
                : Promise.resolve({
                    videos: [],
                    totalResults: 0,
                    nextPageToken: undefined,
                }),
        [debouncedSearchText, sort]
    );

    useEffect(() => {
        if (!data) {
            setVideos([]);
            setNextPageToken(null);
            return;
        }

        setVideos(data.videos);
        setNextPageToken(data.nextPageToken ?? null);
    }, [data]);

    const resultsCount = data?.totalResults ?? 0;
    const hasQuery = searchText.trim().length > 0;
    const currentQuery = searchText || initialQuery;

    const sortLabelMap: Record<SortOption, string> = useMemo(
        () => ({
            latest: "Upload date: latest",
            oldest: "Upload date: oldest",
            popular: "Most popular",
        }),
        []
    );

    const handleLoadMore = async () => {
        if (!nextPageToken || isLoadingMore || loading) return;
        if (!debouncedSearchText.trim()) return;

        try {
            setIsLoadingMore(true);
            const more = await searchVideos(
                debouncedSearchText,
                20,
                sort,
                nextPageToken
            );

            setVideos((prev) => {
                const existingIds = new Set(prev.map((v) => v.id));
                const uniqueNew = more.videos.filter((v) => !existingIds.has(v.id));
                return [...prev, ...uniqueNew];
            });

            setNextPageToken(more.nextPageToken ?? null);
        } finally {
            setIsLoadingMore(false);
        }
    };

    return {

        searchText,
        setSearchText,
        sort,
        setSort,
        isSortVisible,
        setIsSortVisible,
        videos,
        loading,
        isLoadingMore,
        resultsCount,
        hasQuery,
        currentQuery,
        sortLabelMap,
        handleLoadMore,
    };
}
