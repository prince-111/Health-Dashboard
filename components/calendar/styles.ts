import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 16,
    paddingTop: 54,
    paddingBottom: 20,
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
  highlightDateNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 12,
  },
  highlightDateName: {
    fontSize: 10,
    color: "white",
    marginBottom: 4,
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
    padding: 1,
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
