import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CATEGORIES } from "../utils/categories";

const ExpenseForm = ({ onAddExpense, monthlyBudget, setMonthlyBudget }) => {
const [amount, setAmount] = useState("");
const [category, setCategory] = useState(CATEGORIES[0]);
const [note, setNote] = useState("");

const handleSubmit = () => {
if (!amount) return;
onAddExpense({
amount: parseFloat(amount),
category,
note,
createdAt: new Date(),
});
setAmount("");
setNote("");
};

return ( <View style={styles.container}> <Text style={styles.label}>Monthly Budget (₹)</Text>
<TextInput
style={styles.input}
placeholder="Enter monthly budget"
keyboardType="numeric"
value={monthlyBudget ? String(monthlyBudget) : ""}
onChangeText={(value) => setMonthlyBudget(parseFloat(value) || 0)}
/>

```
  <Text style={styles.label}>Amount (₹)</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter amount"
    keyboardType="numeric"
    value={amount}
    onChangeText={setAmount}
  />

  <Text style={styles.label}>Category</Text>
  <View style={styles.pickerWrapper}>
    <Picker selectedValue={category} onValueChange={setCategory}>
      {CATEGORIES.map((cat) => (
        <Picker.Item label={cat} value={cat} key={cat} />
      ))}
    </Picker>
  </View>

  <Text style={styles.label}>Note (optional)</Text>
  <TextInput
    style={styles.input}
    placeholder="Eg. Lunch, Shopping, Cab..."
    value={note}
    onChangeText={setNote}
  />

  <Button title="Add Expense" onPress={handleSubmit} />
</View>


);
};

const styles = StyleSheet.create({
container: {
marginVertical: 12,
padding: 12,
backgroundColor: "#f7f7f7",
borderRadius: 8,
},
label: {
fontWeight: "600",
marginBottom: 4,
marginTop: 8,
},
input: {
borderWidth: 1,
borderColor: "#ccc",
paddingHorizontal: 8,
paddingVertical: 6,
borderRadius: 6,
},
pickerWrapper: {
borderWidth: 1,
borderColor: "#ccc",
borderRadius: 6,
marginBottom: 8,
},
});

export default ExpenseForm;
