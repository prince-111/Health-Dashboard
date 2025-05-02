import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import AppointmentCard from "../../components/AppointmentCard";
import CalendarView from "../../components/CalendarView";

export default function CalendarScreen() {
  const [selectedDoctor, setSelectedDoctor] = useState("All Doctors");
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 3, 24)); // April 24, 2023
  const [month, setMonth] = useState("April 2023");

  const appointments = [
    {
      id: "1",
      patientName: "Gyula Simonyi",
      doctorName: "Dr. Sanjeet Shankar",
      time: "09:00 - 12:00",
      color: "#e0f2f1",
    },
    {
      id: "2",
      patientName: "Sneh Bagria",
      doctorName: "Dr. Sanjeet Shankar",
      time: "",
      color: "#eeeeee",
    },
    {
      id: "3",
      patientName: "Parkarsh Parashar",
      doctorName: "Dr. Sanjeet Shankar",
      time: "09:00 - 12:00",
      color: "#fff8e1",
    },
    {
      id: "4",
      patientName: "Dhruv Behl",
      doctorName: "Dr. Sanjeet Shankar",
      time: "09:00 - 12:00",
      color: "#fff0e0",
    },
    {
      id: "5",
      patientName: "Sneh Bagria",
      doctorName: "Dr. Sanjeet Shankar",
      time: "09:00 - 12:00",
      color: "#e0f2f1",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity> */}
        {/* <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity> */}
      </View>

      <View style={styles.doctorSelector}>
        <Text style={styles.doctorLabel}>Doctors</Text>
        <TouchableOpacity style={styles.doctorDropdown}>
          <Text style={styles.doctorDropdownText}>{selectedDoctor}</Text>
          <Ionicons name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <CalendarView
        month={month}
        onMonthChange={setMonth}
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />

      <ScrollView style={styles.appointmentsContainer}>
        {appointments.map(appointment => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorSelector: {
    backgroundColor: "#f1f5f9",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  doctorLabel: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  doctorDropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  doctorDropdownText: {
    fontSize: 16,
    fontWeight: "600",
  },
  appointmentsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
