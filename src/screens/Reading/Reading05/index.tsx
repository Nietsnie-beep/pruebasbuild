import React, { memo } from "react";
import { View, Image } from "react-native";
import { useTheme, StyleService, useStyleSheet } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import { Audio } from "expo-av";
import {
  Container,
  Content,
  HStack,
  IDivider,
  NavigationAction,
  Text,
} from "components";
import Images from "assets/images";
import CustomSlider from "./CustomSlider";
import CustomController from "./CustomController";
import BookItem from "./BookItem";

const Reading05 = memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [id, setId] = React.useState(0);

  const [isPlay, setIsPlay] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [sound, setSound] = React.useState(new Audio.Sound());
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const LoadAudio = async () => {
    setLoading(true);
    const checkLoading = await sound.getStatusAsync();

    if (!checkLoading.isLoaded) {
      try {
        const result = await sound.loadAsync(track[0]);
        setSound(sound);
        if (result.isLoaded === false) {
          setLoading(false);
          console.log("Error in Loading Audio");
        } else {
          setLoading(false);
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    LoadAudio(), setTimeout1;
  }, [sound]);
  const PlayAudio = React.useCallback(async () => {
    try {
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
          setIsPlay(true);
        } else {
          sound.pauseAsync();
          setIsPlay(false);
        }
      }
    } catch (error) {
      console.log("fail");
    }
  }, [sound.getStatusAsync]);

  React.useEffect(() => {
    return sound && goBack
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const setTimeout1 = setTimeout(async () => {
    const x = await sound.getStatusAsync();
    if (x.isLoaded) {
      /* @ts-ignore */
      return setCurrentTime(x.positionMillis), setDuration(x.durationMillis);
    }
  }, 500);
  const pressRedo = React.useCallback(async () => {
    const x = await sound.getStatusAsync();
    if (x.isLoaded && x.isPlaying) {
      await sound.pauseAsync();
      await sound.setPositionAsync(currentTime + 10000);
      await sound.playAsync();
    }
  }, [currentTime, sound]);
  const pressUndo = React.useCallback(async () => {
    const x = await sound.getStatusAsync();
    if (x.isLoaded && x.isPlaying) {
      if (currentTime < 10000) {
        await sound.pauseAsync();
        await sound.setPositionAsync(0);
        await sound.playAsync();
      } else {
        await sound.pauseAsync();
        await sound.setPositionAsync(currentTime - 10000);
        await sound.playAsync();
      }
    }
  }, [currentTime, sound]);
  return (
    <Container style={styles.container}>
      <HStack style={[styles.header, { top: top + 8 }]}>
        <NavigationAction status="primary" />
        <NavigationAction status="primary" icon="circles_four" />
      </HStack>
      <Content
        contentContainerStyle={[styles.content, { paddingBottom: bottom + 24 }]}
      >
        <Image
          source={track[id].image}
          /* @ts-ignore */
          style={styles.book}
        />
        <Text center category="c1" marginTop={32}>
          {track[id].title}
        </Text>
        <Text center category="body" marginTop={8} capitalize>
          {track[id].author}
        </Text>
        <CustomSlider
          value={currentTime}
          maxValue={duration}
          onSlidingStart={async () => {
            setIsPlay(false), await sound.pauseAsync();
          }}
          onValueChange={async (value) => {
            await sound.setPositionAsync(value[0]);
            setCurrentTime(value);
          }}
          onSlidingComplete={async (value) => {
            setCurrentTime(value);
            await sound.setPositionAsync(value[0]);
            await sound.playAsync();
            setIsPlay(true);
          }}
        />

        <CustomController
          pressPlayPause={PlayAudio}
          playPause={isPlay}
          loading={false}
          pressRedo={pressRedo}
          pressUndo={pressUndo}
        />

        <View style={styles.timeSleep}>
          <Text category="body" status="snow">
            Time Sleep
          </Text>
          <Text category="h7">1 Hour</Text>
        </View>
        <IDivider marginBottom={24} />
        <BookItem
          image={track[1].image}
          title={track[1].title}
          author={track[1].author}
        />
      </Content>
    </Container>
  );
});

export default Reading05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  book: {
    alignSelf: "center",
  },
  timeSleep: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
});
const track = [
  {
    id: 0,
    image: Images.reading.reading04,
    title: "The world, your life",
    author: "june cook",
    uri: "https://res.cloudinary.com/whisky131/video/upload/v1634101632/Not_Afraid_tndelo.mp3",
  },
  {
    id: 1,
    image: Images.reading.reading05,
    title: "The world,your life",
    author: "june cook",
    uri: "https://res.cloudinary.com/whisky131/video/upload/v1634101632/Not_Afraid_tndelo.mp3",
  },
];
