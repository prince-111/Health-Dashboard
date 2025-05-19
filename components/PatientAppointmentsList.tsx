import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export const PatientAppointmentsList = ({ item, handleOpenEditModal }: any) => (
  <View style={styles.appointmentCard}>
    <View style={styles.doctorInfo}>
      {/* <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "/api/placeholder/40/40" }}
          style={styles.avatar}
        />
      </View> */}
      <View style={styles.doctorDetails}>
        <Text style={styles.doctorName}>{item.doctor}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleOpenEditModal}>
        <Image
          style={styles.actionButtonImage}
          source={require("../assets/edit.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Image
          style={styles.actionButtonImage}
          source={require("../assets/delete.png")}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.appointmentDetails}>
      <View style={styles.dateContainer}>
        <View style={styles.calendarIcon}>
          <Image
            style={styles.actionButtonImage}
            source={require("../assets/calendar.png")}
          />
        </View>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.clockIcon}>
          <Image
            style={styles.actionButtonImage}
            source={require("../assets/clock.png")}
          />
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  appointmentCard: {
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
    marginHorizontal: 12,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffccd0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  specialty: {
    fontSize: 14,
    color: "#a0a0a0",
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ECFCCB",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFE4E7",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  actionButtonImage: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarIconText: {
    fontSize: 16,
  },
  dateText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#808080",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  clockIconText: {
    fontSize: 16,
  },
  timeText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#808080",
  },
});
