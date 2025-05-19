import UniversalModal from "@/components/UniversalModal";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";

const PaymentModal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const [formData, setFormData] = useState({
    patient: "Bruce",
    date: "05/18/2025",
    treatment: "",
    amount: "0",
    invoiceNumber: "",
    advancePayment: false,
    paymentMethod: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field:any) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Patient</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "patient" && styles.focusedInput,
            ]}
            value={formData.patient}
            onChangeText={text => handleInputChange("patient", text)}
            onFocus={() => handleFocus("patient")}
            onBlur={handleBlur}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "date" && styles.focusedInput,
            ]}
            value={formData.date}
            onChangeText={text => handleInputChange("date", text)}
            onFocus={() => handleFocus("date")}
            onBlur={handleBlur}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Treatment Name/Medicine</Text>
        <TextInput
          style={[
            styles.input,
            styles.fullWidthInput,
            focusedField === "treatment" && styles.focusedInput,
          ]}
          placeholder="Enter treatment name"
          value={formData.treatment}
          onChangeText={text => handleInputChange("treatment", text)}
          onFocus={() => handleFocus("treatment")}
          onBlur={handleBlur}
        />
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount Paid</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "amount" && styles.focusedInput,
            ]}
            value={formData.amount}
            onChangeText={text => handleInputChange("amount", text)}
            keyboardType="numeric"
            onFocus={() => handleFocus("amount")}
            onBlur={handleBlur}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Invoice Number</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "invoiceNumber" && styles.focusedInput,
            ]}
            placeholder="Enter invoice number"
            value={formData.invoiceNumber}
            onChangeText={text => handleInputChange("invoiceNumber", text)}
            onFocus={() => handleFocus("invoiceNumber")}
            onBlur={handleBlur}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Switch
          value={formData.advancePayment}
          onValueChange={value => handleInputChange("advancePayment", value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={formData.advancePayment ? "#f5dd4b" : "#f4f3f4"}
        />
        <Text style={styles.switchLabel}>Advance payment</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Payment Method:</Text>
        <TextInput
          style={[
            styles.input,
            styles.fullWidthInput,
            focusedField === "paymentMethod" && styles.focusedInput,
          ]}
          placeholder="Select Payment Method"
          value={formData.paymentMethod}
          onChangeText={text => handleInputChange("paymentMethod", text)}
          onFocus={() => handleFocus("paymentMethod")}
          onBlur={handleBlur}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCloseModal}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.createButton]}
          onPress={() => console.log("Create Payment", formData)}
        >
          <Text style={styles.createText}>Create Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  focusedInput: {
    borderColor: "#4CAF50", // Green border when focused
    borderWidth: 2,
  },
  fullWidthInput: {
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "45%",
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  createButton: {
    backgroundColor: "#4CAF50",
  },
  createText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  cancelText: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
});

export default PaymentModal;
