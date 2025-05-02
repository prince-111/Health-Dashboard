import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ReportCard from "../../components/ReportCard";
import ChartView from "../../components/ChartView";

export default function HomeScreen() {
  const [filterPeriod, setFilterPeriod] = useState("Monthly");
  const [paymentFilter, setPaymentFilter] = useState("Payments");
  const [activeTab, setActiveTab] = useState("booked");

  const balanceData = {
    value: "$5,789",
    percentage: 46.9,
    isPositive: true,
  };

  const heartRateData = {
    value: "97",
    unit: "bpm",
  };

  const appointmentsData = {
    count: 184,
    percentage: 46.9,
    isPositive: true,
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={24} color="#888" />
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#888"
            onChangeText={text => console.log(text)}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.cardsContainer}>
          <ReportCard
            title="Balance"
            value={balanceData.value}
            percentage={balanceData.percentage}
            isPositive={balanceData.isPositive}
            bgColor="#8edd65"
            chartType="line"
          />
          <ReportCard
            title="Heart Rate"
            value={heartRateData.value}
            unit={heartRateData.unit}
            bgColor="#4d97ff"
            chartType="bar"
            iconName="heart"
          />
        </View>

        {/* Chart Section  */}
        <View style={styles.chartSection}>
          <ChartView />
        </View>

        <View style={styles.appointmentsSection}>
          <View style={styles.appointmentsHeader}>
            <View style={styles.chartTitle}>
              <Ionicons name="flash" size={16} color="#10b981" />
              <Text style={styles.chartTitleText}>Appointments</Text>
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterText}>{filterPeriod}</Text>
              <Ionicons name="chevron-down" size={16} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.appointmentsStats}>
            <Text style={styles.appointmentsCount}>
              {appointmentsData.count}
            </Text>
            <View style={styles.percentageContainer}>
              <Ionicons
                name={appointmentsData.isPositive ? "arrow-up" : "arrow-down"}
                size={16}
                color="#fff"
              />
              <Text style={styles.percentageText}>
                {appointmentsData.percentage}%
              </Text>
            </View>
          </View>

          <View>
            {/* Tab Buttons */}
            <View style={styles.appointmentButtons}>
              <TouchableOpacity
                style={[
                  styles.appointmentButton,
                  activeTab === "booked" && styles.activeAppointmentButton,
                ]}
                onPress={() => setActiveTab("booked")}
              >
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={activeTab === "booked" ? "#10b981" : "#9ca3af"}
                />
                <Text
                  style={[
                    styles.appointmentButtonText,
                    activeTab === "booked" &&
                      styles.activeAppointmentButtonText,
                  ]}
                >
                  Booked
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.appointmentButton,
                  activeTab === "cancelled" && styles.activeAppointmentButton,
                ]}
                onPress={() => setActiveTab("cancelled")}
              >
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={activeTab === "cancelled" ? "#ef4444" : "#9ca3af"}
                />
                <Text
                  style={[
                    styles.appointmentButtonText,
                    activeTab === "cancelled" &&
                      styles.activeAppointmentButtonText,
                  ]}
                >
                  Cancelled
                </Text>
              </TouchableOpacity>
            </View>

            {/* Appointment List */}
            <View style={styles.appointmentList}>
              {appointmentData[activeTab].map(appointment => (
                <View key={appointment.id} style={styles.appointmentCard}>
                  <View style={styles.appointmentTimeContainer}>
                    <Text style={styles.appointmentTime}>
                      {appointment.time}
                    </Text>
                    <Text style={styles.appointmentDate}>
                      {appointment.date}
                    </Text>
                  </View>
                  <View style={styles.appointmentDetails}>
                    <Text style={styles.appointmentPatient}>
                      {appointment.patient}
                    </Text>
                    <Text style={styles.appointmentType}>
                      {appointment.type}
                    </Text>
                  </View>
                  <Ionicons
                    name={activeTab === "booked" ? "call" : "close"}
                    size={20}
                    color={activeTab === "booked" ? "#10b981" : "#ef4444"}
                    style={styles.appointmentIcon}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  searchPlaceholder: {
    color: "#64748b",
    marginLeft: 8,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  chartSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    margin: 12,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chartTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartTitleText: {
    fontWeight: "bold",
    marginLeft: 6,
  },
  filtersContainer: {
    flexDirection: "row",
  },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 8,
  },
  filterText: {
    fontSize: 12,
    marginRight: 4,
  },
  appointmentsSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    margin: 12,
  },
  appointmentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appointmentsStats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  appointmentsCount: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  percentageText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
  },
  appointmentButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f2f1",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width: "48%",
    marginRight: 10,
  },

  appointmentSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  appointmentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginRight: 12,
  },
  appointmentCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginRight: 8,
  },
  appointmentButtons: {
    flexDirection: "row",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 8,
  },
  activeAppointmentButton: {
    backgroundColor: "#f0fdf4",
  },
  appointmentButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#9ca3af",
    marginLeft: 8,
  },
  activeAppointmentButtonText: {
    color: "#10b981",
    fontWeight: "600",
  },
  appointmentList: {
    marginTop: 8,
  },
  appointmentCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  appointmentTimeContainer: {
    width: 80,
    marginRight: 16,
  },
  appointmentTime: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  appointmentDate: {
    fontSize: 12,
    color: "#6b7280",
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
    color: "#6b7280",
  },
  appointmentIcon: {
    marginLeft: "auto",
  },
});
