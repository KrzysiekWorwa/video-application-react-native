import { YoutubeVideo } from "@/services/api";
import { Image } from "react-native";
import { SearchCard, SearchChannelName, SearchPublishDate, SearchVideoTitle } from "./SearchSection.styled";

type Props = {
  video: YoutubeVideo;
  onPress?: () => void;
};

export function SearchSection({ video, onPress }: Props) {

  const date = new Date(video.publishedAt).toLocaleDateString("pl-PL");


  return (
    <SearchCard activeOpacity={0.8} onPress={onPress}>
      <Image
        source={{ uri: video.thumbnail }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />

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