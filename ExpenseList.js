import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ExpenseList = ({ expenses }) => {
const renderItem = ({ item }) => ( <View style={styles.item}> <View> <Text style={styles.amount}>₹{item.amount.toFixed(2)}</Text> <Text style={styles.category}>{item.category}</Text> </View>
{item.note ? <Text style={styles.note}>{item.note}</Text> : null} </View>
);

if (!expenses.length) {
return <Text style={styles.empty}>No expenses added yet.</Text>;
}

return (
<FlatList
data={expenses}
keyExtractor={(item) => item.id}
renderItem={renderItem}
style={styles.list}
/>
);
};

const styles = StyleSheet.create({
list: {
marginTop: 8,
},
item: {
padding: 12,
backgroundColor: "#ffffff",
borderRadius: 8,
marginBottom: 8,
flexDirection: "row",
justifyContent: "space-between",
},
amount: {
fontSize: 16,
fontWeight: "700",
},
category: {
fontSize: 12,
color: "#666",
},
note: {
fontSize: 12,
color: "#333",
maxWidth: "50%",
textAlign: "right",
},
empty: {
marginTop: 16,
textAlign: "center",
color: "#777",
},
});

export default ExpenseList;
