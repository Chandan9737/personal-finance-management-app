import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BudgetSummary = ({ monthlyBudget, totalSpent }) => {
const remaining = monthlyBudget - totalSpent;
const usedPercent = monthlyBudget ? (totalSpent / monthlyBudget) * 100 : 0;

return ( <View style={styles.container}> <Text style={styles.title}>Budget Summary</Text>

```
  <View style={styles.row}>
    <Text>Total Budget:</Text>
    <Text>₹{monthlyBudget.toFixed(2)}</Text>
  </View>

  <View style={styles.row}>
    <Text>Total Spent:</Text>
    <Text>₹{totalSpent.toFixed(2)}</Text>
  </View>

  <View style={styles.row}>
    <Text>Remaining:</Text>
    <Text style={{ color: remaining < 0 ? "red" : "green", fontWeight: "700" }}>
      ₹{remaining.toFixed(2)}
    </Text>
  </View>

  <View style={styles.row}>
    <Text>Used:</Text>
    <Text>{usedPercent.toFixed(1)}%</Text>
  </View>
</View>


);
};

const styles = StyleSheet.create({
container: {
padding: 12,
borderRadius: 8,
backgroundColor: "#e8f0fe",
marginBottom: 12,
},
title: {
fontWeight: "700",
marginBottom: 8,
fontSize: 16,
},
row: {
flexDirection: "row",
justifyContent: "space-between",
marginVertical: 2,
},
});

export default BudgetSummary;
