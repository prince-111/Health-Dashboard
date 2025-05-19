import { AppointmentItem } from "@/components/PatientAppointmentsList";
import { HeaderComponent } from "@/components/HeaderComponent";
import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";

const PatientsDetailsScreen = () => { 
    const appointments = [
      {
        id: "1",
        doctor: "Dr. Abdul Moiz",
        specialty: "Plastic Surgeon",
        date: "Monday, 26 July",
        time: "09:00 - 10:00",
      },
      {
        id: "2",
        doctor: "Dr. Abdul Moiz",
        specialty: "Plastic Surgeon",
        date: "Monday, 26 July",
        time: "09:00 - 10:00",
      },
      {
        id: "3",
        doctor: "Dr. Abdul Moiz",
        specialty: "Plastic Surgeon",
        date: "Monday, 26 July",
        time: "09:00 - 10:00",
      },
    ];
    
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Patient Details"
        rightButton={false}
        onBackPress={() => {
          // navigation.goBack();
        }}
    />
      {/* <ScrollView> */}
        {/* Patient Info */}
        <View style={styles.patientInfoContainer}>
          <View style={styles.patientInfo}>
            <Image
              style={styles.avatar}
              source={require("../../assets/avatar.png")}
            />
            <View style={styles.patientDetails}>
              <Text style={styles.appointmentCount}>4 Appointments</Text>
              <Text style={styles.patientName}>Usman Zafar</Text>
              <Text style={styles.patientLabel}>Patient</Text>
            </View>
          </View>
          <View style={styles.patientViewContainer}>
            <Text style={styles.patientId}>P68762</Text>
            <Text style={styles.file}>📃 Files</Text>
            <Text style={styles.viewDetails}>View Details</Text>
          </View>
        </View>

        {/* Patient Info */}
        <View style={styles.bottomCardsContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardValue}>Appointment</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardValue}>Invoice</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoCardValue}>Payments</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoCardValue}>Clinical Records</Text>
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.upcomingAppointmentsContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Upcoming Appointments</Text>

            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={appointments}
            renderItem={({ item }) => <AppointmentItem item={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    paddingHorizontal: "2%",
    backgroundColor: "#E8E9E9",
  },
  patientInfoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 14,
    marginBottom: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  patientInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 30,
  },
  patientDetails: {
    justifyContent: "center",
  },
  appointmentCount: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 4,
  },
  patientName: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  patientLabel: {
    fontSize: 16,
    fontWeight: "400",
    color: "#71717A",
  },
  patientId: {
    fontSize: 14,
    fontWeight: "400",
    color: "#71717A",
  },
  file: {
    fontSize: 16,
    fontWeight: "600",
  },
  patientViewContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",  
  },
  viewDetails: {
    fontSize: 16,
    fontWeight: "600",
  },
  bottomCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 8,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 21,
    padding: 16,
    margin: 8,
    width: "45%",
  },
  infoCardValue: {
    // paddingTop: 8,
    flexDirection: "row",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    // marginTop: 12,
  },
  infoCardLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#64748B",
    marginTop: 8,
  },
  upcomingAppointmentsContainer: {
    marginTop: 12,  
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  seeAllText: {
    color: "#808080",
    fontSize: 14,
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default PatientsDetailsScreen;