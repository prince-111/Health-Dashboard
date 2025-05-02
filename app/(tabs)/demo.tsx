import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

const DoctorCalendarStrip = () => {
  const [selectedDate, setSelectedDate] = useState(moment("2025-04-24")); // Initialize with April 24, 2023
  const [currentMonth, setCurrentMonth] = useState(moment("2025-04-24")); // Track current month view
  const [selectedDoctor, setSelectedDoctor] = useState("All Doctors");
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // Sample JSON data for doctors
  const doctorsList = [
    "All Doctors",
    "Dr. Sanjeet Shankar",
    "Dr. Emily Johnson",
    "Dr. Robert Chen",
  ];

  // Sample JSON data for appointments
  const appointmentData = [
    {
      id: "1",
      patientName: "Gyula Simonyi",
      doctor: "Dr. Sanjeet Shankar",
      date: "2025-04-24", // Date in the image is April 24, 2023
      timeSlot: "09:00 - 12:00",
      color: "#DBEEFE", // light blue
    },
    {
      id: "2",
      patientName: "Sneh Bagria",
      doctor: "Dr. Sanjeet Shankar",
      date: "2025-04-24",
      timeSlot: "",
      color: "#E5E7EB", // light gray
    },
    {
      id: "3",
      patientName: "Parkarsh Parashar",
      doctor: "Dr. Sanjeet Shankar",
      date: "2025-04-24",
      timeSlot: "09:00 - 12:00",
      color: "#FEF9C3", // light yellow
    },
    {
      id: "4",
      patientName: "Dhruv Behl",
      doctor: "Dr. Sanjeet Shankar",
      date: "2025-04-24",
      timeSlot: "09:00 - 12:00",
      color: "#FFEDD5", // light orange
    },
    // Add some appointments in other months for testing
    {
      id: "5",
      patientName: "John Smith",
      doctor: "Dr. Emily Johnson",
      date: "2025-05-15",
      timeSlot: "10:00 - 11:00",
      color: "#DBEEFE", // light blue
    },
    {
      id: "6",
      patientName: "Jane Doe",
      doctor: "Dr. Robert Chen",
      date: "2025-03-10",
      timeSlot: "14:00 - 15:00",
      color: "#FEF9C3", // light yellow
    },
  ];

  useEffect(() => {
    // Filter appointments based on selected date and doctor
    const formattedDate = selectedDate.format("YYYY-MM-DD");

    const filteredAppointments = appointmentData.filter(appointment => {
      const dateMatches = appointment.date === formattedDate;
      const doctorMatches =
        selectedDoctor === "All Doctors" ||
        appointment.doctor === selectedDoctor;

      return dateMatches && doctorMatches;
    });

    setAppointments(filteredAppointments);
  }, [selectedDate, selectedDoctor]);

  // Handle previous month
  const goToPreviousMonth = () => {
    const prevMonth = moment(currentMonth).subtract(1, "month");
    setCurrentMonth(prevMonth);
    // Also update selected date to first day with appointments in the new month or first day of month
    const firstDayOfMonth = moment(prevMonth).startOf("month");
    const appointmentsInMonth = appointmentData.filter(
      appointment =>
        moment(appointment.date).format("YYYY-MM") ===
        prevMonth.format("YYYY-MM")
    );

    if (appointmentsInMonth.length > 0) {
      // Sort appointments by date and select the earliest
      appointmentsInMonth.sort((a, b) => moment(a.date).diff(moment(b.date)));
      setSelectedDate(moment(appointmentsInMonth[0].date));
    } else {
      setSelectedDate(firstDayOfMonth);
    }
  };

  // Handle next month
  const goToNextMonth = () => {
    const nextMonth = moment(currentMonth).add(1, "month");
    setCurrentMonth(nextMonth);
    // Also update selected date to first day with appointments in the new month or first day of month
    const firstDayOfMonth = moment(nextMonth).startOf("month");
    const appointmentsInMonth = appointmentData.filter(
      appointment =>
        moment(appointment.date).format("YYYY-MM") ===
        nextMonth.format("YYYY-MM")
    );

    if (appointmentsInMonth.length > 0) {
      // Sort appointments by date and select the earliest
      appointmentsInMonth.sort((a, b) => moment(a.date).diff(moment(b.date)));
      setSelectedDate(moment(appointmentsInMonth[0].date));
    } else {
      setSelectedDate(firstDayOfMonth);
    }
  };

  // Render an appointment card
  const renderAppointmentItem = ({ item }) => {
    return (
      <View style={[styles.appointmentCard, { backgroundColor: item.color }]}>
        <View style={styles.appointmentHeader}>
          <Text style={styles.patientName}>{item.patientName}</Text>
          {item.timeSlot ? (
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>{item.timeSlot}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.doctorLabel}>By {item.doctor}</Text>
        <View style={styles.doctorInfo}>
          <View style={styles.doctorAvatar}>
            <Text>👨‍⚕️</Text>
          </View>
          <Text style={styles.doctorName}>Dr Shankar</Text>
        </View>
      </View>
    );
  };

  // Custom date marker for CalendarStrip to match the UI in the image
  const customDatesStylesFunc = date => {
    // Format the current date to YYYY-MM-DD to match appointment dates
    const formattedDate = date.format("YYYY-MM-DD");

    // Check if this date has appointments
    const hasAppointments = appointmentData.some(
      appointment => appointment.date === formattedDate
    );

    // Check if this is the selected date
    const isSelectedDate =
      selectedDate && formattedDate === selectedDate.format("YYYY-MM-DD");

    if (isSelectedDate) {
      return {
        dateContainerStyle: styles.selectedDateContainer,
        dateNameStyle: { color: "white" },
        dateNumberStyle: { color: "white" },
      };
    } else if (hasAppointments) {
      return {
        dateContainerStyle: {
          borderWidth: 1,
          borderColor: "#84CC16",
          borderRadius: 8,
        },
      };
    }

    return {};
  };

  // Get the current month-year display text
  const currentMonthYearText = currentMonth.format("MMMM YYYY");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsButtonText}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor Selection */}
      <View style={styles.doctorSelector}>
        <Text style={styles.doctorSelectorLabel}>Doctors</Text>
        <TouchableOpacity
          style={styles.doctorDropdownButton}
          onPress={() => setShowDoctorDropdown(!showDoctorDropdown)}
        >
          <Text>{selectedDoctor}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        {/* Doctor Dropdown Modal */}
        <Modal
          visible={showDoctorDropdown}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowDoctorDropdown(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowDoctorDropdown(false)}
          >
            <View style={styles.modalContent}>
              <FlatList
                data={doctorsList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.doctorOption}
                    onPress={() => {
                      setSelectedDoctor(item);
                      setShowDoctorDropdown(false);
                    }}
                  >
                    <Text style={styles.doctorOptionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* Month header with navigation */}
      <View style={styles.monthNavigation}>
        <TouchableOpacity
          onPress={goToPreviousMonth}
          style={styles.navButtonContainer}
        >
          <Text style={styles.navButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYear}>{currentMonthYearText}</Text>
        <TouchableOpacity
          onPress={goToNextMonth}
          style={styles.navButtonContainer}
        >
          <Text style={styles.navButton}>{">"}</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar Strip - Horizontal calendar as shown in the image */}
      <CalendarStrip
        scrollable
        style={styles.calendarStrip}
        calendarColor={"#FFFFFF"}
        calendarHeaderStyle={styles.calendarHeader}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        highlightDateNumberStyle={styles.highlightDateNumber}
        highlightDateNameStyle={styles.highlightDateName}
        disabledDateNameStyle={styles.disabledDateName}
        disabledDateNumberStyle={styles.disabledDateNumber}
        iconContainer={{ flex: -3 }}
        selectedDate={selectedDate}
        onDateSelected={date => setSelectedDate(date)}
        startingDate={moment(currentMonth).startOf("month")}
        useIsoWeekday={false}
        customDatesStyles={customDatesStylesFunc}
        highlightDateContainerStyle={styles.selectedDateContainer}
        maxDate={moment(currentMonth).endOf("month")}
        minDate={moment(currentMonth).startOf("month")}
        showMonth={false}
      />

      {/* Appointments List */}
      <FlatList
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={item => item.id}
        style={styles.appointmentsContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>
              No appointments for this date
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  doctorSelector: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  doctorSelectorLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  doctorDropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownArrow: {
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  doctorOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  doctorOptionText: {
    fontSize: 16,
  },
  monthNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  navButtonContainer: {
    padding: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
  monthYear: {
    fontSize: 18,
    fontWeight: "bold",
  },
  calendarStrip: {
    height: 120,
    paddingTop: 1,
    paddingBottom: 0,
    marginBottom: 0,
  },
  calendarHeader: {
    display: "none", // Hide the header since we have a custom one
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: 4, // Add bottom spacing for date numbers
  },
  dateName: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4, // Add bottom spacing for date names
  },
  highlightDateNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 12, // Add bottom spacing
  },
  highlightDateName: {
    fontSize: 10,
    color: "white",
    marginBottom: 4, // Add bottom spacing
  },
  disabledDateName: {
    fontSize: 14,
    color: "#D1D5DB",
  },
  disabledDateNumber: {
    fontSize: 16,
    color: "#D1D5DB",
  },
  selectedDateContainer: {
    backgroundColor: "#84CC16",
    borderRadius: 10,
    width: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 1, // Add more bottom padding to fix spacing
  },
  appointmentsContainer: {
    flex: 1,
  },
  appointmentCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  appointmentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeSlot: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  timeText: {
    fontSize: 14,
  },
  doctorLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  doctorName: {
    fontSize: 14,
    color: "#6B7280",
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyListText: {
    fontSize: 16,
    color: "#6B7280",
  },
});

export default DoctorCalendarStrip;
