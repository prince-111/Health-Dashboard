import React from "react";
import { View, StyleSheet } from "react-native";
import AppointmentSummary from "./AppointmentSummary";

const AppointmentDetailsScreen = () => {
  // Sample data to match the UI in the image
  const appointmentData = {
    patientName: "Gyula Simonyi",
    patientId: "P6498",
    appointmentCount: 4,
    appointmentDays: [
      {
        date: "Tue, 26 December 2024",
        details: [
          {
            doctor: "Dr. Sanjeet Shankar",
            timeSlot: "09:00 - 12:00",
            invoices: [
              {
                invoiceId: "INV8284",
                amount: "₹4,800.00",
                isPaid: false,
                items: 1,
              },
              {
                invoiceId: "RCPT10187",
                amount: "₹500.00",
                isPaid: true,
                paymentMethod: "Card",
                items: 1,
              },
            ],
            services: [
              {
                name: "Consultation & Radiograph",
                amount: "₹500.00",
              },
            ],
          },
        ],
      },
      {
        date: "Tue, 26 December 2024", // Duplicate date as shown in the image
        details: [
          {
            doctor: "Dr. Sanjeet Shankar",
            timeSlot: "09:00 - 12:00",
            invoices: [
              {
                invoiceId: "INV8284",
                amount: "₹4,800.00",
                isPaid: false,
                items: 1,
              },
            ],
          },
        ],
      },
    ],
  };

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  return (
    <View style={styles.container}>
      <AppointmentSummary
        patientName={appointmentData.patientName}
        patientId={appointmentData.patientId}
        appointmentCount={appointmentData.appointmentCount}
        appointmentDays={appointmentData.appointmentDays}
        onBackPress={handleBackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});

export default AppointmentDetailsScreen;
