import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./src/firebaseConfig";
import ExpenseForm from "./src/components/ExpenseForm";
import ExpenseList from "./src/components/ExpenseList";
import BudgetSummary from "./src/components/BudgetSummary";

export default function App() {
const [expenses, setExpenses] = useState([]);
const [monthlyBudget, setMonthlyBudget] = useState(0);

useEffect(() => {
const q = query(collection(db, "expenses"), orderBy("createdAt", "desc"));


const unsubscribe = onSnapshot(q, (snapshot) => {
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setExpenses(data);
});

return () => unsubscribe();
```

}, []);

const handleAddExpense = async (expense) => {
try {
await addDoc(collection(db, "expenses"), {
...expense,
createdAt: new Date(),
});
} catch (error) {
console.log("Error adding expense:", error);
}
};

const totalSpent = expenses.reduce((sum, e) => sum + (e.amount || 0), 0);

return ( <SafeAreaView style={styles.safeArea}> <StatusBar barStyle="dark-content" /> <View style={styles.container}> <Text style={styles.header}>Personal Finance Manager</Text>


    <BudgetSummary monthlyBudget={monthlyBudget} totalSpent={totalSpent} />

    <ExpenseForm
      onAddExpense={handleAddExpense}
      monthlyBudget={monthlyBudget}
      setMonthlyBudget={setMonthlyBudget}
    />

    <Text style={styles.subHeader}>Recent Expenses</Text>
    <ExpenseList expenses={expenses} />
  </View>
</SafeAreaView>

);
}

const styles = StyleSheet.create({
safeArea: { flex: 1, backgroundColor: "#f2f4f7" },
container: { flex: 1, padding: 16 },
header: { fontSize: 22, fontWeight: "800", marginBottom: 12, textAlign: "center" },
subHeader: { fontSize: 16, fontWeight: "700", marginTop: 12, marginBottom: 6 },
});
