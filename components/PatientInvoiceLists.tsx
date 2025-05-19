import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export const PatientInvoiceLists = ({ item, handleOpenEditModal }: any) => (
  <View style={styles.invoiceCard}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.invoiceNumber}>Invoice: #{item.invoiceNum}</Text>
        <Text style={styles.invoiceDate}>{item.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>Rs. {item.amount}</Text>
      </View>
    </View>

    <View style={styles.divider} />

    <View style={styles.detailsContainer}>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Doctor:</Text>
        <Text style={styles.detailValue}>{item.doctor}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Patient ID:</Text>
        <Text style={styles.detailValue}>{item.patientNum}</Text>
      </View>
    </View>

    <View style={styles.noteContainer}>
      <Text style={styles.noteLabel}>Note:</Text>
      <Text style={styles.noteText}>
        {item.note?.length > 60 ? `${item.note.slice(0, 45)}...` : item.note}
      </Text>
    </View>

    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={[styles.actionButton, styles.paymentButton]}
        onPress={handleOpenEditModal}
      >
        <Image
          style={styles.actionIcon}
          source={require("../assets/clipboardB.png")}
        />
        <Text style={styles.actionText}>Create Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.editButton]}
        onPress={handleOpenEditModal}
      >
        <Image
          style={styles.actionIcon}
          source={require("../assets/edit.png")}
        />
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
        <Image
          style={styles.actionIcon}
          source={require("../assets/delete.png")}
        />
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  invoiceCard: {
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  invoiceNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  invoiceDate: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  amountContainer: {
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 12,
  },
  detailRow: {
    // flexDirection: "row",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#64748B",
    width: 80,
  },
  detailValue: {
    fontSize: 14,
    color: "#1E293B",
    fontWeight: "500",
    flex: 1,
  },
  noteContainer: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 8,
    marginRight: 8,
  },
  noteLabel: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 4,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: "#1E293B",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  paymentButton: {
    backgroundColor: "#EDE9FE",
  },
  editButton: {
    backgroundColor: "#ECFCCB",
  },
  deleteButton: {
    backgroundColor: "#FFE4E6",
  },
  actionIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default PatientInvoiceLists;
