import { allReportsData } from "@/server/data/ReportsData";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";

const ReportsView = () => {
  // States for dropdowns
  const [paymentType, setPaymentType] = useState("Payments");
  const [timeFilter, setTimeFilter] = useState("Vs Monthly");
  const [selectedMonth, setSelectedMonth] = useState("All");

  // Modal visibility states
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  // Options for dropdowns
  const paymentOptions = ["Payments", "Revenue", "Expenses"];
  const timeOptions = ["Vs Daily", "Vs Weekly", "Vs Monthly", "Vs Yearly"];
  const monthOptions = [
    "All",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ];

  // State for current chart data
  const [primaryData, setPrimaryData] = useState([]);
  const [secondaryData, setSecondaryData] = useState([]);

  // Update data when filters change
  useEffect(() => {
    let filteredPrimary = [...allReportsData[paymentType].primary];
    let filteredSecondary = [...allReportsData[paymentType].secondary];

    // Filter by month if a specific month is selected
    if (selectedMonth !== "All") {
      filteredPrimary = filteredPrimary.filter(
        item => item.label === selectedMonth
      );
      filteredSecondary = filteredSecondary.filter(
        item => item.label === selectedMonth
      );
    }

    setPrimaryData(filteredPrimary);
    setSecondaryData(filteredSecondary);
  }, [paymentType, timeFilter, selectedMonth]);

  // Custom data point component
  const renderDataPoint = item => {
    if (item.showDataPoint) {
      return (
        <View style={styles.customDataPointContainer}>
          <View
            style={[
              styles.customDataPoint,
              { backgroundColor: item.dataPointColor || "#8CD867" },
            ]}
          >
            <Text style={styles.customDataPointText}>{item.dataPointText}</Text>
          </View>
        </View>
      );
    }
    return null;
  };

  // Dropdown modal component
  const DropdownModal = ({
    visible,
    onClose,
    data,
    onSelect,
    selectedValue,
  }) => {
    return (
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={onClose}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    selectedValue === item && styles.selectedModalItem,
                  ]}
                  onPress={() => {
                    onSelect(item);
                    onClose();
                  }}
                >
                  <Text
                    style={[
                      styles.modalItemText,
                      selectedValue === item && styles.selectedModalItemText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Ionicons name="flash" size={16} color="#10b981" />
          <Text style={styles.title}>Reports</Text>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setPaymentModalVisible(true)}
          >
            <Text style={styles.filterButtonText}>{paymentType}</Text>
            <Text style={styles.chevron}>▼</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setTimeModalVisible(true)}
          >
            <Text style={styles.filterButtonText}>{timeFilter}</Text>
            <Text style={styles.chevron}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Month selector */}
      {/* <View style={styles.monthSelectorContainer}>
        <TouchableOpacity
          style={styles.monthSelector}
          onPress={() => setMonthModalVisible(true)}
        >
          <Text style={styles.monthSelectorText}>{selectedMonth}</Text>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>
      </View> */}

      {/* Chart */}
      <View style={styles.chartContainer}>
        <LineChart
          data={primaryData}
          data2={secondaryData}
          height={260}
          width={340}
          noOfSections={4}
          spacing={38}
          thickness={4}
          thickness2={4}
          color="#4A89F3"
          color2="#8CD867"
          disableScroll={true}
          curved
          curvature={0.2}
          yAxisTextStyle={{ color: "#999" }}
          yAxisLabelPrefix=""
          yAxisLabelSuffix=""
          xAxisLabelTextStyle={{ color: "#999", fontSize: 10 }}
          hideRules={false}
          rulesColor="#EEEEEE"
          rulesThickness={1}
          yAxisColor="transparent"
          xAxisColor="transparent"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: "lightgray",
            pointerStripWidth: 1,
            pointerColor: "gray",
            radius: 5,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: false,
            autoAdjustPointerLabelPosition: true,
            pointerLabelComponent: items => {
              const item = items[0];
              return (
                <View style={styles.tooltipContainer}>
                  <Text style={styles.tooltipTitle}>{item.label}</Text>
                  <View style={styles.tooltipRow}>
                    <View
                      style={[
                        styles.tooltipDot,
                        { backgroundColor: "#4A89F3" },
                      ]}
                    />
                    <Text style={styles.tooltipText}>Blue: {item.value}</Text>
                  </View>
                  <View style={styles.tooltipRow}>
                    <View
                      style={[
                        styles.tooltipDot,
                        { backgroundColor: "#8CD867" },
                      ]}
                    />
                    <Text style={styles.tooltipText}>
                      Green: {items[1]?.value || "N/A"}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
          customDataPoint={renderDataPoint}
          hideDataPoints={true}
          hideDataPoints2={false}
          showFractionalValues
          focusEnabled
          showStripOnFocus
          stripOpacity={0.1}
          stripColor="#C3C3C3"
        />
      </View>

      {/* Dropdowns */}
      <DropdownModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        data={paymentOptions}
        onSelect={setPaymentType}
        selectedValue={paymentType}
      />

      <DropdownModal
        visible={timeModalVisible}
        onClose={() => setTimeModalVisible(false)}
        data={timeOptions}
        onSelect={setTimeFilter}
        selectedValue={timeFilter}
      />

      <DropdownModal
        visible={monthModalVisible}
        onClose={() => setMonthModalVisible(false)}
        data={monthOptions}
        onSelect={setSelectedMonth}
        selectedValue={selectedMonth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#F0F0F5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButtonText: {
    fontSize: 14,
    color: "#333",
    marginRight: 4,
  },
  chevron: {
    fontSize: 10,
    color: "#666",
  },
  monthSelectorContainer: {
    marginBottom: 15,
  },
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  monthSelectorText: {
    fontSize: 14,
    color: "#555",
    marginRight: 4,
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

export default ReportsView;
