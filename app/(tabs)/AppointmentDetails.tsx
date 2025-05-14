import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
// Import correct React Native compatible icons
import { Ionicons } from "@expo/vector-icons";

// Sample data - this would be your custom JSON
const appointmentData = {
  patient: {
    name: "Gyula Simonyi",
    role: "Patient",
    patientNo: "2169+",
    gender: "Male",
    age: "42 years",
  },
  doctor: {
    name: "Dr. Sanjeet Shankar",
    specialization:
      "Prosthodontist, Implantologist, Cosmetic/Aesthetic Dentist",
    isProfessional: true,
    experience: "16 yrs +",
    address: "Ghaziabad",
    patientNo: "2169+",
  },
  appointment: {
    time: "10:30 am - 11:00 am",
    date: "26 Dec, 2024",
    lastAppointment: "26 Apr, 2024",
    lastPayment: "₹12,000",
    pendingAmount: "₹12,000",
    lastTreatment: "Crown",
    lastTreatmentAmount: "₹12,000",
  },
};
// { navigation }
const AppointmentDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Appointment Details</Text>
        </View> 
        <View style={styles.profileContainer}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}></View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {appointmentData.patient.name}
            </Text>
            <Text style={styles.profileRole}>
              {appointmentData.patient.role}
            </Text>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>
            {appointmentData.appointment.time}{" "}
            {appointmentData.appointment.date}
          </Text>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Patient no.</Text>
            <Text style={styles.detailValue}>
              {appointmentData.patient.patientNo}
            </Text>
          </View>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>
              {appointmentData.patient.gender}
            </Text>
          </View>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Age</Text>
            <Text style={styles.detailValue}>
              {appointmentData.patient.age}
            </Text>
          </View>
        </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Patient Details Card */}
        {/* <View style={styles.card}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}></View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>
                {appointmentData.patient.name}
              </Text>
              <Text style={styles.profileRole}>
                {appointmentData.patient.role}
              </Text>
            </View>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>
              {appointmentData.appointment.time}{" "}
              {appointmentData.appointment.date}
            </Text>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Patient no.</Text>
              <Text style={styles.detailValue}>
                {appointmentData.patient.patientNo}
              </Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Gender</Text>
              <Text style={styles.detailValue}>
                {appointmentData.patient.gender}
              </Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Age</Text>
              <Text style={styles.detailValue}>
                {appointmentData.patient.age}
              </Text>
            </View>
          </View>
        </View> */}

        {/* Doctor Details Card */}
        <View style={styles.card}>
          <View style={styles.profileRow}>
            <View style={styles.avatar}></View>
            <View style={styles.profileInfo}>
              {appointmentData.doctor.isProfessional && (
                <View style={styles.badgeContainer}>
                  <View style={styles.badgeCircle}>
                    <Ionicons name="checkmark" size={12} color="#fff" />
                  </View>
                  <Text style={styles.badgeText}>Professional Doctor</Text>
                </View>
              )}
              <Text style={styles.profileName}>
                {appointmentData.doctor.name}
              </Text>
              <Text style={styles.specialization}>
                {appointmentData.doctor.specialization}
              </Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Patient</Text>
              <Text style={styles.detailValue}>
                {appointmentData.doctor.patientNo}
              </Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Experience</Text>
              <Text style={styles.detailValue}>
                {appointmentData.doctor.experience}
              </Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailLabel}>Address</Text>
              <Text style={styles.detailValue}>
                {appointmentData.doctor.address}
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Info Cards */}
        <View style={styles.bottomCardsContainer}>
          <View style={styles.infoCard}>
            <Ionicons name="calendar" size={20} color="#000" />
            <Text style={styles.infoCardValue}>
              {appointmentData.appointment.lastAppointment}
            </Text>
            <Text style={styles.infoCardLabel}>Last Appointment</Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="card" size={20} color="#000" />
            <Text style={styles.infoCardValue}>
              {appointmentData.appointment.lastPayment}
            </Text>
            <Text style={styles.infoCardLabel}>Last Payment</Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="briefcase" size={20} color="#000" />
            <Text style={styles.infoCardValue}>
              {appointmentData.appointment.pendingAmount}
            </Text>
            <Text style={styles.infoCardLabel}>Pending Amount</Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="document-text" size={20} color="#000" />
            <Text style={styles.infoCardValue}>
              {appointmentData.appointment.lastTreatmentAmount}
            </Text>
            <Text style={styles.infoCardLabel}>
              Last Treatment {appointmentData.appointment.lastTreatment}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Billing")}
        >
          <Text style={styles.buttonText}>Go to Billing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Notes")}
        >
          <Text style={styles.buttonText}>Go to Notes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    flexDirection: "column",
    // padding: 1,
  },
  header: {
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 0,
    // borderRadius: 29,
  },
  profileContainer: {
    margin: 10,
    marginTop: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 29,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 29,
    padding: 16,
    margin: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
  },
  profileRole: {
    fontSize: 14,
    color: "#666",
  },
  specialization: {
    fontSize: 14,
    color: "#666",
    flexWrap: "wrap",
  },
  timeContainer: {
    marginBottom: 16,
  },
  timeText: {
    fontSize: 14,
    color: "#666",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailColumn: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  badgeCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 12,
    color: "#4285F4",
    marginLeft: 4,
  },
  bottomCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 8,
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoCardValue: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  infoCardLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#8BC34A",
    borderRadius: 24,
    padding: 16,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default AppointmentDetails;
