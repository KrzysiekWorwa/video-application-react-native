import { useLocalSearchParams } from "expo-router";
import { ChannelName, ChannelWrapper, Description, DescriptionTitle, IconCircle, InfoContaier, LikesIcon, PersonIcon, StatisticBox, StatisticText, StatisticWrapper, SwitchButton, SwitchLine, SwitchsWrapper, SwitchText, VideoTitle, ViewsIcon } from "./VideoDetails.styled";

export default function VideoDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <InfoContaier>
            <VideoTitle numberOfLines={1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti debitis quas suscipit autem culpa vel incidunt voluptatum cumque saepe possimus omnis, quae ullam iusto temporibus quos cupiditate rem. Placeat, tempora!</VideoTitle>
            <ChannelWrapper>
                <IconCircle>
                    <PersonIcon width={20} height={20} />
                </IconCircle>
                <ChannelName>Channel name</ChannelName>
            </ChannelWrapper>
            <SwitchsWrapper>
                <SwitchButton>
                    <SwitchText>
                        Details
                    </SwitchText>
                    <SwitchLine />
                </SwitchButton>
                <SwitchButton>
                    <SwitchText>
                        Notes
                    </SwitchText>
                    <SwitchLine />
                </SwitchButton>
            </SwitchsWrapper>
            <DescriptionTitle>Description</DescriptionTitle>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima minus quos neque sunt praesentium nesciunt, amet nisi, corporis assumenda quia illo rerum at deleniti provident eum accusantium unde, id doloremque.
            </Description>
            <DescriptionTitle>Statistics</DescriptionTitle>
            <StatisticWrapper>
                <StatisticBox>
                    <ViewsIcon width={20} height={20} />
                    <StatisticText>2587661 views</StatisticText>
                </StatisticBox>
                <StatisticBox>
                    <LikesIcon width={20} height={20} />
                    <StatisticText>52030 likes</StatisticText>
                </StatisticBox>
            </StatisticWrapper>
        </InfoContaier>
    );
}
