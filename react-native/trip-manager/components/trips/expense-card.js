import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CATEGORY_EXPENSES, COLORS } from "../../theme/theme";
function ExpenseCard({ expense }) {
  return (
    <View
      style={{
        ...styles.cardWrapper,
        backgroundColor: CATEGORY_EXPENSES[expense.category],
      }}
    >
      <View>
        <Text style={styles.expTitle}>{expense.title}</Text>
        <Text style={styles.expCat}>{expense.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}>₹{expense.amount}</Text>
      </View>
    </View>
  );
}

export default ExpenseCard;
const styles = StyleSheet.create({
  cardWrapper: {
    padding: 12,
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 18,
    alignItems: "center",
  },
  expTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.TEXT,
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.TEXT,
  },
  expCat: {
    fontSize: 12,
    marginVertical: 4,
    color: "blue",
  },
});
