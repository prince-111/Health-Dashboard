import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { allReportsData } from "@/server/data/ReportsData";
import { ChartFilters } from "./ChartFilters";
import { DropdownModal } from "./DropdownModal";
import { DataPoint } from "./DataPoint";
import { ChartTooltip } from "./ChartTooltip";
import { styles } from "./styles";
import {
  PaymentType,
  TimeFilter,
  MonthOption,
  ChartDataPoint,
  ReportsData,
} from "./types";

interface ChartTooltipProps {
  items: ChartDataPoint[];
}

const ChartView: React.FC = () => {
  const [paymentType, setPaymentType] = useState<PaymentType>("Payments");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("Vs Monthly");
  const [selectedMonth, setSelectedMonth] = useState<MonthOption>("All");
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [monthModalVisible, setMonthModalVisible] = useState(false);
  const [primaryData, setPrimaryData] = useState<ChartDataPoint[]>([]);
  const [secondaryData, setSecondaryData] = useState<ChartDataPoint[]>([]);

  const paymentOptions: PaymentType[] = ["Payments", "Revenue", "Expenses"];
  const timeOptions: TimeFilter[] = [
    "Vs Daily",
    "Vs Weekly",
    "Vs Monthly",
    "Vs Yearly",
  ];
  const monthOptions: MonthOption[] = [
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

  useEffect(() => {
    let filteredPrimary = [...allReportsData[paymentType].primary];
    let filteredSecondary = [...allReportsData[paymentType].secondary];

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

  return (
    <View style={styles.container}>
      <ChartFilters
        paymentType={paymentType}
        setPaymentType={setPaymentType}
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

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
            pointerLabelComponent: (items: ChartTooltipProps) => (
              <ChartTooltip items={items} />
            ),
          }}
          customDataPoint={(item: ChartDataPoint) => <DataPoint item={item} />}
          hideDataPoints={true}
          hideDataPoints2={false}
          showFractionalValues
          focusEnabled
          showStripOnFocus
          stripOpacity={0.1}
          stripColor="#C3C3C3"
        />
      </View>

      <DropdownModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        data={paymentOptions}
        onSelect={(value: string) => setPaymentType(value as PaymentType)}
        selectedValue={paymentType}
      />

      <DropdownModal
        visible={timeModalVisible}
        onClose={() => setTimeModalVisible(false)}
        data={timeOptions}
        onSelect={(value: string) => setTimeFilter(value as TimeFilter)}
        selectedValue={timeFilter}
      />

      <DropdownModal
        visible={monthModalVisible}
        onClose={() => setMonthModalVisible(false)}
        data={monthOptions}
        onSelect={(value: string) => setSelectedMonth(value as MonthOption)}
        selectedValue={selectedMonth}
      />
    </View>
  );
};

export default ChartView;
