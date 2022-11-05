import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationProp, Route } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Horoscope = {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
};

const HoroscopeView = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [horoscope, setHoroscope] = useState<Horoscope>();
  const [isLoading, setIsLoading] = useState(false);

  const { name, image } = route.params;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://aztro.sameerkumar.website/?sign=" + name + "&day=today",
        { method: "POST" },
      );
      navigation.setOptions({ title: name });
      const data = await response.json();
      setHoroscope(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.titles}> Loading ... </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>{horoscope?.description}</Text>
        <Text style={styles.titles}>
          Mood: <Text style={styles.text}>{horoscope?.mood}</Text>
        </Text>
        <Text style={styles.titles}>
          Lucky Number:{" "}
          <Text style={styles.text}>{horoscope?.lucky_number}</Text>
        </Text>
        <Text style={styles.titles}>
          Color: <Text style={styles.text}> {horoscope?.color}</Text>
        </Text>
        <Text style={styles.titles}>
          Compatability:{" "}
          <Text style={styles.text}>{horoscope?.compatibility}</Text>
        </Text>
        <Image source={image} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEFAE0",
    padding: 10,
    gap: 10,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEFAE0",
    gap: 10,
  },
  titles: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#CCD5AE",
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    color: "#D4A373",
    borderColor: "#FAEDCD",
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
  },
});

export default HoroscopeView;
