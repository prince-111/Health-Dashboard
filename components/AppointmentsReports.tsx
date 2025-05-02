import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  appointmentData,
  appointmentsTopData,
} from "@/server/data/AppointmentData";
export default function AppointmentsReports() {
  const [activeTab, setActiveTab] = useState("booked");
  const [filterPeriod, setFilterPeriod] = useState("Today");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Appointments Section */}
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
              {appointmentsTopData.count}
            </Text>
            <View style={styles.percentageContainer}>
              <Ionicons
                name={
                  appointmentsTopData.isPositive ? "arrow-up" : "arrow-down"
                }
                size={16}
                color="#fff"
              />
              <Text style={styles.percentageText}>
                {appointmentsTopData.percentage}%
              </Text>
            </View>
          </View>

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
                  activeTab === "booked" && styles.activeAppointmentButtonText,
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
                  <Text style={styles.appointmentTime}>{appointment.time}</Text>
                  <Text style={styles.appointmentDate}>{appointment.date}</Text>
                </View>
                <View style={styles.appointmentDetails}>
                  <Text style={styles.appointmentPatient}>
                    {appointment.patient}
                  </Text>
                  <Text style={styles.appointmentType}>{appointment.type}</Text>
                </View>
                <Ionicons
                  name={activeTab === "booked" ? "checkmark" : "close"}
                  size={20}
                  color={activeTab === "booked" ? "#10b981" : "#ef4444"}
                  style={styles.appointmentIcon}
                />
              </View>
            ))}
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
  chartTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartTitleText: {
    fontWeight: "bold",
    marginLeft: 6,
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
  filtersContainer: {
    flexDirection: "row",
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
