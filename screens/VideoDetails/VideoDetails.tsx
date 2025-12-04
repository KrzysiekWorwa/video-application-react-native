import VideoPlayer from "@/components/VideoPlayer/VideoPlater";
import { useFetch } from "@/hooks/useFetch";
import { getVideoDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Dimensions } from "react-native";
import {
  AddNoteButton,
  AddNoteButtonText,
  ButtonWrapper,
  ChannelName,
  ChannelWrapper,
  Description,
  DescriptionTitle,
  IconCircle,
  InfoContaier,
  LikesIcon,
  NoteCard,
  NoteInput,
  NotesList,
  NoteText,
  NoteTime,
  PersonIcon,
  StatisticBox,
  StatisticText,
  StatisticWrapper,
  SwitchButton,
  SwitchLine,
  SwitchsWrapper,
  SwitchText,
  UnactiveSwitchLine,
  VideoTitle,
  ViewsIcon,
} from "./VideoDetails.styled";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.56;

type ActiveTab = "details" | "notes";

type Note = {
  id: string;
  text: string;
  time: string;
};

export default function VideoDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [activeTab, setActiveTab] = useState<ActiveTab>("details");
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState("");

  const { data: video, loading, error } = useFetch(
    () => getVideoDetails(id),
    [id]
  );

  if (loading) {
    return (
      <InfoContaier>
        <DescriptionTitle>Loading...</DescriptionTitle>
      </InfoContaier>
    );
  }

  if (!video || error) {
    return (
      <InfoContaier>
        <DescriptionTitle>Video not found</DescriptionTitle>
      </InfoContaier>
    );
  }

  const handleAddNote = () => {
    const trimmed = noteText.trim();
    if (!trimmed) return;

    const newNote: Note = {
      id: Date.now().toString(),
      text: trimmed,
      time: "0:00",
    };

    setNotes((prev) => [...prev, newNote]);
    setNoteText("");
  };

  return (
    <>
      <VideoPlayer />

      <InfoContaier>
        <VideoTitle numberOfLines={2}>{video.title}</VideoTitle>

        <ChannelWrapper>
          <IconCircle>
            <PersonIcon width={20} height={20} />
          </IconCircle>
          <ChannelName numberOfLines={1}>{video.channelTitle}</ChannelName>
        </ChannelWrapper>

        <SwitchsWrapper>
          <SwitchButton activeOpacity={0.8} onPress={() => setActiveTab("details")}>
            <SwitchText>Details</SwitchText>
            {activeTab === "details" ? <SwitchLine /> : <UnactiveSwitchLine />}
          </SwitchButton>

          <SwitchButton activeOpacity={0.8} onPress={() => setActiveTab("notes")}>
            <SwitchText>Notes</SwitchText>
            {activeTab === "notes" ? <SwitchLine /> : <UnactiveSwitchLine />}
          </SwitchButton>
        </SwitchsWrapper>

        {activeTab === "details" ? (
          <>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>
              {video.description || "No description available."}
            </Description>

            <DescriptionTitle>Statistics</DescriptionTitle>

            <StatisticWrapper>
              <StatisticBox>
                <ViewsIcon width={20} height={20} />
                <StatisticText>
                  {Number(video.stats.viewCount).toLocaleString()} views
                </StatisticText>
              </StatisticBox>

              <StatisticBox>
                <LikesIcon width={20} height={20} />
                <StatisticText>
                  {Number(video.stats.likeCount ?? 0).toLocaleString()} likes
                </StatisticText>
              </StatisticBox>
            </StatisticWrapper>
          </>
        ) : (
          <>
            <NotesList>
              {notes.map((note) => (
                <NoteCard key={note.id}>
                  <NoteText>{note.text}</NoteText>
                  <NoteTime>{note.time}</NoteTime>
                </NoteCard>
              ))}
            </NotesList>

            <NoteInput
              placeholder="Enter notes..."
              value={noteText}
              onChangeText={setNoteText}
            />
            <ButtonWrapper>
              <AddNoteButton
                onPress={handleAddNote}
                disabled={!noteText.trim()}
                activeOpacity={0.8}
              >
                <AddNoteButtonText>Add note</AddNoteButtonText>
              </AddNoteButton>
            </ButtonWrapper>
          </>
        )}
      </InfoContaier>
    </>
  );
}
