import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";

const procedureOptions = [
  "1 IMPLANT",
  "2 - 4 IMPLANTS",
  "2 TEETH",
  "3-4 TEETH",
  "3-4 UNITS",
  "3M ESPE LAVA PREMIUM",
];

const adultTeethOptions = [
  "18",
  "17",
  "16",
  "15",
  "14",
  "13",
  "12",
  "11",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "48",
  "47",
  "46",
  "45",
  "44",
  "43",
  "42",
  "41",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
];

const childTeethOptions = [
  "55",
  "54",
  "53",
  "52",
  "51",
  "85",
  "84",
  "83",
  "61",
  "62",
  "63",
  "64",
  "65",
  "71",
  "72",
  "73",
  "74",
  "75",
  "82",
  "81",
];

const taxOptions = [
  { label: "Tax (18%)", value: "18" },
  { label: "Service Tax (14%)", value: "14" },
  { label: "Swachh Bharat Cess (0.5%)", value: "0.5" },
  { label: "Krishi Kalyan Cess (0.5%)", value: "0.6" },
];

const InvoiceAddScreen: React.FC = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [patient, setPatient] = useState("");
  const [procedures, setProcedures] = useState([
    {
      procedure: "",
      teeth: "",
      cost: "0",
      qty: "1",
      discount: "0",
      total: "0.00",
    },
  ]);
  const [taxRate, setTaxRate] = useState("18");
  const [notes, setNotes] = useState("");
  const [additionalDiscount, setAdditionalDiscount] = useState("0");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [showTeethModal, setShowTeethModal] = useState(false);
  const [showTaxModal, setShowTaxModal] = useState(false);
  const [showProcedureModal, setShowProcedureModal] = useState(false);
  const [currentProcedureIndex, setCurrentProcedureIndex] = useState(0);
  const [showChildTeeth, setShowChildTeeth] = useState(false);

  const calculateTotal = (proc: any) => {
    const cost = parseFloat(proc.cost) || 0;
    const qty = parseInt(proc.qty) || 0;
    const discount = parseFloat(proc.discount) || 0;
    const total = cost * qty * (1 - discount / 100);
    return total.toFixed(2);
  };

  const addProcedure = () => {
    setProcedures([
      ...procedures,
      {
        procedure: "",
        teeth: "",
        cost: "0",
        qty: "1",
        discount: "0",
        total: "0.00",
      },
    ]);
  };

  const updateProcedure = (index: number, field: string, value: string) => {
    const updatedProcedures = [...procedures];
    updatedProcedures[index] = { ...updatedProcedures[index], [field]: value };

    if (["cost", "qty", "discount"].includes(field)) {
      updatedProcedures[index].total = calculateTotal(updatedProcedures[index]);
    }

    setProcedures(updatedProcedures);
  };

  const removeProcedure = (index: number) => {
    if (procedures.length > 1) {
      const updatedProcedures = [...procedures];
      updatedProcedures.splice(index, 1);
      setProcedures(updatedProcedures);
    }
  };

  const calculateSubtotal = () => {
    return procedures
      .reduce((sum, proc) => sum + parseFloat(proc.total || "0"), 0)
      .toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = subtotal * (parseFloat(taxRate) / 100);
    return tax.toFixed(2);
  };

  const calculateGrandTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = parseFloat(calculateTax());
    const discount = parseFloat(additionalDiscount) || 0;
    return (subtotal + tax - discount).toFixed(2);
  };

  const openTeethModal = (index: number) => {
    setCurrentProcedureIndex(index);
    setShowTeethModal(true);
  };

  const selectTeeth = (teeth: string) => {
    if (teeth === "Full Mouth") {
      const allTeeth = [...adultTeethOptions, ...childTeethOptions].join(", ");
      updateProcedure(currentProcedureIndex, "teeth", allTeeth);
      setShowTeethModal(false);
      return;
    }

    const currentTeeth = procedures[currentProcedureIndex].teeth;
    const teethArray = currentTeeth ? currentTeeth.split(", ") : [];

    if (teethArray.includes(teeth)) {
      const updatedTeeth = teethArray.filter(t => t !== teeth).join(", ");
      updateProcedure(currentProcedureIndex, "teeth", updatedTeeth);
    } else {
      teethArray.push(teeth);
      updateProcedure(currentProcedureIndex, "teeth", teethArray.join(", "));
    }
  };

  const toggleChildTeeth = () => {
    setShowChildTeeth(!showChildTeeth);
  };

  const openProcedureModal = (index: number) => {
    setCurrentProcedureIndex(index);
    setShowProcedureModal(true);
  };

  const selectProcedure = (procedure: string) => {
    updateProcedure(currentProcedureIndex, "procedure", procedure);
    setShowProcedureModal(false);
  };

  const selectTax = (value: string) => {
    setTaxRate(value);
    setShowTaxModal(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* <Text style={styles.header}>Create Invoice</Text> */}

      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            focusedInput === "patient" && styles.focusedInput,
          ]}
          value={patient}
          onChangeText={setPatient}
          onFocus={() => setFocusedInput("patient")}
          onBlur={() => setFocusedInput(null)}
          placeholder="Search for a patient..."
        />
      </View>

      <Text style={styles.sectionHeader}>Procedures</Text>

      {procedures.map((proc, index) => (
        <View key={index} style={styles.procedureContainer}>
          {/* Procedure Selection */}
          <View style={styles.procedureSelectionContainer}>
            <Text style={styles.procedureLabel}>Procedure:</Text>
            <TouchableOpacity
              style={styles.selector}
              onPress={() => openProcedureModal(index)}
            >
              <Text style={styles.selectorText}>
                {proc.procedure || "Select procedure..."}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Teeth and Cost in one line */}
          <View style={styles.teethCostRow}>
            <View style={styles.teethContainer}>
              <Text style={styles.inputLabel}>Teeth:</Text>
              <TouchableOpacity
                style={styles.selector}
                onPress={() => openTeethModal(index)}
              >
                <Text style={styles.selectorText} numberOfLines={1}>
                  {proc.teeth || "Select teeth..."}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.costContainer}>
              <Text style={styles.inputLabel}>Cost (₹):</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === `cost-${index}` && styles.focusedInput,
                ]}
                value={proc.cost}
                onChangeText={text => updateProcedure(index, "cost", text)}
                onFocus={() => setFocusedInput(`cost-${index}`)}
                onBlur={() => setFocusedInput(null)}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Qty and Discount in one line */}
          <View style={styles.qtyDiscountRow}>
            <View style={styles.qtyContainer}>
              <Text style={styles.inputLabel}>Qty:</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === `qty-${index}` && styles.focusedInput,
                ]}
                value={proc.qty}
                onChangeText={text => updateProcedure(index, "qty", text)}
                onFocus={() => setFocusedInput(`qty-${index}`)}
                onBlur={() => setFocusedInput(null)}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.discountContainer}>
              <Text style={styles.inputLabel}>Discount (%):</Text>
              <TextInput
                style={[
                  styles.input,
                  focusedInput === `discount-${index}` && styles.focusedInput,
                ]}
                value={proc.discount}
                onChangeText={text => updateProcedure(index, "discount", text)}
                onFocus={() => setFocusedInput(`discount-${index}`)}
                onBlur={() => setFocusedInput(null)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>₹ {proc.total}</Text>
          </View>

          {procedures.length > 1 && (
            <TouchableOpacity
              onPress={() => removeProcedure(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove Procedure</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <TouchableOpacity onPress={addProcedure} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Procedure</Text>
      </TouchableOpacity>

      {/* Tax Rate Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Tax Rate</Text>
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setShowTaxModal(true)}
        >
          <Text style={styles.selectorText}>
            {taxOptions.find(opt => opt.value === taxRate)?.label ||
              "Select tax rate..."}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Notes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notes</Text>
        <TextInput
          style={[
            styles.notesInput,
            focusedInput === "notes" && styles.focusedInput,
          ]}
          value={notes}
          onChangeText={setNotes}
          onFocus={() => setFocusedInput("notes")}
          onBlur={() => setFocusedInput(null)}
          placeholder="Add invoice notes..."
          multiline
        />
      </View>

      {/* Invoice Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Invoice Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>₹ {calculateSubtotal()}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax ({taxRate}%):</Text>
          <Text style={styles.summaryValue}>₹ {calculateTax()}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Additional Discount:</Text>
          <TextInput
            style={[
              styles.discountInput,
              focusedInput === "additionalDiscount" && styles.focusedInput,
            ]}
            value={additionalDiscount}
            onChangeText={setAdditionalDiscount}
            onFocus={() => setFocusedInput("additionalDiscount")}
            onBlur={() => setFocusedInput(null)}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Grand Total */}
      <View style={styles.grandTotalContainer}>
        <Text style={styles.grandTotalLabel}>Total:</Text>
        <Text style={styles.grandTotalValue}>₹ {calculateGrandTotal()}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.createButton]}>
          <Text style={styles.buttonText}>Create Invoice</Text>
        </TouchableOpacity>
      </View>

      {/* Teeth Selection Modal */}
      <Modal visible={showTeethModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Teeth</Text>

            <View style={styles.teethOptionsHeaderRow}>
              <TouchableOpacity
                style={styles.fullMouthButton}
                onPress={() => selectTeeth("Full Mouth")}
              >
                <Text style={styles.fullMouthText}>Full Mouth</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.showChildTeethButton}
                onPress={toggleChildTeeth}
              >
                <Text style={styles.showChildTeethText}>
                  {showChildTeeth ? "Hide Child Teeth" : "Show Child Teeth"}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.teethScrollView}>
              <Text style={styles.teethSectionHeader}>Adult Teeth</Text>
              <View style={styles.teethGrid}>
                {adultTeethOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.teethOption,
                      procedures[currentProcedureIndex].teeth.includes(
                        option
                      ) && styles.selectedTeethOption,
                    ]}
                    onPress={() => selectTeeth(option)}
                  >
                    <Text
                      style={[
                        styles.teethOptionText,
                        procedures[currentProcedureIndex].teeth.includes(
                          option
                        ) && styles.selectedTeethOptionText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {showChildTeeth && (
                <>
                  <Text style={styles.teethSectionHeader}>Child Teeth</Text>
                  <View style={styles.teethGrid}>
                    {childTeethOptions.map(option => (
                      <TouchableOpacity
                        key={option}
                        style={[
                          styles.teethOption,
                          procedures[currentProcedureIndex].teeth.includes(
                            option
                          ) && styles.selectedTeethOption,
                        ]}
                        onPress={() => selectTeeth(option)}
                      >
                        <Text
                          style={[
                            styles.teethOptionText,
                            procedures[currentProcedureIndex].teeth.includes(
                              option
                            ) && styles.selectedTeethOptionText,
                          ]}
                        >
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </>
              )}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowTeethModal(false)}
            >
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Tax Rate Modal */}
      <Modal visible={showTaxModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Tax Rate</Text>

            <ScrollView style={styles.taxOptionsContainer}>
              {taxOptions.map(option => (
                <TouchableOpacity
                  key={option.value}

                  style={[
                    styles.taxOption,
                    taxRate === option.value && styles.selectedTaxOption,
                  ]}
                  onPress={() => selectTax(option.value)}
                >
                  <Text
                    style={[
                      styles.taxOptionText,
                      taxRate === option.value && styles.selectedTaxOptionText,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowTaxModal(false)}
            >
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Procedure Selection Modal */}
      <Modal
        visible={showProcedureModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Procedure</Text>

            <ScrollView style={styles.procedureOptionsContainer}>
              {procedureOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.procedureOption,
                    procedures[currentProcedureIndex].procedure === option &&
                      styles.selectedProcedureOption,
                  ]}
                  onPress={() => selectProcedure(option)}
                >
                  <Text
                    style={[
                      styles.procedureOptionText,
                      procedures[currentProcedureIndex].procedure === option &&
                        styles.selectedProcedureOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowProcedureModal(false)}
            >
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    width: 100,
    fontSize: 16,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  procedureContainer: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  procedureSelectionContainer: {
    marginBottom: 10,
  },
  procedureLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#444",
  },
  selector: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  selectorText: {
    fontSize: 16,
    color: "#333",
  },
  teethCostRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  teethContainer: {
    width: "55%",
  },
  costContainer: {
    width: "40%",
  },
  qtyDiscountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  qtyContainer: {
    width: "45%",
  },
  discountContainer: {
    width: "45%",
  },
  inputLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
  removeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffebee",
    borderRadius: 4,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#f44336",
    fontSize: 14,
  },
  addButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: "#e8f5e9",
    borderRadius: 4,
    alignItems: "center",
  },
  addButtonText: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 16,
  },
  notesInput: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    color: "#333",
  },
  discountInput: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 5,
    fontSize: 16,
    textAlign: "center",
  },
  grandTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
  },
  createButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  teethOptionsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  fullMouthButton: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  fullMouthText: {
    color: "white",
    fontWeight: "bold",
  },
  showChildTeethButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 4,
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
  showChildTeethText: {
    color: "white",
    fontWeight: "bold",
  },
  teethScrollView: {
    maxHeight: 300,
    marginBottom: 15,
  },
  teethSectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  teethGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 15,
  },
  teethOption: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    margin: 5,
    backgroundColor: "#f9f9f9",
  },
  selectedTeethOption: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  teethOptionText: {
    fontSize: 14,
    color: "#333",
  },
  selectedTeethOptionText: {
    color: "white",
  },
  taxOptionsContainer: {
    maxHeight: 300,
    marginBottom: 15,
  },
  taxOption: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
  },
  selectedTaxOption: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  taxOptionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedTaxOptionText: {
    color: "white",
  },
  procedureOptionsContainer: {
    maxHeight: 300,
    marginBottom: 15,
  },
  procedureOption: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
  },
  selectedProcedureOption: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  procedureOptionText: {
    fontSize: 16,
    color: "#333",
  },
  selectedProcedureOptionText: {
    color: "white",
  },
  closeModalButton: {
    padding: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 4,
    alignItems: "center",
  },
  closeModalText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default InvoiceAddScreen;
