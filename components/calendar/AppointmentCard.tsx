import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface Appointment {
  id: string;
  patientName: string;
  timeSlot?: string;
  doctor: string;
  color: string;
}

interface AppointmentCardProps {
  item: Appointment;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ item }) => (
  <TouchableOpacity
    // style={styles.logoutButton}
    // onPress={() => router.push("appointment details")}
  >
    <View style={[styles.appointmentCard, { backgroundColor: item.color }]}>
      <View style={styles.appointmentHeader}>
        <Text style={styles.patientName}>{item.patientName}</Text>
        {item.timeSlot && (
          <View style={styles.timeSlot}>
            <Text style={styles.timeText}>{item.timeSlot}</Text>
          </View>
        )}
      </View>
      <Text style={styles.doctorLabel}>By {item.doctor}</Text>
      <View style={styles.doctorInfo}>
        <View style={styles.doctorAvatar}>
          <Text>👨‍⚕️</Text>
        </View>
        <Text style={styles.doctorName}>Dr Shankar</Text>
      </View>
    </View>
  </TouchableOpacity>
);
