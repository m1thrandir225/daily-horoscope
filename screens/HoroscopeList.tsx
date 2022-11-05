import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import HoroscopeItem from "../components/HoroscopeItem";
import { SafeAreaView } from "react-native-safe-area-context";

const images = {
  aries: require("../assets/images/HoroscopeIcons/aries.png"),
  taurus: require("../assets/images/HoroscopeIcons/taurus.png"),
  gemini: require("../assets/images/HoroscopeIcons/gemini.png"),
  cancer: require("../assets/images/HoroscopeIcons/cancer.png"),
  leo: require("../assets/images/HoroscopeIcons/leo.png"),
  virgo: require("../assets/images/HoroscopeIcons/virgo.png"),
  libra: require("../assets/images/HoroscopeIcons/libra.png"),
  scorpio: require("../assets/images/HoroscopeIcons/scorpio.png"),
  sagittarius: require("../assets/images/HoroscopeIcons/sagittarius.png"),
  capricorn: require("../assets/images/HoroscopeIcons/capricorn.png"),
  aquarius: require("../assets/images/HoroscopeIcons/aquarius.png"),
  pisces: require("../assets/images/HoroscopeIcons/pisces.png"),
};

const HoroscopeList = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <HoroscopeItem
          navigation={navigation}
          name="Aries"
          image={images.aries}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Taurus"
          image={images.taurus}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Gemini"
          image={images.gemini}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Cancer"
          image={images.cancer}
        />
        <HoroscopeItem navigation={navigation} name="Leo" image={images.leo} />
        <HoroscopeItem
          navigation={navigation}
          name="Virgo"
          image={images.virgo}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Libra"
          image={images.libra}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Scorpio"
          image={images.scorpio}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Sagittarius"
          image={images.sagittarius}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Capricorn"
          image={images.capricorn}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Aquarius"
          image={images.aquarius}
        />
        <HoroscopeItem
          navigation={navigation}
          name="Pisces"
          image={images.pisces}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#FEFAE0",
  },
  scrollView: {
    backgroundColor: "#FEFAE0",
    flexGrow: 1,
    alignItems: "center",
  },
});

export default HoroscopeList;
