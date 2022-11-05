import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";

const HoroscopeItem = ({
  name,
  image,
  navigation,
}: {
  name: string;
  image: ImageSourcePropType;
  navigation: any;
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("HoroscopeView", {
          name,
          image,
          title: { name },
        });
      }}
    >
      <Image source={image} />
      <Text style={styles.textStyle}> {name} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    color: "#CCD5AE",
    fontWeight: "bold",
  },
});
export default HoroscopeItem;
