import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { SafeArea } from "../../components/safe-area-view";

import { usePushNotifications } from "../../helper/usePushNotifications";
import { sendPushNotification } from "./utils";

import styles from "./styles";

const backgroundImage: ImageSourcePropType = require("../../resources/images/background.png");

const Home: React.FC = () => {
  const { expoPushToken } = usePushNotifications();

  const handlePress = () => {
    sendPushNotification(expoPushToken?.data!);
  };

  return (
    <SafeArea>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.centeredView}>
          <Text style={styles.title}>Tap the button to get notified!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Press me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeArea>
  );
};

export default Home;
