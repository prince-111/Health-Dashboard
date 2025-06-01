import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { HeartRateData } from "@/server/data/HeartRateData";
import { balanceDataFirst, balanceDataSecond } from "@/server/data/BalanceData";

interface ReportCardProps {
  title: string;
  value: string;
  percentage?: number;
  isPositive?: boolean;
  unit?: string;
  bgColor: string;
  chartType: "line" | "bar";
  iconName?: string;
}

const ReportCard = ({
  title,
  value,
  percentage,
  isPositive,
  unit,
  bgColor,
  chartType,
  iconName,
}: ReportCardProps) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          {unit && <Text style={styles.unit}>{unit}</Text>}
          {percentage && (
            <View style={styles.percentageContainer}>
              {/* <Ionicons
                name={isPositive ? "arrow-up" : "arrow-down"}
                size={14}
                color="green"
              /> */}
              <Text style={styles.percentageText}>{percentage}%</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.chartContainer}>
        {chartType === "line" ? (
          // Simple line chart representation
          // <View style={styles.lineChart}>
          //   <View style={styles.line} />
          // </View>

          <LineChart
            // areaChart
            curved
            data={balanceDataFirst}
            data2={balanceDataSecond}
            height={90}
            // showVerticalLines
            spacing={44}
            initialSpacing={0}
            thickness1={4}
            thickness2={4}
            color1="#FFDEAD"
            color2="white"
            isAnimated={true}
            hideDataPoints
            startOpacity={0.8}
            endOpacity={0.3}
            hideRules={true}
            hideOrigin={true}
            hideYAxisText
            hideAxesAndRules={true}
          />
        ) : (
          <>
            <View style={styles.barChart}>
              <BarChart
                // starting from 7 value data show
                data={HeartRateData.slice(0, 7)}
                width={180}
                height={75}
                barWidth={12}
                barBorderRadius={6}
                frontColor="#fff"
                hideRules={true}
                hideOrigin={true}
                hideYAxisText
                spacing={7}
                isAnimated={true}
                animationDuration={500}
                yAxisThickness={0}
                xAxisThickness={0}
              />
            </View>
          </>
        )}
        {iconName && (
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={18} color="#fff" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 16,
    width: "48%",
    height: 200,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  value: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "900",
  },
  unit: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 4,
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 18,
  },
  percentageText: {
    color: "black",
    fontSize: 12,
    marginRight: 4,
    fontWeight: "500",
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  lineChart: {
    height: 30,
    justifyContent: "center",
  },
  line: {
    height: 2,

    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  barChart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  bar: {
    width: 12,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 6,
  },
  iconContainer: {
    position: "absolute",
    top: -80,
    right: 0,
  },
});

export default ReportCard;
