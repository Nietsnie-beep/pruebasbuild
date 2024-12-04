import * as React from "react";
import { View, TouchableHighlight } from "react-native";
import { useLayout } from "hooks";
import {
  Layout,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
} from "@ui-kitten/components";
import { ResizeMode, Video } from "expo-av";
import { Container, Content, Text, NavigationAction } from "components";
import CustomSlider from "./CustomSlider";
import Images from "assets/images";
import WorkoutItem from "../Fitness06/WorkoutItem";

const VIDEO = {
  uri: "https://res.cloudinary.com/whisky131/video/upload/v1633324283/gym_ml8gjg.mp4",
};
const Fitness07 = React.memo(() => {
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const videoPlayer = React.useRef<Video>(null);
  const [time, setTime] = React.useState("");
  const [minutes, setMinutes] = React.useState(0);
  const [second, setSecond] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [showPlayPause, setShowPlayPause] = React.useState(false);
  const [playPause, setPlayPause] = React.useState(false);

  React.useEffect(() => {
    let timer1 = setTimeout(() => {
      if (showPlayPause === true) {
        setShowPlayPause(false);
      }
      return () => {
        clearTimeout(timer1);
      };
    }, 5.8 * 1000);
  }, [showPlayPause]);
  React.useEffect(() => {
    let y = duration - (duration % 60000);
    let x = Math.floor(y / 60000);
    let z = (duration % 60000) / 1000;
    setMinutes(x);
    setSecond(z.toFixed(0));
    return setTime(
      `${minutes >= 10 ? `${minutes.toFixed(0)}` : `0${minutes}`}:${
        (duration % 60000) / 1000 <= 10 ? "0" : ""
      }${second}`
    );
  }, [duration, second, minutes]);

  const PauseAndPlay = React.useCallback(async () => {
    try {
      /* @ts-ignore */
      const result = await videoPlayer.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          /* @ts-ignore */
          videoPlayer.current.pauseAsync();
          setPlayPause(true);
        }
      }
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          videoPlayer.current?.playAsync();
          setPlayPause(false);
        }
      }
    } catch (error) {}
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <NavigationAction
        style={[styles.goBack, { top: top + 8 }]}
        status="transparent"
      />
      <TouchableHighlight onPress={() => setShowPlayPause(!showPlayPause)}>
        <View>
          <View>
            {showPlayPause ? (
              <Layout
                level="2"
                style={[
                  {
                    width: width,
                    height: height / 1.85,
                    marginTop: -((width * 1.25) / 6.5),
                  },
                  styles.playPause,
                ]}
              >
                <Button
                  onPress={PauseAndPlay}
                  accessoryRight={
                    <Icon pack="assets" name={playPause ? "play" : "pause"} />
                  }
                />
              </Layout>
            ) : null}
          </View>
          <Video
            source={VIDEO}
            resizeMode={ResizeMode.COVER}
            style={{
              width: width,
              height: 364 * (height / 812),
              zIndex: -10,
            }}
            focusable={false}
            useNativeControls={false}
            ref={videoPlayer}
            volume={0.5}
            shouldPlay={true}
            onPlaybackStatusUpdate={(status) => {
              /* @ts-ignore */
              setDuration(status.positionMillis),
                setMinutes(duration % 6000),
                /* @ts-ignore */
                setCurrentTime(status.durationMillis);
            }}
          />
        </View>
      </TouchableHighlight>
      <CustomSlider
        value={duration}
        maxValue={currentTime}
        time={time}
        style={{ marginTop: -width / 8.5 }}
      />
      <Content style={{ marginTop: width / 15, ...styles.content }}>
        {DATA.map((item, index) => {
          return <WorkoutItem data={item} key={index} />;
        })}
      </Content>
    </Container>
  );
});

export default Fitness07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  playPause: {
    opacity: 0.8,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
    left: 0,
  },
  goBack: {
    position: "absolute",
    zIndex: 100,
    left: 16,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
});
const DATA = [
  {
    id: 0,
    title: "Begin Assessment",
    times: 20,
    rep: 3,
    image: Images.fitness.workout05,
  },
  {
    id: 1,
    title: "Begin Assessment",
    times: 20,
    rep: 3,
    image: Images.fitness.workout06,
  },
  {
    id: 2,
    title: "Begin Assessment",
    times: 20,
    rep: 3,
    image: Images.fitness.workout07,
  },
  {
    id: 3,
    title: "Begin Assessment",
    times: 20,
    rep: 3,
    image: Images.fitness.workout08,
  },
];
