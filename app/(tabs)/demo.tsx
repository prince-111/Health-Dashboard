import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

const ReportsScreen = () => {
  const [activeTab, setActiveTab] = useState("booked");

  // Sample data
  const appointmentData = {
    booked: [
      {
        id: 1,
        patient: "John Doe",
        time: "10:00 AM",
        date: "Apr 30",
        type: "Checkup",
      },
      {
        id: 2,
        patient: "Jane Smith",
        time: "02:30 PM",
        date: "Apr 30",
        type: "Follow-up",
      },
      {
        id: 3,
        patient: "Robert Johnson",
        time: "11:15 AM",
        date: "May 1",
        type: "Consultation",
      },
    ],
    cancelled: [
      {
        id: 4,
        patient: "Sarah Williams",
        time: "09:00 AM",
        date: "Apr 29",
        type: "Checkup",
      },
      {
        id: 5,
        patient: "Michael Brown",
        time: "03:45 PM",
        date: "Apr 28",
        type: "Consultation",
      },
    ],
  };

  // Chart data
  const reportsData = [
    { value: 100, label: "M" },
    { value: 90, label: "T" },
    { value: 80, label: "W" },
    { value: 70, label: "T" },
    { value: 60, label: "F" },
  ];

  const paymentsData = [
    { value: 95, label: "M" },
    { value: 0, label: "T" },
    { value: 1, label: "W" },
    { value: 7, label: "T" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Reports</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here"
            placeholderTextColor="#999"
          />
        </View>

        {/* Reports Chart */}
        <View style={styles.chartCard}>
          <Text style={styles.sectionTitle}>Reports</Text>
          <BarChart
            data={reportsData}
            frontColor="#4ABFF4"
            barWidth={22}
            spacing={30}
            roundedTop
            yAxisTextStyle={{ color: "#666" }}
            xAxisLabelTextStyle={{ color: "#666" }}
            noOfSections={5}
            maxValue={100}
          />
        </View>

        {/* Appointments Section */}
        <View style={styles.chartCard}>
          <Text style={styles.sectionTitle}>Appointments</Text>
          <Text style={styles.statValue}>184</Text>
          <Text style={styles.percentage}>46.9%</Text>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "booked" && styles.activeTab]}
              onPress={() => setActiveTab("booked")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "booked" && styles.activeTabText,
                ]}
              >
                Booked
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "cancelled" && styles.activeTab,
              ]}
              onPress={() => setActiveTab("cancelled")}
            >
              <Text
                style=  {[
                  styles.tabText,
                  activeTab === "cancelled" && styles.activeTabText,
                ]}
              >
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>

          {/* Appointment List */}
          <View style={styles.appointmentList}>
            {appointmentData[activeTab].map(appointment => (
              <View key={appointment.id} style={styles.appointmentItem}>
                <View style={styles.appointmentTime}>
                  <Text style={styles.appointmentTimeText}>
                    {appointment.time}
                  </Text>
                  <Text style={styles.appointmentDate}>{appointment.date}</Text>
                </View>
                <View style={styles.appointmentDetails}>
                  <Text style={styles.appointmentPatient}>
                    {appointment.patient}
                  </Text>
                  <Text style={styles.appointmentType}>{appointment.type}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 2,
  },
  searchInput: {
    fontSize: 16,
    color: "#000",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "30%",
    alignItems: "center",
    elevation: 2,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  smallChart: {
    height: 40,
    width: "100%",
  },
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },
  percentage: {
    fontSize: 16,
    color: "#4ABFF4",
    fontWeight: "bold",
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 16,
  },
  tab: {
    paddingBottom: 8,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4ABFF4",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#4ABFF4",
    fontWeight: "600",
  },
  appointmentList: {
    marginTop: 8,
  },
  appointmentItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  appointmentTime: {
    width: 80,
    marginRight: 16,
  },
  appointmentTimeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  appointmentDate: {
    fontSize: 12,
    color: "#666",
  },
  appointmentDetails: {
    flex: 1,
  },
  appointmentPatient: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  appointmentType: {
    fontSize: 14,
    color: "#666",
  },
});

export default ReportsScreen;
