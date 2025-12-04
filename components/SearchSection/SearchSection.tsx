import { YoutubeVideo } from "@/services/api";
import { SearchCard, SearchChannelName, SearchPublishDate, SearchVideoTitle, Thumbnail } from "./SearchSection.styled";

type Props = {
  video: YoutubeVideo;
  onPress?: () => void;
};

export function SearchSection({ video, onPress }: Props) {

  const date = new Date(video.publishedAt).toLocaleDateString("pl-PL");


  return (
    <SearchCard activeOpacity={0.8} onPress={onPress}>

      <Thumbnail source={{ uri: video.thumbnail }} />

      <SearchChannelName numberOfLines={1}>
        {video.channelTitle ?? "Channel name"}
      </SearchChannelName>

      <SearchVideoTitle numberOfLines={2}>
        {video.title ?? "Video title"}
      </SearchVideoTitle>

      <SearchPublishDate>{date}</SearchPublishDate>
    </SearchCard>
  );
}