import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

// Custom Icon Components
const ChevronRightIcon = () => (
  <View
    style={{
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 8,
        height: 8,
        borderRightWidth: 2,
        borderTopWidth: 2,
        transform: [{ rotate: "45deg" }],
        borderColor: "#fff",
      }}
    />
  </View>
);

const ArrowLeftIcon = () => (
  <View
    style={{
      width: 24,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 12,
        height: 12,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        transform: [{ rotate: "45deg" }],
        borderColor: "#000",
        position: "absolute",
        left: 6,
      }}
    />
    <View
      style={{
        width: 16,
        height: 2,
        backgroundColor: "#000",
      }}
    />
  </View>
);

// Step 2: Billing Summary Screen
//{ onContinue, onBack }
const BillingSummaryScreen = () => {
  const treatmentItems = [
    { id: 1, title: "2 Teeth", quantity: 1, price: "₹4,800.00" },
    { id: 2, title: "3-4 Teeth", quantity: 1, price: "₹4,800.00" },
    { id: 3, title: "3-4 Units", quantity: 1, price: "₹4,800.00" },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          // onPress={onBack}
          style={styles.backButton}
        >
          <View style={styles.backButtonContainer}>
                   <ArrowLeftIcon />
                   </View>
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Billing Summary</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressDot1} />
        <View style={[styles.progressDot2, styles.activeDot]} />
        <View style={styles.progressDot3} />
      </View>

      <TouchableOpacity style={styles.verifyItemsButton}>
        <Text style={styles.verifyItemsText}>Verify items</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        Ensure all items are being billed correctly. Change invoiced amount or
        add discounts.
      </Text>

      <Text style={styles.sectionTitle}>Treatments & Products</Text>

      <View style={styles.treatmentList}>
        {treatmentItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.treatmentItem}>
            <View style={styles.treatmentDetails}>
              <Text style={styles.treatmentTitle}>{item.title}</Text>
              <Text style={styles.treatmentQuantity}>x{item.quantity}</Text>
            </View>
            <View style={styles.treatmentPrice}>
              <Text style={styles.priceText}>{item.price}</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRightWidth: 2,
                    borderTopWidth: 2,
                    transform: [{ rotate: "45deg" }],
                    borderColor: "#000",
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.discountContainer}>
        <TextInput
          style={styles.discountInput}
          placeholder="Add Discount Code here"
          placeholderTextColor="#777"
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>GST</Text>
          <Text style={styles.summaryValue}>₹480.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Amount</Text>
          <Text style={styles.summaryValue}>₹4,800.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Invoiced Amount</Text>
          <Text style={styles.summaryValue}>₹14,800.00</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        //    onPress={onContinue}
      >
        <Text style={styles.continueButtonText}>Continue to Next Step</Text>
        <View style={styles.arrowContainer}>
          <ChevronRightIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 62,
    padding: 10,
    // margin: 10,
    backgroundColor: "#E8E9E9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    width: "70%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  progressDot1: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#8CD867",
    marginHorizontal: 8,
  },
  progressDot2: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  progressDot3: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#8CD867",
  },
  verifyItemsButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  verifyItemsText: {
    color: "#000",
    fontWeight: "500",
  },
  infoText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 16,
    paddingHorizontal: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  treatmentList: {
    marginBottom: 16,
  },
  treatmentItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  treatmentDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  treatmentTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  treatmentQuantity: {
    fontSize: 14,
    color: "#666",
  },
  treatmentPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 15,
    fontWeight: "500",
    marginRight: 8,
  },
  discountContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  discountInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: "#8CD867",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    color: "#666",
  },
  summaryValue: {
    fontWeight: "500",
  },
  continueButton: {
    backgroundColor: "#84CC16",
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  arrowContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 4,
  },
});

export default BillingSummaryScreen;


// import AppointmentSummary from "@/components/calendar/AppointmentSummary";
// import React from "react";
// import { View, StyleSheet } from "react-native";

// const AppointmentDetailsScreen = () => {
//   // Sample data to match the UI in the image
//   const appointmentData = {
//     patientName: "Gyula Simonyi",
//     patientId: "P6498",
//     appointmentCount: 4,
//     appointmentDays: [
//       {
//         date: "Tue, 26 December 2024",
//         details: [
//           {
//             doctor: "Dr. Sanjeet Shankar",
//             timeSlot: "09:00 - 12:00",
//             invoices: [
//               {
//                 invoiceId: "INV8284",
//                 amount: "₹4,800.00",
//                 isPaid: false,
//                 items: 1,
//               },
//               {
//                 invoiceId: "RCPT10187",
//                 amount: "₹500.00",
//                 isPaid: true,
//                 paymentMethod: "Card",
//                 items: 1,
//               },
//             ],
//             services: [
//               {
//                 name: "Consultation & Radiograph",
//                 amount: "₹500.00",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         date: "Tue, 26 December 2024", // Duplicate date as shown in the image
//         details: [
//           {
//             doctor: "Dr. Sanjeet Shankar",
//             timeSlot: "09:00 - 12:00",
//             invoices: [
//               {
//                 invoiceId: "INV8284",
//                 amount: "₹4,800.00",
//                 isPaid: false,
//                 items: 1,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };

//   const handleBackPress = () => {
//     console.log("Back button pressed");
//   };

//   return (
//     <View style={styles.container}>
//       <AppointmentSummary
//         patientName={appointmentData.patientName}
//         patientId={appointmentData.patientId}
//         appointmentCount={appointmentData.appointmentCount}
//         appointmentDays={appointmentData.appointmentDays}
//         onBackPress={handleBackPress}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#f0f0f0",
//     paddingTop: 54,
//   },
// });

// export default AppointmentDetailsScreen;
