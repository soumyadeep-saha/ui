import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import ScreenWrapper from "../components/common/screen-wrapper";
import { THUMBNAILS, RANDOM_IMAGE } from "../assets/assets";
import BackButton from "../components/common/back-button";
import { COLORS } from "../theme/theme";
import AddButton from "../components/common/add-button";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slice/trips";
export default function AddTrip({ navigation }) {
  const [placeBanner, setPlaceBanner] = useState();
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    setPlaceBanner(RANDOM_IMAGE());
  }, []);
  const dispatch = useDispatch();
  const handleAddTrip = () => {
    const tripData = {
      id: Date.now(),
      place,
      country,
      banner: placeBanner,
      expenses: [],
    };
    dispatch(addExpense(tripData));
    navigation.navigate("Home");
  };
  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={styles.bannerContainer}>
            <Image source={placeBanner} style={styles.banner} />
          </View>
          <Text>Add Trip</Text>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subheading}>Which Place</Text>
              <TextInput
                value={place}
                onChangeText={(e) => setPlace(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.subheading}>Which Country</Text>
              <TextInput
                value={country}
                onChangeText={(e) => setCountry(e)}
                style={styles.input}
              />
            </View>
          </View>
        </View>

        <AddButton buttontext={"Add Trip"} onPress={handleAddTrip} />
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  addTripWrapper: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  banner: {
    height: 240,
    width: "120%",
    resizeMode: "cover",
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginVertical: 24,
  },
  formItem: {
    marginVertical: 16,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginTop: 12,
    fontSize: 16,
    padding: 12,
    borderRadius: 18,
  },
  subheading: {
    fontSize: 20,
  },
});
