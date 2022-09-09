import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import ScreenWrapper from "../components/common/screen-wrapper";
import BackButton from "../components/common/back-button";
import { COLORS } from "../theme/theme";
import EmptyExpenses from "../components/trips/empty-expenses";
import ExpenseCard from "../components/trips/expense-card";
import { useSelector } from "react-redux";
function TripExpenses({ navigation, route }) {
  const selectedTrip = route.params;
  const expenses = useSelector((state) => {
    const trips = state.trips.trips;
    const expensesTobeShown = trips.filter(
      (trip) => trip.id === selectedTrip.id
    );
    if (expensesTobeShown.length > 0) {
      return expensesTobeShown[0].expenses;
    }
    return [];
  });
  // const MockData =[{
  //     id:1,
  //     title:'test',
  //     category:'Commute',
  //     amount:4000
  // },
  // {
  //     id:2,
  //     title:'TEST2',
  //     category:'Commute',
  //     amount:5000
  // },
  // {
  //     id:3,
  //     title:'SDFSDF',
  //     category:'Food',
  //     amount:6000
  // }]
  return (
    <ScreenWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.bannerContainer}>
          <Image source={selectedTrip.banner} style={styles.banner} />
          <View style={styles.placeContainer}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View>
        </View>
        <View style={styles.txtBtn}>
          <Text style={styles.subHeading}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddExpences", selectedTrip)}
          >
            <Text style={styles.buttonTxt}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => <ExpenseCard expense={item} />}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.tripsList}
            ListEmptyComponent={<EmptyExpenses />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default TripExpenses;

const styles = StyleSheet.create({
  buttonTxt: {
    color: COLORS.DARK_ORANGE,
    fontWeight: "700",
  },
  banner: {
    height: 240,
    width: "125%",
    resizeMode: "cover",
  },
  bannerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  place: {
    textAlign: "center",
    color: COLORS.DARK_ORANGE,
    fontSize: 20,
    fontWeight: "700",
  },
  placeContainer: {
    backgroundColor: COLORS.WHITE,
    minWidth: "50%",
    paddingVertical: 12,
    borderRadius: 18,
    position: "absolute",
    bottom: -20,
  },
  txtBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 24,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
});
