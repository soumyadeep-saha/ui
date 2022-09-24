import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import ScreenWrapper from "../components/common/screen-wrapper";
import { COLORS } from "../theme/theme";
import { IMAGES, THUMBNAILS, RANDOM_IMAGE } from "../assets/assets";
import EmptyList from "../components/home/empty-list";
import { useSelector } from "react-redux";

 const MockData = [
  {
    id: 1,
    banner: RANDOM_IMAGE(),
    place: "GOA",
    country: "India",
  },
  {
    id: 2,
    banner: RANDOM_IMAGE(),
    place: "Delhi",
    country: "India",
  },
  {
    id: 3,
    banner: RANDOM_IMAGE(),
    place: "Chennai",
    country: "India",
  },
  {
    id: 4,
    banner: RANDOM_IMAGE(),
    place: "Singapore",
    country: "Singalore",
  },
]; 

export default function Home({ navigation }) {
  const tripList = useSelector((state) => state.trips.trips);
  return (
    <ScreenWrapper>
      <View>
        <View>
          <Text style={styles.heading}>Trip Manager</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.APP_BANNER} style={styles.banner} />
          <TouchableOpacity onPress={() => navigation.navigate("AddTrip")}>
            <View style={styles.addTripButton}>
              <Text style={styles.addTripButtonText}>Add Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeading}>Recent Trips</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={tripList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.tripsList}
          ListEmptyComponent={<EmptyList />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("TripExpenses", item)}
            >
              <View style={styles.tripCard}>
                <Image style={styles.tripBanner} source={item.banner} />
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  banner: {
    width: "150%",
    height: 300,
    resizeMode: "contain",
  },
  addTripButton: {
    position: "absolute",
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    bottom: 25,
    left: 50,
  },
  addTripButtonText: {
    fontWeight: "700",
    color: COLORS.TEXT,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.TEXT,
    marginBottom: 12,
  },
  tripBanner: {
    height: 140,
    width: 140,
  },
  listWrapper: {
    marginBottom: 120,
    height: 420,
  },
  tripsList: {
    justifyContent: "space-between",
  },
  tripCard: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    padding: 8,
    borderRadius: 18,
  },
  place: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
  country: {
    fontSize: 10,
    fontWeight: "600",
    marginLeft: 6,
  },
});
