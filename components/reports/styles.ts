import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 1,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsIconImage: {
    width: 20,
    height: 20,
    // marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginRight: 4,
  },
  chevron: {
    fontSize: 10,
    color: "#666",
  },
  chartContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  customDataPointContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  customDataPoint: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#8CD867",
    alignItems: "center",
    justifyContent: "center",
  },
  customDataPointText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    maxHeight: "60%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  selectedModalItem: {
    backgroundColor: "#F5F9FF",
  },
  modalItemText: {
    fontSize: 16,
    color: "#333",
  },
  selectedModalItemText: {
    color: "#4A89F3",
    fontWeight: "600",
  },
  tooltipContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    width: 150,
  },
  tooltipTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  tooltipRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  tooltipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  tooltipText: {
    fontSize: 12,
    color: "#555",
  },
});
